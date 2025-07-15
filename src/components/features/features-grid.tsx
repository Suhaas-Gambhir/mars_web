import { Button } from "../ui/button";
import Link from "next/link";

export function FeaturesGrid() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden h-[50rem]">
      <div className="absolute inset-0 bg-background/20 dark:bg-background/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-primary/30 dark:bg-gradient-to-r dark:from-background/30 dark:via-transparent dark:to-primary/30" />
      <div className="container relative z-10">
        <div className="text-start mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl lg:leading-[1.2] font-bold mb-4 max-w-xl">
          Welcome to {""} <br />
          <span className="text-primary"> 
          Macquarie Aerospace Rover Society
          </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
          Fueled by passion and powered by teamwork, we are a student team on the mission to build innovative rover systems, aiming to blaze a trail towards the red sands of Mars with every project.
          </p>
        </div>
        <div className="lg:flex-shrink-0">
          <Button variant="outline" asChild size="default">
            <Link href="/events">About Us</Link>
          </Button>
        </div>
      </div>
    </section>
  )
} 