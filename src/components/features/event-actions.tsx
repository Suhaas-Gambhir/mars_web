"use client"
import { Button } from "@/components/ui/button"
import { 
  Video, 
  ExternalLink, 
  CalendarPlus
} from "lucide-react"
import { ProcessedEvent } from "@/lib/google-calendar"
import { useCalendarActions } from "@/hooks/use-calendar-actions"

interface EventActionsProps {
  event: ProcessedEvent
}

export function EventActions({ event }: EventActionsProps) {
  const { addToCalendar, joinMeeting, viewInCalendar, hasMeetingLink } = useCalendarActions()

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {hasMeetingLink(event) && (
          <Button 
            onClick={() => joinMeeting(event)}
            size="lg"
            variant="outline"
            className="flex items-center gap-2"
          >
            <Video className="w-2 h-2" />
          </Button>
        )}

        {/* Add to Calendar Button */}
        <Button 
          onClick={() => addToCalendar(event)}
          size="lg"
          variant="outline"
          className="flex items-center gap-2"
        >
          <CalendarPlus className="w-2 h-2" />
        </Button>

        {/* View in Calendar Button */}
        {event.htmlLink && (
          <Button 
            onClick={() => viewInCalendar(event)}
            size="lg"
            variant="outline"
            className="flex items-center gap-2"
          >
            <ExternalLink className="w-2 h-2" />
          </Button>
        )}
      </div>
    </div>
  )
} 