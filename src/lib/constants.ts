// API Endpoints
export const API_ENDPOINTS = {
  EVENTS: '/api/events',
  EVENTS_UPCOMING: '/api/events?type=upcoming',
  EVENTS_PAST: '/api/events?type=past',
  EVENTS_NEXT_WEEK: '/api/events?type=next-week',
  EVENTS_NEXT_THREE_WEEKS: '/api/events?type=next-three-weeks',
} as const

// External URLs
export const EXTERNAL_URLS = {
  GOOGLE_CALENDAR: 'https://calendar.google.com/calendar/render?action=TEMPLATE',
  GOOGLE_MEET: 'https://meet.google.com',
} as const

// Date Formats
export const DATE_FORMATS = {
  CALENDAR_ISO: 'YYYYMMDDTHHmmssZ',
  DISPLAY: {
    FULL: 'EEEE, MMMM d, yyyy',
    SHORT: 'MMM d, yyyy',
    TIME: 'h:mm a',
  },
} as const

// Event Categories
export const EVENT_CATEGORIES = {
  WORKSHOP: 'Workshop',
  MEETING: 'Meeting',
  TECH_TALK: 'Tech Talk',
  CONFERENCE: 'Conference',
  TEAM_BUILDING: 'Team Building',
  OTHER: 'Event',
} as const

// RSVP Status
export const RSVP_STATUS = {
  YES: 'yes',
  NO: 'no',
  MAYBE: 'maybe',
} as const

// View Modes
export const VIEW_MODES = {
  CARD: 'card',
  LIST: 'list',
} as const

// Event Tabs
export const EVENT_TABS = {
  UPCOMING: 'upcoming',
  PAST: 'past',
} as const

// Time Constants
export const TIME_CONSTANTS = {
  ONE_WEEK_MS: 7 * 24 * 60 * 60 * 1000,
  THREE_WEEKS_MS: 21 * 24 * 60 * 60 * 1000,
  THIRTY_DAYS_MS: 30 * 24 * 60 * 60 * 1000,
  ONE_YEAR_MS: 365 * 24 * 60 * 60 * 1000,
} as const 