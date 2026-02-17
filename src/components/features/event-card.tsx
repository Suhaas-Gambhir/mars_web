"use client"

import { useState } from "react"
import { Calendar, Clock, MapPin, Tag, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ProcessedEvent } from "@/lib/google-calendar"
import { EventActions } from "./event-actions"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { formatSydneyTimeRange } from "@/lib/utils/date-utils"
import { EventDetailDialog } from "./event-detail-dialog"

interface EventCardProps {
  event: ProcessedEvent
  showActions?: boolean
}

export function EventCard({ event, showActions = true }: EventCardProps) {
  const [isDetailOpen, setIsDetailOpen] = useState(false)

  return (
    <>
      <Card className="h-full hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer group border-2">
        <div onClick={() => setIsDetailOpen(true)}>
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
              <div className="flex items-center gap-2 flex-wrap">
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
              </div>
              <span className="text-sm font-semibold text-primary">{event.price}</span>
            </div>
            <CardTitle className="text-xl sm:text-2xl line-clamp-2 group-hover:text-primary transition-colors">
              {event.title}
            </CardTitle>
            <CardDescription className="text-base line-clamp-2">
              {event.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 pt-0">
            <div className="flex items-center text-sm text-muted-foreground">
              <div className="p-1.5 bg-primary/10 rounded-md mr-2">
                <Calendar className="w-4 h-4 text-primary" />
              </div>
              {event.date}
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <div className="p-1.5 bg-primary/10 rounded-md mr-2">
                <Clock className="w-4 h-4 text-primary" />
              </div>
              {formatSydneyTimeRange(event.startDate, event.endDate)}
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <div className="p-1.5 bg-primary/10 rounded-md mr-2">
                <MapPin className="w-4 h-4 text-primary" />
              </div>
              <span className="truncate">{event.location}</span>
            </div>
            
            <div className="pt-3">
              <Button 
                variant="outline" 
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  setIsDetailOpen(true)
                }}
              >
                View Details
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </div>
      </Card>
      
      <EventDetailDialog 
        event={event}
        open={isDetailOpen}
        onOpenChange={setIsDetailOpen}
      />
    </>
  )
} 