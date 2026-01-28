"use client"

import { User, Settings, LogOut, UserCircle } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function UserMenu() {
  const handleLogout = () => {
    // Logout logic here
    console.log("Logging out...")
  }

  const handleViewProfile = () => {
    // Navigate to profile page
    console.log("Viewing profile...")
  }

  const handleSettings = () => {
    // Navigate to settings page
    window.location.href = "/settings"
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-muted transition-all duration-200 hover:bg-primary/20 hover:ring-2 hover:ring-primary/30 md:h-10 md:w-10 cursor-pointer">
          <User className="h-5 w-5 text-muted-foreground transition-colors duration-200 hover:text-primary md:h-6 md:w-6" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <div className="px-2 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
              <User className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-foreground">John Doe</span>
              <span className="text-xs text-muted-foreground">john.doe@example.com</span>
            </div>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleViewProfile} className="group">
          <UserCircle className="mr-2 h-4 w-4 transition-colors duration-200 group-hover:text-blue-400" />
          <span className="transition-colors duration-200 group-hover:text-blue-400">View Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleSettings} className="group">
          <Settings className="mr-2 h-4 w-4 transition-colors duration-200 group-hover:text-blue-400" />
          <span className="transition-colors duration-200 group-hover:text-blue-400">Settings</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout} className="group text-destructive focus:text-destructive hover:bg-destructive/10 hover:text-destructive">
          <LogOut className="mr-2 h-4 w-4 transition-colors duration-200 group-hover:text-red-500" />
          <span className="transition-colors duration-200 group-hover:text-red-500">Log Out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
