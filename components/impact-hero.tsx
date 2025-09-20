"use client"

import { useState, useEffect } from "react"
import { TrendingUp, Award, Users, Globe } from "lucide-react"

export function ImpactHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card/30 to-background">
        <div className="absolute inset-0 opacity-20">
          {/* Impact visualization lines */}
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse"></div>
          <div className="absolute top-1/2 right-0 w-full h-px bg-gradient-to-l from-transparent via-secondary to-transparent animate-pulse"></div>
          <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse"></div>

          {/* Growth indicators */}
          <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-secondary rounded-full animate-ping"></div>
          <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/3 left-2/3 w-2.5 h-2.5 bg-secondary rounded-full animate-ping"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Header */}
          <div className="mb-12">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center glow-effect">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                  <Award className="w-3 h-3 text-secondary-foreground" />
                </div>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Measurable <span className="text-primary neon-text">Impact</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover the transformative impact of Traya's indigenous technology on Indian Railways through
              quantifiable improvements in efficiency, safety, and passenger satisfaction.
            </p>
          </div>

          {/* Impact Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-primary/20 hover:border-secondary/40 transition-all duration-300 group hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Performance Boost</h3>
              <p className="text-sm text-muted-foreground text-center">
                Significant improvements in operational efficiency and cost reduction
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-primary/20 hover:border-secondary/40 transition-all duration-300 group hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Passenger Satisfaction</h3>
              <p className="text-sm text-muted-foreground text-center">
                Enhanced travel experience with improved punctuality and safety
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-primary/20 hover:border-secondary/40 transition-all duration-300 group hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">National Impact</h3>
              <p className="text-sm text-muted-foreground text-center">
                Contributing to India's infrastructure development and economic growth
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
