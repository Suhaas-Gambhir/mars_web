"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import InteractiveHoverButton from "./ui/interactive-hover-button";
import { useRef } from "react";
import Particles from "./particles";
import Link from "next/link";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="bg-gradient-to-b from-black to-black/50 dark:from-white dark:to-white/50 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Welcome to
          <br />
          Macquarie Rover Team
        </motion.h1>
        <motion.p
          className="mt-4 text-lg text-black/90 dark:text-white/90 sm:text-xl md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          Building rovers since 2025
        </motion.p>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <Link href="#about">
            <InteractiveHoverButton
              className="w-48"
              text="Learn More"
            />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
