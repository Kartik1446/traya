"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Zap, AlertTriangle, CheckCircle } from "lucide-react"
import { google } from "google-maps"

interface RailwayStation {
  id: string
  name: string
  code: string
  lat: number
  lng: number
  status: "active" | "maintenance" | "inactive"
  trains: number
  passengers: number
  aiFeatures: string[]
}

const majorRailwayStations: RailwayStation[] = [
  {
    id: "1",
    name: "New Delhi Railway Station",
    code: "NDLS",
    lat: 28.6431,
    lng: 77.2197,
    status: "active",
    trains: 450,
    passengers: 500000,
    aiFeatures: ["Predictive Maintenance", "Crowd Analytics", "Smart Routing"],
  },
  {
    id: "2",
    name: "Chhatrapati Shivaji Terminus",
    code: "CSMT",
    lat: 18.9401,
    lng: 72.8347,
    status: "active",
    trains: 380,
    passengers: 300000,
    aiFeatures: ["Real-time Tracking", "Safety Monitoring", "Energy Optimization"],
  },
  {
    id: "3",
    name: "Howrah Junction",
    code: "HWH",
    lat: 22.5851,
    lng: 88.3426,
    status: "active",
    trains: 320,
    passengers: 250000,
    aiFeatures: ["Dynamic Scheduling", "Weather Integration", "Passenger Flow"],
  },
  {
    id: "4",
    name: "Chennai Central",
    code: "MAS",
    lat: 13.0827,
    lng: 80.2707,
    status: "maintenance",
    trains: 280,
    passengers: 200000,
    aiFeatures: ["Maintenance Alerts", "Route Optimization", "IoT Sensors"],
  },
  {
    id: "5",
    name: "Bangalore City Junction",
    code: "SBC",
    lat: 12.9716,
    lng: 77.5946,
    status: "active",
    trains: 250,
    passengers: 180000,
    aiFeatures: ["Smart Signaling", "Predictive Analytics", "AR Navigation"],
  },
  {
    id: "6",
    name: "Secunderabad Junction",
    code: "SC",
    lat: 17.4399,
    lng: 78.4983,
    status: "active",
    trains: 220,
    passengers: 150000,
    aiFeatures: ["Voice Commands", "Biometric Access", "Smart Parking"],
  },
]

