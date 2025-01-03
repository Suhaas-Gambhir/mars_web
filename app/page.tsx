import { Hero } from "@/components/hero"

export default function Home() {
  return (
    <>
      <Hero />
      <section id="about" className="py-24">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl dark:text-white">
              A student team passionate about designing and building the next
              generation of
            </h2>
            <p className="mt-4 text-3xl font-bold text-primary">
              Mars and lunar rovers
            </p>
            <p className="mt-4 text-lg text-muted-foreground dark:text-gray-400">
              Join us in our mission to push the boundaries of space exploration
              technology through innovative rover design and engineering excellence.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

