import type { Metadata } from "next";
import Hero from "@/components/Hero";
import HomeMeetCoaches from "@/components/HomeMeetCoaches";
import ProgramLogoCard from "@/components/ProgramLogoCard";
import CTASection from "@/components/CTASection";
import ScheduleImageBlock from "@/components/ScheduleImageBlock";
import Link from "next/link";
import { BOOKING_URL } from "@/lib/site";
import { PROGRAMS } from "@/lib/programs";

export const metadata: Metadata = {
  title: "Flow MMA Academy | MMA Gym Mesa AZ — BJJ, Muay Thai, MMA",
  description:
    "Flow MMA Academy offers MMA, Brazilian Jiu-Jitsu, Muay Thai, and Kids Classes in Mesa, AZ.",
};

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="border-t border-white/6 bg-flow-black py-20 lg:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <header className="mb-10 max-w-2xl lg:mb-12">
            <p className="mb-4 font-body text-xs font-semibold uppercase tracking-widest text-flow-orange">
              Training
            </p>
            <div className="mb-5 h-0.5 w-10 bg-flow-orange" />
            <h2 className="font-display text-4xl leading-tight tracking-wide text-flow-cream sm:text-5xl lg:text-6xl">
              Programs
            </h2>
            <p className="mt-5 font-body text-base leading-relaxed text-flow-muted sm:text-lg">
              Brazilian Jiu-Jitsu, Muay Thai, Mixed Martial Arts, and Kids Classes.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 xl:grid-cols-4 xl:gap-7">
            {PROGRAMS.map((program) => (
              <ProgramLogoCard key={program.id} program={program} size="home" />
            ))}
          </div>

          <p className="mt-14 text-center lg:mt-16">
            <Link
              href="/programs"
              className="font-body text-sm font-semibold uppercase tracking-widest text-flow-teal transition-colors duration-150 hover:text-flow-cream"
            >
              Full programs page
            </Link>
          </p>
        </div>
      </section>

      <section className="border-t border-white/8 bg-flow-dark py-20 lg:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <header className="mb-10 max-w-3xl lg:mb-12">
            <p className="mb-4 font-body text-xs font-semibold uppercase tracking-widest text-flow-teal">
              Mesa, Arizona
            </p>
            <div className="mb-5 h-0.5 w-10 bg-flow-teal" />
            <h2 className="font-display text-4xl leading-tight tracking-wide text-flow-cream sm:text-5xl lg:text-6xl">
              Training at Flow MMA
            </h2>
          </header>

          <div className="max-w-3xl space-y-6 font-body text-base leading-relaxed text-flow-muted lg:text-lg">
            <p className="text-flow-cream/95">
              Flow MMA Academy offers martial arts training in Mesa, Arizona with classes in Brazilian
              Jiu-Jitsu, Muay Thai, MMA, and Kids programs.
            </p>
            <p>Flow MMA Academy focuses on a structured, supportive training environment.</p>
          </div>
        </div>
      </section>

      <HomeMeetCoaches />

      <section className="border-t border-white/8 bg-flow-black py-20 lg:py-36">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col gap-6 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-4 font-body text-xs font-semibold uppercase tracking-widest text-flow-orange">
                Weekly training
              </p>
              <div className="mb-5 h-0.5 w-10 bg-flow-orange" />
              <h2 className="font-display text-4xl leading-tight tracking-wide text-flow-cream sm:text-5xl lg:text-6xl">
                Class Schedule
              </h2>
              <p className="mt-4 max-w-lg font-body text-base text-flow-muted">
                View our current weekly training schedule
              </p>
            </div>
            <Link
              href="/schedule"
              className="inline-flex shrink-0 items-center gap-2 font-body text-sm font-semibold uppercase tracking-widest text-flow-teal transition-colors duration-150 hover:text-flow-cream"
            >
              Open schedule page
              <svg className="h-3.5 w-3.5" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-flow-orange/35 shadow-[0_24px_80px_rgba(0,0,0,0.55)] ring-1 ring-flow-teal/20">
            <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-1 bg-gradient-to-r from-flow-orange via-flow-teal to-flow-orange" />
            <ScheduleImageBlock />
          </div>
          <p className="mt-5 text-center font-body text-xs text-flow-muted/50 sm:text-sm lg:text-left">
            Schedule subject to change. Contact us for latest updates.
          </p>
        </div>
      </section>

      <CTASection
        headline="Train With Us"
        subtext="Book a free trial"
        ctaLabel="Book A Free Class Today"
        ctaHref={BOOKING_URL}
        secondaryCtaLabel="View Schedule"
        secondaryCtaHref="/schedule"
      />
    </>
  );
}
