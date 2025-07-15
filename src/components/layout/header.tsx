"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme/theme-toggle"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/65 backdrop-blur supports-[backdrop-filter]:bg-background/65">
      <div className="flex h-28 items-center justify-between px-10">
        <div className="flex items-center space-x-6">
          <Link href="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <Image src="/mars.png" alt="Mars" width={51} height={51} />
            <span className="text-3xl font-bold dark:text-white">MARS</span>
          </Link>
        </div>
        
        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <nav className="hidden md:flex items-center space-x-6">
              <Link 
                href="/" 
                className="text-2xl font-normal transition-colors hover:text-primary"
              >
                Home
              </Link>
              <Link 
                href="/team" 
                className="text-2xl font-normal transition-colors hover:text-primary" 
              >
                Team
              </Link>
              <Link 
                href="/events" 
                className="text-2xl font-normal transition-colors hover:text-primary" 
              >
                Events
              </Link>
              <Link 
                href="/sponsors" 
                className="text-2xl font-normal transition-colors hover:text-primary" 
              >
                Sponsors Us
              </Link> 
              <Link 
                href="/blog" 
                className="text-2xl font-normal transition-colors hover:text-primary"
              >
                Blog
              </Link>
              <Link 
                href="/contact" 
                className="text-2xl font-normal transition-colors hover:text-primary"
              >
                Contact
              </Link>
          </nav>
        </div>
        <div className="hidden md:flex items-center space-x-4">
        <Button 
          onClick={() => window.open('https://www.instagram.com/mq_rover/', '_blank')} 
          variant="ghost" 
          size="icon"
          aria-label="Follow us on Instagram"
          className="hover:bg-primary/10 transition-colors"
        >
            <Instagram />
          </Button>
          <Button 
            onClick={() => window.open('https://www.linkedin.com/company/macquarie-aerospace-rover-society/', '_blank')} 
            variant="ghost" 
            size="icon"
            aria-label="Follow us on LinkedIn"
            className="hover:bg-primary/10 transition-colors"
          >
            <Linkedin />
          </Button>
          <ThemeToggle />
          <Button asChild>
              <Link href="/join">Join Now</Link>
            </Button> 
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <nav className="container py-4 space-y-4">
            <Link 
              href="/" 
              className="block text-lg font-medium transition-colors hover:text-primary py-2"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              href="/team" 
              className="block text-lg font-medium transition-colors hover:text-primary py-2"
              onClick={closeMenu}
            >
              Team
            </Link>
            <Link 
              href="/events" 
              className="block text-lg font-medium transition-colors hover:text-primary py-2"
              onClick={closeMenu}
            >
              Events
            </Link>
            <Link 
              href="/sponsors" 
              className="block text-lg font-medium transition-colors hover:text-primary py-2"
              onClick={closeMenu}
            >
              Sponsors Us
            </Link>
            <Link 
              href="/blog" 
              className="block text-lg font-medium transition-colors hover:text-primary py-2"
              onClick={closeMenu}
            >
              Blog
            </Link>
            <Link 
              href="/join" 
              className="block text-lg font-medium transition-colors hover:text-primary py-2"
              onClick={closeMenu}
            >
              Join Us
            </Link>
            <Link 
              href="/contact" 
              className="block text-lg font-medium transition-colors hover:text-primary py-2"
              onClick={closeMenu}
            >
              Contact
            </Link>
            <div className="pt-4 border-t flex flex-row items-center justify-between space-y-4">
              <div className="flex items-center space-x-2">
                <Button 
                  onClick={() => window.open('https://www.instagram.com/mq_rover/', '_blank')} 
                  variant="ghost" 
                  size="icon"
                  aria-label="Follow us on Instagram"
                  className="hover:bg-primary/10 transition-colors"
                >
                  <Instagram />
                </Button>
                <Button 
                  onClick={() => window.open('https://www.linkedin.com/company/macquarie-aerospace-rover-society/', '_blank')} 
                  variant="ghost" 
                  size="icon"
                  aria-label="Follow us on LinkedIn"
                  className="hover:bg-primary/10 transition-colors"
                >
                  <Linkedin />
                </Button>
              </div>
              <ThemeToggle />
              <Button asChild className="w-1/2">
                <Link href="/join" onClick={closeMenu}>Join Now</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
} 