"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Repeat, Clock, TrendingUp, Users, Shield, Zap, Award } from "lucide-react"

const impactStats = [
  {
    icon: Target,
    value: 25,
    suffix: "cm",
    label: "Precision Accuracy",
    description: "Millimeter-level precision in railway operations",
    color: "text-primary",
    bgColor: "from-primary/20 to-primary/5",
  },
  {
    icon: Repeat,
    value: 100,
    suffix: "%",
    label: "Repeatability",
    description: "Consistent performance across all conditions",
    color: "text-secondary",
    bgColor: "from-secondary/20 to-secondary/5",
  },
  {
    icon: Clock,
    value: 95,
    suffix: "%",
    label: "On-Time Performance",
    description: "Improved punctuality with AI optimization",
    color: "text-primary",
    bgColor: "from-primary/20 to-primary/5",
  },
  {
    icon: TrendingUp,
    value: 30,
    suffix: "%",
    label: "Cost Reduction",
    description: "Operational cost savings through efficiency",
    color: "text-secondary",
    bgColor: "from-secondary/20 to-secondary/5",
  },
  {
    icon: Users,
    value: 85,
    suffix: "%",
    label: "Passenger Satisfaction",
    description: "Improved travel experience and comfort",
    color: "text-primary",
    bgColor: "from-primary/20 to-primary/5",
  },
  {
    icon: Shield,
    value: 99.8,
    suffix: "%",
    label: "Safety Record",
    description: "Enhanced safety with predictive systems",
    color: "text-secondary",
    bgColor: "from-secondary/20 to-secondary/5",
  },
  {
    icon: Zap,
    value: 40,
    suffix: "%",
    label: "Energy Efficiency",
    description: "Reduced energy consumption and carbon footprint",
    color: "text-primary",
    bgColor: "from-primary/20 to-primary/5",
  },
  {
    icon: Award,
    value: 1000,
    suffix: "km",
    label: "Network Coverage",
    description: "Railway tracks enhanced with Traya technology",
    color: "text-secondary",
    bgColor: "from-secondary/20 to-secondary/5",
  },
]

export function ImpactCounters() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedValues, setAnimatedValues] = useState(impactStats.map(() => 0))
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)

          // Animate counters with staggered timing
          impactStats.forEach((stat, index) => {
            setTimeout(() => {
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
            }, index * 200) // Stagger animation start
          })
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Impact by the <span className="text-secondary neon-text">Numbers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Quantifiable improvements delivered by Traya's indigenous railway technology across key performance
            indicators.
          </p>
        </div>

        {/* Counters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactStats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card
                key={stat.label}
                className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-secondary/40 transition-all duration-500 group hover:scale-105 overflow-hidden"
              >
                <CardContent className="p-6 text-center relative">
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  ></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-4 flex justify-center">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${stat.bgColor} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className={`w-8 h-8 ${stat.color}`} />
                      </div>
                    </div>

                    {/* Counter */}
                    <div className="mb-4">
                      <div
                        className={`text-3xl md:text-4xl font-bold mb-2 group-hover:text-secondary transition-colors duration-300 ${stat.color}`}
                      >
                        {animatedValues[index]}
                        {stat.suffix}
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{stat.label}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{stat.description}</p>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-background/50 rounded-full h-1 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${stat.bgColor.replace("/20", "").replace("/5", "")} transition-all duration-1000 ease-out`}
                        style={{
                          width: isVisible ? `${Math.min((animatedValues[index] / stat.value) * 100, 100)}%` : "0%",
                          transitionDelay: `${index * 200}ms`,
                        }}
                      ></div>
                    </div>
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
