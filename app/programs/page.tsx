import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Programs — MMA, BJJ, Muay Thai & Kids Classes",
  description:
    "Explore MMA, Brazilian Jiu-Jitsu, Muay Thai, and Kids martial arts programs in Mesa, AZ. All skill levels welcome. Flow MMA Academy.",
};

const programs = [
  {
    id:      "bjj",
    title:   "Brazilian Jiu-Jitsu",
    tagline: "Grappling & Submissions",
    desc:    "Learn grappling, submissions, and positional control in a structured class environment.",
    accent:  "orange" as const,
  },
  {
    id:      "muay-thai",
    title:   "Muay Thai",
    tagline: "Stand-Up Striking",
    desc:    "Develop striking skills including punches, kicks, elbows, and knees while improving conditioning and technique.",
    accent:  "teal" as const,
  },
  {
    id:      "mma",
    title:   "Mixed Martial Arts",
    tagline: "Striking & Grappling Combined",
    desc:    "Combine striking and grappling into a complete system designed for both competition and general training.",
    accent:  "orange" as const,
  },
  {
    id:      "kids",
    title:   "Kids Classes",
    tagline: "Martial Arts for Kids",
    desc:    "Classes focused on helping kids build confidence, discipline, and fitness in a structured and supportive setting.",
    accent:  "teal" as const,
  },
];

function ProgramImage({ accent }: { accent: "orange" | "teal" }) {
  const border = accent === "teal" ? "border-flow-teal/20" : "border-flow-orange/20";
  const glow   = accent === "teal"
    ? "shadow-[0_8px_48px_rgba(22,199,217,0.08)]"
    : "shadow-[0_8px_48px_rgba(215,122,31,0.08)]";

  return (
    <div
      className={`relative w-full h-[320px] lg:h-[460px] rounded-2xl overflow-hidden border ${border} ${glow} bg-[#0a0a0a] flex items-center justify-center select-none`}
    >
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

      <div className="flex flex-col items-center gap-4 relative z-10">
        <svg
          width="52" height="52" viewBox="0 0 52 52" fill="none"
          className="text-white/10"
        >
          <rect x="3" y="10" width="46" height="32" rx="6" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="26" cy="26" r="8" stroke="currentColor" strokeWidth="1.5" />
          <path d="M17 10l3.5-6h11l3.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="42" cy="16" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <span className="font-body text-[11px] uppercase tracking-[0.2em] text-white/20">
          Image coming soon
        </span>
      </div>
    </div>
  );
}

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Train at Flow MMA"
        title="PROGRAMS"
        description="Training in Brazilian Jiu-Jitsu, Muay Thai, Mixed Martial Arts, and Kids Classes."
      />

      {programs.map((prog, i) => {
        const isEven      = i % 2 === 0;
        const sectionBg   = isEven ? "bg-flow-black" : "bg-flow-dark";
        const sectionBorder = prog.accent === "teal" ? "border-flow-teal/10" : "border-flow-orange/10";
        const accentLine  = prog.accent === "teal" ? "bg-flow-teal" : "bg-flow-orange";
        const taglineClr  = prog.accent === "teal" ? "text-flow-teal" : "text-flow-orange";

        return (
          <section
            key={prog.id}
            id={prog.id}
            className={`py-20 lg:py-28 border-b ${sectionBorder} ${sectionBg}`}
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                {/* Image — left on even rows, right on odd rows */}
                <div className={isEven ? "" : "lg:order-2"}>
                  <ProgramImage accent={prog.accent} />
                </div>

                {/* Text */}
                <div className={isEven ? "" : "lg:order-1"}>
                  <div className={`w-10 h-0.5 ${accentLine} mb-5`} />
                  <p className={`font-body font-semibold text-xs uppercase tracking-widest ${taglineClr} mb-3`}>
                    {prog.tagline}
                  </p>
                  <h2 className="font-display text-4xl lg:text-5xl text-flow-cream leading-tight tracking-wide mb-6">
                    {prog.title.toUpperCase()}
                  </h2>
                  <p className="font-body text-flow-muted text-base lg:text-lg leading-relaxed mb-10 max-w-lg">
                    {prog.desc}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/contact"
                      className="inline-flex items-center px-7 py-3.5 bg-flow-orange hover:bg-flow-orange-hover text-flow-black font-body font-bold uppercase tracking-wider text-sm rounded-sm transition-all duration-150 shadow-orange hover:shadow-orange-lg"
                    >
                      Contact Us
                    </Link>
                    <Link
                      href="/schedule"
                      className="inline-flex items-center px-7 py-3.5 border border-white/15 hover:border-flow-teal/50 text-flow-cream/70 hover:text-flow-cream font-body font-semibold uppercase tracking-wider text-sm rounded-sm transition-colors duration-150"
                    >
                      View Schedule
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </section>
        );
      })}

      <CTASection
        headline="Find your program."
        subtext="Contact Flow MMA Academy to get started."
        ctaLabel="Get Started"
      />
    </>
  );
}
