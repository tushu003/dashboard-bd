import { Phone, Bot, ArrowLeftRight, Calendar, X, Clock } from "lucide-react"
import KPICard from "./kpi-card"

export default function KPIGrid() {
  const kpiData = [
    {
      title: "Total Calls Today",
      value: "127",
      change: "+12%",
      changeType: "increase" as const,
      icon: Phone,
      iconColor: "bg-blue-500",
    },
    {
      title: "AI-Handled Calls",
      value: "98",
      change: "+77%",
      changeType: "increase" as const,
      icon: Bot,
      iconColor: "bg-purple-500",
    },
    {
      title: "Warm Transfer",
      value: "23",
      change: "+18%",
      changeType: "increase" as const,
      icon: ArrowLeftRight,
      iconColor: "bg-orange-500",
    },
    {
      title: "Appointments Booked",
      value: "34",
      change: "+8%",
      changeType: "increase" as const,
      icon: Calendar,
      iconColor: "bg-green-500",
    },
    {
      title: "Missed/Failed Calls",
      value: "6",
      change: "-3%",
      changeType: "decrease" as const,
      icon: X,
      iconColor: "bg-red-500",
    },
    {
      title: "Avg Call Duration",
      value: "3:42",
      change: "+15%",
      changeType: "increase" as const,
      icon: Clock,
      iconColor: "bg-blue-500",
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {kpiData.map((kpi, index) => (
        <KPICard key={index} {...kpi} />
      ))}
    </div>
  )
}
