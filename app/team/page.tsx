'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"

const subTeams = [
  {
    name: "Arm",
    description: "The Arm team designs and builds the robotic arm, enabling precise manipulation of objects. This involves developing a lightweight yet durable mechanism capable of performing intricate tasks such as grasping tools, interacting with switches, and operating instruments. The team works closely with software engineers to ensure seamless control and automation.",
    leads: ["Lead Name 1", "Lead Name 2"]
  },
  {
    name: "Structures",
    description: "The Structures team focuses on the structural framework of the rover, ensuring durability and mobility across rough terrain. They design and refine the rover’s suspension, drive systems, and body structure to support all subsystems while maintaining optimal weight and stability.",
    leads: ["Lead Name 3", "Lead Name 4"]
  },
  {
    name: "Science",
    description: "The Science team develops the rover’s scientific capabilities, including instruments for analyzing the environment and detecting relevant materials. They research planetary conditions, design experiments, and integrate hardware for soil and atmospheric analysis, contributing to resource identification and exploration objectives.",
    leads: ["Lead Name 5", "Lead Name 6"]
  },
  {
    name: "Electrical",
    description: "The Electrical team is responsible for the rover’s power distribution, wiring, and electronic control systems. They design circuit boards, manage energy efficiency, and ensure reliable communication between sensors, motors, and computing systems. Their work is essential for ensuring the rover’s stability and responsiveness in dynamic environments.",
    leads: ["Lead Name 7", "Lead Name 8"]
  },
  {
    name: "Software & Autonomous Systems",
    description: "The Software & Autonomous Systems team develops the control software that allows the rover to operate both manually and autonomously. They implement navigation algorithms, sensor fusion techniques, and machine learning models to enhance autonomous decision-making and obstacle avoidance.",
    leads: ["Lead Name 9", "Lead Name 10"]
  },
  {
    name: "Administrative",
    description: "The Administrative team oversees logistics, outreach, and team coordination. They manage sponsorships, event planning, public engagement, and documentation, ensuring the team operates efficiently and effectively while maintaining strong industry and community connections.",
    leads: ["Lead Name 11", "Lead Name 12"]
  }
];

export default function TeamPage() {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h1 className="text-5xl font-bold text-center mb-8">Who Are We?</h1>
          <p className="text-lg text-center mb-8 max-w-3xl mx-auto">The Macquarie Aerospace Rover Society (MARS) is an exciting, student-led initiative offering a multi-disciplinary experience. Our team is composed of passionate students from various fields, working together to design and develop innovative rover systems. We aim to push the boundaries of exploration while fostering collaboration between engineering, science, and technology disciplines.</p>
        </AnimatedSection>
        <AnimatedSection>
          <h1 className="text-5xl font-bold text-center mb-8">Our Team</h1>
          <p className="text-lg text-center mb-8 max-w-3xl mx-auto">Our team brings together students from diverse fields, including engineering, science, and technology, to collaboratively design and develop innovative rover systems. Each sub-team plays a crucial role in advancing our capabilities and pushing the boundaries of exploration.</p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subTeams.map((team, index) => (
            <AnimatedSection key={team.name} delay={index * 0.1}>
              <Card className="hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">{team.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-700 dark:text-neutral-400">{team.description}</p>
                  <p className="mt-4 font-semibold">Leads:</p>
                  <ul className="list-disc list-inside text-gray-700">
                    {team.leads.map((lead) => (
                      <li key={lead} className="text-gray-700 dark:text-neutral-400">{lead}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <AnimatedSection>
            <a
              href="/recruitment"
              className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition duration-300"
            >
              Join Now
            </a>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}