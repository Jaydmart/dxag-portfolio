"use client"

import Introduction from "./components/Introduction"
import Projects from "./components/Projects"
/*
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Blog from "./components/Blog"
*/
import ThemeToggle from "./components/ThemeToggle"
import BackgroundToggle from "./components/BackgroundToggle" 
import { useBackground } from "./context/BackgroundContext"
import { motion } from "framer-motion"

export default function Home() {
  const { backgroundStyle } = useBackground()

  const getBackgroundClass = () => {
    switch (backgroundStyle) {
      case "gradient":
        return "bg-gradiente-to-r from-blue-400 to-purple-500 dark:from-blue-600 dark:to-purple-700"
      case "pattern":
        return "bg-gray-100 dark:bg-gray-900 bg-opacity-50 dark:bg-opacity-50 backdrop-filter backdrop-blur-lg"
      default:
        return "bg-gray-100 dark:bg-gray-900"
    }
  }

  return (
    <motion.main
      className={`min-h-screen ${getBackgroundClass()}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4x1 mx-auto px-4 py-8">
        <div className="flex justify-end mb-8 space-x-4">
          <BackgroundToggle />
          <ThemeToggle />
        </div>
        <Introduction />
        <Projects />
        {/*<Skills />
        <Blog />
        <Contact />*/}
      </div>
    </motion.main>
  )
}