"use client"

import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Andrew",
    car: "BMW X5",
    text: "Wash right at home — fantastic! Car looks brand new.",
    rating: 5,
    image: "/clean-bmw-x5-after-wash.jpg",
  },
  {
    name: "Sarah",
    car: "Tesla Model 3",
    text: "The convenience is unbeatable. Professional service every time.",
    rating: 5,
    image: "/shiny-tesla-model-3.jpg",
  },
  {
    name: "Michael",
    car: "Mercedes C-Class",
    text: "Best car wash I've ever had. The ceramic coating is incredible!",
    rating: 5,
    image: "/glossy-mercedes-c-class.jpg",
  },
]

export function TestimonialsSection() {
  return (
    <section className="relative py-24 px-4 z-10 bg-card/30">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-balance">
          Customer <span className="text-gradient">Reviews</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group overflow-hidden bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.car}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-lg mb-4 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.car}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
