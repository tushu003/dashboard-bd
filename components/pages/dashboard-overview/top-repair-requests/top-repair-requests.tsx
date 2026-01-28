import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface RepairRequest {
  name: string
  count: number
  percentage: number
}

const repairRequests: RepairRequest[] = [
  { name: "Screen Repair", count: 156, percentage: 100 },
  { name: "Battery Replacement", count: 89, percentage: 57 },
  { name: "Back Glass Repair", count: 67, percentage: 43 },
  { name: "Software Issues", count: 45, percentage: 29 },
]

export default function TopRepairRequests() {
  const maxCount = Math.max(...repairRequests.map((r) => r.count))

  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">
          Top Repair Requests
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {repairRequests.map((request, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">
                {request.name}
              </span>
              <span className="text-sm text-muted-foreground">
                {request.count} requests
              </span>
            </div>
            <Progress value={request.percentage} className="h-2" />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
