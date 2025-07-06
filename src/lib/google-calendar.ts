import { EVENT_CATEGORIES } from '@/lib/constants';
import { 
  formatDateForDisplay, 
  formatTimeRange, 
  isDateInFuture, 
  isDateInNextWeek, 
  getDateRangeForAPI,
  parseDateSafely,
  isDateInNextThreeWeeks
} from '@/lib/utils/date-utils';

export interface GoogleCalendarEvent {
  id: string;
  summary: string;
  description?: string;
  start: {
    dateTime?: string;
    date?: string;
  };
  end: {
    dateTime?: string;
    date?: string;
  };
  location?: string;
  attendees?: Array<{
    email: string;
    displayName?: string;
  }>;
  organizer?: {
    email: string;
    displayName?: string;
  };
  htmlLink?: string;
  hangoutLink?: string;
  conferenceData?: {
    entryPoints?: Array<{
      uri: string;
      entryPointType: string;
    }>;
  };
}

export interface ProcessedEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  organizer: string;
  category: string;
  price: string;
  isUpcoming: boolean;
  startDate: Date;
  endDate: Date;
  htmlLink?: string;
  hangoutLink?: string;
  isNextWeek: boolean;
  isNextThreeWeeks: boolean;
}

// Check if API Key is configured
export function isApiKeyConfigured(): boolean {
  return !!(process.env.GOOGLE_API_KEY && process.env.GOOGLE_CALENDAR_ID);
}

// Fetch events using API Key (for public calendars)
export async function fetchEventsWithApiKey(calendarId: string, apiKey: string, maxResults: number = 50): Promise<GoogleCalendarEvent[]> {
  try {
    const { start, end } = getDateRangeForAPI()
    const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events?key=${apiKey}&timeMin=${start.toISOString()}&timeMax=${end.toISOString()}&maxResults=${maxResults}&singleEvents=true&orderBy=startTime`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.error) {
      console.error('API Key error:', data.error);
      return [];
    }
    
    return data.items || [];
  } catch (error) {
    console.error('Error fetching events with API key:', error);
    return [];
  }
}

// Fetch events from Google Calendar (server-side only)
export async function fetchGoogleCalendarEvents(calendarId: string = 'primary', maxResults: number = 50): Promise<GoogleCalendarEvent[]> {
  if (typeof window !== 'undefined') {
    return [];
  }

  try {
    // Check if API Key is configured
    if (isApiKeyConfigured()) {
      const apiKey = process.env.GOOGLE_API_KEY!;
      const calId = process.env.GOOGLE_CALENDAR_ID || calendarId;
      return await fetchEventsWithApiKey(calId, apiKey, maxResults);
    }
    return [];
  } catch (error) {
    console.error('Error fetching Google Calendar events:', error);
    return [];
  }
}

// Process Google Calendar events to match your app's format
export function processGoogleCalendarEvents(events: GoogleCalendarEvent[]): ProcessedEvent[] {
  return events.map((event) => {
    const startDate = event.start.dateTime || event.start.date;
    const endDate = event.end.dateTime || event.end.date;
    
    // Parse dates safely, fallback to current date if invalid
    const eventStartDate = parseDateSafely(startDate || '') || new Date();
    const eventEndDate = parseDateSafely(endDate || '') || new Date();
    
    // Ensure we have valid dates for the processed event
    const validStartDate = eventStartDate instanceof Date && !isNaN(eventStartDate.getTime()) ? eventStartDate : new Date();
    const validEndDate = eventEndDate instanceof Date && !isNaN(eventEndDate.getTime()) ? eventEndDate : new Date();
    
    const isUpcoming = isDateInFuture(validStartDate);
    const isNextWeek = isDateInNextWeek(validStartDate);
    const isNextThreeWeeks = isDateInNextThreeWeeks(validStartDate); 

    // Extract time from dateTime
    let time = 'TBD';
    if (event.start.dateTime && validStartDate && validEndDate) {
      time = formatTimeRange(validStartDate, validEndDate);
    }

    // Get meeting link
    let hangoutLink = event.hangoutLink;
    if (!hangoutLink && event.conferenceData?.entryPoints) {
      const videoEntry = event.conferenceData.entryPoints.find(ep => ep.entryPointType === 'video');
      if (videoEntry) {
        hangoutLink = videoEntry.uri;
      }
    }

    return {
      id: event.id,
      title: event.summary || 'Untitled Event',
      description: event.description || 'No description available.',
      date: formatDateForDisplay(validStartDate),
      time,
      location: event.location || 'Location TBD',
      organizer: event.organizer?.displayName || event.organizer?.email || 'MARS Team',
      category: EVENT_CATEGORIES.OTHER,
      price: 'Free',
      isUpcoming,
      startDate: validStartDate,
      endDate: validEndDate,
      htmlLink: event.htmlLink,
      hangoutLink,
      isNextWeek,
      isNextThreeWeeks,
    };
  });
}

// Get events from Google Calendar - server-side only
export async function getAllEvents(): Promise<ProcessedEvent[]> {
  if (typeof window !== 'undefined') {
    return []; // Return empty array on client-side
  }

  const googleEvents = await fetchGoogleCalendarEvents();
  const processedGoogleEvents = processGoogleCalendarEvents(googleEvents);
  
  return processedGoogleEvents;
}

// Get upcoming events (events from now onwards)
export function getUpcomingEvents(events: ProcessedEvent[]): ProcessedEvent[] {
  return events.filter(event => event.isUpcoming);
}

// Get past events (events before now)
export function getPastEvents(events: ProcessedEvent[]): ProcessedEvent[] {
  return events.filter(event => !event.isUpcoming);
}

// Get events for next week
export function getNextWeekEvents(events: ProcessedEvent[]): ProcessedEvent[] {
  return events.filter(event => event.isNextWeek);
}

// Get events for next three weeks
export function getNextThreeWeeksEvents(events: ProcessedEvent[]): ProcessedEvent[] {
  return events.filter(event => event.isNextThreeWeeks);
} 