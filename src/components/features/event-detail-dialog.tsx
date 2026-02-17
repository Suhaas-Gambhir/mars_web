"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ProcessedEvent } from "@/lib/google-calendar"
import { Calendar, Clock, MapPin, Tag, Video, ExternalLink, CalendarPlus, X } from "lucide-react"
import { useCalendarActions } from "@/hooks/use-calendar-actions"
import { formatSydneyTimeRange } from "@/lib/utils/date-utils"

interface EventDetailDialogProps {
  event: ProcessedEvent | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function EventDetailDialog({ event, open, onOpenChange }: EventDetailDialogProps) {
  const { addToCalendar, joinMeeting, viewInCalendar, hasMeetingLink } = useCalendarActions()

  if (!event) return null

  // Function to safely render HTML description
  const renderDescription = (description: string) => {
    // Remove excessive line breaks and clean up the HTML
    const cleanedDescription = description
      .replace(/\n{3,}/g, '\n\n')
      .replace(/\r\n/g, '\n')
      .trim()

    // Check if description contains HTML tags
    const hasHTML = /<[a-z][\s\S]*>/i.test(cleanedDescription)

    if (hasHTML) {
      return (
        <div 
          className="prose prose-sm max-w-none dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: cleanedDescription }}
        />
      )
    } else {
      // Split by line breaks and render as paragraphs
      return cleanedDescription.split('\n').map((paragraph, idx) => {
        if (paragraph.trim()) {
          return <p key={idx} className="mb-3">{paragraph}</p>
        }
        return null
      })
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="text-sm">
                  {event.category}
                </Badge>
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
                {event.isNextWeek && !event.isTomorrow && (
                  <Badge variant="outline" className="text-sm">
                    Next Week
                  </Badge>
                )}
              </div>
              <DialogTitle className="text-2xl font-bold mb-2">{event.title}</DialogTitle>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Event Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-muted/30 rounded-lg border">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-full">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Date</p>
                <p className="font-semibold">{event.date}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-full">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Time</p>
                <p className="font-semibold">{formatSydneyTimeRange(event.startDate, event.endDate)}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-full">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div className="overflow-hidden">
                <p className="text-xs text-muted-foreground">Location</p>
                <p className="font-semibold truncate">{event.location}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-full">
                <Tag className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Organizer</p>
                <p className="font-semibold">{event.organizer}</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold mb-3">About This Event</h3>
            <div className="text-muted-foreground leading-relaxed">
              {renderDescription(event.description)}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-4 border-t">
            {hasMeetingLink(event) && (
              <Button 
                onClick={() => {
                  joinMeeting(event)
                  onOpenChange(false)
                }}
                className="flex items-center gap-2"
                variant="default"
              >
                <Video className="w-4 h-4" />
                Join Meeting
              </Button>
            )}

            <Button 
              onClick={() => {
                addToCalendar(event)
                onOpenChange(false)
              }}
              variant="outline"
              className="flex items-center gap-2"
            >
              <CalendarPlus className="w-4 h-4" />
              Add to Calendar
            </Button>

            {event.htmlLink && (
              <Button 
                onClick={() => {
                  viewInCalendar(event)
                  onOpenChange(false)
                }}
                variant="outline"
                className="flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                View in Google Calendar
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
