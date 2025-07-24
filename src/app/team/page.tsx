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
    position: 'Software Co-Lead (Project Wally)',
    image: '/suhaas-gambhir.jpeg',
    linkedin: 'https://www.linkedin.com/in/suhaasgambhir/',
  },
  {
    name: 'Adrian Kane',
    position: 'Software Co-Lead & Electrical Lead (Project Wally)',
    image: '/adrian-kane.png',
  },
  {
    name: 'Bailey Nann',
    image: '/bailey-nann.jpeg',
    position: 'Structures Lead (Project Wally)',
    linkedin: 'https://www.linkedin.com/in/bailey-nann/',
  },
  {
    name: 'Jay',
    image: '/image-placeholder.png',
    position: 'Team Lead (Robotic Arm)',
  },
];

const marsTeamMembers: TeamMember[] = [
  {
    name: 'Aaron Kokkonen',
    image: '/aaron-kokkonen.jpeg',
    linkedin: 'https://www.linkedin.com/in/aaron-kokkonen/',
    position: 'Chassis Team',
  },
  {
    name: 'Anushka Saha',
    image: '/anushka-saha.jpeg',
    linkedin: 'https://www.linkedin.com/in/anushka-saha-b9925626b/',
    position: 'Chassis Team',
  },
  {
    name: 'Lewis Reeves',
    image: '/lewis-reeves.jpeg',
    linkedin: 'https://www.linkedin.com/in/lewisreeves/',
    position: 'Chassis Team',
  },
  {
    name: 'Maxwell Gordon',
    image: '/image-placeholder.png',
    position: 'Chassis Team',
  },
  {
    name: 'Min You',
    image: '/min-you.jpeg',
    linkedin: 'https://www.linkedin.com/in/youm05/',
    position: 'Administration & Marketing, 📷',
  },
  {
    name: 'Oliver Nicholson',
    image: '/oliver-nicholson.jpeg',
    linkedin: 'https://www.linkedin.com/in/oliver-nicholson-5b3a83255/',
    position: 'Chassis Team',
  },
  {
    name: 'Rhoj Gutierrez',
    image: '/rhoj-gutierrez.jpeg',
    linkedin: 'https://www.linkedin.com/in/rhoj-gutierrez-24b64423a/',
    position: 'Social Media Coordinator & Marketing',
  },
  {
    name: 'Vikram Vibhav',
    image: '/vikram-vibhav.jpeg',
    linkedin: 'https://www.linkedin.com/in/vikramvaibhav/',
    position: 'Website',
  },
];

export default function TeamPage() {
  return (
    <div className="container  mt-5">
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