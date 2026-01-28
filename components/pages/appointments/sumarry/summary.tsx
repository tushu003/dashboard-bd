import { CalendarCheck, CheckCircle2, AlertCircle } from "lucide-react"
import SummaryCard from "./summary-card"

export default function SummaryCards() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3 w-full min-w-0">
      <SummaryCard
        icon={<CalendarCheck className="h-6 w-6 text-primary" />}
        title="Total Booked"
        value="34"
        subtitle="+8 this week"
        subtitleColor="text-green-500"
      />
      <SummaryCard
        icon={<CheckCircle2 className="h-6 w-6 text-primary" />}
        title="AI Booked"
        value="28"
        subtitle="82% of total"
      />
      <SummaryCard
        icon={<AlertCircle className="h-6 w-6 text-primary" />}
        title="Pending"
        value="3"
        subtitle="Awaiting confirmation"
      />
    </div>
  )
}
