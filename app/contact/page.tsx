'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { AnimatedSection } from "@/components/animated-section"

export default function ContactPage() {
  return (
    <div className="container mx-auto py-24">
      <AnimatedSection>
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      </AnimatedSection>
      <div className="max-w-2xl mx-auto">
        <form className="space-y-6">
          <AnimatedSection delay={0.1}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <Input id="name" placeholder="Your name" />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <Input id="email" type="email" placeholder="your@email.com" />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <Textarea id="message" placeholder="Your message" rows={6} />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <Button type="submit" className="w-full">Send Message</Button>
          </AnimatedSection>
        </form>
      </div>
    </div>
  )
}

