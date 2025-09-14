"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, Target, Shield, Zap, Gauge, Cpu, Activity, Settings, ArrowRight } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI Precision Technology",
    description:
      "Advanced machine learning algorithms that provide 25cm precision accuracy in railway operations, enabling predictive maintenance and real-time optimization.",
    benefits: ["25cm accuracy", "Predictive analytics", "Real-time monitoring"],
    color: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
    category: "AI & Analytics",
  },
  {
    icon: Target,
    title: "Indigenous Design Excellence",
    description:
      "Built specifically for Indian railway conditions with deep understanding of local challenges, climate variations, and operational requirements.",
    benefits: ["India-specific solutions", "Climate resilient", "Local expertise"],
    color: "from-secondary/20 to-secondary/5",
    iconColor: "text-secondary",
    category: "Design & Engineering",
  },
  {
    icon: Shield,
    title: "Unmatched Reliability",
    description:
      "99.8% uptime guarantee with robust systems designed to handle the demanding Indian railway environment and extreme operational conditions.",
    benefits: ["99.8% uptime", "Fault tolerance", "24/7 monitoring"],
    color: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
    category: "Reliability & Safety",
  },
  {
    icon: Zap,
    title: "Superior Efficiency",
    description:
      "Optimized performance algorithms that reduce operational costs by 30% while improving service quality and passenger satisfaction.",
    benefits: ["30% cost reduction", "Energy efficient", "Performance optimized"],
    color: "from-secondary/20 to-secondary/5",
    iconColor: "text-secondary",
    category: "Performance",
  },
  {
    icon: Gauge,
    title: "Real-time Monitoring",
    description:
      "Comprehensive monitoring systems that provide instant insights into track conditions, train performance, and infrastructure health.",
    benefits: ["Live tracking", "Instant alerts", "Performance metrics"],
    color: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
    category: "Monitoring",
  },
  {
    icon: Cpu,
    title: "Smart Infrastructure",
    description:
      "IoT-enabled railway infrastructure that communicates seamlessly with control systems for optimal resource allocation and maintenance scheduling.",
    benefits: ["IoT integration", "Smart sensors", "Automated systems"],
    color: "from-secondary/20 to-secondary/5",
    iconColor: "text-secondary",
    category: "Infrastructure",
  },
  {
    icon: Activity,
    title: "Predictive Maintenance",
    description:
      "AI-powered maintenance scheduling that prevents failures before they occur, reducing downtime and extending equipment lifespan.",
    benefits: ["Failure prevention", "Cost savings", "Extended lifespan"],
    color: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
    category: "Maintenance",
  },
  {
    icon: Settings,
    title: "Adaptive Systems",
    description:
      "Self-learning systems that continuously improve performance based on operational data and changing conditions across the network.",
    benefits: ["Self-learning", "Continuous improvement", "Adaptive algorithms"],
    color: "from-secondary/20 to-secondary/5",
    iconColor: "text-secondary",
    category: "Automation",
  },
]

export function FeaturesGrid() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([])
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
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
            Revolutionary <span className="text-secondary neon-text">Features</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the cutting-edge technologies that make Traya the future of Indian railway innovation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`transition-all duration-700 ${
                  visibleCards[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Card
                  className="h-full bg-card/50 backdrop-blur-sm border-primary/20 hover:border-secondary/40 transition-all duration-500 group cursor-pointer overflow-hidden"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <CardContent className="p-8 relative">
                    {/* Background Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    ></div>

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Category Badge */}
                      <div className="inline-block px-3 py-1 bg-background/50 rounded-full text-xs text-muted-foreground mb-4">
                        {feature.category}
                      </div>

                      {/* Icon */}
                      <div className="mb-6">
                        <div
                          className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon className={`w-8 h-8 ${feature.iconColor}`} />
                        </div>
                      </div>

                      {/* Title and Description */}
                      <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-secondary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">{feature.description}</p>

                      {/* Benefits */}
                      <div className="space-y-2 mb-6">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                            <span className="text-sm text-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>

                      {/* Hover Action */}
                      <div
                        className={`transition-all duration-300 ${
                          hoveredCard === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                        }`}
                      >
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-secondary hover:text-secondary-foreground hover:bg-secondary/20 group/btn"
                        >
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </div>
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
