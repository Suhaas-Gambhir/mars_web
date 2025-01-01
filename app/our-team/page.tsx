import { Navigation } from "../components/nav";
import Image from "next/image";

export default function OurTeam() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navigation />
      <section className="container mx-auto p-6 pt-24"> {/* Added pt-24 */}
        <h1 className="text-4xl font-bold text-red-500 mb-6">Our Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-zinc-800 p-6 rounded-lg">
            <Image
              src="/team-member1.jpg"
              alt="Team Member 1"
              width={500}
              height={500}
              className="rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold">John Doe</h2>
            <p className="text-zinc-400">Lead Engineer</p>
            <p className="text-zinc-300 mt-2">
              John is a passionate engineer with a love for robotics and AI.
              He is leading the development of the rover's autonomous system.
            </p>
          </div>
          <div className="bg-zinc-800 p-6 rounded-lg">
            <Image
              src="/team-member2.jpg"
              alt="Team Member 2"
              width={500}
              height={500}
              className="rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold">Jane Smith</h2>
            <p className="text-zinc-400">Project Manager</p>
            <p className="text-zinc-300 mt-2">
              Jane is the mastermind behind the project’s timelines and team
              coordination. She ensures that the team stays on track and meets
              all milestones.
            </p>
          </div>
          <div className="bg-zinc-800 p-6 rounded-lg">
            <Image
              src="/team-member3.jpg"
              alt="Team Member 3"
              width={500}
              height={500}
              className="rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold">Michael Lee</h2>
            <p className="text-zinc-400">Software Developer</p>
            <p className="text-zinc-300 mt-2">
              Michael is responsible for the rover’s software architecture and
              the integration of various subsystems.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
