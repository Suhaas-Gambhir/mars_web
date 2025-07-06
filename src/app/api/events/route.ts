import { NextResponse } from 'next/server';
import { getAllEvents, getUpcomingEvents, getPastEvents, getNextWeekEvents, getNextThreeWeeksEvents } from '@/lib/google-calendar';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type'); // 'upcoming', 'past', 'next-week', 'next-two-weeks', or 'all'
    const maxResults = parseInt(searchParams.get('maxResults') || '50');

    // Get all events (Google Calendar + fallback mock data)
    const allEvents = await getAllEvents();
    
    // Limit results if specified
    const limitedEvents = maxResults ? allEvents.slice(0, maxResults) : allEvents;

    // Filter events based on type
    let filteredEvents = limitedEvents;
    if (type === 'upcoming') {
      filteredEvents = getUpcomingEvents(limitedEvents);
    } else if (type === 'past') {
      filteredEvents = getPastEvents(limitedEvents);
    } else if (type === 'next-week') {
      filteredEvents = getNextWeekEvents(limitedEvents);
    } else if (type === 'next-three-weeks') {
      filteredEvents = getNextThreeWeeksEvents(limitedEvents);
    }

    return NextResponse.json({
      success: true,
      data: filteredEvents,
      count: filteredEvents.length,
      type: type || 'all'
    });

  } catch (error) {
    console.error('Error in events API route:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch events',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 