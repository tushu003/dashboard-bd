"use client"

import { useState } from "react"
import Navbar from "@/components/common/navbar"
import ProfileTab from "@/components/pages/settings/profile-tab"
import PasswordTab from "@/components/pages/settings/password-tab"
import { useSidebar } from "@/contexts/sidebar-context"
import { cn } from "@/lib/utils"

type TabType = "profile" | "password"

export default function SettingsPage() {
  const { open } = useSidebar()
  const [activeTab, setActiveTab] = useState<TabType>("profile")

  const profileData = {
    fullName: "Jane D.",
    email: "jane@gmail.com",
    storeName: "Ubreakfix Store",
    storeAddress: "123 Main Street, New York, NY 10001",
    profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
  }

  const handleSaveProfile = (data: typeof profileData) => {
    console.log("Saving profile:", data)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar title="Settings" onMenuClick={open} />
      
      <div className="flex-1 overflow-y-auto pt-20 p-4 md:p-6 lg:p-8">
        <div className="lg:ml-24 md:ml-16 ml-8 mt-4 max-w-4xl">
          {/* Tabs */}
          <div className="mb-6 border-b border-border">
            <div className="flex gap-6">
              <button
                onClick={() => setActiveTab("profile")}
                className={cn(
                  "pb-4 text-sm font-medium transition-colors relative",
                  activeTab === "profile"
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                Profile
                {activeTab === "profile" && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />
                )}
              </button>
              <button
                onClick={() => setActiveTab("password")}
                className={cn(
                  "pb-4 text-sm font-medium transition-colors relative",
                  activeTab === "password"
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                Password Settings
                {activeTab === "password" && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />
                )}
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div>
            {activeTab === "profile" && (
              <ProfileTab data={profileData} onSave={handleSaveProfile} />
            )}
            {activeTab === "password" && <PasswordTab />}
          </div>
        </div>
      </div>
    </div>
  )
}
