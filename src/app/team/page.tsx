import React from 'react';
import { TeamMemberCard, TeamMember } from '@/components/features/our-team-card';

const executiveTeam: TeamMember[] = [
  {
    name: 'Suhaas Gambhir',
    position: 'Secretary',
    image: '/suhaas-gambhir.jpeg',
    linkedin: 'https://www.linkedin.com/in/suhaasgambhir/',
  },
  {
    name: 'Jake MacKenzie Wood',
    position: 'President',
    image: '/jake-mackenzie-wood.jpeg',
    linkedin: 'https://www.linkedin.com/in/jakemacwood/',
  },
  {
    name: 'Adrian Kane',
    position: 'Treasurer',
    image: '/adrian-kane.png',
  },
];

const projectLeadership: TeamMember[] = [
  {
    name: 'Suhaas Gambhir',
    position: 'Rover Lead',
    image: '/image-placeholder.png',
    linkedin: 'https://www.linkedin.com/in/suhaasgambhir/',
  },
  {
    name: 'Suhaas Gambhir',
    position: 'Robotic Arm',
    image: '/image-placeholder.png',
    linkedin: 'https://www.linkedin.com/in/suhaasgambhir/',
  },
];

const marsTeamMembers: TeamMember[] = [
  {
    name: 'Lewis Reeves',
    image: '/image-placeholder.png',
    linkedin: 'https://linkedin.com/in/evemartinez',
  },
  {
    name: 'Oliver Nicholson',
    image: '/image-placeholder.png',
  },
  {
    name: 'Anushka Saha',
    image: '/image-placeholder.png',
  },
  {
    name: 'Min You',
    image: '/image-placeholder.png',
  },
  {
    name: 'Aaron Kokkonen',
    image: '/image-placeholder.png',
  },
  {
    name: 'Maxwell Gordon',
    image: '/image-placeholder.png',
  },
];

export default function TeamPage() {
  return (
    <div className="container py-12 sm:py-16 lg:py-20">
      <div className="text-center mb-12 sm:mb-16 px-4">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Meet Our 2025 - 2026 Team</h1> 
      </div>
      {/* Executive Team */}
      <section className="mb-16 text-center">
        <h2 className="text-2xl text-primary sm:text-3xl font-semibold mb-8">Executive Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {executiveTeam.map((member, idx) => (
            <TeamMemberCard key={idx} member={member} />
          ))}
        </div>
      </section>

      {/* Project Leadership */}
      <section className="mb-16 text-center">
        <h2 className="text-2xl text-primary sm:text-3xl font-semibold mb-8">Project Leadership</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {projectLeadership.map((member, idx) => (
            <TeamMemberCard key={idx} member={member} />
          ))}
        </div>
      </section>

      {/* MARS Team Members */}
      <section className="text-center">
        <h2 className="text-2xl text-primary sm:text-3xl font-semibold mb-8">MARS Team Members</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {marsTeamMembers.map((member, idx) => (
            <TeamMemberCard key={idx} member={member} />
          ))}
        </div>
      </section>
    </div>
  );
} 