import { ImpactHero } from "@/components/impact-hero"
import { ImpactCounters } from "@/components/impact-counters"
import { MissionVision } from "@/components/mission-vision"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function ImpactPage() {
  return (
    <main className="min-h-screen pt-16">
      <ImpactHero />
      <ImpactCounters />
      <MissionVision />
      {/* <TestimonialsSection /> */} {/* Removed this line */}
      <Footer />
    </main>
  )
}
