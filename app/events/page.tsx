import { Metadata } from "next";

import { formatDate, formatTime, generateICSLink } from "@/lib/calendarUtils";
import { CalendarEvent } from "@/types/calendar";

export const metadata: Metadata = {
  title: "Upcoming Events",
};

async function fetchCalendarEvents(): Promise<CalendarEvent[]> {
  const calendarId = process.env.GOOGLE_CALENDAR_ID;
  const apiKey = process.env.GOOGLE_API_KEY;

  if (!calendarId || !apiKey) {
    throw new Error("Missing Google Calendar ID or API Key.");
  }

  const res = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}&orderBy=startTime&singleEvents=true`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    console.error("Failed to fetch events:", res.statusText);
    return [];
  }

  const data = await res.json();
  return data.items || [];
}

export default async function EventsPage() {
  const events: CalendarEvent[] = await fetchCalendarEvents();

  return (
    <main className="min-h-screen bg-white dark:bg-background px-4 sm:px-6 md:px-8 py-10 flex flex-col items-center">
      <div className="w-full max-w-4xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Upcoming Events
        </h2>

        {events.length > 0 ? (
          <ul className="space-y-6">
            {events.map((event) => (
              <li
                key={event.id}
                className="p-5 sm:p-6 md:p-8 border border-gray-200 dark:border-gray-800 rounded-2xl bg-white dark:bg-background shadow hover:shadow-lg transition"
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {event.summary}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-2 text-sm sm:text-base">
                  📅 {formatDate(event.start.dateTime || event.start.date)}
                  {event.end?.dateTime && event.start?.dateTime && (
                    <> - {formatTime(event.end.dateTime)}</>
                  )}
                </p>

                <div className="flex flex-col space-y-1 mt-3 text-sm sm:text-base">
                  {event.hangoutLink && (
                    <a
                      href={event.hangoutLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      🔗 Join Meeting
                    </a>
                  )}

                  {event.htmlLink && (
                    <a
                      href={event.htmlLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      📅 View in Calendar
                    </a>
                  )}

                  <a
                    href={generateICSLink(event)}
                    download={`${event.summary}.ics`}
                    className="text-green-600 dark:text-green-400 hover:underline"
                  >
                    ➕ Add to Calendar
                  </a>
                </div>

                {event.description && (
                  <p className="text-gray-700 dark:text-gray-300 mt-4 text-sm sm:text-base">
                    {event.description}
                  </p>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm sm:text-base">
            No upcoming events found.
          </p>
        )}
      </div>
    </main>
  );
}
