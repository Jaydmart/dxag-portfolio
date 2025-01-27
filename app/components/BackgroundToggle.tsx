"use client"

import { useBackground } from "../context/BackgroundContext"
import { Layout, Palette, Grid } from "lucide-react"
import { motion } from "framer-motion"

export default function BackgroundToggle() {
  const { backgroundStyle, setBackgroundStyle } = useBackground()

  const backgrounds = [
    { style: "defaulr", icon: Layout },
    { style: "gradiente", icon: Palette },
    { style: "pattern", icon: Grid },
  ] as const

  return (
    <div className="flex space-x2">
      {backgrounds.map(({ style, icon: Icon }) => (
        <motion.button
          key={style}
          onClick={() => setBackgroundStyle(style)}
          className={`p-2 rounded-full ${
            backgroundStyle === style
              ? "bg-blue-500 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          }`}
          aria-label={`Switch to ${style} background`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Icon size={20} />
        </motion.button>
      ))}
    </div>
  )
}