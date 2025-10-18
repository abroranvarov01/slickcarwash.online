"use client"

import { Monitor, Truck, Sparkles } from "lucide-react"

const steps = [
  {
    icon: Monitor,
    title: "You Book Online",
    description: "Choose your service and schedule a time that works for you",
    emoji: "💻",
  },
  {
    icon: Truck,
    title: "We Come to You",
    description: "Our mobile team arrives at your location with all equipment",
    emoji: "🚐",
  },
  {
    icon: Sparkles,
    title: "Your Car Shines",
    description: "Sit back and relax while we make your car look brand new",
    emoji: "🌟",
  },
]

export function HowItWorksSection() {
  return (
    <section className="relative py-24 px-4 z-10">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-balance">
          How It <span className="text-gradient">Works</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center group">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary to-secondary" />
              )}

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border-2 border-primary/50">
                  <step.icon className="w-16 h-16 text-primary" />
                </div>
                <div className="text-5xl mb-4">{step.emoji}</div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed max-w-xs">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
