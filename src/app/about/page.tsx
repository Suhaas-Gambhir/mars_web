"use client"

import { useState } from 'react'
import { ChevronRight, Users, Rocket, Target, Calendar, Wrench, Code, Zap, FlaskConical, Camera, Globe, DollarSign, Settings } from 'lucide-react'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WhatWeDoSection />
      <TeamsSection />
      <TimelineSection />
      <FAQSection />
    </main>
  )
}

function HeroSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge className="mb-4">About MARS</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold">
              Building the Future of 
              <span className="text-primary"> Space Robotics</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're a student-led team building a semi-autonomous lunar rover for the 
              <strong> Australian Rover Challenge 2026</strong>. Join us to gain hands-on experience 
              in space robotics, interdisciplinary teamwork, and cutting-edge design.
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg">
                <Link href="/join">Join Our Mission</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/arch">Learn About ARCh</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/25 to-white/10 blur-2xl rounded-full transform scale-105 animate-pulse"></div>
            <Image
              src="/image-placeholder.png"
              alt="MARS Team Working on Rover"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg z-10">
              <div className="text-2xl font-bold">2026</div>
              <div className="text-sm">Competition Year</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhatWeDoSection() {
  const highlights = [
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Competition Ready",
      description: "Building for the Australian Rover Challenge 2026 with released rules and requirements"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "All Welcome",
      description: "Engineers and non-engineers alike - there's a place for everyone on our team"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Hands-On Learning",
      description: "Gain practical experience in space robotics and cutting-edge technology"
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">What We Do</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We design, build, and test our rover from the ground up using a project-based team structure
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {highlights.map((item, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                  <div className="text-primary">{item.icon}</div>
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function TeamsSection() {
  const projectTeams = [
    {
      name: "Project Wally",
      description: "Core rover platform and mobility systems",
      icon: <Wrench className="h-6 w-6" />,
      image: "/image-placeholder.png",
      skills: ["Mechanical Design", "Chassis Engineering", "Mobility Systems"]
    },
    {
      name: "Robotic Arm Project",
      description: "Precision manipulator for competition tasks (with MURC)",
      icon: <Code className="h-6 w-6" />,
      image: "/image-placeholder.png",
      skills: ["Robotics", "Control Systems", "Precision Engineering"]
    },
    {
      name: "EEV Project",
      description: "Environment Extraction Vessel for science payload",
      icon: <FlaskConical className="h-6 w-6" />,
      image: "/image-placeholder.png",
      skills: ["Science Payload", "Regolith Analysis", "Extraction Systems"]
    }
  ]

  const operationsTeams = [
    {
      name: "Media & Marketing",
      description: "Content creation, branding, and outreach",
      icon: <Camera className="h-6 w-6" />,
      skills: ["Content Creation", "Social Media", "Brand Design"]
    },
    {
      name: "Website Team",
      description: "UX/UI design and site maintenance",
      icon: <Globe className="h-6 w-6" />,
      skills: ["Web Development", "UX/UI Design", "Site Maintenance"]
    },
    {
      name: "Business & Sponsorship",
      description: "Grants, industry partners, and pitching",
      icon: <DollarSign className="h-6 w-6" />,
      skills: ["Fundraising", "Partnerships", "Business Development"]
    },
    {
      name: "Management Team",
      description: "Project coordination and timeline management",
      icon: <Settings className="h-6 w-6" />,
      skills: ["Project Management", "Team Coordination", "Planning"]
    }
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">Our Teams</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose between hands-on engineering projects or operations teams that keep everything running
          </p>
        </div>

        {/* Project Teams */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            <Zap className="inline h-6 w-6 mr-2 text-primary" />
            Project Teams
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {projectTeams.map((team, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={team.image}
                    alt={team.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="text-primary">{team.icon}</div>
                    <CardTitle className="text-lg">{team.name}</CardTitle>
                  </div>
                  <CardDescription>{team.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {team.skills.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Operations Teams */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">
            <Users className="inline h-6 w-6 mr-2 text-primary" />
            Operations Teams
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {operationsTeams.map((team, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-2 p-3 bg-primary/10 rounded-full w-fit">
                    <div className="text-primary">{team.icon}</div>
                  </div>
                  <CardTitle className="text-lg">{team.name}</CardTitle>
                  <CardDescription className="text-sm">{team.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {team.skills.map((skill, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">How We Work</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Regular meetings, hands-on workshops, and collaborative learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <Calendar className="h-12 w-12 mx-auto mb-4 text-primary" />
              <CardTitle>Team Meetings</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Every two weeks (weekly closer to competition)
              </p>
              <Badge variant="outline">Flexible Schedule</Badge>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Code className="h-12 w-12 mx-auto mb-4 text-primary" />
              <CardTitle>Skills Workshops</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                PCB Design, Git/GitHub, CAD, and more
              </p>
              <Badge variant="outline">With Other Societies</Badge>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
              <CardTitle>Project Work</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Individual team meetings and hands-on building
              </p>
              <Badge variant="outline">Self-Paced</Badge>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="/join">Ready to Get Started?</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  const faqs = [
    {
      q: 'Who can join?',
      a: 'Any Macquarie student! No engineering background or robotics experience required — we welcome all backgrounds and teach the basics.'
    },
    {
      q: 'Can first-years get involved?',
      a: 'Absolutely! Many of our members join in their first year. It\'s a great time to start building skills and making friends.'
    },
    {
      q: 'How much time commitment is required?',
      a: 'Flexible! Team meetings every two weeks (weekly closer to competition). Project teams have additional meetings, but you can work around your schedule.'
    },
    {
      q: 'I\'m not sure which team suits me — what should I do?',
      a: 'Perfect! Fill out the EOI form and chat with us. Explore project teams (Wally, Robotic Arm, EEV) or operations teams (Media, Website, Business, Management). You can switch if needed.'
    },
    {
      q: 'What skills will I learn?',
      a: 'Technical: CAD, coding, PCB design, robotics. Soft skills: teamwork, leadership, project management, communication. Plus workshops with other societies!'
    },
    {
      q: 'Do you run social events?',
      a: 'Yes! Game nights, society collaborations, hands-on workshops, and team building events throughout the semester.'
    },
    {
      q: 'How do I join?',
      a: 'Visit mqrover.space and fill out our Expression of Interest (EOI) form. We\'ll send you a welcome email with society info and Discord server access!'
    },
  ];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about joining MARS
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <Card key={faq.q} className="overflow-hidden">
                <button
                  className="w-full flex justify-between items-center px-6 py-4 text-left hover:bg-muted/50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  aria-expanded={openIndex === idx}
                  aria-controls={`faq-answer-${idx}`}
                  type="button"
                >
                  <span className="text-lg font-medium">{faq.q}</span>
                  <ChevronRight className={`ml-4 h-5 w-5 transition-transform ${openIndex === idx ? 'rotate-90' : ''}`} />
                </button>
                {openIndex === idx && (
                  <div id={`faq-answer-${idx}`} className="px-6 py-4 border-t bg-muted/20">
                    <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">Ready to join our mission to Mars?</p>
            <Button size="lg" asChild>
              <Link href="/join">Apply Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