export default function GoogleMapsRailway() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [map, setMap] = useState<google.maps.Map | null>(null)
  const [selectedStation, setSelectedStation] = useState<RailwayStation | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [realTimeData, setRealTimeData] = useState({
    activeTrains: 2847,
    onTimePerformance: 94.2,
    energySaved: 23.7,
    predictiveAccuracy: 98.5,
  })

  useEffect(() => {
    // Simulate real-time data updates
    const interval = setInterval(() => {
      setRealTimeData((prev) => ({
        activeTrains: prev.activeTrains + Math.floor(Math.random() * 10 - 5),
        onTimePerformance: Math.max(90, Math.min(99, prev.onTimePerformance + (Math.random() - 0.5) * 2)),
        energySaved: Math.max(20, Math.min(30, prev.energySaved + (Math.random() - 0.5) * 1)),
        predictiveAccuracy: Math.max(95, Math.min(99.9, prev.predictiveAccuracy + (Math.random() - 0.5) * 0.5)),
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const initMap = async () => {
      if (!mapRef.current) return

      // Load Google Maps API
      const { Map } = (await google.maps.importLibrary("maps")) as google.maps.MapsLibrary
      const { AdvancedMarkerElement } = (await google.maps.importLibrary("marker")) as google.maps.MarkerLibrary

      const mapInstance = new Map(mapRef.current, {
        center: { lat: 20.5937, lng: 78.9629 }, // Center of India
        zoom: 5,
        mapId: "railway-map",
        styles: [
          {
            featureType: "all",
            elementType: "geometry",
            stylers: [{ color: "#0a0a0a" }],
          },
          {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [{ color: "#ffffff" }],
          },
          {
            featureType: "all",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#000000" }, { lightness: 13 }],
          },
          {
            featureType: "administrative",
            elementType: "geometry.fill",
            stylers: [{ color: "#000000" }],
          },
          {
            featureType: "administrative",
            elementType: "geometry.stroke",
            stylers: [{ color: "#144b53" }, { lightness: 14 }, { weight: 1.4 }],
          },
          {
            featureType: "landscape",
            elementType: "all",
            stylers: [{ color: "#08304b" }],
          },
          {
            featureType: "poi",
            elementType: "geometry",
            stylers: [{ color: "#0c4152" }, { lightness: 5 }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [{ color: "#000000" }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{ color: "#0e4c92" }, { lightness: 25 }],
          },
          {
            featureType: "road.arterial",
            elementType: "geometry.fill",
            stylers: [{ color: "#000000" }],
          },
          {
            featureType: "road.arterial",
            elementType: "geometry.stroke",
            stylers: [{ color: "#0e4c92" }, { lightness: 16 }],
          },
          {
            featureType: "road.local",
            elementType: "geometry",
            stylers: [{ color: "#000000" }],
          },
          {
            featureType: "transit",
            elementType: "all",
            stylers: [{ color: "#1de9b6" }],
          },
          {
            featureType: "water",
            elementType: "all",
            stylers: [{ color: "#021019" }],
          },
        ],
      })

      setMap(mapInstance)

      // Add railway stations as markers
      majorRailwayStations.forEach((station) => {
        const markerElement = document.createElement("div")
        markerElement.className = "railway-marker"
        markerElement.innerHTML = `
          <div class="w-8 h-8 rounded-full border-2 border-neon-blue bg-dark-900 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform ${
            station.status === "active"
              ? "shadow-neon-blue"
              : station.status === "maintenance"
                ? "border-yellow-500 shadow-yellow-500"
                : "border-red-500 shadow-red-500"
          }">
            <div class="w-3 h-3 rounded-full ${
              station.status === "active"
                ? "bg-neon-blue animate-pulse"
                : station.status === "maintenance"
                  ? "bg-yellow-500"
                  : "bg-red-500"
            }"></div>
          </div>
        `

        const marker = new AdvancedMarkerElement({
          map: mapInstance,
          position: { lat: station.lat, lng: station.lng },
          content: markerElement,
          title: station.name,
        })

        markerElement.addEventListener("click", () => {
          setSelectedStation(station)
          mapInstance.panTo({ lat: station.lat, lng: station.lng })
          mapInstance.setZoom(10)
        })
      })

      setIsLoaded(true)
    }

    // Load Google Maps script
    if (!window.google) {
      const script = document.createElement("script")
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&libraries=maps,marker`
      script.async = true
      script.onload = initMap
      document.head.appendChild(script)
    } else {
      initMap()
    }
  }, [])

  return (
    <div className="relative w-full h-full">
      {/* Google Maps Container */}
      <div ref={mapRef} className="w-full h-full rounded-lg overflow-hidden" />

      {/* Loading Overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-dark-900/80 flex items-center justify-center rounded-lg">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-neon-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-white">Loading Railway Network...</p>
          </div>
        </div>
      )}

      {/* Real-time Data Panel */}
      <Card className="absolute top-4 left-4 bg-dark-800/90 border-neon-blue/30 backdrop-blur-sm">
        <div className="p-4 space-y-3">
          <h3 className="text-white font-semibold flex items-center gap-2">
            <Zap className="w-4 h-4 text-neon-blue" />
            Live Network Status
          </h3>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <p className="text-gray-400">Active Trains</p>
              <p className="text-neon-green font-mono">{realTimeData.activeTrains.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-gray-400">On-Time %</p>
              <p className="text-neon-green font-mono">{realTimeData.onTimePerformance.toFixed(1)}%</p>
            </div>
            <div>
              <p className="text-gray-400">Energy Saved</p>
              <p className="text-neon-green font-mono">{realTimeData.energySaved.toFixed(1)}%</p>
            </div>
            <div>
              <p className="text-gray-400">AI Accuracy</p>
              <p className="text-neon-green font-mono">{realTimeData.predictiveAccuracy.toFixed(1)}%</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Station Details Panel */}
      {selectedStation && (
        <Card className="absolute top-4 right-4 w-80 bg-dark-800/90 border-neon-blue/30 backdrop-blur-sm">
          <div className="p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-white font-semibold">{selectedStation.name}</h3>
              <Badge variant={selectedStation.status === "active" ? "default" : "secondary"}>
                {selectedStation.status === "active" && <CheckCircle className="w-3 h-3 mr-1" />}
                {selectedStation.status === "maintenance" && <AlertTriangle className="w-3 h-3 mr-1" />}
                {selectedStation.status}
              </Badge>
            </div>

            <div className="space-y-2 text-sm mb-4">
              <div className="flex justify-between">
                <span className="text-gray-400">Station Code:</span>
                <span className="text-white font-mono">{selectedStation.code}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Daily Trains:</span>
                <span className="text-neon-green">{selectedStation.trains}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Daily Passengers:</span>
                <span className="text-neon-green">{selectedStation.passengers.toLocaleString()}</span>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-white font-medium mb-2 text-sm">AI Features Active</h4>
              <div className="flex flex-wrap gap-1">
                {selectedStation.aiFeatures.map((feature, index) => (
                  <Badge key={index} variant="outline" className="text-xs border-neon-blue/50 text-neon-blue">
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>

            <Button onClick={() => setSelectedStation(null)} className="w-full bg-neon-blue hover:bg-neon-blue/80">
              Close Details
            </Button>
          </div>
        </Card>
      )}

      {/* Legend */}
      <Card className="absolute bottom-4 left-4 bg-dark-800/90 border-neon-blue/30 backdrop-blur-sm">
        <div className="p-3">
          <h4 className="text-white font-medium mb-2 text-sm">Station Status</h4>
          <div className="space-y-1 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-neon-blue animate-pulse"></div>
              <span className="text-gray-300">Active</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <span className="text-gray-300">Maintenance</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <span className="text-gray-300">Inactive</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
