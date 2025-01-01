import { Navigation } from "../components/nav";
import Image from "next/image";

export default function ARCh() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navigation />
      <section className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-red-500 mb-6">ARCh (Australian Rover Challenge)</h1>
        <div className="bg-zinc-800 p-6 rounded-lg mb-6">
          <Image
            src="/rover-challenge.jpg"
            alt="Australian Rover Challenge"
            width={1200}
            height={800}
            className="rounded-lg mb-4"
          />
          <p className="text-zinc-300">
            The Australian Rover Challenge (ARCh) is a prestigious event where
            teams of university students design and build semi-autonomous lunar
            rovers to compete in a simulated lunar environment. Macquarie Rover is
            gearing up for this challenge, working on the cutting-edge technology
            that will help us compete in this competition.
          </p>
        </div>
      </section>
    </div>
  );
}
