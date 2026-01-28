import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface ActivityItem {
  description: string
  time: string
  type: "success" | "warning" | "error"
}

const activities: ActivityItem[] = [
  {
    description: "AI booked appointment for iPhone 13 screen repair",
    time: "2 min ago",
    type: "success",
  },
  {
    description: "Warm transfer to technician - Software issue",
    time: "5 min ago",
    type: "warning",
  },
  {
    description: "Quote provided for iPad battery replacement",
    time: "8 min ago",
    type: "success",
  },
  {
    description: "Call dropped after 12 seconds",
    time: "15 min ago",
    type: "error",
  },
]

export default function RecentActivity() {
  const getDotColor = (type: ActivityItem["type"]) => {
    switch (type) {
      case "success":
        return "bg-green-500"
      case "warning":
        return "bg-orange-500"
      case "error":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start gap-3">
            <div
              className={cn(
                "mt-1.5 h-2 w-2 rounded-full",
                getDotColor(activity.type)
              )}
            />
            <div className="flex-1 space-y-1">
              <p className="text-sm text-foreground">{activity.description}</p>
              <p className="text-xs text-muted-foreground">{activity.time}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
