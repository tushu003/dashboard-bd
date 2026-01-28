"use client"

import { useState } from "react"
import { Edit2, SquarePen } from "lucide-react"
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
        <div className="flex gap-4">
          <div className="relative">
            <div className="h-20 w-20 rounded-full overflow-hidden border-2 border-blue-500/50]]">
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
              >
                <SquarePen className="h-8 w-8 bg-[#7AA3CC] lg:-mt-9 lg:ml-14 p-1 rounded-lg" />
              </button>
            )}
          </div>
          {!isEditing && (
            <Button
              onClick={handleEdit}
              variant="outline"
              size="sm"
              className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:text-blue-300 hover:border-blue-500/70 shadow-[inset_0_0_20px_rgba(87,177,255),0_20px_30px_-14px_#D2EAFF] lg:mt-12 lg:-ml-4 rounded-full"
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
          <div className="flex items-center gap-4 lg:gap-28 pb-4  border-b border-border">
            <span className="text-sm text-muted-foreground">Full Name:</span>
            <span className="text-sm font-medium text-foreground">{formData.fullName}</span>
          </div>
          <div className="flex items-center gap-4 lg:gap-34 pb-4 border-b border-border">
            <span className="text-sm text-muted-foreground">Email:</span>
            <span className="text-sm font-medium text-foreground">{formData.email}</span>
          </div>
          <div className="flex items-center gap-4 lg:gap-23 pb-4 border-b border-border">
            <span className="text-sm text-muted-foreground">Store Name:</span>
            <span className="text-sm font-medium text-foreground">{formData.storeName}</span>
          </div>
          <div className="flex items-center gap-4 lg:gap-20 py-2">
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
