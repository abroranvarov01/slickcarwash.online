"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Calendar, CreditCard } from "lucide-react"

export function BookingSection() {
  const [step, setStep] = useState(1)

  return (
    <section className="relative py-24 px-4 z-10 bg-card/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-balance">
          <span className="text-gradient">Book Online</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">Schedule your wash in just a few clicks</p>

        <Card className="p-8 bg-card/80 backdrop-blur-sm border-2 border-primary/30">
          <div className="space-y-6">
            {/* Step 1: Address */}
            <div className="space-y-2">
              <Label htmlFor="address" className="text-lg flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Enter Your Address
              </Label>
              <Input
                id="address"
                placeholder="123 Main Street, City, State"
                className="text-lg py-6 border-primary/50 focus:border-primary"
              />
            </div>

            {/* Step 2: Service */}
            <div className="space-y-2">
              <Label htmlFor="service" className="text-lg flex items-center gap-2">
                <Calendar className="w-5 h-5 text-secondary" />
                Choose Service
              </Label>
              <Select>
                <SelectTrigger className="text-lg py-6 border-primary/50 focus:border-primary">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="express">Express Exterior - $25</SelectItem>
                  <SelectItem value="standard">Standard - $45</SelectItem>
                  <SelectItem value="premium">Premium Detailing - $75</SelectItem>
                  <SelectItem value="ceramic">Ceramic Coating - $150</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Step 3: Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              
            </div>

            {/* Submit */}
            <Button
              size="lg"
              className="w-full text-lg py-6 bg-primary hover:bg-accent text-primary-foreground font-bold shadow-lg shadow-primary/50 transition-all hover:shadow-xl hover:shadow-accent/50"
            >
              <CreditCard className="w-5 h-5 mr-2" />
              Confirm & Pay
            </Button>
          </div>

          {/* Mini Van Animation Placeholder */}
          <div className="mt-8 text-center text-sm text-muted-foreground">🚐 Our team will arrive at your location</div>
        </Card>
      </div>
    </section>
  )
}
