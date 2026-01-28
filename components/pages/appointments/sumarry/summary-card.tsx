import { Card, CardContent } from "@/components/ui/card"

export interface SummaryCardProps {
  icon: React.ReactNode
  title: string
  value: string
  subtitle: string
  subtitleColor?: string
}

export default function SummaryCard({ 
  icon, 
  title, 
  value, 
  subtitle, 
  subtitleColor = "text-muted-foreground" 
}: SummaryCardProps) {
  return (
    <Card className="border-border bg-card">
      <CardContent className="p-4 sm:p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-1 sm:space-y-2 flex-1 min-w-0">
            <p className="text-xs sm:text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-2xl sm:text-3xl font-bold text-foreground">{value}</p>
            <p className={`text-xs sm:text-sm ${subtitleColor}`}>{subtitle}</p>
          </div>
          <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-primary/10 shrink-0 ml-2">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
