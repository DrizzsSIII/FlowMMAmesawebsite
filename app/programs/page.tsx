import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Programs — MMA, BJJ, Muay Thai & Kids Classes",
  description:
    "Explore MMA, Brazilian Jiu-Jitsu, Muay Thai, and Kids martial arts programs in Mesa, AZ. All skill levels welcome. Flow MMA Academy.",
};

const programs = [
  {
    id: "mma",
    title: "Mixed Martial Arts",
    emoji: "🥊",
    tagline: "The complete combat sport",
    color: "from-red-900/30",
    whoFor: [
      "Total beginners looking for a full-body challenge",
      "Athletes wanting to add fighting skills",
      "Competitors training for amateur bouts",
    ],
    learn: [
      "Striking fundamentals (punches, kicks, elbows, knees)",
      "Takedowns and clinch wrestling",
      "Ground-and-pound and submission defense",
      "Live sparring and fight IQ",
    ],
    structure: [
      "Warmup & conditioning — 15 min",
      "Technical drilling — 25 min",
      "Situational training — 15 min",
      "Live sparring (optional) — 20 min",
    ],
    desc: "MMA is the world's fastest-growing sport — and the most complete form of combat sports training. Our MMA program weaves together striking, wrestling, and ground game into a seamless system. Whether you're preparing for competition or just want the most well-rounded training available, this is it.",
  },
  {
    id: "bjj",
    title: "Brazilian Jiu-Jitsu",
    emoji: "🥋",
    tagline: "Master the ground game",
    color: "from-blue-900/30",
    whoFor: [
      "Absolute beginners with no martial arts background",
      "Wrestlers or judoka looking to add submissions",
      "Competitors pursuing BJJ tournaments",
    ],
    learn: [
      "Guard passing and retention",
      "Joint locks and choke submissions",
      "Positional hierarchy (mount, back, side control)",
      "Takedowns and trips",
    ],
    structure: [
      "Warmup & drills — 15 min",
      "Technique instruction — 25 min",
      "Positional drilling — 15 min",
      "Live rolling — 20 min",
    ],
    desc: "Brazilian Jiu-Jitsu is the ultimate equalizer — a system that lets a smaller person control and submit a larger, stronger opponent through leverage and technique. Our BJJ program runs both Gi and No-Gi tracks with structured curriculum from white belt to black belt.",
  },
  {
    id: "muay-thai",
    title: "Muay Thai",
    emoji: "🦵",
    tagline: "The art of 8 limbs",
    color: "from-yellow-900/20",
    whoFor: [
      "Anyone wanting explosive striking skills",
      "Boxers or kickboxers expanding their game",
      "Athletes looking for elite conditioning",
    ],
    learn: [
      "Punches, elbows, kicks, and knees",
      "Footwork and ring generalship",
      "Clinch fighting and sweeps",
      "Pad work and bag training",
    ],
    structure: [
      "Jump rope & shadow boxing — 10 min",
      "Technique & pad rounds — 30 min",
      "Bag/partner drills — 15 min",
      "Sparring or clinch (optional) — 15 min",
    ],
    desc: "Muay Thai is the striking backbone of MMA and one of the most battle-tested combat sports in the world. Our coaches have professional fighting experience and teach the authentic Thai system — not a watered-down fitness version. Expect to be pushed hard and leave drenched.",
  },
  {
    id: "kids",
    title: "Kids Classes",
    emoji: "⭐",
    tagline: "Building champions for life",
    color: "from-green-900/20",
    whoFor: [
      "Kids ages 5–15 with no experience",
      "Children seeking confidence and discipline",
      "Young athletes wanting structured activity",
    ],
    learn: [
      "Basic strikes and self-defense",
      "Takedowns and safe grappling",
      "Listening, focus, and respect",
      "Physical fitness and coordination",
    ],
    structure: [
      "Games & warmup — 10 min",
      "Technique instruction — 20 min",
      "Drills and games — 20 min",
      "Cool-down and character lesson — 10 min",
    ],
    desc: "Our Kids program is built around three things: safety, fun, and real martial arts development. Children learn MMA fundamentals in an age-appropriate, positive environment with coaches who genuinely love working with kids. We see the discipline and confidence built here carry over into school, sports, and life.",
  },
];

export default function ProgramsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-brand-black overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-red/8 blur-[160px] rounded-full" />
        </div>
        <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-brand-red font-display font-700 uppercase tracking-widest text-sm mb-3">
            Train at Flow MMA
          </p>
          <h1 className="font-display font-900 text-5xl lg:text-8xl uppercase tracking-tightest text-white leading-none mb-6">
            Our Programs
          </h1>
          <p className="text-brand-white/60 text-lg max-w-2xl">
            Four world-class disciplines. All skill levels welcome. Whether
            you&apos;re a complete beginner or prepping for your next fight —
            we&apos;ve got the right class for you.
          </p>
        </div>
      </section>

      {/* Programs */}
      {programs.map((prog, i) => (
        <section
          key={prog.id}
          id={prog.id}
          className={`py-20 lg:py-28 ${i % 2 === 0 ? "bg-brand-black" : "bg-brand-gray-dark"}`}
        >
          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Info */}
              <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="text-5xl mb-4">{prog.emoji}</div>
                <p className="text-brand-red font-display font-700 uppercase tracking-widest text-sm mb-2">
                  {prog.tagline}
                </p>
                <h2 className="font-display font-900 text-4xl lg:text-6xl uppercase tracking-tightest text-white leading-none mb-6">
                  {prog.title}
                </h2>
                <p className="text-brand-white/60 text-base leading-relaxed mb-8">
                  {prog.desc}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-red hover:bg-brand-red-light text-white font-display font-800 uppercase tracking-wider text-base rounded transition-all duration-200 shadow-[0_4px_20px_rgba(200,16,46,0.35)]"
                >
                  Start Free Trial
                </Link>
              </div>

              {/* Lists */}
              <div className={`flex flex-col gap-6 ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                {/* Who it's for */}
                <div className="bg-brand-gray-mid border border-white/10 rounded-xl p-6">
                  <h3 className="font-display font-800 text-lg uppercase tracking-tight text-brand-red mb-4">
                    Who It&apos;s For
                  </h3>
                  <ul className="flex flex-col gap-2.5">
                    {prog.whoFor.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-brand-white/70">
                        <span className="text-brand-red mt-0.5 shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What you'll learn */}
                <div className="bg-brand-gray-mid border border-white/10 rounded-xl p-6">
                  <h3 className="font-display font-800 text-lg uppercase tracking-tight text-brand-red mb-4">
                    What You&apos;ll Learn
                  </h3>
                  <ul className="flex flex-col gap-2.5">
                    {prog.learn.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-brand-white/70">
                        <span className="text-brand-red mt-0.5 shrink-0">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Class structure */}
                <div className="bg-brand-gray-mid border border-white/10 rounded-xl p-6">
                  <h3 className="font-display font-800 text-lg uppercase tracking-tight text-brand-red mb-4">
                    Class Structure
                  </h3>
                  <div className="flex flex-col gap-2">
                    {prog.structure.map((step, idx) => (
                      <div key={step} className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-brand-red/15 border border-brand-red/30 flex items-center justify-center text-brand-red font-display font-800 text-xs shrink-0">
                          {idx + 1}
                        </span>
                        <span className="text-brand-white/70 text-sm">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <CTASection
        headline="Find Your Program"
        subtext="Come in for a free class and try any of our programs risk-free."
        ctaLabel="Book Your Free Trial"
        variant="red"
      />
    </>
  );
}
