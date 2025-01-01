import { Navigation } from "../components/nav";
import Image from "next/image";

export default function Recruitment() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navigation />
      <section className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-red-500 mb-6">Recruitment</h1>
        <div className="bg-zinc-800 p-6 rounded-lg mb-6">
          <p className="text-zinc-300">
            We are always looking for passionate, driven individuals to join
            our team. If you are interested in working on cutting-edge technology
            and being a part of an exciting student-led project, check out our
            current recruitment opportunities.
          </p>
        </div>
      </section>
    </div>
  );
}
