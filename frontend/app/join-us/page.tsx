import JoinUsHero from "@/components/join-us-hero"
import CultureSection from "@/components/culture-section"
import JobListings from "@/components/job-listings"
import ApplicationProcess from "@/components/application-process"

export default function JoinUsPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <JoinUsHero />
      <CultureSection />
      <JobListings />
      <ApplicationProcess />
    </main>
  )
}
