"use client"

import { useState, useEffect } from "react"
import { Map, Navigation, Zap } from "lucide-react"

export function MapHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card/30 to-background">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse"></div>
          <div className="absolute top-2/3 right-0 w-full h-px bg-gradient-to-l from-transparent via-secondary to-transparent animate-pulse"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Header */}
          <div className="mb-8">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center glow-effect">
                <Map className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Indian <span className="text-primary neon-text">Railways</span> Network
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore the vast network of Indian railways enhanced with Traya's precision technology and AI-driven
              solutions across the subcontinent.
            </p>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-primary/20 hover:border-secondary/40 transition-all duration-300 group hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Navigation className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Real-time Tracking</h3>
              <p className="text-sm text-muted-foreground text-center">
                Live monitoring of railway operations and maintenance
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-primary/20 hover:border-secondary/40 transition-all duration-300 group hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Map className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Network Coverage</h3>
              <p className="text-sm text-muted-foreground text-center">
                Comprehensive mapping of railway infrastructure
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-primary/20 hover:border-secondary/40 transition-all duration-300 group hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">AI Analytics</h3>
              <p className="text-sm text-muted-foreground text-center">Predictive insights for optimal performance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
