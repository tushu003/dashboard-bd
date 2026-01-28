"use client"

import { Bell, Phone, Calendar, AlertCircle, CheckCircle2, X } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Notification {
  id: string
  type: "call" | "appointment" | "alert" | "success"
  title: string
  message: string
  time: string
  unread: boolean
}

const notifications: Notification[] = [
  {
    id: "1",
    type: "call",
    title: "New Call Received",
    message: "Incoming call from +1 (555) 123-4567",
    time: "2 minutes ago",
    unread: true,
  },
  {
    id: "2",
    type: "appointment",
    title: "Appointment Scheduled",
    message: "iPhone 13 screen repair scheduled for tomorrow at 2:00 PM",
    time: "15 minutes ago",
    unread: true,
  },
  {
    id: "3",
    type: "alert",
    title: "Call Dropped",
    message: "Call dropped after 12 seconds - Customer may need callback",
    time: "1 hour ago",
    unread: true,
  },
  {
    id: "4",
    type: "success",
    title: "Quote Sent",
    message: "Quote for iPad battery replacement has been sent to customer",
    time: "2 hours ago",
    unread: false,
  },
  {
    id: "5",
    type: "call",
    title: "Warm Transfer Completed",
    message: "Call transferred to technician for software issue",
    time: "3 hours ago",
    unread: false,
  },
]

const getNotificationIcon = (type: Notification["type"]) => {
  switch (type) {
    case "call":
      return <Phone className="h-4 w-4 text-blue-500" />
    case "appointment":
      return <Calendar className="h-4 w-4 text-green-500" />
    case "alert":
      return <AlertCircle className="h-4 w-4 text-orange-500" />
    case "success":
      return <CheckCircle2 className="h-4 w-4 text-green-500" />
    default:
      return <Bell className="h-4 w-4" />
  }
}

export default function NotificationMenu() {
  const unreadCount = notifications.filter((n) => n.unread).length

  const handleMarkAllAsRead = () => {
    // Mark all notifications as read logic
    console.log("Marking all as read...")
  }

  const handleViewAll = () => {
    // Navigate to notifications page
    console.log("Viewing all notifications...")
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative transition-all duration-200 hover:bg-primary/20 hover:text-primary cursor-pointer hover:border-2 rounded-full hover:border-white">
          <Bell className="h-5 w-5 transition-colors duration-200" />
          {unreadCount > 0 && (
            <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] font-medium text-white transition-transform duration-200 hover:scale-110">
              {unreadCount > 9 ? "9+" : unreadCount}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="p-0">
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <h3 className="text-sm font-semibold text-foreground">Notifications</h3>
          {unreadCount > 0 && (
            <button
              onClick={handleMarkAllAsRead}
              className="text-xs text-primary transition-colors duration-200 hover:text-blue-400 hover:underline"
            >
              Mark all as read
            </button>
          )}
        </div>
        <div className="max-h-[400px] overflow-y-auto">
          {notifications.length === 0 ? (
            <div className="px-4 py-8 text-center text-sm text-muted-foreground">
              No notifications
            </div>
          ) : (
            <div className="divide-y divide-border">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={cn(
                    "group flex gap-3 px-4 py-3 transition-all duration-200 hover:bg-blue-500/10 hover:border-l-2 hover:border-l-blue-500 cursor-pointer",
                    notification.unread && "bg-accent/30"
                  )}
                >
                  <div className="mt-0.5 flex-shrink-0 transition-transform duration-200 group-hover:scale-110">
                    {getNotificationIcon(notification.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground transition-colors duration-200 group-hover:text-blue-400">
                          {notification.title}
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground transition-colors duration-200 group-hover:text-foreground/80">
                          {notification.message}
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {notification.time}
                        </p>
                      </div>
                      {notification.unread && (
                        <div className="h-2 w-2 flex-shrink-0 rounded-full bg-primary transition-all duration-200 group-hover:scale-125 group-hover:bg-blue-400" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {notifications.length > 0 && (
          <div className="border-t border-border px-4 py-3">
            <button
              onClick={handleViewAll}
              className="w-full text-center text-sm text-primary transition-colors duration-200 hover:text-blue-400 hover:underline"
            >
              View all notifications
            </button>
          </div>
        )}
      </PopoverContent>
    </Popover>
  )
}
