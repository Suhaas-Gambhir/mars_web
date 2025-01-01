import { Navigation } from "../components/nav";
import Image from "next/image";

export default function Projects() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navigation />
      <section className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-red-500 mb-6">Our Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-zinc-800 p-6 rounded-lg">
            <Image
              src="/project1.jpg"
              alt="Project 1"
              width={500}
              height={500}
              className="rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold">Rover Design</h2>
            <p className="text-zinc-400">Mechanical Engineering</p>
            <p className="text-zinc-300 mt-2">
              This project involves the design and fabrication of the rover’s
              mechanical system, ensuring it is both robust and lightweight for
              lunar exploration.
            </p>
          </div>
          <div className="bg-zinc-800 p-6 rounded-lg">
            <Image
              src="/project2.jpg"
              alt="Project 2"
              width={500}
              height={500}
              className="rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold">Autonomous Navigation</h2>
            <p className="text-zinc-400">Software Development</p>
            <p className="text-zinc-300 mt-2">
              Our team is working on developing an autonomous navigation system
              that allows the rover to navigate the lunar terrain safely and
              efficiently.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
