"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Tag,
  ArrowRight
} from "lucide-react"
import { ProcessedEvent } from "@/lib/google-calendar"
import { EventDetailDialog } from "./event-detail-dialog"
import { formatSydneyTimeRange } from "@/lib/utils/date-utils"

interface EventListViewProps {
  events: ProcessedEvent[]
}

export function EventListView({ events }: EventListViewProps) {
  const [selectedEvent, setSelectedEvent] = useState<ProcessedEvent | null>(null)
  const [isDetailOpen, setIsDetailOpen] = useState(false)

  const openEventDetail = (event: ProcessedEvent) => {
    setSelectedEvent(event)
    setIsDetailOpen(true)
  }

  return (
    <>
      <div className="space-y-4">
        {events.map((event) => (
          <Card 
            key={event.id} 
            className="hover:shadow-md transition-all hover:scale-[1.01] cursor-pointer group border-2"
            onClick={() => openEventDetail(event)}
          >
            <CardContent className="p-6">
              <div className="flex items-start justify-between gap-4">
                {/* Event Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <Badge variant="secondary" className="text-sm">{event.category}</Badge>
                    {event.isToday && (
                      <Badge variant="destructive" className="text-sm animate-pulse">
                        Live Now
                      </Badge>
                    )}
                    {event.isTomorrow && (
                      <Badge variant="default" className="text-sm">
                        Tomorrow
                      </Badge>
                    )}
                    {event.isNextWeek && !event.isTomorrow && !event.isToday && (
                      <Badge variant="outline" className="text-sm">
                        Next Week
                      </Badge>
                    )}
                    <span className="text-sm font-semibold text-primary ml-auto">{event.price}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  
                  <p className="text-base text-muted-foreground mb-4 line-clamp-2">
                    {event.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 bg-primary/10 rounded-md">
                        <Calendar className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 bg-primary/10 rounded-md">
                        <Clock className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm">{formatSydneyTimeRange(event.startDate, event.endDate)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 bg-primary/10 rounded-md">
                        <MapPin className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm truncate">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 bg-primary/10 rounded-md">
                        <Tag className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm">{event.organizer}</span>
                    </div>
                  </div>

                  <Button 
                    variant="outline" 
                    size="sm"
                    className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    onClick={(e) => {
                      e.stopPropagation()
                      openEventDetail(event)
                    }}
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <EventDetailDialog 
        event={selectedEvent}
        open={isDetailOpen}
        onOpenChange={setIsDetailOpen}
      />
    </>
  )
} 