import Link from "next/link"
import { Button } from "@/components/ui/button"

export function OurTeamCard() { 
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden h-[50rem]">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-background/50"
        style={{
          backgroundImage: "url('/team-bg.png')",
        }}
      />
      <div className="absolute inset-0 bg-background/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 via-transparent to-primary/10" />
      <div className="container relative z-10">
        <div className="text-start space-y-8 justify-start max-w-2xl">
          <p className="text-xl md:text-2xl text-white justify-start">
          Our team comes from diverse disciplines and fields. We are committed to foster an inclusive and supportive culture.
          </p>
          <div className="lg:flex-shrink-0">
            <Button asChild size="default">
              <Link href="/join">Join Now</Link> 
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 