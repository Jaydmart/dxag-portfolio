import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "./context/ThemeContext"
import { BackgroundProvider } from "./context/BackgroundContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "David Avila's Portfolio",
  description: "Welcome to my professional portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeProvider>
          <BackgroundProvider>{children}</BackgroundProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}