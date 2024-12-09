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
                className="text-xl duration-500 text-zinc-200 hover:text-red-500"
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
          {/* Wireframe title */}
          {/* <h1 className="py-3.5 px-0.5 z-10 text-4xl
          text-transparent duration-1000 cursor-default
          text-edge-outline animate-title font-display
          sm:text-6xl md:text-9xl whitespace-nowrap"></h1> */}
          <h1 className={[
            "py-3.5",            // Padding top and bottom
            "px-0.5",            // Padding left and right
            "z-10",              // Z-index
            "text-4xl",          // Font size
            "text-transparent",  // Text color
            "duration-1000",     // Transition duration
            "bg-white",          // Background color
            "cursor-default",    // Cursor style
            "text-edge-outline", // Text outline
            "animate-title",     // Animation
            "font-display",      // Font family
            "sm:text-6xl",       // Font size for small screens
            "md:text-9xl",       // Font size for medium screens
            "whitespace-nowrap", // Prevent text wrapping
            "bg-clip-text",      // Background clip for text
            "mt-[-65px]"         // Margin top
          ].join(' ')}>
            MARS
          </h1>

          <a
            href="#section2"
            className="mt-6 px-6 py-2 text-base text-black bg-white rounded-full hover:bg-zinc-200 hover:scale-105 animate-fade-in"
          >
            Learn More
          </a>



        </div>

        {/* Glowing Line (Bottom) */}
        <div className="hidden w-full h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      </div>
      {/* Animated White Arrow */}
      <div className="relative flex flex-col items-center justify-end mt-10 animate-bounce">
        <div className="w-8 h-8 border-4 border-t-4 border-white rounded-full animate-pulse mb-4"></div>
      </div>

      {/* Section 2 - second page */}
      <section id="section2" className="w-full bg-white py-16">
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
