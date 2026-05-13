import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ProgramCard from "@/components/ProgramCard";
import CTASection from "@/components/CTASection";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Flow MMA Academy | MMA Gym Mesa AZ — BJJ, Muay Thai, MMA",
  description:
    "Train MMA, Brazilian Jiu-Jitsu, and Muay Thai in Mesa, AZ. Beginner-friendly classes and serious fighter development. Flow MMA Academy.",
};

const programs = [
  {
    title:       "Brazilian Jiu-Jitsu",
    description: "Learn grappling, submissions, and positional control in a structured class environment.",
    tags:        ["Submissions", "Guard", "Takedowns", "Gi & No-Gi"],
    href:        "/programs#bjj",
  },
  {
    title:       "Muay Thai",
    description: "Develop striking skills including punches, kicks, elbows, and knees while improving conditioning and technique.",
    tags:        ["Striking", "Pad Work", "Clinch", "Conditioning"],
    href:        "/programs#muay-thai",
  },
  {
    title:       "Mixed Martial Arts",
    description: "Combine striking and grappling into a complete system designed for both competition and general training.",
    tags:        ["Striking", "Grappling", "Sparring", "All Levels"],
    href:        "/programs#mma",
  },
  {
    title:       "Kids Classes",
    description: "Classes focused on helping kids build confidence, discipline, and fitness in a structured and supportive setting.",
    tags:        ["Kids", "Discipline", "Fitness", "All Levels"],
    href:        "/programs#kids",
  },
];

const pillars = [
  { title: "Coaching",              desc: "Coach information coming soon." },
  { title: "Training Environment",  desc: "Flow MMA Academy focuses on a structured, supportive training environment." },
  { title: "Facility Information",  desc: "Facility details coming soon." },
  { title: "MMA Training",          desc: "Training includes Brazilian Jiu-Jitsu, Muay Thai, and Mixed Martial Arts." },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* ── Programs ───────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-flow-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="font-body font-semibold text-flow-teal uppercase tracking-widest text-sm mb-3">
              What We Offer
            </p>
            <div className="w-10 h-0.5 bg-gradient-to-r from-flow-orange to-flow-sunset mb-4" />
            <h2 className="font-display text-4xl lg:text-5xl text-flow-cream leading-tight">
              PROGRAMS
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {programs.map((prog, i) => (
              <ProgramCard key={prog.title} {...prog} index={i} />
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 font-body font-semibold text-sm uppercase tracking-widest text-flow-muted hover:text-flow-cream transition-colors duration-150"
            >
              View all programs
              <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to start training?"
        subtext="Contact Flow MMA Academy to get started."
        ctaLabel="Get Started"
      />

      {/* ── Why Flow ───────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-flow-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="font-body font-semibold text-flow-teal uppercase tracking-widest text-sm mb-3">
              Why Train With Us
            </p>
            <div className="w-10 h-0.5 bg-gradient-to-r from-flow-orange to-flow-sunset mb-4" />
            <h2 className="font-display text-4xl lg:text-5xl text-flow-cream leading-tight">
              THE FLOW DIFFERENCE
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {pillars.map((item) => (
              <div key={item.title}>
                <div className="w-8 h-0.5 bg-gradient-to-r from-flow-orange to-flow-teal mb-5" />
                <h3 className="font-display text-xl text-flow-orange leading-tight mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-flow-muted text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Schedule Preview ───────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-flow-dark border-t border-white/8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <p className="font-body font-semibold text-flow-teal uppercase tracking-widest text-sm mb-3">
                Class Times
              </p>
              <div className="w-10 h-0.5 bg-gradient-to-r from-flow-orange to-flow-sunset mb-4" />
              <h2 className="font-display text-4xl lg:text-5xl text-flow-cream leading-tight">
                CLASS SCHEDULE
              </h2>
              <p className="font-body text-flow-muted/60 text-sm mt-2">
                View our current weekly training schedule
              </p>
            </div>
            <Link
              href="/schedule"
              className="inline-flex items-center gap-2 font-body font-semibold text-sm uppercase tracking-widest text-flow-teal hover:text-flow-cream transition-colors duration-150 shrink-0"
            >
              Full schedule
              <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          {/* Schedule image with branded frame */}
          <div className="relative rounded-sm overflow-hidden border border-flow-orange/30 shadow-[0_8px_48px_rgba(232,137,10,0.18),0_0_0_1px_rgba(22,199,217,0.10)]">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-flow-orange via-flow-teal to-flow-orange z-10" />
            <Image
              src="/images/flow-schedule-branded.png"
              alt="Flow MMA Academy weekly class schedule"
              width={1200}
              height={641}
              className="w-full h-auto"
            />
          </div>
          <p className="font-body text-flow-muted/40 text-xs mt-4 text-center">
            Schedule subject to change. Contact us for latest updates.
          </p>
        </div>
      </section>

      <CTASection
        headline="Start your training today."
        subtext="Contact Flow MMA Academy to get started."
        ctaLabel="Get Started"
      />
    </>
  );
}
