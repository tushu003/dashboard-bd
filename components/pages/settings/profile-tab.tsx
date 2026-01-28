"use client"

import { useState } from "react"
import { Edit2, Pencil } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

interface ProfileData {
  fullName: string
  email: string
  storeName: string
  storeAddress: string
  profileImage: string
}

interface ProfileTabProps {
  data: ProfileData
  onSave?: (data: ProfileData) => void
}

export default function ProfileTab({ data, onSave }: ProfileTabProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState<ProfileData>(data)

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleSave = () => {
    onSave?.(formData)
    setIsEditing(false)
  }

  const handleChange = (field: keyof ProfileData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div>
      {/* Profile Image Section */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-muted-foreground mb-3">
          Profile Image
        </label>
        <div className="flex justify-between items-center gap-4">
          <div className="relative">
            <div className="h-20 w-20 rounded-full overflow-hidden border-2 border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
              <Image
                width={80}
                height={80}
                src={formData.profileImage}
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>
            {isEditing && (
              <button
                type="button"
                className="absolute -bottom-1 -right-1 h-7 w-7 rounded-md bg-blue-500 flex items-center justify-center text-white hover:bg-blue-600 transition-colors shadow-lg border-2 border-background"
              >
                <Pencil className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
          {!isEditing && (
            <Button
              onClick={handleEdit}
              variant="outline"
              size="sm"
              className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:text-blue-300 hover:border-blue-500/70 shadow-[0_0_10px_rgba(59,130,246,0.3)] rounded-md"
            >
              <Edit2 className="mr-2 h-4 w-4" />
              Edit Profile
            </Button>
          )}
        </div>
      </div>

      {/* Profile Information */}
      {!isEditing ? (
        <div className="space-y-5">
          <div className="flex items-center justify-between py-2">
            <span className="text-sm text-muted-foreground">Full Name:</span>
            <span className="text-sm font-medium text-foreground">{formData.fullName}</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="text-sm text-muted-foreground">Email:</span>
            <span className="text-sm font-medium text-foreground">{formData.email}</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="text-sm text-muted-foreground">Store Name:</span>
            <span className="text-sm font-medium text-foreground">{formData.storeName}</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="text-sm text-muted-foreground">Store Address:</span>
            <span className="text-sm font-medium text-foreground">{formData.storeAddress}</span>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground">
                Full Name
              </label>
              <Input
                value={formData.fullName}
                onChange={(e) => handleChange("fullName", e.target.value)}
                className="bg-background border-border text-foreground"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground">
                Email
              </label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="bg-background border-border text-foreground"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground">
                Store Name
              </label>
              <Input
                value={formData.storeName}
                onChange={(e) => handleChange("storeName", e.target.value)}
                className="bg-background border-border text-foreground"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground">
                Store Address
              </label>
              <Input
                value={formData.storeAddress}
                onChange={(e) => handleChange("storeAddress", e.target.value)}
                className="bg-background border-border text-foreground"
              />
            </div>
          </div>
          <div className="flex justify-center pt-4">
            <Button
              onClick={handleSave}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-2 rounded-md font-medium transition-colors"
            >
              Save
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
