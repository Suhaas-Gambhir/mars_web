import { Calendar, Clock, MapPin, Tag } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ProcessedEvent } from "@/lib/google-calendar"
import { EventActions } from "./event-actions"
import { Badge } from "@/components/ui/badge"

interface EventCardProps {
  event: ProcessedEvent
  showActions?: boolean
}

export function EventCard({ event, showActions = true }: EventCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader className="pb-4">
      <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className="text-xs text-white">{event.category}</Badge>
          <span className="text-xs sm:text-sm font-semibold text-primary">{event.price}</span>
        </div>
        <CardTitle className="text-lg sm:text-xl line-clamp-2">{event.title}</CardTitle>
        <CardDescription className="text-sm sm:text-base line-clamp-2">{event.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3 sm:space-y-4 pt-0">
        <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
          <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
          {event.date}
        </div>
        <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
          <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
          {event.time}
        </div>
        <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
          <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
          {event.location}
        </div>
        <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
          <Tag className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
          {event.organizer}
        </div>
        
        {/* Event Actions */}
        {showActions && (
          <div className="pt-4 border-t">
            <EventActions event={event} />
          </div>
        )}
      </CardContent>
    </Card>
  )
} 