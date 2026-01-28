"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const callData = [
  { day: "Mon", calls: 48 },
  { day: "Tue", calls: 58 },
  { day: "Wed", calls: 57 },
  { day: "Thu", calls: 72 },
  { day: "Fri", calls: 92 },
  { day: "Sat", calls: 94 },
  { day: "Sun", calls: 63 },
]

export default function CallTrendsChart() {
  return (
    <Card className="border-border  bg-card">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <div>
          <CardTitle className="text-lg font-semibold text-foreground">
            Call Trends - This Week
          </CardTitle>
          <p className="text-sm text-muted-foreground">Total: 472 calls</p>
        </div>
        <select className="rounded-md border border-border bg-background px-3 py-1.5 text-sm text-foreground">
          <option>This Week</option>
          <option>This Month</option>
          <option>This Year</option>
        </select>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={callData}>
            <defs>
              <linearGradient id="colorCalls" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="rgba(255, 255, 255, 0.05)" 
              opacity={0.8}
            />
            <XAxis
              dataKey="day"
              className="text-xs text-muted-foreground"
              tick={{ fill: "currentColor" }}
            />
            <YAxis
              className="text-xs text-muted-foreground"
              tick={{ fill: "currentColor" }}
              domain={[0, 100]}
              ticks={[0, 25, 50, 75, 100]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "0.5rem",
              }}
            />
            <Area
              type="monotone"
              dataKey="calls"
              stroke="#3b82f6"
              fillOpacity={1}
              fill="url(#colorCalls)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
