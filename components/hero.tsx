'use client'

import { useScroll, useTransform, motion } from "framer-motion"
import { useRef } from "react"
import Particles from "./particles"

export function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])

  return (
    <div
      ref={ref}
      className="relative grid h-screen place-items-center overflow-hidden"
    >
      <Particles
        className="absolute inset-0 z-10"
        quantity={100}
        staticity={30}
        ease={50}
      />
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-background to-background/60 dark:from-background dark:to-background/60" />
      <motion.div
        className="relative z-30 mx-auto max-w-5xl text-center"
        style={{ y: textY }}
      >
        <h1 className="bg-gradient-to-b from-white to-white/50 dark:from-white dark:to-white/50 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
          Welcome to
          <br />
          Macquarie Rover Team
        </h1>
        <p className="mt-4 text-lg text-white/90 dark:text-white/90 sm:text-xl md:text-2xl">
          Building rovers since 2023
        </p>
        <div className="mt-8">
          <a
            href="#about"
            className="rounded-full bg-white px-8 py-3 font-semibold text-gray-900 dark:bg-white dark:text-gray-900 transition hover:bg-white/90 dark:hover:bg-white/90"
          >
            Learn More
          </a>
        </div>
      </motion.div>
    </div>
  )
}

