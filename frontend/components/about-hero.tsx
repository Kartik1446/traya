"use client"

import { useState, useEffect } from "react"
import { Train, Target, Zap } from "lucide-react"

export function AboutHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card/30 to-background">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse"></div>
          <div className="absolute top-3/4 right-0 w-full h-px bg-gradient-to-l from-transparent via-secondary to-transparent animate-pulse"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div
          className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              About <span className="text-primary neon-text">TRAYA</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Pioneering the future of Indian railways through indigenous innovation, precision technology, and
              sustainable solutions.
            </p>
          </div>

          {/* Key Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-primary/20 hover:border-secondary/40 transition-all duration-300 group hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Train className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Indigenous Technology</h3>
              <p className="text-sm text-muted-foreground text-center">
                Built in India, for India's unique railway challenges
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-primary/20 hover:border-secondary/40 transition-all duration-300 group hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Precision Engineering</h3>
              <p className="text-sm text-muted-foreground text-center">25cm accuracy with 100% repeatability</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-primary/20 hover:border-secondary/40 transition-all duration-300 group hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">AI-Driven Solutions</h3>
              <p className="text-sm text-muted-foreground text-center">
                Advanced algorithms for predictive maintenance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
