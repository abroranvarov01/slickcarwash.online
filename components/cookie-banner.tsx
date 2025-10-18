"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasAccepted = localStorage.getItem("cookies-accepted")
    if (!hasAccepted) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookies-accepted", "true")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 animate-in slide-in-from-bottom-5">
      <div className="bg-card/95 backdrop-blur-sm border-2 border-primary/50 rounded-lg p-6 shadow-2xl shadow-primary/20">
        <button
          onClick={acceptCookies}
          className="absolute top-2 right-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <p className="text-sm leading-relaxed mb-4 pr-6">
          We use cookies to make our site work as cleanly as your cars 🍪🚗
        </p>

        <Button
          onClick={acceptCookies}
          className="w-full bg-primary hover:bg-accent text-primary-foreground font-bold shadow-lg shadow-primary/50"
        >
          Accept 💧
        </Button>
      </div>
    </div>
  )
}
