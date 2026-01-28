"use client"

import Navbar from "@/components/common/navbar"
import KPIGrid from "@/components/pages/dashboard-overview/cards/kpi-grid"
import CallTrendsChart from "@/components/pages/dashboard-overview/call-trends/call-trends-chart"
import RecentActivity from "@/components/pages/dashboard-overview/recent-activity/recent-activity"
import TopRepairRequests from "@/components/pages/dashboard-overview/top-repair-requests/top-repair-requests"
import { useSidebar } from "@/contexts/sidebar-context"

export default function DashboardPage() {
  const { open } = useSidebar()

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar title="Dashboard Overview" onMenuClick={open} />
      
      <div className="flex-1 overflow-y-auto pt-20 p-4 md:p-6 lg:p-8">
        <div className="mx-auto max-w-7xl space-y-6">
          {/* KPI Cards */}
          <KPIGrid />

          {/* Call Trends Chart */}
          <CallTrendsChart />

          {/* Recent Activity and Top Repair Requests */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Recent Activity */}
            <RecentActivity />
            
            {/* Top Repair Requests */}
            <TopRepairRequests />
          </div>
        </div>
      </div>
    </div>
  )
}
