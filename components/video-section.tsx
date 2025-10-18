"use client"

import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function VideoSection() {
  return (
    <section className="relative py-24 px-4 z-10 bg-card/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-balance">
          See Us <span className="text-gradient">In Action</span>
        </h2>

        <div className="relative aspect-video rounded-2xl overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20 group cursor-pointer">
          <img src="/car-wash-process-water-droplets.jpg" alt="Video preview" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors flex items-center justify-center">
            
          </div>
        </div>

        
      </div>
    </section>
  )
}
