import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ProgramCard from "@/components/ProgramCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Flow MMA Academy | MMA Gym Mesa AZ — BJJ, Muay Thai, MMA",
  description:
    "Train MMA, Brazilian Jiu-Jitsu, and Muay Thai in Mesa, AZ. Beginner-friendly classes and elite fighter development. Start your free trial today at Flow MMA Academy.",
};

const programs = [
  {
    title: "MMA",
    description:
      "Develop a complete mixed martial arts game. Strike, grapple, and dominate on your feet and on the ground.",
    tags: ["Striking", "Grappling", "Sparring", "All Levels"],
    href: "/programs#mma",
    icon: "🥊",
  },
  {
    title: "Brazilian Jiu-Jitsu",
    description:
      "Master the ground game with the most effective grappling system in the world — from white belt to submission specialist.",
    tags: ["Submissions", "Guard", "Takedowns", "Gi & No-Gi"],
    href: "/programs#bjj",
    icon: "🥋",
  },
  {
    title: "Muay Thai",
    description:
      "Learn the art of 8 limbs. Punches, kicks, elbows, and knees — become a lethal stand-up fighter.",
    tags: ["Striking", "Pad Work", "Clinch", "Conditioning"],
    href: "/programs#muay-thai",
    icon: "🦵",
  },
  {
    title: "Kids Classes",
    description:
      "Build confidence, discipline, and fitness in a safe, positive environment. Ages 5–15. No experience required.",
    tags: ["Ages 5–15", "Discipline", "Fun", "Beginner Friendly"],
    href: "/programs#kids",
    icon: "⭐",
  },
];

const testimonials = [
  {
    quote:
      "I walked in knowing nothing about martial arts and was treated like family from day one. Best decision I've made in years.",
    name: "Marcus T.",
    role: "Beginner, 8 months",
    rating: 5,
  },
  {
    quote:
      "My son has been training here for 2 years and the improvement in his confidence and discipline has been incredible. The coaches genuinely care.",
    name: "Jennifer R.",
    role: "Parent of kids student",
    rating: 5,
  },
  {
    quote:
      "I was a hobbyist for years but Flow MMA helped me take my game to the competition level. Won my first amateur bout 6 months in.",
    name: "Diego V.",
    role: "Amateur competitor",
    rating: 5,
  },
];

const whyFlow = [
  {
    icon: "🏆",
    title: "Elite Coaching",
    desc: "Coaches with real competitive experience who know how to translate that into teaching.",
  },
  {
    icon: "🤝",
    title: "Tight Community",
    desc: "More than a gym — a family. Everyone from beginners to pros trains together, lifts each other up.",
  },
  {
    icon: "✨",
    title: "Clean Facility",
    desc: "State-of-the-art mats, bags, and equipment kept immaculate. You train hard; we keep it clean.",
  },
  {
    icon: "📈",
    title: "Fighter Development",
    desc: "A proven pipeline from first class to competition. We develop real fighters at every level.",
  },
];

const schedule = [
  { day: "Mon", classes: ["6:00 AM — MMA", "12:00 PM — BJJ", "7:00 PM — Muay Thai"] },
  { day: "Tue", classes: ["6:00 AM — Muay Thai", "6:30 PM — BJJ", "7:30 PM — MMA"] },
  { day: "Wed", classes: ["6:00 AM — MMA", "12:00 PM — Muay Thai", "7:00 PM — BJJ"] },
  { day: "Thu", classes: ["6:00 AM — BJJ", "6:30 PM — Muay Thai", "7:30 PM — MMA"] },
  { day: "Fri", classes: ["6:00 AM — MMA", "12:00 PM — BJJ", "6:00 PM — Open Mat"] },
  { day: "Sat", classes: ["9:00 AM — Kids MMA", "10:00 AM — BJJ", "11:00 AM — Open Mat"] },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Programs Section */}
      <section className="py-20 lg:py-28 bg-brand-black">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-12 lg:mb-16">
            <p className="text-brand-red font-display font-700 uppercase tracking-widest text-sm mb-3">
              What We Offer
            </p>
            <h2 className="font-display font-900 text-4xl lg:text-6xl uppercase tracking-tightest text-white leading-none">
              Train Every Discipline
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {programs.map((prog, i) => (
              <ProgramCard key={prog.title} {...prog} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <CTASection
        headline="Your First Class Is Free"
        subtext="No experience. No commitment. Just show up."
        ctaLabel="Book Free Trial"
        variant="red"
      />

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-brand-black">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
            <div>
              <p className="text-brand-red font-display font-700 uppercase tracking-widest text-sm mb-3">
                Real People, Real Results
              </p>
              <h2 className="font-display font-900 text-4xl lg:text-6xl uppercase tracking-tightest text-white leading-none">
                What Members Say
              </h2>
            </div>
            {/* Google Rating */}
            <div className="flex items-center gap-3 bg-brand-gray-mid border border-white/10 rounded-xl px-5 py-4 self-start">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div>
                <p className="font-display font-900 text-2xl text-white leading-none">4.9</p>
                <p className="text-brand-white/40 text-xs">Google Reviews</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} {...t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Flow MMA */}
      <section className="py-20 lg:py-28 bg-brand-gray-dark">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-12 lg:mb-16">
            <p className="text-brand-red font-display font-700 uppercase tracking-widest text-sm mb-3">
              Why Train With Us
            </p>
            <h2 className="font-display font-900 text-4xl lg:text-6xl uppercase tracking-tightest text-white leading-none">
              The Flow Difference
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyFlow.map((item, i) => (
              <div
                key={item.title}
                className="group"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-display font-800 text-xl uppercase tracking-tight text-white mb-2 group-hover:text-brand-red transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-brand-white/60 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Preview */}
      <section className="py-20 lg:py-28 bg-brand-black">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div>
              <p className="text-brand-red font-display font-700 uppercase tracking-widest text-sm mb-3">
                Class Times
              </p>
              <h2 className="font-display font-900 text-4xl lg:text-6xl uppercase tracking-tightest text-white leading-none">
                Weekly Schedule
              </h2>
            </div>
            <Link
              href="/schedule"
              className="inline-flex items-center gap-2 text-brand-red font-display font-700 uppercase tracking-wider text-sm hover:gap-3 transition-all duration-200 self-start"
            >
              Full Schedule
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {schedule.map((day) => (
              <div
                key={day.day}
                className="bg-brand-gray-mid border border-white/10 rounded-xl p-4"
              >
                <p className="font-display font-900 text-xl uppercase text-brand-red mb-3">
                  {day.day}
                </p>
                <div className="flex flex-col gap-2">
                  {day.classes.map((cls) => (
                    <p key={cls} className="text-brand-white/60 text-xs leading-snug">
                      {cls}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        headline="Stop Thinking, Start Training"
        subtext="One free class changes everything. No experience needed — just bring yourself."
        ctaLabel="Claim Your Free Trial"
        variant="red"
      />
    </>
  );
}
