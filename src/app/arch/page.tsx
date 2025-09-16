import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { Calendar, MapPin, Users, Target, Trophy, ExternalLink } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Australian Rover Challenge (ARCh)",
  description: "Learn about the Australian Rover Challenge, a prestigious robotics competition that MARS competes in. Discover the competition objectives, event details, and how to get involved.",
  keywords: ["Australian Rover Challenge", "ARCh", "robotics competition", "rover", "space exploration", "university competition", "MARS"],
}

export default function ARChPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative mb-16 overflow-hidden rounded-2xl bg-gradient-to-r from-primary/10 via-background to-secondary/10 p-8 md:p-12">
        <div className="relative z-10 grid gap-8 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <Badge className="mb-2">Competition</Badge>
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                Australian Rover Challenge
              </h1>
              <p className="text-xl text-muted-foreground">
                A prestigious robotics competition bringing together university teams from around the world
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4" />
                <span>26th - 29th March 2026</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4" />
                <span>University of Adelaide Roseworthy Campus</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <Image
              src="/mini-wally.png"
              alt="MARS Rover"
              width={300}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
          {/* About Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5" />
                About the Challenge
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                The Australian Rover Challenge (ARCh) is held annually at the University of Adelaide 
                Roseworthy Campus, bringing together university teams to design, build, and operate 
                semi-autonomous rovers capable of performing complex tasks in a simulated lunar environment.
              </p>
              
              <p className="text-muted-foreground">
                The challenge consists of various mission scenarios including the ELO2 Post Landing Task, 
                Caterpillar Excavation & Construction Task, iSpace Space Resources Task, and Boeing Mapping & 
                Autonomous Task. Teams must demonstrate proficiency in remote operations, terrain traversal, 
                object manipulation, and autonomous navigation.
              </p>

              <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                "While the ultimate focus of our Centre is to support long-term human presence beyond 
                low-earth orbit, we know that our astronauts will necessarily be preceded, and then 
                accompanied by, significant numbers and varied types of remotely operated or 
                semi-autonomous robots."
                <footer className="mt-2 text-sm font-medium">— A/Prof John Culton, Director, Andy Thomas Centre for Space Resources</footer>
              </blockquote>
            </CardContent>
          </Card>

          {/* Competition Objectives */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Competition Objectives
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <h4 className="font-semibold">ELO2 Post Landing Task</h4>
                  <p className="text-sm text-muted-foreground">
                    Complex mission scenarios testing rover deployment and initial operations
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Caterpillar Excavation & Construction</h4>
                  <p className="text-sm text-muted-foreground">
                    Testing excavation capabilities and construction task completion
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">iSpace Space Resources Task</h4>
                  <p className="text-sm text-muted-foreground">
                    Evaluating and utilizing local resources for space exploration
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Boeing Mapping & Autonomous Task</h4>
                  <p className="text-sm text-muted-foreground">
                    Autonomous navigation and environmental mapping capabilities
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* MARS 2026 Goals */}
          <Card>
            <CardHeader>
              <CardTitle>MARS Team 2026 Goals</CardTitle>
              <CardDescription>Our vision for the upcoming competition</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                The Macquarie Aerospace Rover Society (MARS) is working hard to improve our rover design, 
                autonomous capabilities, and task performance for the 2026 Australian Rover Challenge. 
                We're focused on developing cutting-edge solutions and building a strong team to achieve our goals.
              </p>
              
              <div className="p-4 bg-primary/5 rounded-lg">
                <h4 className="font-semibold mb-2">2026 Competition Objectives</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Improve rover autonomous navigation systems</li>
                  <li>• Enhance robotic arm precision and manipulation</li>
                  <li>• Optimize task completion efficiency</li>
                  <li>• Strengthen team collaboration and project management</li>
                  <li>• Achieve top performance in all competition tasks</li>
                </ul>
              </div>
              
              <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                <Users className="h-5 w-5 text-primary" />
                <p className="text-sm">
                  <strong>Join us</strong> to help achieve our 2026 competition goals and contribute to the future of space robotics!
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Key Dates Timeline */}
          <Card>
            <CardHeader>
              <CardTitle>2026 Competition Timeline</CardTitle>
              <CardDescription>Important deadlines and milestones</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border"></div>
                
                <div className="space-y-6">
                  <div className="relative flex items-start gap-4">
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-muted border-2 border-border">
                      <Calendar className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div className="flex-1 pt-2">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline" className="text-xs">Aug 20, 2025</Badge>
                        <span className="text-xs text-muted-foreground">Registration Opens</span>
                      </div>
                      <h4 className="font-medium text-sm">Rules and Requirements Released</h4>
                      <p className="text-xs text-muted-foreground">Team registration opens for 2026 competition</p>
                    </div>
                  </div>

                  <div className="relative flex items-start gap-4">
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-muted border-2 border-border">
                      <Target className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div className="flex-1 pt-2">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline" className="text-xs">Sep 4, 2025</Badge>
                        <span className="text-xs text-muted-foreground">CDR Released</span>
                      </div>
                      <h4 className="font-medium text-sm">Critical Design Review Available</h4>
                      <p className="text-xs text-muted-foreground">CDR guidelines and templates released</p>
                    </div>
                  </div>

                  <div className="relative flex items-start gap-4">
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10 border-2 border-destructive/50">
                      <Users className="h-5 w-5 text-destructive" />
                    </div>
                    <div className="flex-1 pt-2">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="destructive" className="text-xs">Sep 17, 2025</Badge>
                        <span className="text-xs text-destructive">Deadline</span>
                      </div>
                      <h4 className="font-medium text-sm">Team Registration Closes</h4>
                      <p className="text-xs text-muted-foreground">Final day to register your team</p>
                    </div>
                  </div>

                  <div className="relative flex items-start gap-4">
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-muted border-2 border-border">
                      <Trophy className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div className="flex-1 pt-2">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline" className="text-xs">Oct 29, 2025</Badge>
                        <span className="text-xs text-muted-foreground">Submission</span>
                      </div>
                      <h4 className="font-medium text-sm">CDR Due + SAR Guidelines</h4>
                      <p className="text-xs text-muted-foreground">CDR submission deadline, SAR and Cost Report guidelines released</p>
                    </div>
                  </div>

                  <div className="relative flex items-start gap-4">
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-muted border-2 border-border">
                      <ExternalLink className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div className="flex-1 pt-2">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline" className="text-xs">Feb 11, 2026</Badge>
                        <span className="text-xs text-muted-foreground">Submission</span>
                      </div>
                      <h4 className="font-medium text-sm">SAR and Video Due</h4>
                      <p className="text-xs text-muted-foreground">System Acceptance Review and demonstration video submission</p>
                    </div>
                  </div>

                  <div className="relative flex items-start gap-4">
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-muted border-2 border-border">
                      <Calendar className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div className="flex-1 pt-2">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline" className="text-xs">Mar 11, 2026</Badge>
                        <span className="text-xs text-muted-foreground">Final Submission</span>
                      </div>
                      <h4 className="font-medium text-sm">Cost Report Due</h4>
                      <p className="text-xs text-muted-foreground">Final cost analysis and budget report submission</p>
                    </div>
                  </div>

                  <div className="relative flex items-start gap-4">
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 border-2 border-primary">
                      <Trophy className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 pt-2">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="default" className="text-xs">Mar 25, 2026</Badge>
                        <span className="text-xs text-primary">Event Begins</span>
                      </div>
                      <h4 className="font-medium text-sm">Opening Ceremony</h4>
                      <p className="text-xs text-muted-foreground">Official start of the 2026 Australian Rover Challenge</p>
                    </div>
                  </div>

                  <div className="relative flex items-start gap-4">
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary border-2 border-primary">
                      <Trophy className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div className="flex-1 pt-2">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge className="text-xs">Mar 26-29, 2026</Badge>
                        <span className="text-xs text-primary">Competition</span>
                      </div>
                      <h4 className="font-semibold text-sm">Competition Period</h4>
                      <p className="text-xs text-muted-foreground">Four days of rover challenges and demonstrations</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-3 bg-muted/50 rounded-lg">
                <p className="text-xs text-muted-foreground">
                  <strong>Note:</strong> Dates may be adjusted at the discretion of the judges. 
                  All registered teams will be notified in advance of any changes.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Why It Matters */}
          <Card>
            <CardHeader>
              <CardTitle>Why ARCh Matters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Competing in the ARC provides students with hands-on experience in robotics, 
                artificial intelligence, mechanical and electrical engineering, and space exploration 
                technologies. The skill sets developed align perfectly with efforts to develop infrastructure 
                for long-duration human operations in deep space, including NASA's Artemis program.
              </p>
              
              <p className="text-muted-foreground">
                This competition represents an incredible opportunity for students to gain practical 
                experience in space robotics and contribute to the advancement of planetary exploration 
                technologies. It's an exciting opportunity to push the boundaries of innovation and 
                contribute to the future of space exploration.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Event Details */}
          <Card>
            <CardHeader>
              <CardTitle>Event Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 mt-0.5 text-primary" />
                  <div>
                    <p className="font-medium">Competition Dates</p>
                    <p className="text-sm text-muted-foreground">26th - 29th March 2026</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 mt-0.5 text-primary" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">
                      University of Adelaide<br />
                      Roseworthy Campus<br />
                      South Australia
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Competition Resources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button asChild className="w-full">
                <a 
                  href="https://australianroverchallenge.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Official ARC Website
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
              
              <Button variant="outline" asChild className="w-full">
                <a 
                  href="https://set.adelaide.edu.au/atcsr/australian-rover-challenge/registration" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Team Registration
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
              
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground">Competition Documents:</p>
                <div className="space-y-1">
                  <a 
                    href="https://set.adelaide.edu.au/atcsr/australian-rover-challenge/ua/media/762/arch_rules_and_regulations.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-xs text-primary hover:underline"
                  >
                    Rules & Requirements
                  </a>
                  <a 
                    href="https://set.adelaide.edu.au/atcsr/australian-rover-challenge/ua/media/831/arch_2026_cdr_guidelines.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-xs text-primary hover:underline"
                  >
                    CDR Guidelines
                  </a>
                  <a 
                    href="https://set.adelaide.edu.au/atcsr/australian-rover-challenge/ua/media/711/arch-2025-participant-handbook-v2-1.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-xs text-primary hover:underline"
                  >
                    Participant Handbook
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Join MARS</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button asChild className="w-full">
                <Link href="/join" className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Join Our Team
                </Link>
              </Button>
              
              <p className="text-sm text-muted-foreground mb-4">
                Interested in participating in the Australian Rover Challenge? The MARS team is 
                always looking for passionate students to join our robotics projects and contribute 
                to our 2026 competition goals.
              </p>
              
              <Button variant="outline" asChild className="w-full">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
