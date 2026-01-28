"use client"

import { Phone, Clock } from "lucide-react"
import { cn } from "@/lib/utils"
import { Call } from "@/types/call"

interface CallListCardProps {
  call: Call
  isSelected: boolean
  onClick: () => void
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

const issueTypeColors: Record<string, string> = {
  Screen: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  Battery: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  Software: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  Unknown: "bg-blue-500/20 text-blue-400 border-blue-500/30",
}

export default function CallListCard({ call, isSelected, onClick }: CallListCardProps) {
  const status = statusConfig[call.status]
  const issueColor = issueTypeColors[call.issueType] || issueTypeColors.Unknown

  return (
    <div
      onClick={onClick}
      className={cn(
        "group relative cursor-pointer rounded-lg border border-border bg-card p-4 transition-all duration-200 hover:bg-accent/50",
        isSelected && "bg-blue-500/10 border-b-2 border-b-blue-500"
      )}
    >
      <div className="flex items-start gap-3">
        <div className="mt-1 shrink-0">
          <Phone className="h-8 w-8 text-white bg-gradient-to-br from-[#2B7FFF] to-[#00B8DB] p-2 rounded-lg" />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">
                {call.phoneNumber}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {call.date} • {call.time}
              </p>
            </div>
            <span
              className={cn(
                "px-2 py-0.5 rounded text-xs font-medium border whitespace-nowrap",
                status.className
              )}
            >
              {status.label}
            </span>
          </div>

          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">{call.duration}</span>
            </div>
            <span className="text-xs text-muted-foreground">{call.outcome}</span>
                 <span
              className={cn(
                "px-2 py-0.5 rounded text-xs font-medium border",
                issueColor
              )}
            >
              {call.issueType}
            </span>
          </div>

          <div className="flex items-center justify-between mt-2">
       
          </div>
        </div>
      </div>
    </div>
  )
}
