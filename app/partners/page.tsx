import { Navigation } from "../components/nav";
import Image from "next/image";

export default function Partners() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navigation />
      <section className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-red-500 mb-6">Our Partners</h1>
        <div className="bg-zinc-800 p-6 rounded-lg mb-6">
          <p className="text-zinc-300">
            Macquarie Rover is proud to partner with a number of organizations
            and sponsors who support our mission. Their expertise, resources,
            and enthusiasm help make our dreams a reality.
          </p>
        </div>
      </section>
    </div>
  );
}
