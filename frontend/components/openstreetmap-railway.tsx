"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Zap, AlertTriangle, CheckCircle } from "lucide-react"

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
  zone: string
  state: string
}

const allIndianRailwayStations: RailwayStation[] = [
  // Northern Railway Zone
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
    zone: "Northern Railway",
    state: "Delhi",
  },
  {
    id: "2",
    name: "Old Delhi Junction",
    code: "DLI",
    lat: 28.6667,
    lng: 77.2167,
    status: "active",
    trains: 280,
    passengers: 200000,
    aiFeatures: ["Real-time Tracking", "Safety Monitoring"],
    zone: "Northern Railway",
    state: "Delhi",
  },
  {
    id: "3",
    name: "Chandigarh Railway Station",
    code: "CDG",
    lat: 30.7333,
    lng: 76.7794,
    status: "active",
    trains: 120,
    passengers: 80000,
    aiFeatures: ["Smart Signaling", "Energy Optimization"],
    zone: "Northern Railway",
    state: "Chandigarh",
  },
  {
    id: "4",
    name: "Amritsar Junction",
    code: "ASR",
    lat: 31.634,
    lng: 74.8723,
    status: "active",
    trains: 150,
    passengers: 100000,
    aiFeatures: ["Border Security Integration", "Passenger Flow"],
    zone: "Northern Railway",
    state: "Punjab",
  },
  {
    id: "5",
    name: "Jammu Tawi",
    code: "JAT",
    lat: 32.7266,
    lng: 74.857,
    status: "active",
    trains: 80,
    passengers: 60000,
    aiFeatures: ["Weather Integration", "Security Monitoring"],
    zone: "Northern Railway",
    state: "Jammu & Kashmir",
  },
  {
    id: "6",
    name: "Ludhiana Junction",
    code: "LDH",
    lat: 30.901,
    lng: 75.8573,
    status: "active",
    trains: 140,
    passengers: 90000,
    aiFeatures: ["Industrial Logistics", "Smart Routing"],
    zone: "Northern Railway",
    state: "Punjab",
  },
  {
    id: "7",
    name: "Ambala Cantonment",
    code: "UMB",
    lat: 30.3752,
    lng: 76.7821,
    status: "active",
    trains: 200,
    passengers: 120000,
    aiFeatures: ["Junction Management", "Traffic Optimization"],
    zone: "Northern Railway",
    state: "Haryana",
  },

  // Western Railway Zone
  {
    id: "8",
    name: "Chhatrapati Shivaji Terminus",
    code: "CSMT",
    lat: 18.9401,
    lng: 72.8347,
    status: "active",
    trains: 380,
    passengers: 300000,
    aiFeatures: ["Real-time Tracking", "Safety Monitoring", "Energy Optimization"],
    zone: "Western Railway",
    state: "Maharashtra",
  },
  {
    id: "9",
    name: "Mumbai Central",
    code: "BCT",
    lat: 19.0176,
    lng: 72.8562,
    status: "active",
    trains: 320,
    passengers: 250000,
    aiFeatures: ["Suburban Integration", "Crowd Management"],
    zone: "Western Railway",
    state: "Maharashtra",
  },
  {
    id: "10",
    name: "Ahmedabad Junction",
    code: "ADI",
    lat: 23.0225,
    lng: 72.5714,
    status: "active",
    trains: 280,
    passengers: 180000,
    aiFeatures: ["High-Speed Rail Ready", "Smart Ticketing"],
    zone: "Western Railway",
    state: "Gujarat",
  },
  {
    id: "11",
    name: "Surat Railway Station",
    code: "ST",
    lat: 21.1702,
    lng: 72.8311,
    status: "active",
    trains: 150,
    passengers: 120000,
    aiFeatures: ["Diamond Trade Logistics", "Express Connectivity"],
    zone: "Western Railway",
    state: "Gujarat",
  },
  {
    id: "12",
    name: "Pune Junction",
    code: "PUNE",
    lat: 18.5204,
    lng: 73.8567,
    status: "active",
    trains: 200,
    passengers: 150000,
    aiFeatures: ["IT Hub Connectivity", "Metro Integration"],
    zone: "Central Railway",
    state: "Maharashtra",
  },
  {
    id: "13",
    name: "Nagpur Junction",
    code: "NGP",
    lat: 21.1458,
    lng: 79.0882,
    status: "active",
    trains: 180,
    passengers: 130000,
    aiFeatures: ["Central India Hub", "Freight Optimization"],
    zone: "Central Railway",
    state: "Maharashtra",
  },
  {
    id: "14",
    name: "Vadodara Junction",
    code: "BRC",
    lat: 22.3072,
    lng: 73.1812,
    status: "active",
    trains: 160,
    passengers: 110000,
    aiFeatures: ["Industrial Corridor", "Chemical Transport"],
    zone: "Western Railway",
    state: "Gujarat",
  },
  {
    id: "15",
    name: "Rajkot Junction",
    code: "RJT",
    lat: 22.3039,
    lng: 70.8022,
    status: "active",
    trains: 120,
    passengers: 80000,
    aiFeatures: ["Regional Connectivity", "Agricultural Logistics"],
    zone: "Western Railway",
    state: "Gujarat",
  },

  // Eastern Railway Zone
  {
    id: "16",
    name: "Howrah Junction",
    code: "HWH",
    lat: 22.5851,
    lng: 88.3426,
    status: "active",
    trains: 320,
    passengers: 250000,
    aiFeatures: ["Dynamic Scheduling", "Weather Integration", "Passenger Flow"],
    zone: "Eastern Railway",
    state: "West Bengal",
  },
  {
    id: "17",
    name: "Sealdah Station",
    code: "SDAH",
    lat: 22.5726,
    lng: 88.3639,
    status: "active",
    trains: 280,
    passengers: 200000,
    aiFeatures: ["Suburban Network", "Crowd Analytics"],
    zone: "Eastern Railway",
    state: "West Bengal",
  },
  {
    id: "18",
    name: "Kolkata Station",
    code: "KOAA",
    lat: 22.5726,
    lng: 88.3639,
    status: "active",
    trains: 200,
    passengers: 150000,
    aiFeatures: ["Heritage Integration", "Modern Amenities"],
    zone: "Eastern Railway",
    state: "West Bengal",
  },
  {
    id: "19",
    name: "Bhubaneswar Railway Station",
    code: "BBS",
    lat: 20.2961,
    lng: 85.8245,
    status: "active",
    trains: 140,
    passengers: 100000,
    aiFeatures: ["Temple City Connectivity", "Tourist Management"],
    zone: "East Coast Railway",
    state: "Odisha",
  },
  {
    id: "20",
    name: "Cuttack Railway Station",
    code: "CTC",
    lat: 20.4625,
    lng: 85.8828,
    status: "active",
    trains: 100,
    passengers: 70000,
    aiFeatures: ["Silver City Hub", "Cultural Heritage"],
    zone: "East Coast Railway",
    state: "Odisha",
  },
  {
    id: "21",
    name: "Puri Railway Station",
    code: "PURI",
    lat: 19.8135,
    lng: 85.8312,
    status: "active",
    trains: 80,
    passengers: 120000,
    aiFeatures: ["Pilgrimage Management", "Festival Crowd Control"],
    zone: "East Coast Railway",
    state: "Odisha",
  },
  {
    id: "22",
    name: "Durgapur Railway Station",
    code: "DGR",
    lat: 23.5204,
    lng: 87.3119,
    status: "active",
    trains: 90,
    passengers: 60000,
    aiFeatures: ["Steel City Logistics", "Industrial Transport"],
    zone: "Eastern Railway",
    state: "West Bengal",
  },

  // Southern Railway Zone
  {
    id: "23",
    name: "Chennai Central",
    code: "MAS",
    lat: 13.0827,
    lng: 80.2707,
    status: "maintenance",
    trains: 280,
    passengers: 200000,
    aiFeatures: ["Maintenance Alerts", "Route Optimization", "IoT Sensors"],
    zone: "Southern Railway",
    state: "Tamil Nadu",
  },
  {
    id: "24",
    name: "Chennai Egmore",
    code: "MS",
    lat: 13.0732,
    lng: 80.2609,
    status: "active",
    trains: 200,
    passengers: 150000,
    aiFeatures: ["Metro Connectivity", "Suburban Integration"],
    zone: "Southern Railway",
    state: "Tamil Nadu",
  },
  {
    id: "25",
    name: "Bangalore City Junction",
    code: "SBC",
    lat: 12.9716,
    lng: 77.5946,
    status: "active",
    trains: 250,
    passengers: 180000,
    aiFeatures: ["Smart Signaling", "Predictive Analytics", "AR Navigation"],
    zone: "South Western Railway",
    state: "Karnataka",
  },
  {
    id: "26",
    name: "Bangalore Cantonment",
    code: "BNC",
    lat: 12.9698,
    lng: 77.6205,
    status: "active",
    trains: 150,
    passengers: 100000,
    aiFeatures: ["Defense Coordination", "Security Integration"],
    zone: "South Western Railway",
    state: "Karnataka",
  },
  {
    id: "27",
    name: "Coimbatore Junction",
    code: "CBE",
    lat: 11.0168,
    lng: 76.9558,
    status: "active",
    trains: 180,
    passengers: 120000,
    aiFeatures: ["Textile Hub Logistics", "Industrial Connectivity"],
    zone: "Southern Railway",
    state: "Tamil Nadu",
  },
  {
    id: "28",
    name: "Madurai Junction",
    code: "MDU",
    lat: 9.9252,
    lng: 78.1198,
    status: "active",
    trains: 140,
    passengers: 100000,
    aiFeatures: ["Temple City Management", "Cultural Tourism"],
    zone: "Southern Railway",
    state: "Tamil Nadu",
  },
  {
    id: "29",
    name: "Thiruvananthapuram Central",
    code: "TVC",
    lat: 8.4875,
    lng: 76.9525,
    status: "active",
    trains: 120,
    passengers: 90000,
    aiFeatures: ["Capital Connectivity", "International Gateway"],
    zone: "Southern Railway",
    state: "Kerala",
  },
  {
    id: "30",
    name: "Kochi Junction",
    code: "ERS",
    lat: 9.9312,
    lng: 76.2673,
    status: "active",
    trains: 100,
    passengers: 80000,
    aiFeatures: ["Port Connectivity", "Spice Trade Hub"],
    zone: "Southern Railway",
    state: "Kerala",
  },
  {
    id: "31",
    name: "Mysore Junction",
    code: "MYS",
    lat: 12.3051,
    lng: 76.6394,
    status: "active",
    trains: 80,
    passengers: 60000,
    aiFeatures: ["Palace City Tourism", "Heritage Management"],
    zone: "South Western Railway",
    state: "Karnataka",
  },
  {
    id: "32",
    name: "Hubli Junction",
    code: "UBL",
    lat: 15.3647,
    lng: 75.124,
    status: "active",
    trains: 120,
    passengers: 80000,
    aiFeatures: ["North Karnataka Hub", "Agricultural Transport"],
    zone: "South Western Railway",
    state: "Karnataka",
  },

  // South Central Railway Zone
  {
    id: "33",
    name: "Secunderabad Junction",
    code: "SC",
    lat: 17.4399,
    lng: 78.4983,
    status: "active",
    trains: 220,
    passengers: 150000,
    aiFeatures: ["Voice Commands", "Biometric Access", "Smart Parking"],
    zone: "South Central Railway",
    state: "Telangana",
  },
  {
    id: "34",
    name: "Hyderabad Deccan",
    code: "HYB",
    lat: 17.385,
    lng: 78.4867,
    status: "active",
    trains: 180,
    passengers: 120000,
    aiFeatures: ["IT Corridor Connectivity", "Metro Integration"],
    zone: "South Central Railway",
    state: "Telangana",
  },
  {
    id: "35",
    name: "Vijayawada Junction",
    code: "BZA",
    lat: 16.5062,
    lng: 80.648,
    status: "active",
    trains: 200,
    passengers: 140000,
    aiFeatures: ["Delta Region Hub", "Agricultural Logistics"],
    zone: "South Central Railway",
    state: "Andhra Pradesh",
  },
  {
    id: "36",
    name: "Visakhapatnam Railway Station",
    code: "VSKP",
    lat: 17.7231,
    lng: 83.3012,
    status: "active",
    trains: 160,
    passengers: 110000,
    aiFeatures: ["Port City Connectivity", "Steel Plant Logistics"],
    zone: "East Coast Railway",
    state: "Andhra Pradesh",
  },
  {
    id: "37",
    name: "Tirupati Railway Station",
    code: "TPTY",
    lat: 13.6288,
    lng: 79.4192,
    status: "active",
    trains: 100,
    passengers: 150000,
    aiFeatures: ["Pilgrimage Management", "Crowd Control", "VIP Services"],
    zone: "South Central Railway",
    state: "Andhra Pradesh",
  },
  {
    id: "38",
    name: "Warangal Railway Station",
    code: "WL",
    lat: 17.9669,
    lng: 79.5941,
    status: "active",
    trains: 120,
    passengers: 80000,
    aiFeatures: ["Historic City Hub", "Regional Connectivity"],
    zone: "South Central Railway",
    state: "Telangana",
  },

  // North Eastern Railway Zone
  {
    id: "39",
    name: "Guwahati Railway Station",
    code: "GHY",
    lat: 26.1445,
    lng: 91.7362,
    status: "active",
    trains: 140,
    passengers: 100000,
    aiFeatures: ["Northeast Gateway", "Border Connectivity"],
    zone: "Northeast Frontier Railway",
    state: "Assam",
  },
  {
    id: "40",
    name: "Dibrugarh Railway Station",
    code: "DBRG",
    lat: 27.4728,
    lng: 94.912,
    status: "active",
    trains: 60,
    passengers: 40000,
    aiFeatures: ["Oil City Logistics", "Tea Garden Transport"],
    zone: "Northeast Frontier Railway",
    state: "Assam",
  },
  {
    id: "41",
    name: "Agartala Railway Station",
    code: "AGTL",
    lat: 23.8315,
    lng: 91.2868,
    status: "active",
    trains: 40,
    passengers: 30000,
    aiFeatures: ["International Border", "Cultural Exchange"],
    zone: "Northeast Frontier Railway",
    state: "Tripura",
  },
  {
    id: "42",
    name: "Silchar Railway Station",
    code: "SCL",
    lat: 24.8333,
    lng: 92.7789,
    status: "active",
    trains: 50,
    passengers: 35000,
    aiFeatures: ["Valley Connectivity", "Flood Management"],
    zone: "Northeast Frontier Railway",
    state: "Assam",
  },

  // North Central Railway Zone
  {
    id: "43",
    name: "Allahabad Junction",
    code: "ALD",
    lat: 25.4358,
    lng: 81.8463,
    status: "active",
    trains: 200,
    passengers: 140000,
    aiFeatures: ["Sangam City Hub", "Pilgrimage Management"],
    zone: "North Central Railway",
    state: "Uttar Pradesh",
  },
  {
    id: "44",
    name: "Kanpur Central",
    code: "CNB",
    lat: 26.4499,
    lng: 80.3319,
    status: "active",
    trains: 180,
    passengers: 120000,
    aiFeatures: ["Industrial Hub", "Leather City Logistics"],
    zone: "North Central Railway",
    state: "Uttar Pradesh",
  },
  {
    id: "45",
    name: "Lucknow Junction",
    code: "LJN",
    lat: 26.8467,
    lng: 80.9462,
    status: "active",
    trains: 160,
    passengers: 110000,
    aiFeatures: ["Capital Connectivity", "Nawabi Heritage"],
    zone: "Northern Railway",
    state: "Uttar Pradesh",
  },
  {
    id: "46",
    name: "Varanasi Junction",
    code: "BSB",
    lat: 25.3176,
    lng: 77.9739,
    status: "active",
    trains: 140,
    passengers: 180000,
    aiFeatures: ["Holy City Management", "Tourist Flow Control"],
    zone: "North Eastern Railway",
    state: "Uttar Pradesh",
  },
  {
    id: "47",
    name: "Agra Cantonment",
    code: "AGC",
    lat: 27.1767,
    lng: 78.0081,
    status: "active",
    trains: 120,
    passengers: 200000,
    aiFeatures: ["Taj Mahal Tourism", "Heritage Site Management"],
    zone: "North Central Railway",
    state: "Uttar Pradesh",
  },
  {
    id: "48",
    name: "Mathura Junction",
    code: "MTJ",
    lat: 27.4924,
    lng: 77.6737,
    status: "active",
    trains: 100,
    passengers: 120000,
    aiFeatures: ["Krishna Janmabhoomi", "Religious Tourism"],
    zone: "North Central Railway",
    state: "Uttar Pradesh",
  },

  // East Central Railway Zone
  {
    id: "49",
    name: "Patna Junction",
    code: "PNBE",
    lat: 25.5941,
    lng: 85.1376,
    status: "active",
    trains: 180,
    passengers: 130000,
    aiFeatures: ["Capital Hub", "Ganga Connectivity"],
    zone: "East Central Railway",
    state: "Bihar",
  },
  {
    id: "50",
    name: "Gaya Junction",
    code: "GAYA",
    lat: 24.7955,
    lng: 85.0002,
    status: "active",
    trains: 120,
    passengers: 150000,
    aiFeatures: ["Buddhist Circuit", "Pilgrimage Management"],
    zone: "East Central Railway",
    state: "Bihar",
  },
  {
    id: "51",
    name: "Darbhanga Junction",
    code: "DBG",
    lat: 26.1542,
    lng: 85.8918,
    status: "active",
    trains: 80,
    passengers: 60000,
    aiFeatures: ["Mithila Region Hub", "Cultural Heritage"],
    zone: "East Central Railway",
    state: "Bihar",
  },
  {
    id: "52",
    name: "Muzaffarpur Junction",
    code: "MFP",
    lat: 26.1197,
    lng: 85.391,
    status: "active",
    trains: 100,
    passengers: 70000,
    aiFeatures: ["Litchi Capital", "Agricultural Transport"],
    zone: "East Central Railway",
    state: "Bihar",
  },

  // West Central Railway Zone
  {
    id: "53",
    name: "Bhopal Junction",
    code: "BPL",
    lat: 23.2599,
    lng: 77.4126,
    status: "active",
    trains: 160,
    passengers: 110000,
    aiFeatures: ["Lake City Hub", "Central India Gateway"],
    zone: "West Central Railway",
    state: "Madhya Pradesh",
  },
  {
    id: "54",
    name: "Indore Junction",
    code: "INDB",
    lat: 22.7196,
    lng: 75.8577,
    status: "active",
    trains: 140,
    passengers: 100000,
    aiFeatures: ["Commercial Capital", "Textile Hub"],
    zone: "West Central Railway",
    state: "Madhya Pradesh",
  },
  {
    id: "55",
    name: "Jabalpur Junction",
    code: "JBP",
    lat: 23.1815,
    lng: 79.9864,
    status: "active",
    trains: 120,
    passengers: 80000,
    aiFeatures: ["Marble City", "Defense Connectivity"],
    zone: "West Central Railway",
    state: "Madhya Pradesh",
  },
  {
    id: "56",
    name: "Gwalior Junction",
    code: "GWL",
    lat: 26.2183,
    lng: 78.1828,
    status: "active",
    trains: 100,
    passengers: 70000,
    aiFeatures: ["Fort City Heritage", "Historical Tourism"],
    zone: "North Central Railway",
    state: "Madhya Pradesh",
  },

  // North Western Railway Zone
  {
    id: "57",
    name: "Jaipur Junction",
    code: "JP",
    lat: 26.9124,
    lng: 75.7873,
    status: "active",
    trains: 200,
    passengers: 160000,
    aiFeatures: ["Pink City Tourism", "Heritage Management"],
    zone: "North Western Railway",
    state: "Rajasthan",
  },
  {
    id: "58",
    name: "Jodhpur Junction",
    code: "JU",
    lat: 26.2389,
    lng: 73.0243,
    status: "active",
    trains: 120,
    passengers: 90000,
    aiFeatures: ["Blue City Hub", "Desert Tourism"],
    zone: "North Western Railway",
    state: "Rajasthan",
  },
  {
    id: "59",
    name: "Udaipur City Railway Station",
    code: "UDZ",
    lat: 24.5854,
    lng: 73.7125,
    status: "active",
    trains: 80,
    passengers: 100000,
    aiFeatures: ["Lake City Tourism", "Palace Heritage"],
    zone: "North Western Railway",
    state: "Rajasthan",
  },
  {
    id: "60",
    name: "Bikaner Junction",
    code: "BKN",
    lat: 28.0229,
    lng: 73.3119,
    status: "active",
    trains: 100,
    passengers: 70000,
    aiFeatures: ["Desert Gateway", "Camel Safari Hub"],
    zone: "North Western Railway",
    state: "Rajasthan",
  },
]

