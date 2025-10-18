"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, CreditCard, Sparkles } from "lucide-react"

export function SubscriptionSection() {
  return (
    <section className="relative py-24 px-4 z-10 bg-card/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-balance">
            <span className="text-gradient">Monthly Subscription</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">A clean car every month without reminders</p>
        </div>

        <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 via-card to-secondary/10 backdrop-blur-sm border-2 border-primary/50 shadow-2xl shadow-primary/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">SlickPlan</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Get one premium wash every month with automatic scheduling and payment. Never worry about booking again.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Calendar className="w-6 h-6 text-primary" />
                  <span>Automatic monthly scheduling</span>
                </div>
                <div className="flex items-center gap-3">
                  <CreditCard className="w-6 h-6 text-secondary" />
                  <span>Auto-payment (cancel anytime)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-primary" />
                  <span>Priority booking</span>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-accent hover:to-secondary text-primary-foreground font-bold shadow-lg shadow-primary/50 transition-all hover:shadow-xl hover:scale-105"
              >
                Subscribe Now 💦
              </Button>
            </div>

            <div className="text-center">
              
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
