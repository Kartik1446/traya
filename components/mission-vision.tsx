"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Eye, Target, Heart } from "lucide-react"

export function MissionVision() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-card/20">
      <div className="max-w-7xl mx-auto">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-secondary">Purpose</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Driven by innovation, guided by precision, and committed to transforming Indian railways.
            </p>
          </div>

          {/* Mission, Vision, Values Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Mission */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-secondary/40 transition-all duration-300 group hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To revolutionize Indian railways through indigenous precision technology, AI-driven solutions, and
                  sustainable innovation that enhances safety, efficiency, and reliability across the entire railway
                  network.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-secondary/40 transition-all duration-300 group hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Eye className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become the leading indigenous technology provider for Indian railways, setting global standards for
                  precision, innovation, and sustainable transportation solutions that connect and empower communities.
                </p>
              </CardContent>
            </Card>

            {/* Values */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-secondary/40 transition-all duration-300 group hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Values</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Innovation, Precision, Sustainability, and Indigenous Excellence. We believe in creating technology
                  that serves India's unique needs while maintaining the highest standards of quality and reliability.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
