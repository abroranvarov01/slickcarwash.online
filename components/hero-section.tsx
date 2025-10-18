"use client"

import { Button } from "@/components/ui/button"
import { Droplet } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background z-10" />
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-40">
          <source src="/water-washing-car-in-slow-motion.jpg" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        {/* Logo */}
        <div className="mb-8 flex items-center justify-center gap-2">
          <h1 className="text-5xl md:text-7xl font-extrabold">
            <span className="text-gradient">Slick</span>
            <span className="text-foreground">CarWash</span>
          </h1>
          <Droplet className="w-8 h-8 md:w-12 md:h-12 text-primary animate-bounce" />
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-balance leading-tight">
          We Wash Your Car
          <br />
          <span className="text-gradient">Wherever You Are</span>
        </h2>

        {/* Subheadline */}
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
          Premium mobile car wash service — we come to your home, office, or parking lot
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="text-lg px-8 py-6 bg-primary hover:bg-accent text-primary-foreground font-bold shadow-lg shadow-primary/50 transition-all hover:shadow-xl hover:shadow-accent/50 hover:scale-105"
          >
            Book a Wash 🚘
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold transition-all hover:scale-105 bg-transparent"
          >
            View Services
          </Button>
        </div>
      </div>
    </section>
  )
}
