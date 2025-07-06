import { EXTERNAL_URLS } from '@/lib/constants'
import { formatDateForCalendar } from './date-utils'
import { ProcessedEvent } from '@/lib/google-calendar'

/**
 * Generate Google Calendar URL for adding an event
 */
export function generateGoogleCalendarUrl(event: ProcessedEvent): string {
  try {
    const startDate = formatDateForCalendar(event.startDate)
    const endDate = formatDateForCalendar(event.endDate)
    
    const params = new URLSearchParams({
      text: event.title,
      dates: `${startDate}/${endDate}`,
      details: event.description,
      location: event.location,
    })

    return `${EXTERNAL_URLS.GOOGLE_CALENDAR}&${params.toString()}`
  } catch (error) {
    console.error('Error generating calendar URL:', error, 'Event:', {
      id: event.id,
      title: event.title,
      startDate: event.startDate,
      endDate: event.endDate,
      startDateType: typeof event.startDate,
      endDateType: typeof event.endDate,
      startDateValid: event.startDate instanceof Date && !isNaN(event.startDate.getTime()),
      endDateValid: event.endDate instanceof Date && !isNaN(event.endDate.getTime()),
    })
    // Fallback to a basic calendar URL without dates
    const params = new URLSearchParams({
      text: event.title,
      details: event.description,
      location: event.location,
    })
    return `${EXTERNAL_URLS.GOOGLE_CALENDAR}&${params.toString()}`
  }
}

/**
 * Validate Google Calendar URL parameters
 */
export function validateCalendarUrlParams(params: Record<string, string>): boolean {
  const requiredFields = ['text', 'details', 'location']
  return requiredFields.every(field => 
    params[field] && typeof params[field] === 'string' && params[field].trim().length > 0
  )
}

/**
 * Sanitize text for URL parameters
 */
export function sanitizeUrlParam(text: string): string {
  return encodeURIComponent(text.trim())
}

/**
 * Extract meeting link from event
 */
export function getMeetingLink(event: ProcessedEvent): string | null {
  if (!event.hangoutLink) return null
  
  // Validate the meeting link
  try {
    const url = new URL(event.hangoutLink)
    if (url.hostname.includes('google.com') || url.hostname.includes('meet.google.com')) {
      return event.hangoutLink
    }
  } catch {
    // Invalid URL
    return null
  }
  
  return null
}

/**
 * Check if event has a valid meeting link
 */
export function hasValidMeetingLink(event: ProcessedEvent): boolean {
  return getMeetingLink(event) !== null
}

/**
 * Generate calendar event description with meeting link
 */
export function generateEventDescription(event: ProcessedEvent): string {
  let description = event.description
  
  if (event.hangoutLink) {
    description += `\n\nMeeting Link: ${event.hangoutLink}`
  }
  
  if (event.organizer) {
    description += `\nOrganizer: ${event.organizer}`
  }
  
  return description
} 