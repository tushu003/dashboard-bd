import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:scale-105",
        outline:
          "border border-input bg-background hover:bg-blue-500/10 hover:text-blue-400 hover:border-blue-500/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:scale-105",
        ghost: "hover:bg-primary/20 hover:text-primary transition-colors duration-200",
        link: "text-primary underline-offset-4 hover:underline hover:text-blue-400",
        // ✅ Active sidebar button like the image
        shadowButton:
          "relative overflow-hidden rounded-xl " +
          "bg-gradient-to-b from-white/20 via-white/10 to-white/5 " +
          "text-white border border-white/25 backdrop-blur-md " +
          "shadow-[0_0_12px_rgba(255,255,255,0.35),0_0_28px_rgba(120,180,255,0.25),inset_0_1px_0_rgba(255,255,255,0.25)] " +
          "before:content-[''] before:absolute before:inset-0 " +
          "before:bg-gradient-to-r before:from-white/25 before:via-transparent before:to-white/10 " +
          "before:opacity-60 " +
          "after:content-[''] after:absolute after:inset-[1px] after:rounded-[inherit] " +
          "after:bg-gradient-to-b after:from-white/12 after:via-transparent after:to-transparent " +
          "after:opacity-70 " +
          "hover:brightness-110 hover:shadow-[0_0_14px_rgba(255,255,255,0.40),0_0_32px_rgba(120,180,255,0.30),inset_0_1px_0_rgba(255,255,255,0.28)]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
