import { HeroSection } from "@/components/hero-section"
import { FeaturesPreview } from "@/components/features-preview"
import { StatsSection } from "@/components/stats-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesPreview />
      <StatsSection />
      <Footer />
    </main>
  )
}
