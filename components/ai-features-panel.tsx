"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Brain, Mic, Eye, Zap, Shield, Thermometer, Activity, MessageSquare, Camera, Headphones } from "lucide-react"

interface AIFeature {
  id: string
  name: string
  icon: React.ReactNode
  status: "active" | "processing" | "standby"
  description: string
  metrics: {
    accuracy: number
    responseTime: string
    usage: number
  }
}

export default function AIFeaturesPanel() {
  const [features, setFeatures] = useState<AIFeature[]>([
    {
      id: "voice-control",
      name: "Voice Command System",
      icon: <Mic className="w-5 h-5" />,
      status: "active",
      description: "Natural language processing for railway operations",
      metrics: { accuracy: 97.8, responseTime: "0.3s", usage: 89 },
    },
    {
      id: "computer-vision",
      name: "Computer Vision Analytics",
      icon: <Eye className="w-5 h-5" />,
      status: "processing",
      description: "Real-time visual monitoring of tracks and stations",
      metrics: { accuracy: 99.2, responseTime: "0.1s", usage: 94 },
    },
    {
      id: "predictive-ai",
      name: "Predictive Maintenance AI",
      icon: <Brain className="w-5 h-5" />,
      status: "active",
      description: "ML-powered equipment failure prediction",
      metrics: { accuracy: 95.6, responseTime: "2.1s", usage: 76 },
    },
    {
      id: "smart-energy",
      name: "Smart Energy Management",
      icon: <Zap className="w-5 h-5" />,
      status: "active",
      description: "AI-optimized power distribution and consumption",
      metrics: { accuracy: 92.4, responseTime: "1.8s", usage: 82 },
    },
    {
      id: "security-ai",
      name: "AI Security Monitoring",
      icon: <Shield className="w-5 h-5" />,
      status: "standby",
      description: "Intelligent threat detection and response",
      metrics: { accuracy: 98.9, responseTime: "0.2s", usage: 67 },
    },
    {
      id: "weather-integration",
      name: "Weather Intelligence",
      icon: <Thermometer className="w-5 h-5" />,
      status: "processing",
      description: "Climate-aware route optimization",
      metrics: { accuracy: 94.1, responseTime: "1.2s", usage: 71 },
    },
  ])

  const [voiceActive, setVoiceActive] = useState(false)
  const [chatbotOpen, setChatbotOpen] = useState(false)

  useEffect(() => {
    // Simulate real-time feature updates
    const interval = setInterval(() => {
      setFeatures((prev) =>
        prev.map((feature) => ({
          ...feature,
          metrics: {
            ...feature.metrics,
            accuracy: Math.max(90, Math.min(99.9, feature.metrics.accuracy + (Math.random() - 0.5) * 2)),
            usage: Math.max(60, Math.min(100, feature.metrics.usage + (Math.random() - 0.5) * 10)),
          },
        })),
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const handleVoiceCommand = () => {
    setVoiceActive(!voiceActive)
    if (!voiceActive) {
      // Simulate voice recognition
      setTimeout(() => {
        setVoiceActive(false)
      }, 3000)
    }
  }

  return (
    <div className="space-y-6">
      {/* AI Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature) => (
          <Card
            key={feature.id}
            className="bg-dark-800/50 border-neon-blue/30 hover:border-neon-blue/60 transition-all duration-300"
          >
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="text-neon-blue">{feature.icon}</div>
                  <h3 className="text-white font-medium text-sm">{feature.name}</h3>
                </div>
                <Badge
                  variant={feature.status === "active" ? "default" : "secondary"}
                  className={`text-xs ${
                    feature.status === "active"
                      ? "bg-neon-green/20 text-neon-green border-neon-green/30"
                      : feature.status === "processing"
                        ? "bg-yellow-500/20 text-yellow-500 border-yellow-500/30"
                        : "bg-gray-500/20 text-gray-400 border-gray-500/30"
                  }`}
                >
                  {feature.status}
                </Badge>
              </div>

              <p className="text-gray-400 text-xs mb-3">{feature.description}</p>

              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Accuracy:</span>
                  <span className="text-neon-green font-mono">{feature.metrics.accuracy.toFixed(1)}%</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Response:</span>
                  <span className="text-neon-blue font-mono">{feature.metrics.responseTime}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Usage:</span>
                  <span className="text-white font-mono">{feature.metrics.usage}%</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Interactive Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Voice Control Interface */}
        <Card className="bg-dark-800/50 border-neon-blue/30">
          <div className="p-6 text-center">
            <h3 className="text-white font-semibold mb-4 flex items-center justify-center gap-2">
              <Headphones className="w-5 h-5 text-neon-blue" />
              Voice Command Center
            </h3>

            <Button
              onClick={handleVoiceCommand}
              className={`w-20 h-20 rounded-full mb-4 transition-all duration-300 ${
                voiceActive ? "bg-red-500 hover:bg-red-600 animate-pulse" : "bg-neon-blue hover:bg-neon-blue/80"
              }`}
            >
              <Mic className={`w-8 h-8 ${voiceActive ? "text-white" : "text-dark-900"}`} />
            </Button>

            <p className="text-gray-400 text-sm">
              {voiceActive ? "Listening... Say your command" : "Click to activate voice control"}
            </p>

            {voiceActive && (
              <div className="mt-4 p-3 bg-dark-900/50 rounded-lg">
                <div className="flex items-center justify-center gap-2 text-neon-green">
                  <Activity className="w-4 h-4 animate-pulse" />
                  <span className="text-sm">Processing voice input...</span>
                </div>
              </div>
            )}
          </div>
        </Card>

        {/* AI Chatbot Interface */}
        <Card className="bg-dark-800/50 border-neon-blue/30">
          <div className="p-6">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-neon-blue" />
              Railway AI Assistant
            </h3>

            <div className="space-y-3 mb-4">
              <div className="bg-dark-900/50 p-3 rounded-lg">
                <p className="text-sm text-gray-300">"What's the status of the Mumbai-Delhi route?"</p>
              </div>
              <div className="bg-neon-blue/10 p-3 rounded-lg border-l-2 border-neon-blue">
                <p className="text-sm text-white">
                  The Mumbai-Delhi route is operating at 98% efficiency with 15 active trains. Expected arrival times
                  are within 2-minute accuracy.
                </p>
              </div>
            </div>

            <Button
              onClick={() => setChatbotOpen(!chatbotOpen)}
              className="w-full bg-neon-green hover:bg-neon-green/80 text-dark-900"
            >
              {chatbotOpen ? "Close Chat" : "Start Conversation"}
            </Button>
          </div>
        </Card>
      </div>

      {/* AR/VR Preview Section */}
      <Card className="bg-dark-800/50 border-neon-blue/30">
        <div className="p-6">
          <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
            <Camera className="w-5 h-5 text-neon-blue" />
            AR/VR Station Navigation (Preview)
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-dark-900/50 p-4 rounded-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-neon-blue to-neon-green rounded-lg mx-auto mb-3 flex items-center justify-center">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-white font-medium mb-2">AR Wayfinding</h4>
              <p className="text-gray-400 text-sm">Real-time navigation overlays for station navigation</p>
            </div>

            <div className="bg-dark-900/50 p-4 rounded-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-neon-blue rounded-lg mx-auto mb-3 flex items-center justify-center">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-white font-medium mb-2">VR Training</h4>
              <p className="text-gray-400 text-sm">Immersive training simulations for railway staff</p>
            </div>

            <div className="bg-dark-900/50 p-4 rounded-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-neon-green to-yellow-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-white font-medium mb-2">Safety Alerts</h4>
              <p className="text-gray-400 text-sm">Augmented reality safety notifications and warnings</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
