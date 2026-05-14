import type { Metadata } from "next";
import Hero from "@/components/Hero";
import HomeProgramFeature from "@/components/HomeProgramFeature";
import CTASection from "@/components/CTASection";
import ScheduleImageBlock from "@/components/ScheduleImageBlock";
import Link from "next/link";
import { BOOKING_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Flow MMA Academy | MMA Gym Mesa AZ — BJJ, Muay Thai, MMA",
  description:
    "Flow MMA Academy offers MMA, Brazilian Jiu-Jitsu, Muay Thai, and Kids Classes in Mesa, AZ.",
};

const programs = [
  {
    title:       "Brazilian Jiu-Jitsu",
    description: "Learn grappling, submissions, and positional control in a structured class environment.",
    href:        "/programs#bjj",
    accent:      "orange" as const,
  },
  {
    title:       "Muay Thai",
    description: "Develop striking skills including punches, kicks, elbows, and knees while improving conditioning and technique.",
    href:        "/programs#muay-thai",
    accent:      "teal" as const,
    linkLabel:   "Learn more",
  },
  {
    title:       "Mixed Martial Arts",
    description: "Combine striking and grappling into a complete system designed for both competition and general training.",
    href:        "/programs#mma",
    accent:      "orange" as const,
  },
  {
    title:       "Kids Classes",
    description: "Classes focused on helping kids build confidence, discipline, and fitness in a structured and supportive setting.",
    href:        "/programs#kids",
    accent:      "teal" as const,
  },
];

const trainingBlocks = [
  {
    title: "Classes in Mesa",
    desc:  "Flow MMA Academy offers martial arts training in Mesa, Arizona. Classes are available in MMA, Brazilian Jiu-Jitsu, Muay Thai, and Kids programs. Training includes Brazilian Jiu-Jitsu, Muay Thai, and Mixed Martial Arts.",
  },
  {
    title: "Training environment",
    desc:  "Flow MMA Academy focuses on a structured, supportive training environment.",
  },
  {
    title: "Coaching & facility",
    desc:  "Coach information coming soon. Facility details coming soon.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* ── Programs (editorial) ─────────────────────────────────── */}
      <section className="py-20 lg:py-32 bg-flow-black border-t border-white/6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-16 lg:mb-20 max-w-2xl">
            <p className="font-body font-semibold text-flow-orange uppercase tracking-widest text-xs mb-4">
              Training
            </p>
            <div className="w-10 h-0.5 bg-flow-orange mb-5" />
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-flow-cream leading-tight tracking-wide">
              Programs
            </h2>
            <p className="font-body text-flow-muted text-base sm:text-lg mt-5 leading-relaxed">
              Brazilian Jiu-Jitsu, Muay Thai, Mixed Martial Arts, and Kids Classes.
            </p>
          </header>

          <div className="flex flex-col gap-16 lg:gap-24">
            {programs.map((prog, i) => (
              <HomeProgramFeature
                key={prog.title}
                title={prog.title}
                description={prog.description}
                href={prog.href}
                accent={prog.accent}
                imageRight={i % 2 === 1}
                index={i}
                linkLabel={prog.linkLabel}
              />
            ))}
          </div>

          <div className="mt-14 lg:mt-20">
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 font-body font-semibold text-sm uppercase tracking-widest text-flow-teal hover:text-flow-cream transition-colors duration-150"
            >
              Full programs page
              <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Training at Flow MMA ───────────────────────────────────── */}
      <section className="py-20 lg:py-32 bg-flow-dark border-t border-white/8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-14 lg:mb-20">
            <p className="font-body font-semibold text-flow-teal uppercase tracking-widest text-xs mb-4">
              Mesa, Arizona
            </p>
            <div className="w-10 h-0.5 bg-flow-teal mb-5" />
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-flow-cream leading-tight tracking-wide max-w-3xl">
              Training at Flow MMA
            </h2>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
            {trainingBlocks.map((block) => (
              <div key={block.title} className="border-t border-white/10 pt-8">
                <div className="w-8 h-0.5 bg-flow-orange mb-5" />
                <h3 className="font-display text-xl text-flow-cream tracking-wide mb-3">
                  {block.title}
                </h3>
                <p className="font-body text-flow-muted text-sm leading-relaxed">
                  {block.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Class Schedule (major visual) ────────────────────────── */}
      <section className="py-20 lg:py-36 bg-flow-black border-t border-white/8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-14">
            <div>
              <p className="font-body font-semibold text-flow-orange uppercase tracking-widest text-xs mb-4">
                Weekly training
              </p>
              <div className="w-10 h-0.5 bg-flow-orange mb-5" />
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-flow-cream leading-tight tracking-wide">
                Class Schedule
              </h2>
              <p className="font-body text-flow-muted text-base mt-4 max-w-lg">
                View our current weekly training schedule
              </p>
            </div>
            <Link
              href="/schedule"
              className="inline-flex items-center gap-2 font-body font-semibold text-sm uppercase tracking-widest text-flow-teal hover:text-flow-cream transition-colors duration-150 shrink-0"
            >
              Open schedule page
              <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-flow-orange/35 ring-1 ring-flow-teal/20 shadow-[0_24px_80px_rgba(0,0,0,0.55)]">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-flow-orange via-flow-teal to-flow-orange z-10 pointer-events-none" />
            <ScheduleImageBlock />
          </div>
          <p className="font-body text-flow-muted/50 text-xs sm:text-sm mt-5 text-center lg:text-left">
            Schedule subject to change. Contact us for latest updates.
          </p>
        </div>
      </section>

      <CTASection
        headline="Train With Us"
        subtext="Limited Offer: 5 Day Bootcamp"
        ctaLabel="Book A Free Class Today"
        ctaHref={BOOKING_URL}
        secondaryCtaLabel="View Schedule"
        secondaryCtaHref="/schedule"
      />
    </>
  );
}
