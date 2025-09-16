import { Calendar, Clock, MapPin, Tag } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ProcessedEvent } from "@/lib/google-calendar"
import { EventActions } from "./event-actions"
import { Badge } from "@/components/ui/badge"
import { formatSydneyTimeRange } from "@/lib/utils/date-utils"

interface EventCardProps {
  event: ProcessedEvent
  showActions?: boolean
}

export function EventCard({ event, showActions = true }: EventCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader className="pb-4">
      <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className="text-sm text-white">{event.category}</Badge>
          <span className="text-sm sm:text-base font-semibold text-primary">{event.price}</span>
        </div>
        <CardTitle className="text-xl sm:text-2xl line-clamp-2">{event.title}</CardTitle>
        <CardDescription className="text-base sm:text-lg line-clamp-2">{event.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3 sm:space-y-4 pt-0">
        <div className="flex items-center text-sm sm:text-base text-muted-foreground">
          <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
          {event.date}
        </div>
        <div className="flex items-center text-sm sm:text-base text-muted-foreground">
          <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
          {formatSydneyTimeRange(event.startDate, event.endDate)}
        </div>
        <div className="flex items-center text-sm sm:text-base text-muted-foreground">
          <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
          {event.location}
        </div>
        <div className="flex items-center text-sm sm:text-base text-muted-foreground">
          <Tag className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
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