"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const navigationItems = [
  { name: "Our Team", href: "/our-team" },
  { name: "ARCh", href: "/arch" },
  { name: "Projects", href: "/projects" },
  { name: "Partners", href: "/partners" },
  { name: "Recruitment", href: "/recruitment" },
  { name: "Contact", href: "/contact" },
  // { name: "Shop", href: "/shop" }, // Shop can be included back if required
];

const sidebarOnlyItem = { name: "Docs", href: "/docs" };

export const Navigation: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header>
      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b bg-zinc-900/50 border-zinc-800`}
      >
        <div className="container flex items-center justify-between p-6 mx-auto">
          <Link
            href="/"
            className="text-xl font-bold text-zinc-300 hover:text-zinc-100"
          >
            MARS
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-zinc-400 duration-200 hover:text-zinc-100"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Shop and Sidebar Menu Toggle */}
          <div className="flex items-center gap-4">
            {/* Shop Link */}
            <Link
              href="/shop"
              className="text-zinc-400 duration-200 hover:text-zinc-100"
            >
              Shop
            </Link>

            {/* Sidebar Menu Toggle - Always Visible */}
            <button
              className="flex items-center justify-center p-2 text-zinc-400"
              onClick={() => setSidebarOpen(!isSidebarOpen)}
            >
              {isSidebarOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Sidebar for all screens */}
        {isSidebarOpen && (
          <div className="absolute top-0 right-0 w-1/4 h-full bg-zinc-900 text-white">
            <div className="p-6">
              {/* Close button */}
              <button
                className="absolute top-0 right-0 p-4 text-zinc-300"
                onClick={() => setSidebarOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="space-y-4 mt-12">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-zinc-300 hover:text-zinc-100"
                    onClick={() => setSidebarOpen(false)} // Close sidebar on click
                  >
                    {item.name}
                  </Link>
                ))}
                {/* Sidebar-only item */}
                <Link
                  href={sidebarOnlyItem.href}
                  className="block text-zinc-300 hover:text-zinc-100"
                  onClick={() => setSidebarOpen(false)} // Close sidebar on click
                >
                  {sidebarOnlyItem.name}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
