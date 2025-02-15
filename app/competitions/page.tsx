'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"

export default function CompetitionsPage() {
  return (
    <div className="container mx-auto py-24">
      <AnimatedSection>
        <h1 className="text-4xl font-bold mb-8">Australian Rover Challenge (ARCh)</h1>
      </AnimatedSection>
      <AnimatedSection>
        <p className="mb-8">
          The Australian Rover Challenge (ARCh) is a prestigious robotics competition held annually at the University of Adelaide. It brings together university teams from around the world to design, build, and operate semi-autonomous rovers capable of performing complex tasks in a simulated lunar environment.
        </p>
        <p className="mb-8">
          The challenge consists of various mission scenarios that test a rover’s mobility, autonomy, and ability to perform science and engineering tasks. Teams must demonstrate proficiency in remote operations, terrain traversal, object manipulation, and autonomous navigation, making this a truly multidisciplinary competition.
        </p>
        <p className="mb-8">
          Competing in the ARC provides students with hands-on experience in robotics, artificial intelligence, mechanical and electrical engineering, and space exploration technologies. It is an exciting opportunity to push the boundaries of innovation and contribute to the future of planetary exploration.
        </p>
      </AnimatedSection>
      <AnimatedSection>
        <h2 className="text-2xl font-semibold mt-12 mb-4">Competition Objectives</h2>
        <ul className="list-disc pl-5 mb-8">
          <li><strong>Remote Operation:</strong> Controlling the rover from a distance to complete tasks accurately.</li>
          <li><strong>Autonomy:</strong> Implementing navigation and decision-making capabilities.</li>
          <li><strong>Manipulation:</strong> Designing robotic arms or tools for interaction.</li>
          <li><strong>Resource Utilization:</strong> Evaluating and using local resources in alignment with lunar exploration initiatives.</li>
        </ul>
      </AnimatedSection>
      <AnimatedSection>
        <h2 className="text-2xl font-semibold mt-12 mb-4">Event Details</h2>
        <p className="mb-2"><strong>Dates:</strong> 27th - 30th March 2025</p>
        <p className="mb-2"><strong>Location:</strong> EXTERRES facility, University of Adelaide's Roseworthy Campus</p>
      </AnimatedSection>
      <AnimatedSection>
        <h2 className="text-2xl font-semibold mt-12 mb-4">Learn More</h2>
        <p className="mb-8">For more details, visit the <a href="https://set.adelaide.edu.au/atcsr/australian-rover-challenge/" className="text-blue-500 hover:underline">official ARC website</a>.</p>
      </AnimatedSection>
    </div>
  )
}