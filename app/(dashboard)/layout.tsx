"use client"

import { SidebarProvider } from "@/contexts/sidebar-context"
import DashboardContent from "@/components/layout/dashboard-content"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <DashboardContent>{children}</DashboardContent>
    </SidebarProvider>
  )
}


