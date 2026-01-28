"use client"

import { Call } from "@/types/call"
import CallListCard from "./call-list-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface CallListProps {
  calls: Call[]
  selectedCallId: string | null
  onSelectCall: (callId: string) => void
}

export default function CallList({ calls, selectedCallId, onSelectCall }: CallListProps) {
  return (
    <Card className="border-border bg-card h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">
          Call List
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 overflow-y-auto">
        <div className="space-y-3">
          {calls.map((call) => (
            <CallListCard
              key={call.id}
              call={call}
              isSelected={selectedCallId === call.id}
              onClick={() => onSelectCall(call.id)}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
