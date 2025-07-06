import { Hero } from "@/components/features/hero"
import { FeaturesGrid } from "@/components/features/features-grid"
import { OurTeamCard } from "@/components/features/our-team-card"
import { ProjectsCard } from "@/components/features/projects-card"

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturesGrid />
      <OurTeamCard />
      <ProjectsCard />
    </>
  )
}
