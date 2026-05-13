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
    title: "Brazilian Jiu-Jitsu",
    description:
      "Master the ground game with the most effective grappling system in the world — from white belt to submission specialist.",
    tags: ["Submissions", "Guard", "Takedowns", "Gi & No-Gi"],
    href: "/programs#bjj",
  },
  {
    title: "Muay Thai",
    description:
      "Learn the art of 8 limbs. Punches, kicks, elbows, and knees — become a disciplined stand-up fighter.",
    tags: ["Striking", "Pad Work", "Clinch", "Conditioning"],
    href: "/programs#muay-thai",
  },
  {
    title: "Mixed Martial Arts",
    description:
      "Develop a complete game. Strike, grapple, and dominate on your feet and on the ground.",
    tags: ["Striking", "Grappling", "Sparring", "All Levels"],
    href: "/programs#mma",
  },
  {
    title: "Kids Classes",
    description:
      "Build confidence, discipline, and fitness in a safe, positive environment. Ages 5–15. No experience required.",
    tags: ["Ages 5–15", "Discipline", "Fun", "Beginner Friendly"],
    href: "/programs#kids",
  },
];

const pillars = [
  {
    title: "Elite Coaching",
    desc: "Coaches with real competitive experience who know how to translate that into teaching.",
  },
  {
    title: "Tight Community",
    desc: "More than a gym — a family. Beginners and pros train together with mutual respect.",
  },
  {
    title: "Clean Facility",
    desc: "Well-maintained mats, bags, and equipment. You train hard; we take care of the rest.",
  },
  {
    title: "Fighter Development",
    desc: "A structured path from your first class to competition, for those who want it.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Programs */}
      <section className="py-20 lg:py-24 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="font-display font-semibold text-brand-red uppercase tracking-widest text-sm mb-3">
              What We Offer
            </p>
            <h2 className="font-display font-black text-4xl lg:text-5xl uppercase tracking-tightest text-white leading-none">
              Programs
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
              className="inline-flex items-center gap-2 font-display font-bold text-sm uppercase tracking-widest text-white/50 hover:text-white transition-colors duration-150"
            >
              View all programs
              <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Divider CTA */}
      <CTASection
        headline="Your first class is free."
        subtext="No experience needed. No commitment. Just show up."
        ctaLabel="Get Started"
      />

      {/* Why Flow */}
      <section className="py-20 lg:py-24 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="font-display font-semibold text-brand-red uppercase tracking-widest text-sm mb-3">
              Why Train With Us
            </p>
            <h2 className="font-display font-black text-4xl lg:text-5xl uppercase tracking-tightest text-white leading-none">
              The Flow Difference
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {pillars.map((item) => (
              <div key={item.title}>
                <div className="w-8 h-px bg-brand-red mb-5" />
                <h3 className="font-display font-black text-xl uppercase tracking-tight text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Preview */}
      <section className="py-20 lg:py-24 bg-[#0D0D0D] border-t border-white/8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <p className="font-display font-semibold text-brand-red uppercase tracking-widest text-sm mb-3">
                Class Times
              </p>
              <h2 className="font-display font-black text-4xl lg:text-5xl uppercase tracking-tightest text-white leading-none">
                Class Schedule
              </h2>
              <p className="text-white/45 text-sm mt-2">
                View our current weekly training schedule
              </p>
            </div>
            <Link
              href="/schedule"
              className="inline-flex items-center gap-2 font-display font-bold text-sm uppercase tracking-widest text-white/50 hover:text-white transition-colors duration-150 shrink-0"
            >
              Full schedule
              <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <div className="relative rounded-sm overflow-hidden border border-white/10 shadow-[0_8px_48px_rgba(0,0,0,0.5)]">
            <Image
              src="/images/schedule.png"
              alt="Flow MMA Academy weekly class schedule"
              width={1200}
              height={700}
              className="w-full h-auto"
              priority={false}
            />
          </div>
          <p className="text-white/30 text-xs mt-4 text-center">
            Schedule subject to change. Contact us for latest updates.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        headline="Start your training today."
        subtext="One free class. No obligation. Just show up and see what we're about."
        ctaLabel="Get Started"
      />
    </>
  );
}
