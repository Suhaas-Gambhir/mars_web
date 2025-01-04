'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup } from "@/components/ui/radio-group"
import { AnimatedSection } from "@/components/animated-section"
import { useToast } from "@/hooks/use-toast"

const tiers = [
  { name: 'Bronze', amount: 100, benefits: 'Logo on website, Social media shoutout' },
  { name: 'Silver', amount: 500, benefits: 'Bronze benefits + Logo on rover, Team meet and greet' },
  { name: 'Gold', amount: 1000, benefits: 'Silver benefits + VIP access to competitions, Personalized plaque' },
  { name: 'Custom', amount: null, benefits: 'Choose your own contribution amount' },
]

export default function SponsorPage() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null)
  const [customAmount, setCustomAmount] = useState('')
  const [email, setEmail] = useState('')
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/sponsorship', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          tier: selectedTier,
          amount: selectedTier === 'Custom' ? Number(customAmount) : tiers.find(t => t.name === selectedTier)?.amount
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to submit sponsorship request')
      }

      toast({
        title: "Sponsorship Request Sent",
        description: "Thank you for your interest in sponsoring our team. We'll be in touch soon!",
      })

      // Reset form
      setSelectedTier(null)
      setCustomAmount('')
      setEmail('')
    } catch {
      toast({
        title: "Error",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="container mx-auto py-24">
      <AnimatedSection>
        <h1 className="text-4xl font-bold mb-8 text-center">Sponsor Our Team</h1>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <p className="text-lg text-center mb-12 max-w-2xl mx-auto">
          Your support helps us push the boundaries of rover technology and inspire the next generation of space explorers. Choose a sponsorship tier or enter a custom amount to contribute to our mission.
        </p>
      </AnimatedSection>
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
        <AnimatedSection delay={0.2}>
          <RadioGroup 
            value={selectedTier || ''} 
            onValueChange={setSelectedTier} 
            className="grid gap-6 grid-cols-1 md:grid-cols-2 mb-8"
          >
            {tiers.map((tier) => (
              <motion.div 
                key={tier.name} 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setSelectedTier(tier.name)}
              >
                <Card 
                  className={`relative cursor-pointer min-h-[240px] p-2 ${
                    selectedTier === tier.name ? 'border-primary border-2' : ''
                  }`}
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl">{tier.name}</CardTitle>
                    <CardDescription className="text-base">
                      {tier.amount ? `$${tier.amount}` : 'Custom Amount'}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed">{tier.benefits}</p>
                  </CardContent>
                  <input
                    type="radio"
                    name="sponsorshipTier"
                    value={tier.name}
                    checked={selectedTier === tier.name}
                    onChange={() => {}}
                    className="absolute top-5 right-5"
                  />
                </Card>
              </motion.div>
            ))}
          </RadioGroup>
        </AnimatedSection>

        {selectedTier === 'Custom' && (
          <AnimatedSection delay={0.3}>
            <div className="mb-8">
              <Label htmlFor="custom-amount" className="block mb-2">Enter Your Custom Amount</Label>
              <Input
                type="number"
                id="custom-amount"
                placeholder="Enter amount in dollars"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="w-full"
                required
              />
            </div>
          </AnimatedSection>
        )}

        <AnimatedSection delay={0.4}>
          <div className="mb-8">
            <Label htmlFor="email" className="block mb-2">Your Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.5}>
          <Button type="submit" className="w-full">
            Send Sponsorship Request
          </Button>
        </AnimatedSection>
      </form>
    </div>
  )
}

