"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function BookingLink() {
  const [copied, setCopied] = useState(false)
  const bookingUrl = "https://techstore.com/book?id=store123"

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(bookingUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  return (
    <Card className="border-border bg-card w-full min-w-0">
      <CardHeader className="p-4 sm:p-6 pb-3 sm:pb-4">
        <CardTitle className="text-base sm:text-lg font-semibold text-foreground">
          Booking Link
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 pt-0">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 min-w-0">
          <input
            type="text"
            value={bookingUrl}
            readOnly
            className="flex-1 min-w-0 rounded-md border border-border bg-background px-2.5 sm:px-3 py-2 text-xs sm:text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring truncate"
          />
          <Button
            onClick={handleCopy}
            className="shadow-[inset_0_0_20px_rgba(87,177,255)]  hover:bg-primary/90  text-white w-full sm:w-auto whitespace-nowrap text-xs sm:text-sm px-3 sm:px-4"
          >
            {copied ? (
              <>
                <Check className="mr-2 h-4 w-4" />
                Copied
              </>
            ) : (
              <>
                <Copy className="mr-2 h-4 w-4" />
                Copy Link
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
