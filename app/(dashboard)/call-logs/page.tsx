"use client"

import { useState } from "react"
import Navbar from "@/components/common/navbar"
import SearchFilters from "@/components/pages/call-logs/search-filters"
import CallList from "@/components/pages/call-logs/call-list/call-list"
import CallDetails from "@/components/pages/call-logs/call-details/call-details"
import { useSidebar } from "@/contexts/sidebar-context"
import { Call } from "@/types/call"

const mockCalls: Call[] = [
  {
    id: "1",
    phoneNumber: "+1 (555) 123-4567",
    date: "2025-12-16",
    time: "10:45 AM",
    duration: "4:32",
    outcome: "Quote provided",
    issueType: "Screen",
    status: "ai-resolved",
    transcript: [
      {
        speaker: "ai",
        message: "Thank you for calling UBreakiFix! How can I help you today?",
      },
      {
        speaker: "customer",
        message: "Hi, my iPhone 13 screen is cracked. How much would it cost to repair?",
      },
      {
        speaker: "ai",
        message: "I can help you with that! For an iPhone 13 screen repair, our price is $199. This includes parts, labor, and comes with a 90-day warranty. Would you like to book an appointment?",
      },
      {
        speaker: "customer",
        message: "Yes, please! When are you available?",
      },
      {
        speaker: "ai",
        message: "Great! I have availability today at 2:00 PM or tomorrow at 10:00 AM. Which works better for you?",
      },
    ],
  },
  {
    id: "2",
    phoneNumber: "+1 (555) 345-6789",
    date: "2025-12-16",
    time: "09:42 AM",
    duration: "5:23",
    outcome: "Escalated to technician",
    issueType: "Software",
    status: "warm-transfer",
  },
  {
    id: "3",
    phoneNumber: "+1 (555) 345-6789",
    date: "2025-12-16",
    time: "09:42 AM",
    duration: "5:23",
    outcome: "Appointment Booked",
    issueType: "Battery",
    status: "appointment",
  },
  {
    id: "4",
    phoneNumber: "+1 (555) 345-6789",
    date: "2025-12-16",
    time: "09:42 AM",
    duration: "0:20",
    outcome: "Call Dropped",
    issueType: "Unknown",
    status: "dropped",
  },
  {
    id: "5",
    phoneNumber: "+1 (555) 345-6789",
    date: "2025-12-16",
    time: "09:42 AM",
    duration: "5:23",
    outcome: "Quote Provided",
    issueType: "Screen",
    status: "ai-resolved",
  },
]

export default function CallLogsPage() {
  const { open } = useSidebar()
  const [selectedCallId, setSelectedCallId] = useState<string | null>(mockCalls[0]?.id || null)
  const [searchQuery, setSearchQuery] = useState("")

  const selectedCall = mockCalls.find((call) => call.id === selectedCallId) || null

  const filteredCalls = mockCalls.filter((call) => {
    if (!searchQuery) return true
    const query = searchQuery.toLowerCase()
    return (
      call.phoneNumber.toLowerCase().includes(query) ||
      call.issueType.toLowerCase().includes(query) ||
      call.outcome.toLowerCase().includes(query)
    )
  })

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar title="Call Logs & History" onMenuClick={open} />
      
      <div className="flex-1 overflow-hidden pt-20 p-4 md:p-6 lg:p-8">
        <div className="mx-auto max-w-7xl h-full flex flex-col">
          {/* Search and Filters */}
          <SearchFilters searchQuery={searchQuery} onSearchChange={setSearchQuery} />

          {/* Main Content */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-0">
            {/* Call List */}
            <div className="min-h-0 flex flex-col">
              <CallList
                calls={filteredCalls}
                selectedCallId={selectedCallId}
                onSelectCall={setSelectedCallId}
              />
            </div>

            {/* Call Details */}
            <div className="min-h-0 flex flex-col">
              <CallDetails call={selectedCall} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
