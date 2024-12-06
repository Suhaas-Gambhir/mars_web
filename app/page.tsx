import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      {/* Navigation */}
      <nav className="my-8 animate-fade-in z-20">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>

      {/* Glowing Line (Top) */}
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      {/* Particles Background */}
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={300}
      />

      {/* Logo and Animated Text */}
      <div className="relative flex flex-col items-center justify-center">
        {/* Logo */}
        <img
          src="/mars_logo2.png" // Path to your logo image
          alt="MARS Logo"
          className="w-40 h-40 sm:w-64 sm:h-64 animate-scale-in opacity-90 z-10 mb-6"
          // `mb-6` adds space between the logo and text
        />

        {/* Animated MARS Text */}
        <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
          MARS
        </h1>
      </div>

      {/* Glowing Line (Bottom) */}
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      {/* Footer Message */}
      <div className="my-16 text-center animate-fade-in z-10">
        <h2 className="text-sm text-zinc-500">Hi Jake.</h2>
      </div>
    </div>
  );
}
