"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, Instagram } from 'lucide-react'

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "./theme-toggle"

const menuItems = [
  {
    title: "About",
    items: [
      {
        title: "Our Team",
        href: "/team",
        description: "Meet the passionate team behind Macquarie Rover.",
      },
      {
        title: "Partners",
        href: "/partners",
        description: "Our valued partners and supporters.",
      },
      {
        title: "Contact",
        href: "/contact",
        description: "Get in touch with us.",
      },
    ],
  },
  {
    title: "Projects",
    items: [
      {
        title: "Rovers",
        href: "/rovers",
        description: "Explore our rover projects and innovations.",
      },
      {
        title: "Competitions",
        href: "/competitions",
        description: "Learn about the competitions we participate in.",
      },
    ],
  },
  {
    title: "Get Involved",
    items: [
      {
        title: "Join Us",
        href: "/recruitment",
        description: "Become a part of our growing team.",
      },
      {
        title: "Sponsor Us",
        href: "/sponsor",
        description: "Support our mission and projects.",
      },
    ],
  },
]

const socialLinks = [
  {
    title: "Instagram",
    href: "https://instagram.com",
    icon: <Instagram className="h-5 w-5" />,
  },
]

export function Navigation() {


  return (
    <>
    <div className="sticky top-0 z-40 w-full">
      <div className="backdrop-blur-sm bg-background/80 border-b border-border absolute inset-0"></div>
      <header
        className={cn(
          "relative w-full",
          
        )}
        aria-label="Main"
        data-orientation="horizontal"
        dir="ltr"
      >
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="mx-auto flex h-16 w-full items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              {/* <Icons.logo className="h-6 w-6" /> */}
              <span className="text-xl font-bold">Macquarie Rover</span>
            </Link>

            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList className="flex items-center">
                {menuItems.map((section) => (
                  <NavigationMenuItem key={section.title}>
                    <NavigationMenuTrigger className="h-16 flex items-center rounded-md mx-1 py-1 text-sm font-medium transition-colors hover:text-primary focus-visible:text-primary lg:mx-3 lg:pr-0 group">
                      {section.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[30rem] backdrop-blur-sm bg-background/80 rounded-md border border-border">
                        <ul className="grid w-full gap-3 p-4">
                          {section.items.map((item) => (
                            <ListItem key={item.title} title={item.title} href={item.href}>
                              {item.description}
                            </ListItem>
                          ))}
                        </ul>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <div className="hidden md:flex items-center space-x-4">
              {socialLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.icon}
                  <span className="sr-only">{item.title}</span>
                </Link>
              ))}
              <ModeToggle />
            </div>

            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="inline-flex items-center justify-center rounded-md p-1 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="backdrop-blur-sm bg-background/80">
                <div className="flex flex-col space-y-4">
                  {menuItems.map((section) => (
                    <div key={section.title} className="space-y-3">
                      <h2 className="text-lg font-semibold">{section.title}</h2>
                      <div className="space-y-2">
                        {section.items.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="block text-sm text-muted-foreground transition-colors hover:text-primary"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="flex flex-wrap gap-4 pt-4">
                    {socialLinks.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="text-muted-foreground transition-colors hover:text-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.icon}
                        <span className="sr-only">{item.title}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </div>
    </>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-primary">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
