import { useState, useEffect } from 'react';
import { ProcessedEvent } from '@/lib/google-calendar';

interface EventsResponse {
  success: boolean;
  data: ProcessedEvent[];
  count: number;
  type: string;
  message?: string;
}

export function useEvents(type: 'upcoming' | 'past' | 'all' = 'all') {
  const [events, setEvents] = useState<ProcessedEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchEvents() {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(`/api/events?type=${type}`);
        const result: EventsResponse = await response.json();
        
        if (result.success) {
          setEvents(result.data);
        } else {
          setError(result.message || 'Failed to fetch events');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch events');
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, [type]);

  return { events, loading, error };
}

// Hook for upcoming events only
export function useUpcomingEvents() {
  return useEvents('upcoming');
}

// Hook for past events only
export function usePastEvents() {
  return useEvents('past');
} 