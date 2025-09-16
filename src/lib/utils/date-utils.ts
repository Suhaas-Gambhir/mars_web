import { TIME_CONSTANTS } from '@/lib/constants'

/**
 * Format date for Google Calendar URL
 * Converts Date to format: YYYYMMDDTHHMMSSZ
 */
export function formatDateForCalendar(date: Date): string {
  // Ensure we have a valid Date object
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    console.error('Invalid date provided to formatDateForCalendar:', date);
    throw new Error('Invalid date provided to formatDateForCalendar')
  }
  
  return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
}

/**
 * Format date for display
 */
export function formatDateForDisplay(date: Date): string {
  // Ensure we have a valid Date object
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    return 'Invalid Date'
  }
  
  return date.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}

/**
 * Format time for display
 */
export function formatTimeForDisplay(date: Date): string {
  // Ensure we have a valid Date object
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    return 'Invalid Time'
  }
  
  return date.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: true 
  })
}

/**
 * Format time range for display
 */
export function formatTimeRange(startDate: Date, endDate: Date): string {
  const startTime = formatTimeForDisplay(startDate)
  const endTime = formatTimeForDisplay(endDate)
  return `${startTime} - ${endTime}`
}

/**
 * Check if date is in the future
 */
export function isDateInFuture(date: Date): boolean {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    return false
  }
  return date >= new Date()
}

/**
 * Check if date is today
 */
export function isDateToday(date: Date): boolean {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    return false
  }
  
  const now = new Date()
  return date.toDateString() === now.toDateString()
}

/**
 * Check if date is tomorrow
 */
export function isDateTomorrow(date: Date): boolean {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    return false
  }
  
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  return date.toDateString() === tomorrow.toDateString()
}

/**
 * Check if date is this week (within next 7 days from today, but not today or tomorrow)
 */
export function isDateThisWeek(date: Date): boolean {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    return false
  }
  
  if (isDateToday(date) || isDateTomorrow(date)) {
    return false
  }
  
  const now = new Date()
  const endOfWeek = new Date(now)
  endOfWeek.setDate(now.getDate() + 7)
  
  return date >= now && date <= endOfWeek
}

/**
 * Check if date is within next week (legacy function - now encompasses next 7 days)
 */
export function isDateInNextWeek(date: Date): boolean {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    return false
  }
  
  const now = new Date()
  const nextWeek = new Date(now.getTime() + TIME_CONSTANTS.ONE_WEEK_MS)
  return date <= nextWeek && date >= now
}

/**
 * Check if date is within next two weeks
 */
export function isDateInNextThreeWeeks(date: Date): boolean { 
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    return false
  }
  
  const now = new Date()
  const nextThreeWeeks = new Date(now.getTime() + TIME_CONSTANTS.THREE_WEEKS_MS) 
  return date <= nextThreeWeeks && date >= now 
}

/**
 * Get date range for API queries (30 days ago to 1 year from now)
 */
export function getDateRangeForAPI(): { start: Date; end: Date } {
  const now = new Date()
  return {
    start: new Date(now.getTime() - TIME_CONSTANTS.THIRTY_DAYS_MS),
    end: new Date(now.getTime() + TIME_CONSTANTS.ONE_YEAR_MS)
  }
}

/**
 * Parse date string safely
 */
export function parseDateSafely(dateString: string): Date | null {
  try {
    const date = new Date(dateString)
    return isNaN(date.getTime()) ? null : date
  } catch {
    return null
  }
}

/**
 * Get appropriate time label for event display
 */
export function getEventTimeLabel(date: Date): string {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    return 'Upcoming'
  }
  
  if (isDateToday(date)) {
    return 'Today'
  }
  
  if (isDateTomorrow(date)) {
    return 'Tomorrow'
  }
  
  if (isDateThisWeek(date)) {
    return 'This Week'
  }
  
  if (isDateInNextWeek(date)) {
    return 'Next Week'
  }
  
  return 'Upcoming'
}

/**
 * Get relative time string (e.g., "in 2 days", "yesterday")
 */
export function getRelativeTimeString(date: Date): string {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    return 'Invalid Date'
  }
  
  const now = new Date()
  const diffTime = date.getTime() - now.getTime()
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  if (diffDays === 0) return 'Today'
  if (diffDays === 1) return 'Tomorrow'
  if (diffDays === -1) return 'Yesterday'
  if (diffDays > 0) return `in ${diffDays} days`
  if (diffDays < 0) return `${Math.abs(diffDays)} days ago`
  
  return formatDateForDisplay(date)
} 

export function formatSydneyTimeRange(startDate: Date | string, endDate: Date | string) {
  const sydneyTz = 'Australia/Sydney';

  // Convert to Date objects if they're strings
  const start = typeof startDate === 'string' ? new Date(startDate) : startDate;
  const end = typeof endDate === 'string' ? new Date(endDate) : endDate;

  // Ensure we have valid Date objects
  if (!(start instanceof Date) || isNaN(start.getTime())) {
    console.error('Invalid startDate provided to formatSydneyTimeRange:', startDate);
    return 'Invalid Start Time';
  }
  
  if (!(end instanceof Date) || isNaN(end.getTime())) {
    console.error('Invalid endDate provided to formatSydneyTimeRange:', endDate);
    return 'Invalid End Time';
  }

  // If start and end are on the same day, show as "11:00 AM - 2:00 PM"
  // Otherwise, show as "23 Jul 2025, 11:00 AM - 24 Jul 2025, 2:00 PM"
  const sameDay =
    start.toLocaleDateString('en-AU', { timeZone: sydneyTz }) ===
    end.toLocaleDateString('en-AU', { timeZone: sydneyTz });

  if (sameDay) {
    return (
      start.toLocaleTimeString('en-AU', { hour: 'numeric', minute: '2-digit', hour12: true, timeZone: sydneyTz }) +
      ' - ' +
      end.toLocaleTimeString('en-AU', { hour: 'numeric', minute: '2-digit', hour12: true, timeZone: sydneyTz })
    );
  } else {
    return (
      start.toLocaleString('en-AU', { dateStyle: 'medium', timeStyle: 'short', timeZone: sydneyTz }) +
      ' - ' +
      end.toLocaleString('en-AU', { dateStyle: 'medium', timeStyle: 'short', timeZone: sydneyTz })
    );
  }
}