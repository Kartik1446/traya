"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Thermometer, Zap, Gauge, Wifi, AlertTriangle, CheckCircle, Radio, Battery } from "lucide-react"

interface IoTSensor {
  id: string
  name: string
  type: "temperature" | "vibration" | "power" | "signal" | "track"
  location: string
  value: number
  unit: string
  status: "normal" | "warning" | "critical"
  lastUpdate: string
  icon: React.ReactNode
}

export default function IoTDashboard() {
  const [sensors, setSensors] = useState<IoTSensor[]>([
    {
      id: "temp-001",
      name: "Track Temperature",
      type: "temperature",
      location: "Delhi-Mumbai Route KM 245",
      value: 42.5,
      unit: "°C",
      status: "normal",
      lastUpdate: "2 min ago",
      icon: <Thermometer className="w-4 h-4" />,
    },
    {
      id: "vib-002",
      name: "Rail Vibration",
      type: "vibration",
      location: "Chennai Central Platform 3",
      value: 8.2,
      unit: "Hz",
      status: "warning",
      lastUpdate: "1 min ago",
      icon: <Gauge className="w-4 h-4" />,
    },
    {
      id: "pow-003",
      name: "Power Grid Load",
      type: "power",
      location: "Howrah Junction Substation",
      value: 87.3,
      unit: "%",
      status: "normal",
      lastUpdate: "30 sec ago",
      icon: <Zap className="w-4 h-4" />,
    },
    {
      id: "sig-004",
      name: "Signal Strength",
      type: "signal",
      location: "Bangalore-Mysore Section",
      value: 94.1,
      unit: "%",
      status: "normal",
      lastUpdate: "45 sec ago",
      icon: <Wifi className="w-4 h-4" />,
    },
    {
      id: "trk-005",
      name: "Track Integrity",
      type: "track",
      location: "Mumbai-Pune Express Route",
      value: 98.7,
      unit: "%",
      status: "normal",
      lastUpdate: "3 min ago",
      icon: <Radio className="w-4 h-4" />,
    },
    {
      id: "bat-006",
      name: "Backup Power",
      type: "power",
      location: "Secunderabad Junction",
      value: 23.4,
      unit: "%",
      status: "critical",
      lastUpdate: "1 min ago",
      icon: <Battery className="w-4 h-4" />,
    },
  ])

  const [networkHealth, setNetworkHealth] = useState({
    totalSensors: 1247,
    activeSensors: 1198,
    dataPoints: 2847392,
    uptime: 99.7,
  })

  useEffect(() => {
    // Simulate real-time IoT data updates
    const interval = setInterval(() => {
      setSensors((prev) =>
        prev.map((sensor) => {
          const variation = (Math.random() - 0.5) * 0.2
          let newValue = sensor.value + sensor.value * variation

          // Keep values within realistic ranges
          if (sensor.type === "temperature") newValue = Math.max(20, Math.min(60, newValue))
          if (sensor.type === "vibration") newValue = Math.max(0, Math.min(15, newValue))
          if (sensor.type === "power") newValue = Math.max(0, Math.min(100, newValue))
          if (sensor.type === "signal") newValue = Math.max(70, Math.min(100, newValue))
          if (sensor.type === "track") newValue = Math.max(85, Math.min(100, newValue))

          // Determine status based on value and type
          let status: "normal" | "warning" | "critical" = "normal"
          if (sensor.type === "temperature" && newValue > 50) status = "warning"
          if (sensor.type === "temperature" && newValue > 55) status = "critical"
          if (sensor.type === "vibration" && newValue > 10) status = "warning"
          if (sensor.type === "vibration" && newValue > 12) status = "critical"
          if (sensor.type === "power" && newValue < 30) status = "warning"
          if (sensor.type === "power" && newValue < 20) status = "critical"
          if (sensor.type === "signal" && newValue < 85) status = "warning"
          if (sensor.type === "signal" && newValue < 80) status = "critical"
          if (sensor.type === "track" && newValue < 95) status = "warning"
          if (sensor.type === "track" && newValue < 90) status = "critical"

          return {
            ...sensor,
            value: newValue,
            status,
            lastUpdate: Math.random() > 0.7 ? "Just now" : sensor.lastUpdate,
          }
        }),
      )

      // Update network health
      setNetworkHealth((prev) => ({
        ...prev,
        activeSensors: prev.totalSensors - Math.floor(Math.random() * 10),
        dataPoints: prev.dataPoints + Math.floor(Math.random() * 1000),
        uptime: Math.max(99.0, Math.min(99.9, prev.uptime + (Math.random() - 0.5) * 0.1)),
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "normal":
        return "text-neon-green border-neon-green/30 bg-neon-green/10"
      case "warning":
        return "text-yellow-500 border-yellow-500/30 bg-yellow-500/10"
      case "critical":
        return "text-red-500 border-red-500/30 bg-red-500/10"
      default:
        return "text-gray-400 border-gray-400/30 bg-gray-400/10"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "normal":
        return <CheckCircle className="w-3 h-3" />
      case "warning":
      case "critical":
        return <AlertTriangle className="w-3 h-3" />
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      {/* Network Overview */}
      <Card className="bg-dark-800/50 border-neon-blue/30">
        <div className="p-6">
          <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
            <Radio className="w-5 h-5 text-neon-blue" />
            IoT Network Overview
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-neon-green mb-1">
                {networkHealth.totalSensors.toLocaleString()}
              </div>
              <div className="text-sm text-gray-400">Total Sensors</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-neon-blue mb-1">
                {networkHealth.activeSensors.toLocaleString()}
              </div>
              <div className="text-sm text-gray-400">Active Now</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">
                {(networkHealth.dataPoints / 1000000).toFixed(1)}M
              </div>
              <div className="text-sm text-gray-400">Data Points</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-neon-green mb-1">{networkHealth.uptime.toFixed(1)}%</div>
              <div className="text-sm text-gray-400">Uptime</div>
            </div>
          </div>
        </div>
      </Card>

      {/* Sensor Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sensors.map((sensor) => (
          <Card
            key={sensor.id}
            className="bg-dark-800/50 border-neon-blue/30 hover:border-neon-blue/60 transition-all duration-300"
          >
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="text-neon-blue">{sensor.icon}</div>
                  <h4 className="text-white font-medium text-sm">{sensor.name}</h4>
                </div>
                <Badge className={`text-xs ${getStatusColor(sensor.status)}`}>
                  {getStatusIcon(sensor.status)}
                  {sensor.status}
                </Badge>
              </div>

              <div className="mb-3">
                <div className="text-2xl font-bold text-white mb-1">
                  {sensor.value.toFixed(1)}
                  <span className="text-sm text-gray-400 ml-1">{sensor.unit}</span>
                </div>
                <div className="text-xs text-gray-400">{sensor.location}</div>
              </div>

              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Last Update:</span>
                <span className="text-neon-blue">{sensor.lastUpdate}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Predictive Analytics */}
      <Card className="bg-dark-800/50 border-neon-blue/30">
        <div className="p-6">
          <h3 className="text-white font-semibold mb-6">Predictive Maintenance Alerts</h3>

          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-yellow-500" />
              <div className="flex-1">
                <h4 className="text-white font-medium">Track Maintenance Required</h4>
                <p className="text-gray-400 text-sm">Delhi-Agra section showing increased vibration patterns</p>
              </div>
              <Badge className="text-yellow-500 border-yellow-500/30 bg-yellow-500/10">72 hours</Badge>
            </div>

            <div className="flex items-center gap-4 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-red-500" />
              <div className="flex-1">
                <h4 className="text-white font-medium">Power System Alert</h4>
                <p className="text-gray-400 text-sm">Backup power critically low at Secunderabad Junction</p>
              </div>
              <Badge className="text-red-500 border-red-500/30 bg-red-500/10">Immediate</Badge>
            </div>

            <div className="flex items-center gap-4 p-4 bg-neon-green/10 border border-neon-green/30 rounded-lg">
              <CheckCircle className="w-5 h-5 text-neon-green" />
              <div className="flex-1">
                <h4 className="text-white font-medium">Optimization Complete</h4>
                <p className="text-gray-400 text-sm">Mumbai-Pune route efficiency improved by 12%</p>
              </div>
              <Badge className="text-neon-green border-neon-green/30 bg-neon-green/10">Completed</Badge>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
