"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Train, Zap, Target } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card">
        <div className="absolute inset-0 opacity-20">
          {/* Railway track lines animation */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent animate-pulse mt-4"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse mt-8"></div>

          {/* Moving dots animation */}
          <div className="absolute top-1/2 left-0 w-2 h-2 bg-secondary rounded-full animate-ping"></div>
          <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-primary rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-secondary rounded-full animate-ping"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Logo Animation */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center glow-effect">
                <Train className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                <Zap className="w-3 h-3 text-secondary-foreground" />
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            <span className="neon-text">TRAYA</span>
            <br />
            <span className="text-2xl md:text-4xl lg:text-5xl text-muted-foreground">Triad based Railway Automation & Yatra Assistant</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Indigenous railway innovation project focused on improving Indian railways with
            <span className="text-secondary font-semibold"> precision technology</span>,
            <span className="text-primary font-semibold"> AI-driven solutions</span>, and
            <span className="text-secondary font-semibold"> futuristic design</span>.
          </p>

          {/* Feature Highlights */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20">
              <Target className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground">25cm Precision</span>
            </div>
            <div className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-secondary/20">
              <Zap className="w-4 h-4 text-secondary" />
              <span className="text-sm text-foreground">AI-Powered</span>
            </div>
            <div className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20">
              <Train className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground">Indigenous Tech</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/innovation">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-effect group">
                Explore Innovation
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        
      </div>
    </section>
  )
}
