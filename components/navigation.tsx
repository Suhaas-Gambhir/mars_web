"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

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

export function Navigation() {
  return (
    <NavigationMenu className="relative z-10 max-w-max flex-1 items-center justify-center">
      <NavigationMenuList className="relative z-20 flex flex-1 list-none items-center justify-center space-x-1 p-4 bg-white/10 backdrop-blur-md rounded-lg">
        {menuItems.map((section) => (
          <NavigationMenuItem key={section.title}>
            <NavigationMenuTrigger className="bg-transparent data-[state=open]:bg-white/20 text-white">
              {section.title}
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white/10 backdrop-blur-md">
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px]">
                {section.items.map((item) => (
                  <ListItem
                    key={item.title}
                    title={item.title}
                    href={item.href}
                  >
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 focus:bg-white/10",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-white">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-white/70">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

