import { useCallback } from 'react'
import { ProcessedEvent } from '@/lib/google-calendar'
import { generateGoogleCalendarUrl, getMeetingLink } from '@/lib/utils/calendar-utils'

interface UseCalendarActionsReturn {
  addToCalendar: (event: ProcessedEvent) => void
  joinMeeting: (event: ProcessedEvent) => void
  viewInCalendar: (event: ProcessedEvent) => void
  hasMeetingLink: (event: ProcessedEvent) => boolean
}

export function useCalendarActions(): UseCalendarActionsReturn {
  const addToCalendar = useCallback((event: ProcessedEvent) => {
    try {
      const calendarUrl = generateGoogleCalendarUrl(event)
      
      // Validate URL before opening
      const url = new URL(calendarUrl)
      if (url.hostname !== 'calendar.google.com') {
        throw new Error('Invalid calendar URL')
      }
      
      window.open(calendarUrl, '_blank', 'noopener,noreferrer')
    } catch (error) {
      console.error('Error adding event to calendar:', error)
      // You could show a toast notification here
      alert('Unable to add event to calendar. Please try again.')
    }
  }, [])

  const joinMeeting = useCallback((event: ProcessedEvent) => {
    try {
      const meetingLink = getMeetingLink(event)
      
      if (!meetingLink) {
        throw new Error('No valid meeting link available')
      }
      
      window.open(meetingLink, '_blank', 'noopener,noreferrer')
    } catch (error) {
      console.error('Error joining meeting:', error)
      // You could show a toast notification here
      alert('Unable to join meeting. Please check the meeting link.')
    }
  }, [])

  const viewInCalendar = useCallback((event: ProcessedEvent) => {
    try {
      if (!event.htmlLink) {
        throw new Error('No calendar link available')
      }
      
      // Validate the URL
      const url = new URL(event.htmlLink)
      if (!url.hostname.includes('google.com')) {
        throw new Error('Invalid calendar URL')
      }
      
      window.open(event.htmlLink, '_blank', 'noopener,noreferrer')
    } catch (error) {
      console.error('Error viewing event in calendar:', error)
      // You could show a toast notification here
      alert('Unable to view event in calendar. Please try again.')
    }
  }, [])

  const hasMeetingLink = useCallback((event: ProcessedEvent): boolean => {
    return getMeetingLink(event) !== null
  }, [])

  return {
    addToCalendar,
    joinMeeting,
    viewInCalendar,
    hasMeetingLink,
  }
} 