"use client"

import * as React from "react"
import * as SlidePrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SlidePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SlidePrimitive.Root>
>(({ className, ...props }, ref) => (
  <SlidePrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SlidePrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
      <SlidePrimitive.Range className="absolute h-full bg-primary" />
    </SlidePrimitive.Track>
    <SlidePrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
  </SlidePrimitive.Root>
))
Slider.displayName = SlidePrimitive.Root.displayName

export { Slider }