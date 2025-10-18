"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const pricingPlans = [
  {
    name: "Express",
    price: "$25",
    description: "Quick body wash",
    features: ["Exterior wash", "Wheel cleaning", "Quick dry", "30 minutes"],
    popular: false,
  },
  {
    name: "Standard",
    price: "$45",
    description: "Body + interior",
    features: ["Complete exterior", "Full interior vacuum", "Dashboard cleaning", "Window cleaning", "60 minutes"],
    popular: true,
  },
  {
    name: "Premium",
    price: "$75",
    description: "Full detail + polish",
    features: [
      "Everything in Standard",
      "Paint polishing",
      "Wax protection",
      "Engine bay clean",
      "Tire shine",
      "90 minutes",
    ],
    popular: false,
  },
  {
    name: "Ceramic",
    price: "$150",
    description: "Nano-ceramic protection",
    features: [
      "Everything in Premium",
      "Ceramic coating",
      "Scratch resistance",
      "Hydrophobic finish",
      "6-month protection",
      "2 hours",
    ],
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section className="relative py-24 px-4 z-10">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-balance">
          <span className="text-gradient">Pricing</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">Choose the perfect package for your car</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative p-8 bg-card/80 backdrop-blur-sm border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                plan.popular
                  ? "border-primary shadow-xl shadow-primary/20"
                  : "border-border hover:border-primary hover:shadow-primary/20"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                
                
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-primary hover:bg-accent text-primary-foreground shadow-lg shadow-primary/50"
                    : "bg-card hover:bg-primary hover:text-primary-foreground border-2 border-primary text-primary"
                }`}
              >
                Book Now
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
