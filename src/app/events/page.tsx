"use client"

import { useState, useEffect, useMemo } from "react"
import { useUpcomingEvents, usePastEvents } from "@/hooks/use-events"
import { EventCard } from "@/components/features/event-card"
import { EventListView } from "@/components/features/event-list-view"
import { Loader2, Calendar, Clock, Grid, List, Star, Zap, TrendingUp } from "lucide-react"
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

  // Get live events (events happening now)
  const liveEvents = useMemo(() => {
    return upcomingEvents.filter(event => event.isToday)
  }, [upcomingEvents])

  const currentEvents = activeTab === 'upcoming' ? upcomingEvents : pastEvents
  const currentLoading = activeTab === 'upcoming' ? upcomingLoading : pastLoading
  const currentError = activeTab === 'upcoming' ? upcomingError : pastError

  if (currentLoading) {
    return (
      <div className="container py-12 lg:py-20">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <Loader2 className="h-12 w-12 animate-spin mx-auto mb-4 text-primary" />
            <p className="text-muted-foreground">Loading events...</p>
          </div>
        </div>
      </div>
    )
  }

  if (currentError) {
    return (
      <div className="container py-12 lg:py-20">
        <div className="text-center max-w-md mx-auto">
          <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calendar className="h-8 w-8 text-destructive" />
          </div>
          <h1 className="text-2xl font-bold text-destructive mb-2">Error Loading Events</h1>
          <p className="text-muted-foreground">{currentError}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mt-5 pb-12">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12 px-4">
        <div className="inline-block mb-4">
          <Badge variant="outline" className="text-base px-4 py-1.5">
            <TrendingUp className="w-4 h-4 mr-2" />
            {upcomingEvents.length} Upcoming Events
          </Badge>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Events
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
          Join us for exciting events, workshops, and tech talks
        </p>
      </div>

      {/* Live Events Banner */}
      {liveEvents.length > 0 && (
        <div className="mb-8 px-4 sm:px-0">
          <div className="bg-gradient-to-r from-destructive/10 via-destructive/5 to-transparent border-2 border-destructive/30 rounded-xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-destructive/5 rounded-full blur-3xl"></div>
            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-destructive/20 rounded-full animate-pulse">
                  <Zap className="w-5 h-5 text-destructive" />
                </div>
                <h2 className="text-xl font-bold">Live Now</h2>
                <Badge variant="destructive" className="ml-2 animate-pulse">
                  {liveEvents.length} {liveEvents.length === 1 ? 'Event' : 'Events'}
                </Badge>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {liveEvents.slice(0, 3).map((event) => (
                  <div key={event.id} className="bg-background/95 backdrop-blur rounded-lg p-4 border-2 border-destructive/20">
                    <h3 className="font-bold mb-2 line-clamp-1">{event.title}</h3>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{formatSydneyTimeRange(event.startDate, event.endDate)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span className="truncate">{event.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Upcoming Events Highlight Banner */}
      {!bannerLoading && nextThreeWeeksEvents.length > 0 && activeTab === 'upcoming' && (
        <div className="mb-8 px-4 sm:px-0">
          <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border-2 border-primary/20 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-primary/20 rounded-full">
                <Star className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold">Coming Soon</h2>
              <Badge variant="default" className="ml-2">
                Next 2 Weeks
              </Badge>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {nextThreeWeeksEvents.slice(0, 3).map((event) => (
                <div key={event.id} className="bg-background rounded-lg p-4 border-2 hover:border-primary/40 transition-colors">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <Badge 
                      variant={event.isNextWeek ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {event.isNextWeek ? "Next Week" : "Upcoming"}
                    </Badge>
                    {event.isTomorrow && (
                      <Badge variant="default" className="text-xs">
                        Tomorrow
                      </Badge>
                    )}
                  </div>
                  <h3 className="font-bold mb-2 line-clamp-1">{event.title}</h3>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{formatSydneyTimeRange(event.startDate, event.endDate)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab Navigation & View Controls */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-8 px-4 sm:px-0">
        <div className="flex bg-muted rounded-lg p-1 w-full sm:w-auto">
          <Button
            variant={activeTab === 'upcoming' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('upcoming')}
            className="flex items-center gap-2 flex-1 sm:flex-initial"
          >
            <Calendar className="w-4 h-4" />
            <span>Upcoming</span>
            <Badge variant={activeTab === 'upcoming' ? 'secondary' : 'outline'} className="ml-1">
              {upcomingEvents.length}
            </Badge>
          </Button>
          <Button
            variant={activeTab === 'past' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('past')}
            className="flex items-center gap-2 flex-1 sm:flex-initial"
          >
            <Clock className="w-4 h-4" />
            <span>Past</span>
            <Badge variant={activeTab === 'past' ? 'secondary' : 'outline'} className="ml-1">
              {pastEvents.length}
            </Badge>
          </Button>
        </div>
        <div className="flex bg-muted rounded-lg p-1 w-full sm:w-auto">
          <Button
            variant={viewMode === 'card' ? 'default' : 'ghost'}
            onClick={() => setViewMode('card')}
            className="flex items-center gap-2 flex-1"
          >
            <Grid className="w-4 h-4" />
            <span className="sm:inline hidden">Card</span>
          </Button>
          <Button
            variant={viewMode === 'list' ? 'default' : 'ghost'}
            onClick={() => setViewMode('list')}
            className="flex items-center gap-2 flex-1"
          >
            <List className="w-4 h-4" />
            <span className="sm:inline hidden">List</span>
          </Button>
        </div>
      </div>

      {/* Events Display */}
      {currentEvents.length === 0 ? (
        <div className="text-center py-16 px-4">
          <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <Calendar className="w-10 h-10 text-muted-foreground" />
          </div>
          <h3 className="text-2xl font-bold mb-2">
            No {activeTab} events found
          </h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            {activeTab === 'upcoming' 
              ? 'Check back later for exciting upcoming events! We\'re always planning something new.' 
              : 'No past events to display at this time.'
            }
          </p>
        </div>
      ) : (
        <div className="px-4 sm:px-0">
          {viewMode === 'card' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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