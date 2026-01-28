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
      iconColor: "bg-gradient-to-br from-[2B7FFF] to-[#00B8DB]",
    },
    {
      title: "AI-Handled Calls",
      value: "98",
      change: "+77%",
      changeType: "increase" as const,
      icon: Bot,
      iconColor: "bg-gradient-to-br from-[#AD46FF] to-[#F6339A]",
    },
    {
      title: "Warm Transfer",
      value: "23",
      change: "+18%",
      changeType: "increase" as const,
      icon: ArrowLeftRight,
      iconColor: "bg-gradient-to-br from-[#FF6900] to-[#FB2C36]",
    },
    {
      title: "Appointments Booked",
      value: "34",
      change: "+8%",
      changeType: "increase" as const,
      icon: Calendar,
      iconColor: "bg-gradient-to-br from-[#00C950] to-[#00BC7D]",
    },
    {
      title: "Missed/Failed Calls",
      value: "6",
      change: "-3%",
      changeType: "decrease" as const,
      icon: X,
      iconColor: "bg-gradient-to-br from-[#FB2C36] to-[#FF2056]",
    },
    {
      title: "Avg Call Duration",
      value: "3:42",
      change: "+15%",
      changeType: "increase" as const,
      icon: Clock,
      iconColor: "bg-gradient-to-br from-[#615FFF] to-[#2B7FFF]",
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
