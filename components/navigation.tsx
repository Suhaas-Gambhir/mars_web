'use client'

import * as React from "react"
import Link from "next/link"
import { Menu} from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { ModeToggle } from "./component/theme-toggle"

const menuItems = [
  { title: "Our Team", href: "/team" },
  { title: "Competitions", href: "/competitions" },
  { title: "Rovers", href: "/rovers" },
  { title: "Partners", href: "/partners" },
  { title: "Contact", href: "/contact" },
  { title: "Join Us", href: "/recruitment" },
]

const socialLinks = [
  { title: "Instagram", href: "https://instagram.com" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/80 dark:bg-background/80 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">Macquarie Rover</span>
        </Link>

        <nav className="hidden md:flex md:space-x-4 lg:space-x-6">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary dark:text-gray-200 dark:hover:text-primary"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex md:items-center md:space-x-4">
          {socialLinks.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-muted-foreground transition-colors hover:text-primary dark:text-gray-400 dark:hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.title}
            </Link>
          ))}
        </div>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-lg font-medium transition-colors hover:text-primary dark:text-gray-200 dark:hover:text-primary"
                >
                  {item.title}
                </Link>
              ))}
              <div className="flex flex-wrap gap-4 pt-4">
                {socialLinks.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-muted-foreground transition-colors hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
        <ModeToggle />
      </div>
    </header>
  )
}
