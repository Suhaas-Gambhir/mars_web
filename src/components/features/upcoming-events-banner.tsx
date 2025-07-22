"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, X, ChevronLeft, ChevronRight } from "lucide-react"
import { ProcessedEvent } from "@/lib/google-calendar"
import { API_ENDPOINTS } from "@/lib/constants"

const BANNER_CLOSED_KEY = "mars-upcoming-events-banner-closed"

export function UpcomingEventsBanner() {
  const [events, setEvents] = useState<ProcessedEvent[]>([])
  const [isVisible, setIsVisible] = useState(false)
  const [currentEventIndex, setCurrentEventIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if banner was previously closed
    const bannerClosed = localStorage.getItem(BANNER_CLOSED_KEY)
    if (bannerClosed === "true") {
      setIsVisible(false)
      setIsLoading(false)
      return
    }

    async function fetchUpcomingEvents() {
      try {
        const response = await fetch(API_ENDPOINTS.EVENTS_NEXT_THREE_WEEKS)
        const result = await response.json()
        
        if (result.success) {
          setEvents(result.data)
          setIsVisible(result.data.length > 0)
        }
      } catch (error) {
        console.error('Error fetching upcoming events:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchUpcomingEvents()
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    localStorage.setItem(BANNER_CLOSED_KEY, "true")
  }

  if (isLoading || !isVisible || events.length === 0) {
    return null
  }

  const currentEvent = events[currentEventIndex]

  const nextEvent = () => {
    setCurrentEventIndex((prev) => (prev + 1) % events.length)
  }

  const prevEvent = () => {
    setCurrentEventIndex((prev) => (prev - 1 + events.length) % events.length)
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-primary/90 to-primary/80 backdrop-blur-sm border-b border-primary/20 mt-28">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Event Info */}
          <div className="flex items-center gap-4 flex-1 min-w-0">
            <div className="flex items-center gap-2 text-white">
              <Calendar className="w-6 h-6" />
              <Badge variant="secondary" className="text-sm text-white">
                {currentEvent.isNextWeek ? "Next Week" : "Upcoming"}
              </Badge>
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-semibold truncate">
                {currentEvent.title}
              </h3>
              <div className="flex items-center gap-4 text-white/80 text-sm">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{currentEvent.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span className="truncate">{currentEvent.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation and Actions */}
          <div className="flex items-center gap-2">
            {/* Navigation */}
            {events.length > 1 && (
              <div className="flex items-center gap-1">
                <Button
                  onClick={prevEvent}
                  variant="ghost"
                  size="sm"
                  className="text-white"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <span className="text-white text-sm">
                  {currentEventIndex + 1} / {events.length}
                </span>
                <Button
                  onClick={nextEvent}
                  variant="ghost"
                  size="sm"
                  className="text-white"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            )}

            {/* Close Button */}
            <Button
              onClick={handleClose}
              variant="ghost"
              size="sm"
              className="text-white"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 