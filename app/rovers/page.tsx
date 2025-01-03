'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { AnimatedSection } from "@/components/animated-section"

export default function RoversPage() {
  return (
    <div className="container mx-auto py-24">
      <AnimatedSection>
        <h1 className="text-4xl font-bold mb-8">Our Rovers</h1>
      </AnimatedSection>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <AnimatedSection key={i} delay={i * 0.15}>
            <Card>
              <CardHeader>
                <CardTitle>Rover {i}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video relative mb-4">
                  <Image
                    src={`/placeholder.svg?height=400&width=600`}
                    alt={`Rover ${i}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.</p>
              </CardContent>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </div>
  )
}

