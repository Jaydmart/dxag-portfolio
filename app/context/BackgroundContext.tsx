"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

type BackgroundStyle = "default" | "gradient" | "pattern"

type BackgroundContextType = {
  backgroundStyle: BackgroundStyle
  setBackgroundStyle: (style: BackgroundStyle) => void
}

const BackgroundContext = createContext<BackgroundContextType | undefined>(undefined)

export function BackgroundProvider({ children }: { children: React.ReactNode }) {
  const [backgroundStyle, setBackgroundStyle] = useState<BackgroundStyle>("default")

  return (
    <BackgroundContext.Provider value={{ backgroundStyle, setBackgroundStyle }}>{children}</BackgroundContext.Provider>
  )
}

export function useBackground() {
  const context = useContext(BackgroundContext)
  if (context === undefined) {
    throw new Error("useBackground must be used within a BackgroundProvider")
  }
  return context
}