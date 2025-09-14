"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cloud, Sun, CloudRain, Wind, Thermometer, Droplets, Eye, AlertTriangle } from "lucide-react"

interface WeatherData {
  location: string
  route: string
  temperature: number
  humidity: number
  windSpeed: number
  visibility: number
  condition: "sunny" | "cloudy" | "rainy" | "stormy"
  impact: "none" | "low" | "medium" | "high"
  recommendation: string
}

export default function WeatherIntegration() {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([
    {
      location: "Delhi",
      route: "Delhi-Mumbai",
      temperature: 28,
      humidity: 65,
      windSpeed: 12,
      visibility: 8.5,
      condition: "cloudy",
      impact: "low",
      recommendation: "Normal operations, monitor visibility",
    },
    {
      location: "Mumbai",
      route: "Mumbai-Pune",
      temperature: 32,
      humidity: 78,
      windSpeed: 8,
      visibility: 6.2,
      condition: "rainy",
      impact: "medium",
      recommendation: "Reduce speed by 15%, increase braking distance",
    },
    {
      location: "Chennai",
      route: "Chennai-Bangalore",
      temperature: 35,
      humidity: 45,
      windSpeed: 15,
      visibility: 9.8,
      condition: "sunny",
      impact: "none",
      recommendation: "Optimal conditions for high-speed operations",
    },
    {
      location: "Kolkata",
      route: "Kolkata-Bhubaneswar",
      temperature: 26,
      humidity: 85,
      windSpeed: 22,
      visibility: 4.1,
      condition: "stormy",
      impact: "high",
      recommendation: "Consider route delays, activate safety protocols",
    },
  ])

  useEffect(() => {
    // Simulate weather updates
    const interval = setInterval(() => {
      setWeatherData((prev) =>
        prev.map((data) => ({
          ...data,
          temperature: Math.max(20, Math.min(40, data.temperature + (Math.random() - 0.5) * 4)),
          humidity: Math.max(30, Math.min(95, data.humidity + (Math.random() - 0.5) * 10)),
          windSpeed: Math.max(0, Math.min(30, data.windSpeed + (Math.random() - 0.5) * 6)),
          visibility: Math.max(1, Math.min(10, data.visibility + (Math.random() - 0.5) * 2)),
        })),
      )
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case "sunny":
        return <Sun className="w-5 h-5 text-yellow-500" />
      case "cloudy":
        return <Cloud className="w-5 h-5 text-gray-400" />
      case "rainy":
        return <CloudRain className="w-5 h-5 text-blue-400" />
      case "stormy":
        return <Wind className="w-5 h-5 text-red-400" />
      default:
        return <Sun className="w-5 h-5" />
    }
  }

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "none":
        return "text-neon-green border-neon-green/30 bg-neon-green/10"
      case "low":
        return "text-yellow-400 border-yellow-400/30 bg-yellow-400/10"
      case "medium":
        return "text-orange-500 border-orange-500/30 bg-orange-500/10"
      case "high":
        return "text-red-500 border-red-500/30 bg-red-500/10"
      default:
        return "text-gray-400 border-gray-400/30 bg-gray-400/10"
    }
  }

  return (
    <div className="space-y-6">
      <Card className="bg-dark-800/50 border-neon-blue/30">
        <div className="p-6">
          <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
            <Cloud className="w-5 h-5 text-neon-blue" />
            Weather-Integrated Route Intelligence
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {weatherData.map((data, index) => (
              <Card key={index} className="bg-dark-900/50 border-neon-blue/20">
                <div className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-white font-medium">{data.location}</h4>
                      <p className="text-gray-400 text-sm">{data.route}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {getWeatherIcon(data.condition)}
                      <Badge className={`text-xs ${getImpactColor(data.impact)}`}>{data.impact} impact</Badge>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Thermometer className="w-4 h-4 text-orange-400" />
                      <span className="text-white text-sm">{data.temperature}°C</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Droplets className="w-4 h-4 text-blue-400" />
                      <span className="text-white text-sm">{data.humidity}%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Wind className="w-4 h-4 text-gray-400" />
                      <span className="text-white text-sm">{data.windSpeed} km/h</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4 text-purple-400" />
                      <span className="text-white text-sm">{data.visibility} km</span>
                    </div>
                  </div>

                  <div className="p-3 bg-dark-800/50 rounded-lg">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-neon-blue mt-0.5" />
                      <p className="text-gray-300 text-sm">{data.recommendation}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Card>
    </div>
  )
}
