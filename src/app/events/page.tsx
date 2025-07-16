"use client"

import { useState, useEffect } from "react"
import { useUpcomingEvents, usePastEvents } from "@/hooks/use-events"
import { EventCard } from "@/components/features/event-card"
import { EventListView } from "@/components/features/event-list-view"
import { Loader2, Calendar, Clock, Grid, List, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ProcessedEvent } from "@/lib/google-calendar"
import { API_ENDPOINTS } from "@/lib/constants"
import { formatSydneyTimeRange } from '@/lib/utils/date-utils';

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming')
  const [viewMode, setViewMode] = useState<'card' | 'list'>('card')
  const { events: upcomingEvents, loading: upcomingLoading, error: upcomingError } = useUpcomingEvents()
  const { events: pastEvents, loading: pastLoading, error: pastError } = usePastEvents()

  const [nextThreeWeeksEvents, setNextThreeWeeksEvents] = useState<ProcessedEvent[]>([])
  const [bannerLoading, setBannerLoading] = useState(true)

  useEffect(() => {
    async function fetchBannerEvents() {
      setBannerLoading(true)
      try {
        const response = await fetch(API_ENDPOINTS.EVENTS_NEXT_THREE_WEEKS)
        const result = await response.json()
        if (result.success) {
          setNextThreeWeeksEvents(result.data)
        }
      } catch {
        setNextThreeWeeksEvents([])
      } finally {
        setBannerLoading(false)
      }
    }
    fetchBannerEvents()
  }, [])

  const currentEvents = activeTab === 'upcoming' ? upcomingEvents : pastEvents
  const currentLoading = activeTab === 'upcoming' ? upcomingLoading : pastLoading
  const currentError = activeTab === 'upcoming' ? upcomingError : pastError

  if (currentLoading) {
    return (
      <div className="container py-12 sm:py-16 lg:py-20">
        <div className="flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      </div>
    )
  }

  if (currentError) {
    return (
      <div className="container py-12 sm:py-16 lg:py-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-destructive">Error</h1>
          <p className="text-muted-foreground">{currentError}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-12 sm:py-16 lg:py-20">
      <div className="text-center mb-12 sm:mb-16 px-4">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Events</h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover amazing MARS events.
        </p>
      </div>

      {/* Upcoming Events Banner Section */}
      {!bannerLoading && nextThreeWeeksEvents.length > 0 && (
        <div className="mb-12 px-4 sm:px-0">
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">Upcoming Events</h2>
              <Badge variant="default" className="ml-2">
                Next 2 Weeks
              </Badge>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {nextThreeWeeksEvents.slice(0, 3).map((event) => (
                <div key={event.id} className="bg-background rounded-lg p-4 border">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge 
                      variant={event.isNextWeek ? "default" : "secondary"}
                      className="text-xs text-white"
                    >
                      {event.isNextWeek ? "Next Week" : "Upcoming"}
                    </Badge>
                  </div>
                  <h3 className="font-semibold mb-1 line-clamp-1">{event.title}</h3>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>
                        {formatSydneyTimeRange(event.startDate, event.endDate)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab Navigation */}
      <div className="flex justify-between mb-8">
        <div className="flex bg-muted rounded-lg p-1">
          <Button
            variant={activeTab === 'upcoming' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('upcoming')}
            className="flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            Upcoming Events ({upcomingEvents.length})
          </Button>
          <Button
            variant={activeTab === 'past' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('past')}
            className="flex items-center gap-2"
          >
            <Clock className="w-4 h-4" />
            Past Events ({pastEvents.length})
          </Button>
        </div>
        <div className="flex bg-muted rounded-lg p-1">
          <Button
            variant={viewMode === 'card' ? 'default' : 'ghost'}
            onClick={() => setViewMode('card')}
            className="flex items-center gap-2"
          >
            <Grid className="w-4 h-4" />
          </Button>
          <Button
            variant={viewMode === 'list' ? 'default' : 'ghost'}
            onClick={() => setViewMode('list')}
            className="flex items-center gap-2"
          >
            <List className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Events Display */}
      {currentEvents.length === 0 ? (
        <div className="text-center py-12">
          <Calendar className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-xl font-semibold mb-2">
            No {activeTab} events found
          </h3>
          <p className="text-muted-foreground">
            {activeTab === 'upcoming' 
              ? 'Check back later for upcoming events!' 
              : 'No past events to display.'
            }
          </p>
        </div>
      ) : (
        <div className="px-4 sm:px-0">
          {viewMode === 'card' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {currentEvents.map((event) => (
                <EventCard 
                  key={event.id} 
                  event={event} 
                />
              ))}
            </div>
          ) : (
            <EventListView events={currentEvents} />
          )}
        </div>
      )}
    </div>
  )
} 