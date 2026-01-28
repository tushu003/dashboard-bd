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
      <main className="flex-1 lg:ml-40 pt-12 bg-gradient-to-br from-[#1a2b4f] via-[#15224d] to-[#19254c] min-h-screen overflow-x-hidden w-0 min-w-0">
        {children}
      </main>
    </div>
  )
}
