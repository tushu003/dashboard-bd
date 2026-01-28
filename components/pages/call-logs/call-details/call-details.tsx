"use client"

import { Play, FileText } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Call } from "@/types/call"
import { cn } from "@/lib/utils"

interface CallDetailsProps {
  call: Call | null
}

const statusConfig = {
  "ai-resolved": {
    label: "AI Resolved",
    className: "bg-green-500/20 text-green-400 border-green-500/30",
  },
  "warm-transfer": {
    label: "Warm Transfer",
    className: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  },
  appointment: {
    label: "Appointment",
    className: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  },
  dropped: {
    label: "Dropped",
    className: "bg-red-500/20 text-red-400 border-red-500/30",
  },
}

export default function CallDetails({ call }: CallDetailsProps) {
  if (!call) {
    return (
      <Card className="border-border bg-card h-full flex items-center justify-center">
        <CardContent>
          <p className="text-muted-foreground text-center">
            Select a call to view details
          </p>
        </CardContent>
      </Card>
    )
  }

  const status = statusConfig[call.status]

  return (
    <Card className="border-border bg-card h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">
          Call Details
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 overflow-y-auto space-y-6">
        {/* Call Information */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Phone Number</p>
              <p className="text-sm font-medium text-foreground">{call.phoneNumber}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Duration</p>
              <p className="text-sm font-medium text-foreground">{call.duration}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Date & Time</p>
              <p className="text-sm font-medium text-foreground">
                {call.date} {call.time}
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Issue Type</p>
              <p className="text-sm font-medium text-foreground">{call.issueType}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Call Type</p>
              <span
                className={cn(
                  "inline-block px-2 py-1 rounded text-xs font-medium border",
                  status.className
                )}
              >
                {status.label}
              </span>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Outcome</p>
              <p className="text-sm font-medium text-foreground">{call.outcome}</p>
            </div>
          </div>
        </div>

        {/* Audio Recording Button */}
        <div>
          <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
            <Play className="mr-2 h-4 w-4" />
            Play Audio Recording
          </Button>
        </div>

        {/* Conversation Transcript */}
        {call.transcript && call.transcript.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-muted-foreground" />
              <h3 className="text-sm font-semibold text-foreground">
                Conversation Transcript
              </h3>
            </div>
            <div className="space-y-3">
              {call.transcript.map((entry, index) => (
                <div
                  key={index}
                  className={cn(
                    "rounded-lg p-3",
                    entry.speaker === "ai"
                      ? "bg-blue-500/10 border border-blue-500/20"
                      : "bg-muted/50 border border-border"
                  )}
                >
                  <p className="text-xs font-medium text-muted-foreground mb-1">
                    {entry.speaker === "ai" ? "AI Assistant" : "Customer"}
                  </p>
                  <p className="text-sm text-foreground">{entry.message}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
