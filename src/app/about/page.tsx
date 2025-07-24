"use client"

import { useState } from 'react'
import { ChevronRight } from 'lucide-react'

export default function AboutPage() {
  return (
    <main className="container  mt-5">
      <MarsIntroBlurb />
      <FAQSection />
    </main>
  )
}

function MarsIntroBlurb() {
  return (
    <section className="max-w-5xl mx-auto mb-12 px-4">
      {/* Header */}
      <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">About us</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn more about us and our mission.
          </p>
        </div>
      <div>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 flex items-center gap-2">
          Welcome to MARS — Macquarie Aerospace Rover Society
        </h1>
        <p className="text-xl sm:text-2xl text-muted-foreground mb-8">
          Macquarie Aerospace Rover Society (MARS) is a student-led team building a semi-autonomous lunar rover for the <b>Australian Rover Challenge (ARCh) 2026</b>. Whether you&apos;re into mechanical engineering, software, electronics, science, or operations — <b>there&apos;s a place for you here</b>.
        </p>
        <p className="text-lg sm:text-xl mb-8">
          We give Macquarie students hands-on experience in <b>space robotics</b>, <b>interdisciplinary teamwork</b>, and <b>cutting-edge design</b> — all while preparing for one of Australia&apos;s most exciting student space competitions.
        </p>
        <div className="border-t border-dashed border-primary/20 my-6" />
        <h2 className="text-3xl font-bold mb-3 flex items-center gap-2">
          What We Do
        </h2>
        <p className="mb-2 text-lg sm:text-xl">We design, build, and test our rover from the ground up across four main areas:</p>
        <ul className="list-disc list-inside mb-4 pl-2">
          <li className="text-lg sm:text-xl"><b>Mechanical</b>: chassis, drive systems, and suspension</li>
          <li className="text-lg sm:text-xl"><b>Electrical</b>: PCBs, wiring, sensors, and power distribution</li>
          <li className="text-lg sm:text-xl"><b>Software</b>: autonomy, controls, and simulations</li>
          <li className="text-lg sm:text-xl"><b>Science</b>: regolith collection and onboard analysis</li>
        </ul>
        <p className="mb-2 text-lg sm:text-xl">Not an engineer? No problem — we also run operations teams focused on:</p>
        <ul className="list-disc list-inside mb-4 pl-2">
          <li className="text-lg sm:text-xl"><b>Media & Marketing</b> – Content creation, branding, outreach</li>
          <li className="text-lg sm:text-xl"><b>Business & Sponsorship</b> – Grants, industry partners, pitching</li>
          <li className="text-lg sm:text-xl"><b>Website</b> – UX/UI, site maintenance, and updates</li>
          <li className="text-lg sm:text-xl"><b>Management</b> – Planning, logistics, and team coordination</li>
        </ul>
        <div className="border-t border-dashed border-primary/20 my-6" />
        <h2 className="text-3xl font-bold mb-3 flex items-center gap-2">
          Current Projects (2025–2026)
        </h2>
        <ul className="list-disc list-inside mb-4 pl-2">
          <li className="text-lg sm:text-xl"><b>Project Wally</b> – Core rover platform (mobility & base systems)</li>
          <li className="text-lg sm:text-xl"><b>Robotic Arm</b> – High-precision manipulator for tasks (in collab with MURC)</li>
          <li className="text-lg sm:text-xl"><b>EEV</b> – Science payload for environment analysis</li>
        </ul>
        <p className="mb-4 text-lg sm:text-xl">Each project is supported by dedicated Structures, Software, Electrical, and Science subteams.</p>
        <div className="border-t border-dashed border-primary/20 my-6" />
        <h2 className="text-3xl font-bold mb-3 flex items-center gap-2">
          Learning & Building Together
        </h2>
        <p className="mb-2 text-lg sm:text-xl">We run <b>regular meetings</b> and <b>technical workshops</b>, including:</p>
        <ul className="list-disc list-inside mb-4 pl-2">
          <li className="text-lg sm:text-xl">PCB Design (with MUDS)</li>
          <li className="text-lg sm:text-xl">Git & GitHub (with MACS)</li>
          <li className="text-lg sm:text-xl">CAD & Prototyping (with Speed Team)</li>
        </ul>
        <div className="border-t border-dashed border-primary/20 my-6" />
        <p className="text-xl sm:text-2xl font-semibold text-center mt-8 text-lg sm:text-xl">
          Whether you&apos;re here to <b>build a rover</b>, <b>learn new skills</b>, or <b>make space history</b> — <span className="text-primary">MARS is your launchpad</span>.
        </p>
      </div>
    </section>
  )
}

function FAQSection() {
  const faqs = [
    {
      q: 'Who can join?',
      a: 'Any Macquarie student! You don&apos;t need to study engineering or have robotics experience — we teach all the basics, and welcome all backgrounds.'
    },
    {
      q: 'Can first-years get involved?',
      a: 'Absolutely! Many of our members join in their first year — it&apos;s a great time to start building skills and making friends.'
    },
    {
      q: 'How much time do I need to commit?',
      a: 'We&apos;re flexible! General meetings run every two weeks (weekly near deadlines), and subteams work around your schedule.'
    },
    {
      q: 'I&apos;m not sure which team suits me — what should I do?',
      a: 'No problem! Just fill out the EOI and chat with us. You&apos;re free to explore different teams and switch if you find a better fit.'
    },
    {
      q: 'What kinds of skills will I learn?',
      a: 'From CAD, coding, and soldering to science communication, teamwork, leadership, and documentation — there&apos;s something for everyone.'
    },
    {
      q: 'Is this a real competition?',
      a: 'Yes! We&apos;re building a semi-autonomous lunar rover to compete in the Australian Rover Challenge (ARCh) in March 2026, held in Adelaide.'
    },
    {
      q: 'Do you run social events too?',
      a: 'Definitely! We host game nights, club collabs, hands-on workshops, and more.'
    },
    {
      q: 'I&apos;m not into engineering — can I still contribute?',
      a: 'Absolutely! Our operations teams focus on media, marketing, sponsorship, websites, strategy, and leadership.'
    },
    {
      q: 'How do I join?',
      a: 'Head to mqrover.space/join, fill in the Expression of Interest form, and check your email for the welcome pack and Discord invite!'
    },
  ];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">FAQ&apos;s</h1>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={faq.q} className="border rounded-lg bg-white/80 dark:bg-background">
            <button
              className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium focus:outline-none hover:bg-primary/5 transition"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              aria-expanded={openIndex === idx}
              aria-controls={`faq-answer-${idx}`}
              type="button"
            >
              <span>{faq.q}</span>
              <ChevronRight className={`ml-4 transition-transform ${openIndex === idx ? 'rotate-90' : ''}`} />
            </button>
            {openIndex === idx && (
              <div id={`faq-answer-${idx}`} className="px-6 py-4 pb-4 dark:text-white dark:bg-background text-muted-foreground animate-fade-in">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
