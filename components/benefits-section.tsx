"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, TrendingUp, Users, Shield, Zap } from "lucide-react"

const benefits = [
  {
    icon: TrendingUp,
    title: "Economic Growth",
    description: "Boosting India's economy through improved railway efficiency and reduced operational costs.",
    metrics: ["₹500Cr+ savings annually", "30% cost reduction", "ROI within 18 months"],
    color: "text-primary",
  },
  {
    icon: Users,
    title: "Enhanced Passenger Experience",
    description: "Delivering superior travel experience with improved punctuality, safety, and comfort.",
    metrics: ["95% on-time performance", "85% satisfaction rate", "50% fewer delays"],
    color: "text-secondary",
  },
  {
    icon: Shield,
    title: "Safety & Reliability",
    description: "Ensuring the highest safety standards with predictive maintenance and real-time monitoring.",
    metrics: ["99.8% safety record", "Zero critical failures", "24/7 monitoring"],
    color: "text-primary",
  },
  {
    icon: Zap,
    title: "Environmental Impact",
    description: "Contributing to sustainable transportation with energy-efficient solutions and reduced emissions.",
    metrics: ["40% energy savings", "25% emission reduction", "Carbon neutral by 2030"],
    color: "text-secondary",
  },
]

export function BenefitsSection() {
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Benefits for <span className="text-primary neon-text">Indian Railways</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive improvements across economic, social, and environmental dimensions through Traya's innovative
            solutions.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={benefit.title}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`transition-all duration-700 ${
                  visibleCards[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-primary/20 hover:border-secondary/40 transition-all duration-300 group hover:scale-105">
                  <CardContent className="p-8">
                    {/* Icon and Title */}
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                        <Icon className={`w-6 h-6 ${benefit.color}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                          {benefit.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="space-y-3">
                      {benefit.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                          <span className="text-sm text-foreground">{metric}</span>
                        </div>
                      ))}
                    </div>

                    {/* Learn More Link */}
                    <div className="mt-6 pt-4 border-t border-primary/10">
                      <button className="flex items-center space-x-2 text-sm text-secondary hover:text-secondary-foreground transition-colors group/link">
                        <span>Learn more about this impact</span>
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
