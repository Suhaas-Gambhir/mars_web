import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 sm:py-12 px-4 sm:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-5xl leading-[1.5] font-semibold">Ready to launch to <span className="text-primary">MARS</span>?</h3>
            <div className="flex flex-row gap-2">
              <Button variant="outline" asChild>
                <Link href="/join">Join us</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/sponsors">Sponsor Us</Link> 
              </Button>
            </div>
          </div>
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-2xl font-semibold">Website</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/events" className="text-foreground dark:text-white text-lg hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-foreground dark:text-white text-lg hover:text-foreground transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-foreground dark:text-white text-lg hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-foreground dark:text-white text-lg hover:text-foreground transition-colors"> 
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t">
          <p className="text-sm text-muted-foreground text-start">
          Built by <Link href="https://www.mqrover.space/" className="text-muted-foreground hover:text-foreground transition-colors">Macquarie Aerospace Rover Society</Link>. The source code is available on <Link href="https://github.com/mqrover" className="text-muted-foreground hover:text-foreground transition-colors">GitHub</Link>.
          </p>
        </div>
      </div>
    </footer>
  )
} 