"use client"

import { Card } from "@/components/ui/card"
import { Phone, MessageCircle, Mail, Instagram, Youtube, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactMethods = [
  { icon: MapPin, label: "Address", value: "2095 Sampson Street, Palmdale, CA 93550", color: "text-primary" },
  { icon: Phone, label: "Phone", value: "+1 (303) 553-9384", color: "text-primary" },
  { icon: MessageCircle, label: "Telegram", value: "@slickcarwash", color: "text-secondary" },
  { icon: Mail, label: "Email", value: "hello@slickcarwash.online", color: "text-primary" },
]

const socialLinks = [
  { icon: Instagram, label: "Instagram", color: "text-primary" },
  { icon: Youtube, label: "YouTube", color: "text-secondary" },
  { icon: MessageCircle, label: "TikTok", color: "text-primary" },
]

export function ContactSection() {
  return (
    <section className="relative py-24 px-4 z-10">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-balance">
          Get In <span className="text-gradient">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <Card className="p-8 bg-card/80 backdrop-blur-sm border-2 border-border">
            <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center ${method.color}`}
                  >
                    <method.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{method.label}</p>
                    <p className="font-semibold">{method.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <h4 className="text-lg font-bold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    size="icon"
                    variant="outline"
                    className={`border-2 hover:scale-110 transition-transform ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </Button>
                ))}
              </div>
            </div>
          </Card>

          {/* Service Area Map */}
          <Card className="p-8 bg-card/80 backdrop-blur-sm border-2 border-border">
            <h3 className="text-2xl font-bold mb-6">Service Area</h3>
            <div className="aspect-square rounded-lg bg-muted/20 border-2 border-primary/30 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-lg font-semibold">Interactive Map</p>
                <p className="text-sm text-muted-foreground mt-2">We serve the entire metro area</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
