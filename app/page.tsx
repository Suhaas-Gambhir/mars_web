import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
<div className="flex flex-col items-center justify-center w-full min-h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      {/* Section 1 */}
      <div className="h-[100vh] w-full relative flex flex-col items-center justify-center">
        {/* Navigation */}
        <nav className="my-8 animate-fade-in z-20">
          <ul className="flex items-center justify-center gap-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xl duration-500 text-zinc-500 hover:text-zinc-300"
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </nav>

        {/* Glowing Line (Top) */}
        <div className="hidden w-full h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

        {/* Particles Background */}
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in w-full h-full"
          quantity={300}
        />

        {/* Logo and Animated Text */}
        <div className="relative flex flex-col items-center justify-center z-10 overflow-hidden">
          {/* Logo */}
          <img
            src="/mars_logo3.png"
            alt="MARS Logo"
            className="w-40 h-40 sm:w-64 sm:h-64 animate-scale-in opacity-90"
          />

          {/* Animated MARS Text */}
          <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text mt-[-65px]">
            MARS
          </h1>
        </div>

        {/* Glowing Line (Bottom) */}
        <div className="hidden w-full h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      </div>
      {/* Animated White Arrow */}
      <div className="relative flex flex-col items-center justify-end mt-10 animate-bounce">
          <div className="w-8 h-8 border-4 border-t-4 border-white rounded-full animate-pulse mb-4"></div>
        </div>

      {/* Section 2 - second page */}
      <section className="w-full bg-white py-16">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl font-semibold text-black">Welcome to MARS</h2>
          {/* Additional content can go here */}
        </div>
      </section>

      {/* Footer Message */}
      <div className="my-16 text-center animate-fade-in z-10">
        <h2 className="text-sm text-zinc-500">Hi there!.</h2>
        {/* Logo */}
        <img
    src="/qr.png"
    alt="qr"
    className="w-80 h-80 sm:w-96 sm:h-96 animate-scale-in opacity-90"
/>

      </div>
    </div>
  );
}
