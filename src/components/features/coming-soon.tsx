import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Clock, Rocket } from "lucide-react"

interface ComingSoonProps {
  title?: string
  description?: string
  showBackButton?: boolean
  estimatedCompletion?: string
}

export function ComingSoon({ 
  title = "Coming Soon",
  description = "We're working hard to bring you something amazing. This page is currently under development.",
  showBackButton = true,
  estimatedCompletion
}: ComingSoonProps) {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      
      {/* Content */}
      <div className="container relative z-10 text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="relative p-6 bg-primary/10 rounded-full">
              <Rocket className="h-16 w-16 text-primary animate-pulse" />
              <div className="absolute -top-2 -right-2 p-2 bg-secondary/20 rounded-full">
                <Clock className="h-6 w-6 text-secondary" />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto">
              {description}
            </p>
            
            {estimatedCompletion && (
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                Expected: {estimatedCompletion}
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {showBackButton && (
              <Button variant="outline" asChild>
                <Link href="/">
                  ← Back to Home
                </Link>
              </Button>
            )}
            <Button asChild>
              <Link href="/contact">
                Get Notified
              </Link>
            </Button>
          </div>

          {/* Progress Indicator */}
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Development in progress</p>
            <div className="w-full max-w-xs mx-auto bg-muted rounded-full h-2">
              <div className="bg-primary h-2 rounded-full animate-pulse" style={{ width: '45%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/5 rounded-full blur-lg animate-pulse" />
    </section>
  )
}
