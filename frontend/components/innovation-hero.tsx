"use client"

import { useState, useEffect } from "react"
import { Brain, Cpu, Zap, Target } from "lucide-react"

export function InnovationHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card/30 to-background">
        <div className="absolute inset-0 opacity-20">
          {/* Circuit-like patterns */}
          <div className="absolute top-1/4 left-1/4 w-32 h-px bg-gradient-to-r from-primary to-transparent animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-24 h-px bg-gradient-to-l from-secondary to-transparent animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/3 w-40 h-px bg-gradient-to-r from-primary to-transparent animate-pulse"></div>

          {/* Floating tech elements */}
          <div className="absolute top-1/3 left-1/6 w-2 h-2 bg-primary rounded-full animate-ping"></div>
          <div className="absolute top-2/3 right-1/5 w-1.5 h-1.5 bg-secondary rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/3 left-2/3 w-1 h-1 bg-primary rounded-full animate-ping"></div>
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
                  <Brain className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                  <Zap className="w-3 h-3 text-secondary-foreground" />
                </div>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              <span className="text-primary neon-text">Innovation</span> at Scale
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover how Traya's cutting-edge technology revolutionizes Indian railways with AI precision, indigenous
              design, unmatched reliability, and superior efficiency.
            </p>
          </div>

          {/* Innovation Pillars */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="flex flex-col items-center p-4 bg-card/30 backdrop-blur-sm rounded-lg border border-primary/20 hover:border-secondary/40 transition-all duration-300 group hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">AI Precision</h3>
            </div>

            <div className="flex flex-col items-center p-4 bg-card/30 backdrop-blur-sm rounded-lg border border-primary/20 hover:border-secondary/40 transition-all duration-300 group hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">Indigenous Design</h3>
            </div>

            <div className="flex flex-col items-center p-4 bg-card/30 backdrop-blur-sm rounded-lg border border-primary/20 hover:border-secondary/40 transition-all duration-300 group hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Cpu className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">Reliability</h3>
            </div>

            <div className="flex flex-col items-center p-4 bg-card/30 backdrop-blur-sm rounded-lg border border-primary/20 hover:border-secondary/40 transition-all duration-300 group hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">Efficiency</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}