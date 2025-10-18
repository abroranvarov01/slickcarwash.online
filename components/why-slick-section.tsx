"use client"

import { Zap, Home, Droplet, Leaf } from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
  {
    icon: Zap,
    title: "Fast",
    description: "Wash in 30 minutes",
    color: "text-primary",
  },
  {
    icon: Home,
    title: "Convenient",
    description: "We come to you",
    color: "text-secondary",
  },
  {
    icon: Droplet,
    title: "Waterless",
    description: "Dry cleaning technology",
    color: "text-primary",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Safe chemistry",
    color: "text-secondary",
  },
]

export function WhySlickSection() {
  return (
    <section className="relative py-24 px-4 z-10">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-balance">
          Why <span className="text-gradient">SlickCarWash</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group relative p-8 bg-card/50 backdrop-blur-sm border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2 cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 glossy-shine opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <feature.icon
                  className={`w-12 h-12 mb-4 ${feature.color} group-hover:scale-110 transition-transform`}
                />
                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
