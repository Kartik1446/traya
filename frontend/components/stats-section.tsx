"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  {
    value: 25,
    suffix: "cm",
    label: "Precision Accuracy",
    description: "Millimeter-level precision in railway operations",
  },
  { value: 100, suffix: "%", label: "Repeatability", description: "Consistent performance across all conditions" },
  { value: 50, suffix: "+", label: "AI Models", description: "Advanced algorithms powering our systems" },
  { value: 1000, suffix: "km", label: "Track Coverage", description: "Railway network enhanced with our technology" },
]

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0))
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)

          // Animate counters
          stats.forEach((stat, index) => {
            let current = 0
            const increment = stat.value / 50 // 50 steps for smooth animation
            const timer = setInterval(() => {
              current += increment
              if (current >= stat.value) {
                current = stat.value
                clearInterval(timer)
              }
              setAnimatedValues((prev) => {
                const newValues = [...prev]
                newValues[index] = Math.floor(current)
                return newValues
              })
            }, 30)
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
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Measurable <span className="text-secondary neon-text">Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our indigenous technology delivers quantifiable improvements to Indian railway infrastructure.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={stat.label}
              className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-secondary/40 transition-all duration-300 group hover:scale-105"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                    {animatedValues[index]}
                    {stat.suffix}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{stat.label}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{stat.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
