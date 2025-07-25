import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative pt-5 overflow-hidden h-[60rem]">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-bg.png')",
        }}
      />
      <div className="absolute inset-0 bg-background/10 dark:bg-background/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 via-transparent to-primary/10 dark:bg-gradient-to-r dark:from-secondary/10 dark:via-transparent dark:to-primary/10" />
      <div className="container relative z-10">
        <div className="text-start space-y-8 justify-start max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
          From Moon to <span className="text-primary">MARS</span> and Beyond
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 justify-start">
          Contribute to the development of an semi-autonomous rover, gearing up to compete in the Australian Rover Challenge in March 2026.
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