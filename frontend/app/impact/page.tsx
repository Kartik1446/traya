import { ImpactHero } from "@/components/impact-hero"
import { ImpactCounters } from "@/components/impact-counters"
import { BenefitsSection } from "@/components/benefits-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function ImpactPage() {
  return (
    <main className="min-h-screen pt-16">
      <ImpactHero />
      <ImpactCounters />
      <BenefitsSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
