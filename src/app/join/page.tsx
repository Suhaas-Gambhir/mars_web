'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Users, Star, Target } from 'lucide-react'
import Link from 'next/link'

export default function JoinUsPage() {
  return (
    <div className="container py-12 sm:py-16 lg:py-20">
      <div className="text-center mb-12 sm:mb-16 px-4">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Join Us</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Become part of our community and connect with like-minded individuals. 
            Fill out the form below to get started on your journey with MARS.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Benefits Section */}
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

          {/* Google Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Application Form</CardTitle>
                <CardDescription>
                  Tell us about yourself and why you&apos;d like to join our community
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  {/* Custom styling wrapper */}
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm border google-form-container">
                    <iframe
                      src="https://docs.google.com/forms/d/e/1FAIpQLScb5hJvkbuY9G-8HbKlYQjQwfUZ6nWHEy1yATIGq4_1oDvDnw/viewform?embedded=true"
                      width="100%"
                      height="800"
                      className="w-full"
                      sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-top-navigation"
                      title="MARS Join Us Application Form"
                      loading="lazy"
                      allow="fullscreen"
                    >
                      Loading…
                    </iframe>
                  </div>
                  
                  {/* Fallback message */}
                  <div className="mt-4 text-center">
                    <p className="text-sm text-muted-foreground">
                      Having trouble viewing the form?{' '}
                      <a 
                        href="https://docs.google.com/forms/d/e/1FAIpQLScb5hJvkbuY9G-/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Open in new tab
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Info Section */}
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
      </div>
    </div>
  )
} 