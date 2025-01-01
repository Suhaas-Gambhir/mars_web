import { Navigation } from "./components/nav"; // Import Navigation component
import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import Image from "next/image"; // Added for professional content

const navigation = [{ name: "Contact", href: "/contact" }];

export default function Home() {
  return (
    <div
      className={[
        "flex", // Flexbox layout
        "flex-col", // Flex direction column
        "items-center", // Align items to the center
        "justify-center", // Center items horizontally
        "w-full", // Full width
        "min-h-screen", // Minimum height of the screen
        "overflow-hidden", // Hide overflow
        "bg-gradient-to-tl", // Background gradient to top left
        "from-black", // Gradient start color
        "via-zinc-600/20", // Gradient middle color
        "to-black", // Gradient end color
      ].join(" ")}
    >
      {/* Navbar */}
      <Navigation />

      {/* Section 1 */}
      <div
        className={[
          "h-[100vh]", // Height of 100% of the viewport height
          "w-full", // Full width
          "relative", // Position relative
          "flex", // Flexbox layout
          "flex-col", // Flex direction column
          "items-center", // Align items to the center
          "justify-center", // Center items horizontally
        ].join(" ")}
      >
        {/* Particles Background */}
        <Particles
          className={[
            "absolute", // Position absolute
            "inset-0", // Inset on all sides
            "-z-10", // Negative z-index
            "w-full", // Full width
            "h-full", // Full height
          ].join(" ")}
          quantity={300}
        />

        {/* Logo and Animated Text */}
        <div
          className={[
            "relative", // Position relative
            "flex", // Flexbox layout
            "flex-col", // Flex direction column
            "items-center", // Align items to the center
            "justify-center", // Center items horizontally
            "z-10", // Z-index
            "overflow-hidden", // Hide overflow
          ].join(" ")}
        >
          {/* Logo */}
          <img
            src="/mars_logo3.png"
            alt="MARS Logo"
            className={[
              "w-40", // Width 40 units
              "h-40", // Height 40 units
              "sm:w-64", // Width 64 units on small screens
              "sm:h-64", // Height 64 units on small screens
              "animate-scale-in", // Scale-in animation
              "opacity-90", // 90% opacity
            ].join(" ")}
          />

          <h1
            className={[
              "py-3.5", // Padding top and bottom
              "px-0.5", // Padding left and right
              "z-10", // Z-index
              "text-4xl", // Font size
              "text-transparent", // Text color
              "duration-1000", // Transition duration
              "bg-white", // Background color
              "text-edge-outline", // Text outline
              "animate-title", // Animation
              "font-display", // Font family
              "md:text-9xl", // Font size for medium screens
              "whitespace-nowrap", // Prevent text wrapping
              "bg-clip-text", // Background clip for text
              "mt-[-35px]", // Margin top
              "md:mt-[-65px]",
            ].join(" ")}
          >
            MARS
          </h1>

          <p
            className={[
              "text-xs", // Font size
              "text-white", // Text color
              "mt-[-15px]", // Margin top
              "text-center", // Center alignment
              "sm:text-sm", // Small text on screens >= 640px
              "md:text-base", // Normal text on medium screens
              "lg:text-xl", // Extra-large text on large screens
            ].join(" ")}
          >
            Macquarie Aerospace Rover Society
          </p>

          <a
            href="#section2"
            className={[
              "mt-6", // Margin top
              "px-6", // Padding left and right
              "py-2", // Padding top and bottom
              "text-base", // Font size
              "text-black", // Text color
              "bg-white", // Background color
              "rounded-full", // Rounded corners
              "hover:bg-zinc-200", // Hover effect
              "hover:scale-105", // Hover scale effect
              "animate-fade-in", // Fade-in animation
            ].join(" ")}
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Section 2 */}
      <section
        id="section2"
        className={[
          "w-full", // Full width
          "bg-white", // White background
          "py-16", // Padding top and bottom
        ].join(" ")}
      >
        <div
          className={[
            "flex", // Flexbox layout
            "flex-col", // Flex direction column
            "items-center", // Align items to the center
            "justify-center", // Center items horizontally
          ].join(" ")}
        >
          <h2
            className={[
              "text-3xl", // Font size
              "font-semibold", // Font weight
              "text-black", // Text color
            ].join(" ")}
          >
            Welcome to MARS
          </h2>

          {/* Additional professional content */}
          <div className="mt-6 text-lg text-center text-zinc-700">
            <p>
              The Macquarie Aerospace Rover Society (MARS) is a student-led initiative dedicated to advancing technology and innovation in the field of autonomous systems. We are actively working on developing semi-autonomous lunar rovers to participate in the prestigious Australian Rover Challenge (ARCh). Our team focuses on cutting-edge technologies, including machine learning, robotics, and path planning, to push the boundaries of what's possible in autonomous systems.
            </p>

            <p className="mt-4">
              With the goal of competing in ARCh, we are designing and building a rover capable of navigating complex terrains and performing autonomous tasks in a simulated lunar environment. Join us in our mission to revolutionize space exploration through innovation and teamwork.
            </p>
          </div>

          {/* Image showcasing the rover */}
          <div className="mt-8">
            <Image
              src="/rover-challenge.jpg"
              alt="Australian Rover Challenge"
              width={1200}
              height={800}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Footer Message */}
      <div
        className={[
          "my-16", // Margin top and bottom
          "text-center", // Center text
          "animate-fade-in", // Fade-in animation
          "z-10", // Z-index
        ].join(" ")}
      >
        <h2 className="text-sm text-zinc-500">
          {" "}
          {/* Small text size, Text color */}
          Hi there!
        </h2>
        <img
          src="/qr.png"
          alt="qr"
          className={[
            "w-80", // Width 80 units
            "h-80", // Height 80 units
            "sm:w-96", // Width 96 units on small screens
            "sm:h-96", // Height 96 units on small screens
            "animate-scale-in", // Scale-in animation
            "opacity-90", // 90% opacity
          ].join(" ")}
        />
      </div>
    </div>
  );
}
