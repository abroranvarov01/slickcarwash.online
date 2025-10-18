"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles, HomeIcon, Award, Shield, Wrench } from "lucide-react"

const services = [
  {
    icon: Sparkles,
    title: "Express Exterior",
    description: "Quick exterior wash for busy schedules",
    features: ["Body wash", "Wheel cleaning", "Quick dry"],
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: HomeIcon,
    title: "Full Interior",
    description: "Complete interior and trunk cleaning",
    features: ["Vacuum", "Dashboard clean", "Trunk detail"],
    gradient: "from-secondary/20 to-secondary/5",
  },
  {
    icon: Award,
    title: "Premium Detailing",
    description: "Full wash plus polishing",
    features: ["Complete wash", "Polish", "Wax protection"],
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Shield,
    title: "Ceramic Coating",
    description: "Nano-ceramic protection",
    features: ["Long-lasting", "Scratch resistant", "Hydrophobic"],
    gradient: "from-secondary/20 to-secondary/5",
  },
  {
    icon: Wrench,
    title: "Engine Cleaning",
    description: "Under-hood detailing",
    features: ["Degreasing", "Component clean", "Protection spray"],
    gradient: "from-primary/20 to-primary/5",
  },
]

export function ServicesSection() {
  return (
    <section className="relative py-24 px-4 z-10">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-balance">
          Our <span className="text-gradient">Services</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group relative p-8 bg-gradient-to-br ${service.gradient} backdrop-blur-sm border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 cursor-pointer overflow-hidden`}
            >
              <div className="absolute inset-0 glossy-shine opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <service.icon className="w-12 h-12 mb-4 text-primary group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
