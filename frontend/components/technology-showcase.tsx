"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Database, Cloud, Smartphone, ArrowRight } from "lucide-react"

const technologies = [
  {
    icon: Code,
    title: "Advanced Algorithms",
    description: "Machine learning models trained on millions of data points from Indian railway operations.",
    tech: ["TensorFlow", "PyTorch", "Scikit-learn"],
    color: "text-primary",
  },
  {
    icon: Database,
    title: "Big Data Analytics",
    description: "Real-time processing of massive datasets for instant insights and decision making.",
    tech: ["Apache Spark", "Hadoop", "MongoDB"],
    color: "text-secondary",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Scalable cloud-native architecture ensuring 99.9% availability and global accessibility.",
    tech: ["AWS", "Kubernetes", "Docker"],
    color: "text-primary",
  },
  {
    icon: Smartphone,
    title: "Mobile Integration",
    description: "Seamless mobile applications for real-time monitoring and control from anywhere.",
    tech: ["React Native", "Flutter", "Progressive Web Apps"],
    color: "text-secondary",
  },
]

export function TechnologyShowcase() {
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
              Technology <span className="text-primary neon-text">Stack</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built on cutting-edge technologies and frameworks that ensure scalability, reliability, and performance.
            </p>
          </div>

          {/* Technology Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {technologies.map((tech, index) => {
              const Icon = tech.icon
              return (
                <Card
                  key={tech.title}
                  className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-secondary/40 transition-all duration-300 group hover:scale-105"
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className={`w-8 h-8 ${tech.color}`} />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">{tech.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{tech.description}</p>

                    {/* Tech Stack */}
                    <div className="space-y-1">
                      {tech.tech.map((item, techIndex) => (
                        <div
                          key={techIndex}
                          className="text-xs px-2 py-1 bg-background/50 rounded-full text-foreground"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Transform Your Railway Operations?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join the revolution in railway technology with Traya's indigenous solutions designed for India's unique
              challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-effect group">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
