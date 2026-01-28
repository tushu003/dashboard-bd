"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  className?: string
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className,
}: PaginationProps) {
  const getPageNumbers = () => {
    const pages: (number | string)[] = []
    
    if (totalPages <= 7) {
      // Show all pages if 7 or less
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      // Always show first page
      pages.push(1)
      
      // Determine how many consecutive pages to show
      if (currentPage <= 4) {
        // Near start: show 2, 3, 4, 5
        for (let i = 2; i <= Math.min(5, totalPages - 1); i++) {
          pages.push(i)
        }
        // Add ellipsis if there's a gap
        if (totalPages > 6) {
          pages.push("...")
        }
      } else if (currentPage >= totalPages - 3) {
        // Near end: show ellipsis then last few pages
        pages.push("...")
        for (let i = Math.max(2, totalPages - 4); i < totalPages; i++) {
          pages.push(i)
        }
      } else {
        // Middle: show ellipsis, current-1, current, current+1, current+2
        pages.push("...")
        for (let i = currentPage - 1; i <= currentPage + 2; i++) {
          pages.push(i)
        }
        pages.push("...")
      }
      
      // Always show last page (if more than 1 page)
      if (totalPages > 1) {
        pages.push(totalPages)
      }
    }
    
    return pages
  }

  const isPreviousDisabled = currentPage === 1
  const isNextDisabled = currentPage === totalPages

  return (
    <div className={cn("flex items-center justify-center gap-2 sm:gap-3 flex-wrap", className)}>
      <button
        onClick={() => !isPreviousDisabled && onPageChange(currentPage - 1)}
        disabled={isPreviousDisabled}
        className={cn(
          "flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors duration-200",
          isPreviousDisabled
            ? "text-gray-400 cursor-not-allowed"
            : "text-blue-500 hover:text-blue-600 cursor-pointer"
        )}
      >
        <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
        <span className="hidden xs:inline">Previous</span>
      </button>

      <div className="flex items-center gap-0.5 sm:gap-1">
        {getPageNumbers().map((page, index) => {
          if (page === "...") {
            return (
              <span
                key={`ellipsis-${index}`}
                className="px-1 sm:px-2 text-gray-400 text-xs sm:text-sm"
              >
                ...
              </span>
            )
          }

          const pageNum = page as number
          const isActive = pageNum === currentPage

          return (
            <button
              key={pageNum}
              onClick={() => onPageChange(pageNum)}
              className={cn(
                "min-w-8 sm:min-w-10 h-7 sm:h-8 px-2 sm:px-3 rounded-md text-xs sm:text-sm font-medium transition-all duration-200",
                isActive
                  ? "bg-blue-300/40 text-blue-700 border border-blue-400/50"
                  : "text-blue-500 hover:text-blue-600 hover:bg-blue-500/10 cursor-pointer"
              )}
            >
              {pageNum}
            </button>
          )
        })}
      </div>

      <button
        onClick={() => !isNextDisabled && onPageChange(currentPage + 1)}
        disabled={isNextDisabled}
        className={cn(
          "flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors duration-200",
          isNextDisabled
            ? "text-gray-400 cursor-not-allowed"
            : "text-blue-500 hover:text-blue-600 cursor-pointer"
        )}
      >
        <span className="hidden xs:inline">Next</span>
        <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
      </button>
    </div>
  )
}
