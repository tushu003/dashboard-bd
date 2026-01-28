"use client"

import Sidebar from "@/components/common/sidebar"
import { useSidebar } from "@/contexts/sidebar-context"

interface DashboardContentProps {
  children: React.ReactNode
}

export default function DashboardContent({ children }: DashboardContentProps) {
  const { isOpen, close } = useSidebar()

  return (
    <div className="flex min-h-screen overflow-x-hidden">
      <Sidebar isOpen={isOpen} onClose={close} />
      <main className="flex-1 lg:ml-40 pt-12 bg-gradient-to-br from-[#15223f] via-[#1a2a5d] to-[#182347] min-h-screen overflow-x-hidden w-0 min-w-0">
        {children}
      </main>
    </div>
  )
}