export default function OpenStreetMapRailway() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [map, setMap] = useState<any>(null)
  const [selectedStation, setSelectedStation] = useState<RailwayStation | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [stationFilter, setStationFilter] = useState<string>("all")
  const [zoomLevel, setZoomLevel] = useState(5)
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

      // Load Leaflet dynamically
      const L = (await import("leaflet")).default

      // Fix for default markers
      delete (L.Icon.Default.prototype as any)._getIconUrl
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
        iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
        shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
      })

      const mapInstance = L.map(mapRef.current, {
        center: [20.5937, 78.9629], // Center of India
        zoom: 5,
        zoomControl: true,
        attributionControl: false,
      })

      L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
        attribution: "© OpenStreetMap contributors © CARTO",
        subdomains: "abcd",
        maxZoom: 19,
      }).addTo(mapInstance)

      const enhancedRailwayRoutes = [
        // Golden Quadrilateral routes
        { from: [28.6431, 77.2197], to: [19.076, 72.8777], name: "Delhi-Mumbai" },
        { from: [19.076, 72.8777], to: [13.0827, 80.2707], name: "Mumbai-Chennai" },
        { from: [13.0827, 80.2707], to: [22.5726, 88.3639], name: "Chennai-Kolkata" },
        { from: [22.5726, 88.3639], to: [28.6431, 77.2197], name: "Kolkata-Delhi" },

        // Major connecting routes
        { from: [28.6431, 77.2197], to: [26.9124, 75.7873], name: "Delhi-Jaipur" },
        { from: [28.6431, 77.2197], to: [30.7333, 76.7794], name: "Delhi-Chandigarh" },
        { from: [19.076, 72.8777], to: [18.5204, 73.8567], name: "Mumbai-Pune" },
        { from: [12.9716, 77.5946], to: [13.0827, 80.2707], name: "Bangalore-Chennai" },
        { from: [17.385, 78.4867], to: [12.9716, 77.5946], name: "Hyderabad-Bangalore" },

        // Additional major routes
        { from: [22.5851, 88.3426], to: [20.2961, 85.8245], name: "Kolkata-Bhubaneswar" },
        { from: [25.4358, 81.8463], to: [25.5941, 85.1376], name: "Allahabad-Patna" },
        { from: [26.1445, 91.7362], to: [27.4728, 94.912], name: "Guwahati-Dibrugarh" },
        { from: [23.0225, 72.5714], to: [22.3072, 73.1812], name: "Ahmedabad-Vadodara" },
        { from: [26.9124, 75.7873], to: [26.2389, 73.0243], name: "Jaipur-Jodhpur" },
        { from: [23.2599, 77.4126], to: [22.7196, 75.8577], name: "Bhopal-Indore" },
      ]

      enhancedRailwayRoutes.forEach((route) => {
        const polyline = L.polyline([route.from, route.to], {
          color: "#1de9b6",
          weight: 3,
          opacity: 0.8,
          dashArray: "10, 5",
        }).addTo(mapInstance)

        polyline.bindTooltip(route.name, {
          permanent: false,
          direction: "center",
          className: "railway-tooltip",
        })
      })

      const updateStationDisplay = () => {
        const currentZoom = mapInstance.getZoom()
        setZoomLevel(currentZoom)

        let stationsToShow = allIndianRailwayStations

        // Filter by zone if selected
        if (stationFilter !== "all") {
          stationsToShow = allIndianRailwayStations.filter((station) => station.zone === stationFilter)
        }

        // Show different levels of detail based on zoom
        if (currentZoom < 6) {
          // Show only major stations (high passenger count)
          stationsToShow = stationsToShow.filter((station) => station.passengers > 100000)
        } else if (currentZoom < 8) {
          // Show medium and major stations
          stationsToShow = stationsToShow.filter((station) => station.passengers > 50000)
        }
        // At zoom 8+, show all filtered stations

        // Clear existing markers
        mapInstance.eachLayer((layer: any) => {
          if (layer.options && layer.options.isStationMarker) {
            mapInstance.removeLayer(layer)
          }
        })

        // Add filtered stations
        stationsToShow.forEach((station) => {
          const statusColor =
            station.status === "active" ? "#0e4c92" : station.status === "maintenance" ? "#eab308" : "#ef4444"

          const markerSize = currentZoom < 6 ? 20 : currentZoom < 8 ? 16 : 12

          const markerHtml = `
            <div style="
              width: ${markerSize}px;
              height: ${markerSize}px;
              border-radius: 50%;
              border: 2px solid ${statusColor};
              background: #0a0a0a;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              box-shadow: 0 0 8px ${statusColor}50;
              transition: all 0.3s ease;
            ">
              <div style="
                width: ${markerSize / 3}px;
                height: ${markerSize / 3}px;
                border-radius: 50%;
                background: ${statusColor};
                ${station.status === "active" ? "animation: pulse 2s infinite;" : ""}
              "></div>
            </div>
          `

          const customIcon = L.divIcon({
            html: markerHtml,
            className: "custom-railway-marker",
            iconSize: [markerSize, markerSize],
            iconAnchor: [markerSize / 2, markerSize / 2],
          })

          const marker = L.marker([station.lat, station.lng], {
            icon: customIcon,
            isStationMarker: true,
          } as any)
            .addTo(mapInstance)
            .bindPopup(`
              <div style="color: white; background: #1a1a1a; padding: 8px; border-radius: 4px; min-width: 200px;">
                <h3 style="margin: 0 0 8px 0; color: #0e4c92;">${station.name}</h3>
                <p style="margin: 0; font-size: 12px;"><strong>Code:</strong> ${station.code}</p>
                <p style="margin: 0; font-size: 12px;"><strong>Zone:</strong> ${station.zone}</p>
                <p style="margin: 0; font-size: 12px;"><strong>State:</strong> ${station.state}</p>
                <p style="margin: 0; font-size: 12px;"><strong>Status:</strong> ${station.status}</p>
                <p style="margin: 0; font-size: 12px;"><strong>Daily Passengers:</strong> ${station.passengers.toLocaleString()}</p>
              </div>
            `)

          marker.on("click", () => {
            setSelectedStation(station)
            mapInstance.setView([station.lat, station.lng], Math.max(10, currentZoom))
          })
        })
      }

      // Initial station display
      updateStationDisplay()

      // Update stations when zoom changes
      mapInstance.on("zoomend", updateStationDisplay)

      setMap(mapInstance)
      setIsLoaded(true)
    }

    // Load Leaflet CSS
    if (!document.querySelector('link[href*="leaflet"]')) {
      const link = document.createElement("link")
      link.rel = "stylesheet"
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
      document.head.appendChild(link)
    }

    initMap()

    return () => {
      if (map) {
        map.remove()
      }
    }
  }, [stationFilter])

  const railwayZones = ["all", ...Array.from(new Set(allIndianRailwayStations.map((station) => station.zone)))]

  return (
    <div className="relative w-full h-full">
      {/* OpenStreetMap Container */}
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

      <Card className="absolute top-4 left-4 bg-dark-800/90 border-neon-blue/30 backdrop-blur-sm">
        <div className="p-4 space-y-3">
          <h3 className="text-white font-semibold flex items-center gap-2">
            <Zap className="w-4 h-4 text-neon-blue" />
            Live Network Status
          </h3>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <p className="text-gray-400">Total Stations</p>
              <p className="text-neon-green font-mono">{allIndianRailwayStations.length}</p>
            </div>
            <div>
              <p className="text-gray-400">Active Trains</p>
              <p className="text-neon-green font-mono">{realTimeData.activeTrains.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-gray-400">On-Time %</p>
              <p className="text-neon-green font-mono">{realTimeData.onTimePerformance.toFixed(1)}%</p>
            </div>
            <div>
              <p className="text-gray-400">AI Accuracy</p>
              <p className="text-neon-green font-mono">{realTimeData.predictiveAccuracy.toFixed(1)}%</p>
            </div>
          </div>

          <div className="pt-2 border-t border-gray-700">
            <label className="text-gray-400 text-xs block mb-1">Filter by Zone:</label>
            <select
              value={stationFilter}
              onChange={(e) => setStationFilter(e.target.value)}
              className="w-full bg-dark-700 text-white text-xs p-1 rounded border border-gray-600"
            >
              {railwayZones.map((zone) => (
                <option key={zone} value={zone}>
                  {zone === "all" ? "All Zones" : zone}
                </option>
              ))}
            </select>
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
                <span className="text-gray-400">Railway Zone:</span>
                <span className="text-neon-blue text-xs">{selectedStation.zone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">State:</span>
                <span className="text-white">{selectedStation.state}</span>
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
          <div className="mt-2 pt-2 border-t border-gray-700">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-3 h-1 bg-neon-green"></div>
              <span className="text-gray-300">Railway Routes</span>
            </div>
            <p className="text-xs text-gray-400">
              Zoom: {zoomLevel} | Showing {zoomLevel < 6 ? "Major" : zoomLevel < 8 ? "Medium+" : "All"} Stations
            </p>
          </div>
        </div>
      </Card>

      {/* Custom CSS for tooltips and animations */}
      <style jsx global>{`
        .railway-tooltip {
          background: rgba(26, 26, 26, 0.9) !important;
          border: 1px solid #0e4c92 !important;
          color: white !important;
          border-radius: 4px !important;
          font-size: 12px !important;
        }
        
        .custom-railway-marker {
          background: transparent !important;
          border: none !important;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .leaflet-popup-content-wrapper {
          background: #1a1a1a !important;
          border: 1px solid #0e4c92 !important;
        }
        
        .leaflet-popup-tip {
          background: #1a1a1a !important;
          border: 1px solid #0e4c92 !important;
        }
      `}</style>
    </div>
  )
}
