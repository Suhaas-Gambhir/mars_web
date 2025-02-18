'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

export default function RecruitmentPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: ''
  })
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch('/api/team', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit application')
      }

      toast({
        title: "Application Submitted",
        description: "Thank you for your interest! We'll review your application and get back to you soon.",
      })

      // Reset form
      setFormData({ name: '', email: '', role: '' })
    } catch {
      toast({
        title: "Error",
        description: "There was a problem submitting your application. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="container mx-auto py-24">
      <AnimatedSection>
        <h1 className="text-4xl font-bold mb-8 ml-8">Join Our Team</h1>
      </AnimatedSection>
      <div className="max-w-3xl mx-auto">
        <AnimatedSection delay={0.1}>
          {/* <p className="text-lg mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p> */}
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScb5hJvkbuY9G-8HbKlYQjQwfUZ6nWHEy1yATIGq4_1oDvDnw/viewform?embedded=true"
            className="w-full h-[calc(200vh-20px)]"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}>
            Loading…
          </iframe>

        </AnimatedSection>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {['Engineering', 'Software', 'Design', 'Management'].map((role, index) => (
            <AnimatedSection key={role} delay={0.2 + index * 0.1}>
              <Card>
                <CardHeader>
                  <CardTitle>{role} Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div> */}

        {/* <AnimatedSection delay={0.6}>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Apply Now</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="role">Interested Role</Label>
                  <Select
                    value={formData.role}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, role: value }))}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Engineering">Engineering</SelectItem>
                      <SelectItem value="Software">Software</SelectItem>
                      <SelectItem value="Design">Design</SelectItem>
                      <SelectItem value="Management">Management</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button type="submit" className="w-full">Submit Application</Button>
              </form>
            </CardContent>
          </Card>
        </AnimatedSection> */}
      </div>
    </div>
  )
}

