import { ComingSoon } from "@/components/features/coming-soon"

export default function ComingSoonPage() {
  return (
    <ComingSoon 
      title="Coming Soon"
      description="We're working hard to bring you something amazing. This page is currently under development."
      showBackButton={true}
      estimatedCompletion="Early 2026"
    />
  )
}
