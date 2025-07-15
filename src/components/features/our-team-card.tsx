import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Globe, Linkedin } from "lucide-react"
import Image from "next/image"

export interface TeamMember {
  name: string;
  position?: string;
  image: string;
  linkedin?: string;
  website?: string;
}

export function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="flex flex-col items-center bg-background/70 rounded-lg p-8 shadow-md">
      <div className="w-44 h-44 mb-5 relative">
        <Image
          src={member.image}
          alt={member.name}
          width={176}
          height={176}
          className="rounded-3xl object-cover w-full h-full border-4 border-white"
        />
      </div>
      <div className="text-center">
        <div className="font-bold text-2xl dark:text-white text-black mb-2">{member.name}</div>
        <div className="text-lg text-muted-foreground mb-3">{member.position}</div>
        <div className="flex justify-center gap-2">
          {member.linkedin && (
            <Button asChild variant="ghost" size="icon" aria-label="LinkedIn">
              <Link href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </Link>
            </Button>
          )}
          {member.website && (
            <Button asChild variant="ghost" size="icon" aria-label="Website">
              <Link href={member.website} target="_blank" rel="noopener noreferrer">
                <Globe className="w-5 h-5" /> 
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export function OurTeamCard() { 
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden h-[50rem]">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-background/50"
        style={{
          backgroundImage: "url('/team-bg.png')",
        }}
      />
      <div className="absolute inset-0 bg-background/20 dark:bg-background/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 via-transparent to-primary/10 dark:bg-gradient-to-r dark:from-secondary/10 dark:via-transparent dark:to-primary/10" />
      <div className="container relative z-10">
        <div className="text-start space-y-8 justify-start max-w-2xl">
          <p className="text-xl md:text-2xl dark:text-white text-black justify-start">
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