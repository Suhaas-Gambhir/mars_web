import React from 'react';
import { TeamMemberCard, TeamMember } from '@/components/features/our-team-card';

const executiveTeam: TeamMember[] = [
  {
    name: 'Suhaas Gambhir',
    position: 'Secretary',
    image: '/team/suhaas-gambhir.jpeg',
    linkedin: 'https://www.linkedin.com/in/suhaasgambhir/',
  },
  {
    name: 'Jake MacKenzie Wood',
    position: 'President',
    image: '/team/jake-mackenzie-wood.jpeg',
    linkedin: 'https://www.linkedin.com/in/jakemacwood/',
  },
  {
    name: 'Adrian Kane',
    position: 'Treasurer',
    image: '/team/adrian-kane.png',
  },
];

const projectLeadership: TeamMember[] = [
  {
    name: 'Suhaas Gambhir',
    position: 'Software Co-Lead (Project Wally)',
    image: '/team/suhaas-gambhir.jpeg',
    linkedin: 'https://www.linkedin.com/in/suhaasgambhir/',
  },
  {
    name: 'Adrian Kane',
    position: 'Software Co-Lead & Electrical Lead (Project Wally)',
    image: '/team/adrian-kane.png',
  },
  {
    name: 'Bailey Nann',
    image: '/team/bailey-nann.jpeg',
    position: 'Structures Lead (Project Wally)',
    linkedin: 'https://www.linkedin.com/in/bailey-nann/',
  },
  {
    name: 'Jay',
    image: '/team/image-placeholder.png',
    position: 'Team Lead (Robotic Arm)',
  },
];

const marsTeamMembers: TeamMember[] = [
  {
    name: 'Aaron Kokkonen',
    image: '/team/aaron-kokkonen.jpeg',
    linkedin: 'https://www.linkedin.com/in/aaron-kokkonen/',
    position: 'Chassis Team',
  },
  {
    name: 'Anushka Saha',
    image: '/team/anushka-saha.jpeg',
    linkedin: 'https://www.linkedin.com/in/anushka-saha-b9925626b/',
    position: 'Chassis Team',
  },
  {
    name: 'Lewis Reeves',
    image: '/team/lewis-reeves.jpeg',
    linkedin: 'https://www.linkedin.com/in/lewisreeves/',
    position: 'Chassis Team',
  },
  {
    name: 'Maxwell Gordon',
    image: '/team/image-placeholder.png',
    position: 'Chassis Team',
  },
  {
    name: 'Noah',
    image: '/team/image-placeholder.png',
    position: 'Chassis Team',
  },
  {
    name: 'Oliver Nicholson',
    image: '/team/oliver-nicholson.jpeg',
    linkedin: 'https://www.linkedin.com/in/oliver-nicholson-5b3a83255/',
    position: 'Chassis Team',
  }
];

const operationsTeam: TeamMember[] = [
  {
    name: 'Min You',
    image: '/team/min-you.jpeg',
    linkedin: 'https://www.linkedin.com/in/youm05/',
    position: 'Administration & Marketing, 📷',
  },
  {
    name: 'Rhoj Gutierrez',
    image: '/team/rhoj-gutierrez.jpeg',
    linkedin: 'https://www.linkedin.com/in/rhoj-gutierrez-24b64423a/',
    position: 'Social Media Coordinator & Marketing',
  },
  {
    name: 'Vikram Vibhav',
    image: '/team/vikram-vibhav.jpeg',
    linkedin: 'https://www.linkedin.com/in/vikramvaibhav/',
    position: 'Website',
  },
];

export default function TeamPage() {
  return (
    <div className="container  mt-5">
      <div className="text-center mb-12 sm:mb-16 px-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Meet Our 2025 - 2026 Team</h1>
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

      {/* Operations Team */}
      <section className="mb-16 text-center">
        <h2 className="text-2xl text-primary sm:text-3xl font-semibold mb-8">Operations Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {operationsTeam.map((member, idx) => (
            <TeamMemberCard key={idx} member={member} />
          ))}
        </div>
      </section>

      {/* MARS Team Members */}
      <section className="mb-16 text-center">
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