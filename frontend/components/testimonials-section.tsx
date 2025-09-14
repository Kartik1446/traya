"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    name: "Dr. Rajesh Agarwal",
    position: "Chief Engineer, Indian Railways",
    content:
      "Traya's precision technology has revolutionized our maintenance operations. The 25cm accuracy and predictive analytics have reduced our operational costs by 30% while improving safety standards.",
    rating: 5,
    image: "/placeholder.svg?key=testimonial1",
  },
  {
    name: "Priya Sharma",
    position: "Station Master, New Delhi",
    content:
      "The real-time monitoring and AI-driven insights have transformed how we manage daily operations. Passenger satisfaction has increased significantly with improved punctuality.",
    rating: 5,
    image: "/placeholder.svg?key=testimonial2",
  },
  {
    name: "Arjun Patel",
    position: "Technical Director, Western Railways",
    content:
      "Indigenous technology that truly understands Indian railway challenges. The reliability and performance improvements are beyond our expectations.",
    rating: 5,
    image: "/placeholder.svg?key=testimonial3",
  },
]

export function TestimonialsSection() {
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
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Railway <span className="text-secondary neon-text">Professionals</span> Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from railway professionals who have experienced the transformative impact of Traya's technology
              firsthand.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.name}
                className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-secondary/40 transition-all duration-300 group hover:scale-105"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="w-8 h-8 text-secondary opacity-50" />
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground leading-relaxed mb-6 italic">"{testimonial.content}"</p>

                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-secondary fill-current" />
                    ))}
                  </div>

                  {/* Author */}
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-xs text-muted-foreground">{testimonial.position}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Transform Your Railway Operations?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join hundreds of railway professionals who have already experienced the benefits of Traya's indigenous
                technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium glow-effect transition-all duration-300 hover:scale-105">
                  Get Started Today
                </button>
                <button className="px-8 py-3 border border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground rounded-lg font-medium transition-all duration-300 hover:scale-105">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
