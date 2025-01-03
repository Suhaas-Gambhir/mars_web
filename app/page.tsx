import { RocketIcon, Settings, UsersIcon, TrophyIcon } from "lucide-react"
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid"
import { Hero } from "@/components/hero"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Image from "next/image"

const features = [
  {
    Icon: RocketIcon,
    name: "Our Rovers",
    description: "Pioneering the future of Mars and lunar exploration with cutting-edge rover technology.",
    className: "col-span-3 lg:col-span-2 hover:border-primary/50",
    href: "/rovers",
    cta: "View Projects",
    background: (
      <Carousel
        opts={{ loop: true, duration: 20 }}
        className="absolute inset-0 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]"
      >
        <CarouselContent>
          {[1, 2, 3, 4].map((i) => (
            <CarouselItem key={i} className="basis-1/2">
              <div className="relative h-48 w-full overflow-hidden rounded-xl bg-primary/5">
                <Image
                  src={`/placeholder.svg`}
                  alt={`Rover ${i}`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    ),
  },
  {
    Icon: TrophyIcon,
    name: "Achievements",
    description: "Award-winning designs and competition success stories.",
    className: "col-span-3 lg:col-span-1 hover:border-primary/50",
    href: "/competitions",
    cta: "View Achievements",
    background: (
      <div className="absolute inset-0 flex flex-col gap-2 p-4 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]">
        {[1, 2, 3].map((i) => (
          <div key={i} className="rounded-lg border bg-primary/5 p-2 shadow-sm transition-all hover:scale-[1.02] hover:bg-primary/10">
            <h3 className="text-sm font-medium">Competition {i}</h3>
            <p className="text-xs text-primary/70">1st Place Winner</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    Icon: UsersIcon,
    name: "Join Our Team",
    description: "Opportunities for students across engineering, software, and design.",
    className: "col-span-3 lg:col-span-1 hover:border-primary/50",
    href: "/recruitment",
    cta: "Apply Now",
    background: (
      <div className="absolute inset-0 flex flex-col gap-2 p-4 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]">
        {['Engineering', 'Software', 'Design'].map((role) => (
          <div key={role} className="rounded-lg border bg-primary/5 p-2 shadow-sm transition-all hover:scale-[1.02] hover:bg-primary/10">
            <h3 className="text-sm font-medium">{role}</h3>
            <p className="text-xs text-primary/70">Open Positions</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    Icon: Settings,
    name: "Partner With Us",
    description: "Support the next generation of space exploration technology.",
    className: "col-span-3 lg:col-span-2 hover:border-primary/50",
    href: "/partners",
    cta: "Become a Sponsor",
    background: (
      <div className="absolute inset-0 grid grid-cols-3 gap-4 p-4 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="flex aspect-square items-center justify-center rounded-lg border bg-primary/5 shadow-sm hover:bg-primary/10">
            <Image
              src="/placeholder.svg"
              alt={`Partner ${i}`}
              width={50}
              height={50}
              className="opacity-50 transition-opacity hover:opacity-100"
            />
          </div>
        ))}
      </div>
    ),
  },
]

export default function Home() {
  return (
    <>
      <Hero />
      <section className="p-24 w-full flex flex-col items-center justify-center">
        <BentoGrid className="w-[80%]">
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </section>
    </>
  )
}

