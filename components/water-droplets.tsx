"use client"

import { useEffect, useState } from "react"

export function WaterDroplets() {
  const [droplets, setDroplets] = useState<Array<{ id: number; left: string; delay: string; duration: string }>>([])

  useEffect(() => {
    const drops = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${8 + Math.random() * 4}s`,
    }))
    setDroplets(drops)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {droplets.map((drop) => (
        <div
          key={drop.id}
          className="absolute w-1 h-3 bg-primary/20 rounded-full water-droplet"
          style={{
            left: drop.left,
            animationDelay: drop.delay,
            animationDuration: drop.duration,
          }}
        />
      ))}
    </div>
  )
}
