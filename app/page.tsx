import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

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
        {/* Navigation */}
        <nav
          className={[
            "my-8", // Margin top and bottom
            "animate-fade-in", // Fade-in animation
            "z-20", // Z-index
          ].join(" ")}
        >
          <ul
            className={[
              "flex", // Flexbox layout
              "items-center", // Align items to the center
              "justify-center", // Center items horizontally
              "gap-4", // Gap between items
            ].join(" ")}
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "text-xl", // Font size
                  "duration-500", // Transition duration
                  "text-zinc-200", // Text color
                  "hover:text-red-500", // Text color on hover
                  // "hover:underline"
                ].join(" ")}
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </nav>

        {/* Glowing Line (Top) */}
        <div
          className={[
            "hidden", // Hide element
            "w-full", // Full width
            "h-px", // Height of 1 pixel
            "animate-glow", // Glow animation
            "md:block", // Display block on medium screens and up
            "animate-fade-left", // Fade left animation
            "bg-gradient-to-r", // Background gradient to right
            "from-zinc-300/0", // Gradient start color
            "via-zinc-300/50", // Gradient middle color
            "to-zinc-300/0", // Gradient end color
          ].join(" ")}
        />

        {/* Particles Background */}
        <Particles
          className={[
            "absolute", // Position absolute
            "inset-0", // Inset on all sides
            "-z-10", // Negative z-index
            // "animate-fade-in", // Fade-in animation  // TODO is a fade in needed?
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

          {/* Animated MARS Text */}

          {/* Wireframe title */}
          {/* <h1 className="py-3.5 px-0.5 z-10 text-4xl
          text-transparent duration-1000 cursor-default
          text-edge-outline animate-title font-display
          sm:text-6xl md:text-9xl whitespace-nowrap"></h1> */}

          <h1
            className={[
              "py-3.5", // Padding top and bottom
              "px-0.5", // Padding left and right
              "z-10", // Z-index
              "text-4xl", // Font size
              "text-transparent", // Text color
              "duration-1000", // Transition duration
              "bg-white", // Background color
              // "cursor-default",    // Cursor style // TODO Remove this?
              "text-edge-outline", // Text outline
              "animate-title", // Animation
              "font-display", // Font family
              // "sm:text-6xl", // Font size for small screens
              "md:text-9xl", // Font size for medium screens
              "whitespace-nowrap", // Prevent text wrapping
              "bg-clip-text", // Background clip for text
              // "sm:mt-[-100px]", // Margin top
              "mt-[-35px]", // Margin top
              "md:mt-[-65px]"
            ].join(" ")}
          >
            MARS
          </h1>
          {/* Full Form Text */}
          <p
            className={[
              "text-xs", // Font size
              "text-white", // Text color
              "mt-[-15px]", // Margin top
              "sm:mt-[-20px]",
              "md:mt-[-35px]",
              "text-center", // Center alignment
              "animate-title", // Animation
              "mb-5",
              "sm:text-sm", // Text becomes small (text-sm) when the screen is >= 640px
              "md:text-base", // Text becomes normal size (text-base) for medium screens (>= 768px)
              "lg:text-xl", // Text becomes extra large (text-xl) for large screens (>= 1024px)
            ].join(" ")}
          >
            Macquarie Aerospace Rover Society
          </p>

          {/* <a
            href="#section2"
            className="mt-6 px-6 py-2 text-base text-black bg-white rounded-full hover:bg-zinc-200 hover:scale-105 animate-fade-in"
          > */}
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
              "hover:bg-zinc-200", // Background color on hover
              "hover:scale-105", // Scale on hover
              "animate-fade-in", // Fade-in animation
            ].join(" ")}
          >
            Learn More
          </a>
        </div>

        {/* Glowing Line (Bottom) */}
        <div
          className={[
            "hidden", // Hide element
            "w-full", // Full width
            "h-px", // Height of 1 pixel
            "animate-glow", // Glow animation
            "md:block", // Display block on medium screens and up
            "animate-fade-right", // Fade right animation
            "bg-gradient-to-r", // Background gradient to right
            "from-zinc-300/0", // Gradient start color
            "via-zinc-300/50", // Gradient middle color
            "to-zinc-300/0", // Gradient end color
          ].join(" ")}
        />
      </div>
      {/* Animated White Arrow */}
      <div
        className={[
          "relative", // Position relative
          "flex", // Flexbox layout
          "flex-col", // Flex direction column
          "items-center", // Align items to the center
          "justify-end", // Justify content to the end
          "mt-[-35px]", // Margin top
          "animate-bounce", // Bounce animation
        ].join(" ")}
      >
        <div
          className={[
            "w-8", // Width 8 units
            "h-8", // Height 8 units
            "border-4", // Border width 4 units
            "border-t-4", // Top border width 4 units
            "border-white", // Border color white
            "rounded-full", // Fully rounded corners
            "animate-pulse", // Pulse animation
            "mb-4", // Margin bottom 4 units
          ].join(" ")}
        ></div>
      </div>

      {/* Section 2 - second page */}
      <section
        id="section2"
        className={[
          "w-full", // Full width
          "bg-white", // Background color white
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

          {/* Additional content can go here */}
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
          Hi there!.
        </h2>
        {/* Logo */}
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
