"use client"

import { useTheme } from "../context/ThemeContext"
import { Moon, Sun } from "lucide-react"
import { motion } from "framer-motion"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div initial={false} animate={{ rotate: theme === "light" ? 0 : 180 }} transition={{ duration: 0.3 }}>
        {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
      </motion.div>
    </motion.button>
  )
}