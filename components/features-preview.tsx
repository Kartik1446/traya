"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, Gauge, Shield, Zap, ArrowRight } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Brain,
    title: "AI Precision",
    description: "Advanced AI algorithms for precise railway operations and predictive maintenance.",
    color: "text-primary",
  },
  {
    icon: Gauge,
    title: "Performance",
    description: "Optimized systems delivering 100% repeatability and maximum efficiency.",
    color: "text-secondary",
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "Indigenous technology built for the demanding Indian railway environment.",
    color: "text-primary",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Cutting-edge solutions that revolutionize traditional railway systems.",
    color: "text-secondary",
  },
]

export function FeaturesPreview() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([])
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => {
              const newVisible = [...prev]
              newVisible[index] = true
              return newVisible
            })
          }
        },
        { threshold: 0.1 },
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Revolutionizing <span className="text-primary">Railway Technology</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the future of Indian railways with our indigenous precision technology and AI-driven innovations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`transition-all duration-700 ${
                  visibleCards[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-primary/20 hover:border-secondary/40 transition-all duration-300 group hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className={`w-6 h-6 ${feature.color}`} />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link href="/innovation">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground glow-effect group"
            >
              Discover All Features
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
