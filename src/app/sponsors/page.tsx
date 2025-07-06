'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { 
  Users, 
  Target, 
  TrendingUp, 
  Heart,
  Check,
  Mail,
  Building2
} from 'lucide-react'

export default function SponsorsPage() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      // TODO: Send the data to the backend
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', company: '', message: '' })
      setSelectedTier(null)
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const sponsorshipTiers = [
    {
      id: 'bronze',
      name: 'Bronze Sponsor',
      price: '$500',
      description: 'Perfect for small businesses and startups',
      color: 'bg-orange-50 border-orange-200',
      badgeColor: 'bg-orange-100 text-orange-800',
      benefits: [
        'Logo on event materials',
        'Social media mention',
        'Event attendance (2 people)',
        'Thank you post on our website'
      ]
    },
    {
      id: 'silver',
      name: 'Silver Sponsor',
      price: '$1,000',
      description: 'Great for growing companies',
      color: 'bg-gray-50 border-gray-200',
      badgeColor: 'bg-gray-100 text-gray-800',
      benefits: [
        'All Bronze benefits',
        'Featured logo placement',
        'Event attendance (4 people)',
        'Dedicated social media post',
        'Company spotlight in newsletter',
        'Exhibition table at events'
      ]
    },
    {
      id: 'gold',
      name: 'Gold Sponsor',
      price: '$2,500',
      description: 'Ideal for established companies',
      color: 'bg-yellow-50 border-yellow-200',
      badgeColor: 'bg-yellow-100 text-yellow-800',
      benefits: [
        'All Silver benefits',
        'Premium logo placement',
        'Event attendance (6 people)',
        'Speaking opportunity at events',
        'Company profile on website',
        'Custom promotional materials',
        'Priority booth selection'
      ]
    },
    {
      id: 'platinum',
      name: 'Platinum Sponsor',
      price: '$5,000',
      description: 'For major industry leaders',
      color: 'bg-blue-50 border-blue-200',
      badgeColor: 'bg-blue-100 text-blue-800',
      benefits: [
        'All Gold benefits',
        'Exclusive logo placement',
        'Event attendance (10 people)',
        'Keynote speaking opportunity',
        'Custom sponsorship package',
        'Dedicated marketing campaign',
        'VIP event access',
        'Annual partnership recognition'
      ]
    }
  ]

  return (
    <div className="container py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Sponsor MARS</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Partner with MARS and support our mission to build a thriving tech community. 
            Your sponsorship helps us create amazing events and opportunities for our members.
          </p>
        </div>

        {/* Why Sponsor Section */}
        <div className="mb-16">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">Why Sponsor MARS?</CardTitle>
              <CardDescription>
                Discover the benefits of partnering with our community
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Reach</h3>
                  <p className="text-sm text-muted-foreground">
                    Connect with our growing community of tech professionals and enthusiasts
                  </p>
                </div>
                <div className="text-center">
                  <Target className="w-12 h-12 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Brand Exposure</h3>
                  <p className="text-sm text-muted-foreground">
                    Increase your brand visibility through our events and digital platforms
                  </p>
                </div>
                <div className="text-center">
                  <TrendingUp className="w-12 h-12 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Growth</h3>
                  <p className="text-sm text-muted-foreground">
                    Support the next generation of tech talent and innovation
                  </p>
                </div>
                <div className="text-center">
                  <Heart className="w-12 h-12 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Impact</h3>
                  <p className="text-sm text-muted-foreground">
                    Make a meaningful difference in the tech community
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sponsorship Tiers */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Sponsorship Tiers</h2>
            <p className="text-lg text-muted-foreground">
              Choose the sponsorship level that best fits your goals and budget
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsorshipTiers.map((tier) => (
              <Card 
                key={tier.id}
                className={`${tier.color} cursor-pointer transition-all hover:shadow-lg ${
                  selectedTier === tier.id ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setSelectedTier(tier.id)}
              >
                <CardHeader className="text-center">
                  <Badge className={`${tier.badgeColor} mb-2`}>
                    {tier.name}
                  </Badge>
                  <CardTitle className="text-2xl font-bold text-primary">{tier.price}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {tier.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Get in Touch</CardTitle>
                <CardDescription>
                  Ready to become a sponsor? Let&apos;s discuss how we can work together.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-sm text-muted-foreground">rover.mq@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Building2 className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Partnership</h3>
                    <p className="text-sm text-muted-foreground">
                      We&apos;re open to custom sponsorship packages tailored to your needs
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Inquiry Form</CardTitle>
                <CardDescription>
                  Tell us about your sponsorship interests and we&apos;ll get back to you.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@company.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Your company name"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your sponsorship interests, preferred tier, and any questions..."
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      required
                    />
                  </div>
                  
                  {selectedTier && (
                    <div className="p-3 bg-primary/10 border border-primary/20 rounded-md">
                      <p className="text-sm">
                        <span className="font-semibold">Selected Tier:</span> {sponsorshipTiers.find(t => t.id === selectedTier)?.name}
                      </p>
                    </div>
                  )}
                  
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                  </Button>
                  
                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                      <p className="text-green-800 text-sm">
                        Thank you! Your sponsorship inquiry has been sent. We&apos;ll get back to you within 24 hours.
                      </p>
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                      <p className="text-red-800 text-sm">
                        Sorry, there was an error sending your inquiry. Please try again.
                      </p>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16">
          <Card>
            <CardContent className="pt-8 pb-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Our Impact</h2>
                <p className="text-muted-foreground">
                  See how your sponsorship helps our community grow
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">500+</div>
                  <p className="text-sm text-muted-foreground">Active Members</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">50+</div>
                  <p className="text-sm text-muted-foreground">Events Hosted</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">25+</div>
                  <p className="text-sm text-muted-foreground">Partners</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">95%</div>
                  <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 