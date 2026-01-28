"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function PasswordTab() {
  return (
    <div>
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">
            Current Password
          </label>
          <Input
            type="password"
            placeholder="Enter current password"
            className="bg-background border-border text-foreground"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">
            New Password
          </label>
          <Input
            type="password"
            placeholder="Enter new password"
            className="bg-background border-border text-foreground"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">
            Confirm New Password
          </label>
          <Input
            type="password"
            placeholder="Confirm new password"
            className="bg-background border-border text-foreground"
          />
        </div>
        <div className="flex justify-center pt-4">
          <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-2 rounded-md font-medium transition-colors">
            Update Password
          </Button>
        </div>
      </div>
    </div>
  )
}
