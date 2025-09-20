"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Train, Activity, AlertCircle } from "lucide-react"

// Mock railway data for demonstration
const railwayStations = [
  { name: "New Delhi", lat: 28.6139, lng: 77.209, status: "active", type: "major" },
  { name: "Mumbai Central", lat: 19.076, lng: 72.8777, status: "active", type: "major" },
  { name: "Chennai Central", lat: 13.0827, lng: 80.2707, status: "active", type: "major" },
  { name: "Kolkata", lat: 22.5726, lng: 88.3639, status: "maintenance", type: "major" },
  { name: "Bangalore", lat: 12.9716, lng: 77.5946, status: "active", type: "major" },
  { name: "Hyderabad", lat: 17.385, lng: 78.4867, status: "active", type: "major" },
  { name: "Pune", lat: 18.5204, lng: 73.8567, status: "active", type: "minor" },
  { name: "Ahmedabad", lat: 23.0225, lng: 72.5714, status: "active", type: "minor" },
]

export function InteractiveMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [selectedStation, setSelectedStation] = useState<(typeof railwayStations)[0] | null>(null)
  const [mapLoaded, setMapLoaded] = useState(false)

  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => {
      setMapLoaded(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "text-secondary"
      case "maintenance":
        return "text-yellow-500"
      case "inactive":
        return "text-destructive"
      default:
        return "text-muted-foreground"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <Activity className="w-4 h-4" />
      case "maintenance":
        return <AlertCircle className="w-4 h-4" />
      default:
        return <MapPin className="w-4 h-4" />
    }
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Interactive <span className="text-secondary neon-text">Railway Map</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore India's railway network with real-time status updates and Traya's precision monitoring.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Container */}
          <div className="lg:col-span-2">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 overflow-hidden">
              <CardContent className="p-0">
                <div
                  ref={mapRef}
                  className="relative h-96 lg:h-[500px] bg-gradient-to-br from-card via-background to-card flex items-center justify-center"
                >
                  {!mapLoaded ? (
                    <div className="flex flex-col items-center space-y-4">
                      <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                      <p className="text-muted-foreground">Loading Railway Network...</p>
                    </div>
                  ) : (
                    <div className="relative w-full h-full">
                      {/* Simulated Map Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-card/50 to-background/50">
                        <div className="absolute inset-0 opacity-20">
                          {/* Railway lines simulation */}
                          <svg className="w-full h-full" viewBox="0 0 400 300">
                            <path
                              d="M50 150 Q200 100 350 150"
                              stroke="#0e4c92"
                              strokeWidth="2"
                              fill="none"
                              opacity="0.6"
                            />
                            <path
                              d="M100 50 Q200 150 300 250"
                              stroke="#1de9b6"
                              strokeWidth="2"
                              fill="none"
                              opacity="0.6"
                            />
                            <path
                              d="M50 100 Q150 200 350 200"
                              stroke="#0e4c92"
                              strokeWidth="2"
                              fill="none"
                              opacity="0.4"
                            />
                            <path
                              d="M100 200 Q200 100 350 100"
                              stroke="#1de9b6"
                              strokeWidth="2"
                              fill="none"
                              opacity="0.4"
                            />
                          </svg>
                        </div>
                      </div>

                      {/* Station Markers */}
                      {railwayStations.map((station, index) => (
                        <button
                          key={station.name}
                          onClick={() => setSelectedStation(station)}
                          className={`absolute w-4 h-4 rounded-full border-2 transition-all duration-300 hover:scale-150 ${
                            station.status === "active"
                              ? "bg-secondary border-secondary shadow-lg shadow-secondary/50"
                              : station.status === "maintenance"
                                ? "bg-yellow-500 border-yellow-500 shadow-lg shadow-yellow-500/50"
                                : "bg-destructive border-destructive shadow-lg shadow-destructive/50"
                          } ${selectedStation?.name === station.name ? "scale-150 ring-4 ring-white/50" : ""}`}
                          style={{
                            left: `${20 + (index % 4) * 20}%`,
                            top: `${20 + Math.floor(index / 4) * 25}%`,
                          }}
                        />
                      ))}

                      {/* Map Controls */}
                      <div className="absolute top-4 right-4 flex flex-col space-y-2">
                        <Button size="sm" variant="outline" className="bg-card/80 backdrop-blur-sm">
                          <MapPin className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="bg-card/80 backdrop-blur-sm">
                          <Train className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Station Info Panel */}
          <div className="space-y-6">
            {/* Selected Station Info */}
            {selectedStation ? (
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        selectedStation.status === "active" ? "bg-secondary/20" : "bg-yellow-500/20"
                      }`}
                    >
                      <div className={getStatusColor(selectedStation.status)}>
                        {getStatusIcon(selectedStation.status)}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{selectedStation.name}</h3>
                      <p className="text-sm text-muted-foreground capitalize">{selectedStation.type} Station</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Status:</span>
                      <span className={`text-sm font-medium capitalize ${getStatusColor(selectedStation.status)}`}>
                        {selectedStation.status}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Precision:</span>
                      <span className="text-sm font-medium text-secondary">25cm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">AI Monitoring:</span>
                      <span className="text-sm font-medium text-primary">Active</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                <CardContent className="p-6 text-center">
                  <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Click on a station marker to view details</p>
                </CardContent>
              </Card>
            )}

            {/* Station List */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Railway Stations</h3>
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {railwayStations.map((station) => (
                    <button
                      key={station.name}
                      onClick={() => setSelectedStation(station)}
                      className="w-full flex items-center justify-between p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-colors text-left"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={getStatusColor(station.status)}>{getStatusIcon(station.status)}</div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{station.name}</p>
                          <p className="text-xs text-muted-foreground capitalize">{station.type}</p>
                        </div>
                      </div>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          station.status === "active"
                            ? "bg-secondary/20 text-secondary"
                            : "bg-yellow-500/20 text-yellow-500"
                        }`}
                      >
                        {station.status}
                      </span>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
