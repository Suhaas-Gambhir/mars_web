'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Users, Star, Target } from 'lucide-react'
import Link from 'next/link'

const CURRENT_YEARS = [
  '1st year',
  '2nd year',
  '3rd year',
  '4th year +',
  'Other'
]

const SUB_TEAMS = [
  'Structures (Chassis/Suspension/Drive System and Fabrication)',
  'Science Payload (Scientific Instrumentation/Sample Collection/Data Analysis)',
  'Electrical (Power Systems/Motor Control/PCB Design and Wiring)',
  'Software (Autonomous/Computer Vision/Website Development)',
  'Business, Outreach & Sponsorship (Sponsorship/Fundraising/Industry Networking)',
  'Marketing & Media (Branding/Social Media/Content Creation and Outreach)',
  'Management (Team Coordination/Logistics/Strategic Planning)'
]

export default function JoinUsPage() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    university_email: '',
    student_number: '',
    degree_major: '',
    current_year: '',
    sub_team_interest: [] as string[],
    sub_team_interest_other: '',
    experience: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    if (name === 'sub_team_interest') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => {
        const newInterests = checked
          ? [...prev.sub_team_interest, value]
          : prev.sub_team_interest.filter(v => v !== value)
        return { ...prev, sub_team_interest: newInterests }
      })
    } else if (type === 'radio') {
      setFormData(prev => ({ ...prev, [name]: value }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    try {
      const res = await fetch('/api/eoi', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!res.ok) throw new Error('Failed to submit EOI')
      setSubmitStatus('success')
      setFormData({
        first_name: '',
        last_name: '',
        university_email: '',
        student_number: '',
        degree_major: '',
        current_year: '',
        sub_team_interest: [],
        sub_team_interest_other: '',
        experience: ''
      })
    } catch (error) {
      setSubmitStatus('error')
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container  mt-5">
      <div className="text-center mb-12 sm:mb-16 px-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Expression of Interest (EOI)</h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
          Expression of interest form for 2025/2026 Rover team.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Benefits Section (unchanged) */}
        <div className="lg:col-span-1">
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Why Join MARS?</CardTitle>
                <CardDescription>
                  Discover the benefits of being part of our community
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">Community</h3>
                    <p className="text-sm text-muted-foreground">
                      Connect with passionate individuals who share your interests and goals.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Star className="w-6 h-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">Exclusive Events</h3>
                    <p className="text-sm text-muted-foreground">
                      Access to workshops, meetups, and special events designed for our members.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Target className="w-6 h-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">Growth Opportunities</h3>
                    <p className="text-sm text-muted-foreground">
                      Learn new skills, gain experience, and advance your career with our support.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <Button asChild className="w-full">
                    <Link href="/events">
                      Upcoming Events
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        {/* EOI Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Application Form</CardTitle>
              <CardDescription>
                * Indicates required question
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first_name" className="text-lg font-bold">First name *</Label>
                    <Input id="first_name" name="first_name" value={formData.first_name} onChange={handleInputChange} required className="text-lg" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last_name" className="text-lg font-bold">Last name *</Label>
                    <Input id="last_name" name="last_name" value={formData.last_name} onChange={handleInputChange} required className="text-lg" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="student_number" className="text-lg font-bold">Student number *</Label>
                    <Input id="student_number" name="student_number" value={formData.student_number} onChange={handleInputChange} required className="text-lg" />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="university_email" className="text-lg font-bold">University email address (@students.mq.edu.au) *</Label>
                    <Input id="university_email" name="university_email" type="email" value={formData.university_email} onChange={handleInputChange} required pattern=".+@students\.mq\.edu\.au" className="text-lg" />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="degree_major" className="text-lg font-bold">Degree/Major *</Label>
                    <Input id="degree_major" name="degree_major" value={formData.degree_major} onChange={handleInputChange} required className="text-lg" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-lg font-bold">Current year *</Label>
                  <div className="flex flex-wrap gap-4">
                    {CURRENT_YEARS.map(year => (
                      <label key={year} className="flex items-center gap-2 text-lg">
                        <input
                          type="radio"
                          name="current_year"
                          value={year}
                          checked={formData.current_year === year}
                          onChange={handleInputChange}
                          required
                        />
                        {year}
                      </label>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-lg font-bold">Sub-Team interest (pick as many as you want) *</Label>
                  <div className="flex flex-col gap-2">
                    {SUB_TEAMS.map(team => (
                      <label key={team} className="flex items-center gap-2 text-lg">
                        <input
                          type="checkbox"
                          name="sub_team_interest"
                          value={team}
                          checked={formData.sub_team_interest.includes(team)}
                          onChange={handleInputChange}
                          required={formData.sub_team_interest.length === 0}
                        />
                        {team}
                      </label>
                    ))}
                    <div className="flex items-center gap-2 mt-2">
                      <input
                        type="checkbox"
                        name="sub_team_interest"
                        value="Other"
                        checked={formData.sub_team_interest.includes('Other')}
                        onChange={handleInputChange}
                      />
                      <span className="text-lg">Other:</span>
                      <Input
                        name="sub_team_interest_other"
                        value={formData.sub_team_interest_other}
                        onChange={handleInputChange}
                        placeholder="Please specify"
                        className="ml-2 text-lg"
                        disabled={!formData.sub_team_interest.includes('Other')}
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience" className="text-lg font-bold">Do you have any previous experience relevant to this role? If not, what interests you about joining the team?</Label>
                  <Textarea
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    rows={5}
                    className="text-lg"
                  />
                </div>
                <Button type="submit" className="w-full sm:w-auto text-lg font-bold" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit EOI'}
                </Button>
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                    <p className="text-green-800 text-sm">
                      Thank you! Your expression of interest has been submitted successfully.
                    </p>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                    <p className="text-red-800 text-sm">
                      Sorry, there was an error submitting your form. Please try again.
                    </p>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      {/* Additional Info Section (unchanged) */}
      <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="pt-8 pb-8">
              <h2 className="text-2xl font-bold mb-4">What Happens Next?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <h3 className="font-semibold mb-2">Submit Application</h3>
                  <p className="text-sm text-muted-foreground">
                    Complete the form above with your details and motivation
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <h3 className="font-semibold mb-2">Review Process</h3>
                  <p className="text-sm text-muted-foreground">
                    Our team will review your application within 2-3 business days
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <h3 className="font-semibold mb-2">Welcome Email</h3>
                  <p className="text-sm text-muted-foreground">
                    You&apos;ll receive a welcome email with next steps and resources
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto mt-16 text-center">
        <p className="text-lg">Still have questions?</p>
        <a href="/faq" className="inline-block mt-2 px-6 py-3 rounded-lg bg-primary text-white font-bold hover:bg-primary/80 transition">Read our FAQ</a>
      </div>
    </div>
  )
} 