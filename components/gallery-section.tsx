"use client"

import { useState } from "react"

const galleryImages = [
  { src: "/wet-shiny-car-with-water-droplets.jpg", alt: "Glossy car finish" },
  { src: "/car-headlight-reflection-water.jpg", alt: "Headlight detail" },
  { src: "/clean-car-interior-dashboard.jpg", alt: "Interior cleaning" },
  { src: "/car-wheel-rim-shine.jpg", alt: "Wheel detailing" },
  { src: "/water-beading-on-car-paint.jpg", alt: "Water beading" },
  { src: "/car-polish-reflection.jpg", alt: "Mirror finish" },
]

export function GallerySection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="relative py-24 px-4 z-10">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-balance">
          Results <span className="text-gradient">Gallery</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg aspect-[4/3] cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <p className="text-xl font-bold text-gradient">Shine Level: 100% 💎</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
