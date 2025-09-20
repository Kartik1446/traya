import { AboutHero } from "@/components/about-hero"
import { MissionVision } from "@/components/mission-vision"
import { TeamSection } from "@/components/team-section"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-16">
      <AboutHero />
      <MissionVision />
      <TeamSection />
      <Footer />
    </main>
  )
}
