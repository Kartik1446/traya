import { InnovationHero } from "@/components/innovation-hero"
import { FeaturesGrid } from "@/components/features-grid"
import { TechnologyShowcase } from "@/components/technology-showcase"
import { Footer } from "@/components/footer"

export default function InnovationPage() {
  return (
    <main className="min-h-screen pt-16">
      <InnovationHero />
      <FeaturesGrid />
      <TechnologyShowcase />
      <Footer />
    </main>
  )
}
