'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { AnimatedSection } from "@/components/animated-section"
import { useState } from 'react'
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      })

      if (!response.ok) {
        throw new Error('Failed to submit contact form')
      }

      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you soon!",
      })

      // Reset form
      setName('')
      setEmail('')
      setMessage('')
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="container mx-auto py-24">
      <AnimatedSection>
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      </AnimatedSection>
      <div className="max-w-2xl mx-auto">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <AnimatedSection delay={0.1}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <Input 
                id="name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name" 
                required
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <Input 
                id="email" 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com" 
                required
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <Textarea 
                id="message" 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message" 
                rows={6} 
                required
              />
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

