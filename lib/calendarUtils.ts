import { CalendarEvent } from "@/types/calendar";
/**
 * Formats a date string into a short readable format (e.g., "Wed, Apr 24").
 */
export function formatDate(dateString?: string): string {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  }
  
  /**
   * Formats time string into HH:MM AM/PM.
   */
  export function formatTime(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }
  
  /**
   * Escapes characters for .ics compatibility.
   */
  function escapeICS(text: string): string {
    return text
      .replace(/\\n/g, "\\n")
      .replace(/,/g, "\\,")
      .replace(/;/g, "\\;")
      .replace(/\r?\n/g, "\\n");
  }
  
  /**
   * Converts ISO to ICS datetime format (UTC, no dashes/colons).
   */
  function toICSTime(dateStr: string): string {
    return new Date(dateStr)
      .toISOString()
      .replace(/[-:]/g, "")
      .replace(/\.\d{3}Z$/, "Z");
  }
  
  /**
   * Generates a downloadable ICS calendar event file.
   */
  export function generateICSLink(event: CalendarEvent): string {
    const start = event.start?.dateTime || event.start?.date;
    if (!start) return "#"; // No start = invalid .ics
  
    const startICS = toICSTime(start);
    const end = event.end?.dateTime || event.end?.date || start;
    const endICS = toICSTime(end);
  
    const summary = escapeICS(event.summary || "Untitled Event");
    const description = escapeICS(event.description || "");
    const location = escapeICS(event.location || "");
  
    const icsContent = `
  BEGIN:VCALENDAR
  VERSION:2.0
  PRODID:-//MARS//EN
  BEGIN:VEVENT
  UID:${event.id}
  DTSTAMP:${startICS}
  DTSTART:${startICS}
  DTEND:${endICS}
  SUMMARY:${summary}
  DESCRIPTION:${description}
  LOCATION:${location}
  END:VEVENT
  END:VCALENDAR
    `.trim();
  
    return "data:text/calendar;charset=utf8," + encodeURIComponent(icsContent);
  }
  