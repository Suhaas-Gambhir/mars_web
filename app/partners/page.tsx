'use client'

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { AnimatedSection } from "@/components/animated-section"

export default function PartnersPage() {
  return (
    <div className="container mx-auto py-24">
      <AnimatedSection>
        <h1 className="text-4xl font-bold mb-8">Our Partners</h1>
      </AnimatedSection>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <AnimatedSection key={i} delay={i * 0.05}>
            <Card>
              <CardContent className="p-4">
                <div className="aspect-square relative mb-4">
                  <Image
                    src={`/placeholder.svg?height=200&width=200`}
                    alt={`Partner ${i}`}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <h2 className="text-center font-semibold">Partner {i}</h2>
              </CardContent>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </div>
  )
}

