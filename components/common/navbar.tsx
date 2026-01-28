"use client"

import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import NotificationMenu from "./notification-menu"
import UserMenu from "./user-menu"

interface NavbarProps {
  title: string
  onMenuClick?: () => void
}

export default function Navbar({ title, onMenuClick }: NavbarProps) {
  return (
    <header className="fixed top-0 left-0 lg:left-64 right-0 z-50 flex h-16 items-center justify-between bg-[#111B3C] px-4 md:px-6">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={onMenuClick}
        >
          <Menu className="h-5 w-5" />
        </Button>
        <h1 className="text-lg font-semibold text-foreground md:text-xl">
          {title}
        </h1>
      </div>
      
      <div className="flex items-center gap-2 md:gap-4">
        <NotificationMenu />
        <UserMenu />
      </div>
    </header>
  )
}
