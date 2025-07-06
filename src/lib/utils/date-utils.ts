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
 * Check if date is within next week
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