import { MapHero } from "@/components/map-hero"
import OpenStreetMapRailway from "@/components/openstreetmap-railway"
import AIFeaturesPanel from "@/components/ai-features-panel"
import IoTDashboard from "@/components/iot-dashboard"
import WeatherIntegration from "@/components/weather-integration"
import { MapStats } from "@/components/map-stats"
import { Footer } from "@/components/footer"

export default function MapPage() {
  return (
    <main className="min-h-screen pt-16">
      <MapHero />

      {/* Live Railway Network Map */}
      <section className="py-20 px-4 bg-dark-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Live Railway Network Map</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Real-time visualization of India's railway network powered by OpenStreetMap and enhanced with Traya's
              AI-driven monitoring systems.
            </p>
          </div>

          <div className="relative z-0 h-[600px] rounded-lg overflow-hidden border border-neon-blue/30"> {/* Reverted height to h-[600px] */}
            <OpenStreetMapRailway />
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="relative z-10 py-20 px-4 bg-dark-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">AI-Powered Railway Intelligence</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Experience cutting-edge AI features that revolutionize railway operations through predictive analytics,
              voice control, and real-time monitoring.
            </p>
          </div>

          <AIFeaturesPanel />
        </div>
      </section>

      {/* IoT Dashboard */}
      <section className="relative z-10 py-20 px-4 bg-dark-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">IoT Sensor Network</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Real-time monitoring of railway infrastructure through thousands of IoT sensors providing predictive
              maintenance and safety insights.
            </p>
          </div>

          <IoTDashboard />
        </div>
      </section>

      {/* Weather Integration */}
      <section className="relative z-10 py-20 px-4 bg-dark-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Weather-Aware Operations</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Advanced weather integration for route optimization, safety protocols, and predictive scheduling based on
              real-time meteorological data.
            </p>
          </div>

          <WeatherIntegration />
        </div>
      </section>

      <MapStats />
      <Footer />
    </main>
  )
}
