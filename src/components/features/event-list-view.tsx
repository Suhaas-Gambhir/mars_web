"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Tag
} from "lucide-react"
import { ProcessedEvent } from "@/lib/google-calendar"
import { EventActions } from "./event-actions"

interface EventListViewProps {
  events: ProcessedEvent[]
}

export function EventListView({ events }: EventListViewProps) {
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null)

  const toggleExpanded = (eventId: string) => {
    setExpandedEvent(expandedEvent === eventId ? null : eventId)
  }

  return (
    <div className="space-y-4">
      {events.map((event) => (
        <Card key={event.id} className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              {/* Event Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs text-white">{event.category}</Badge>
                  <span className="text-xs font-semibold text-primary">{event.price}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span className="truncate">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4" />
                    <span>{event.organizer}</span>
                  </div>
                </div>

                {/* Description (expandable) */}
                <div className="mb-4">
                  <p className={`text-sm text-muted-foreground ${expandedEvent === event.id ? '' : 'line-clamp-2'}`}>
                    {event.description}
                  </p>
                  {event.description.length > 100 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleExpanded(event.id)}
                      className="mt-2 p-0 h-auto text-primary hover:text-primary/80"
                    >
                      {expandedEvent === event.id ? 'Show less' : 'Show more'}
                    </Button>
                  )}
                </div>
                <EventActions event={event} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
} 