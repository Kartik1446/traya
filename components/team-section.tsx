"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const teamMembers = [
  {
    name: "Satyabrat Sahu",
    designation: "Machine Learning Engineer",
    image: "/satyabrat.jpeg",
    bio: "Developing advanced AI models and precision technologies for railway systems.",
  },
  {
    name: "Archana Gupta",
    designation: "UI/UX Designer",
    image: "/archana.jpg",
    bio: "Designing intuitive interfaces and user experiences for indigenous, sustainable railway technologies.",
  },
  {
    name: "Kartik Bhardwaj",
    designation: "Machine Learning Engineer",
    image: "/kartik.jpg",
    bio: "Specialising in AI-driven analytics and precision measurement solutions for railway infrastructure.",
  },
  {
    name: "Ashutosh Rath",
    designation: "IoT Expert",
    image: "/ashutosh.jpg",
    bio: "Driving seamless integration of IoT technologies across railway networks.",
  },
  {
    name: "Tanish Mitra",
    designation: "IoT Expert",
    image: "/tanish.jpeg",
    bio: "Implementing and optimising IoT solutions to enhance connectivity and performance in railway systems.",
  },
  {
    name: "Mehul Sinha",
    designation: "Project Manager",
    image: "/mehul.jpg",
    bio: "Overseeing projects to ensure precision, reliability and timely delivery across all systems.",
  },
]

export function TeamSection() {
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
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Our <span className="text-primary neon-text">Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The brilliant minds behind Traya's revolutionary railway technology solutions.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              ref={(el) => { cardRefs.current[index] = el; }}
              className={`transition-all duration-700 ${
                visibleCards[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-primary/20 hover:border-secondary/40 transition-all duration-300 group hover:scale-105">
                <CardContent className="p-6 text-center">
                  {/* Profile Image */}
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-secondary/40 transition-colors">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-secondary-foreground rounded-full"></div>
                    </div>
                  </div>

                  {/* Member Info */}
                  <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-secondary font-medium mb-3">{member.designation}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{member.bio}</p>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-3">
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-secondary">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}