"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Train, MapPin, Activity, Shield } from "lucide-react"

const mapStats = [
  {
    icon: Train,
    value: 68000,
    suffix: "km",
    label: "Track Length",
    description: "Total railway network coverage",
    color: "text-primary",
  },
  {
    icon: MapPin,
    value: 7349,
    suffix: "",
    label: "Stations",
    description: "Railway stations across India",
    color: "text-secondary",
  },
  {
    icon: Activity,
    value: 95,
    suffix: "%",
    label: "Uptime",
    description: "Network availability with Traya",
    color: "text-primary",
  },
  {
    icon: Shield,
    value: 99.8,
    suffix: "%",
    label: "Precision",
    description: "Accuracy in operations",
    color: "text-secondary",
  },
]

export function MapStats() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedValues, setAnimatedValues] = useState(mapStats.map(() => 0))
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)

          // Animate counters
          mapStats.forEach((stat, index) => {
            let current = 0
            const increment = stat.value / 60 // 60 steps for smooth animation
            const timer = setInterval(() => {
              current += increment
              if (current >= stat.value) {
                current = stat.value
                clearInterval(timer)
              }
              setAnimatedValues((prev) => {
                const newValues = [...prev]
                newValues[index] = stat.suffix === "%" ? Number(current.toFixed(1)) : Math.floor(current)
                return newValues
              })
            }, 25)
          })
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-card/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Network <span className="text-primary neon-text">Statistics</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-time insights into India's railway network enhanced by Traya's precision technology.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mapStats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card
                key={stat.label}
                className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-secondary/40 transition-all duration-300 group hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className={`w-8 h-8 ${stat.color}`} />
                    </div>
                  </div>
                  <div className="mb-4">
                    <div
                      className={`text-3xl md:text-4xl font-bold mb-2 group-hover:text-secondary transition-colors ${stat.color}`}
                    >
                      {animatedValues[index]}
                      {stat.suffix}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{stat.label}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{stat.description}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
