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
    whoFor:  [
      "Beginners with no martial arts background",
      "Wrestlers or judoka looking to add submissions",
      "Those interested in grappling competition",
    ],
    learn: [
      "Guard passing and retention",
      "Joint locks and choke submissions",
      "Positional control (mount, back, side control)",
      "Takedowns and trips",
    ],
    structure: [
      "Warmup & drills — 15 min",
      "Technique instruction — 25 min",
      "Positional drilling — 15 min",
      "Live rolling — 20 min",
    ],
    desc: "Brazilian Jiu-Jitsu classes at Flow MMA Academy focus on grappling, submissions, and positional control. Classes are structured for all skill levels in a consistent training environment.",
  },
  {
    id:      "muay-thai",
    title:   "Muay Thai",
    tagline: "Stand-Up Striking",
    whoFor:  [
      "Anyone wanting to develop striking skills",
      "Boxers or kickboxers expanding their game",
      "Athletes looking to improve conditioning",
    ],
    learn: [
      "Punches, elbows, kicks, and knees",
      "Footwork and movement",
      "Clinch fighting and sweeps",
      "Pad work and bag training",
    ],
    structure: [
      "Jump rope & shadow boxing — 10 min",
      "Technique & pad rounds — 30 min",
      "Bag and partner drills — 15 min",
      "Sparring or clinch (optional) — 15 min",
    ],
    desc: "Muay Thai classes at Flow MMA Academy focus on striking technique using punches, kicks, elbows, and knees. Classes include pad work, bag training, and conditioning.",
  },
  {
    id:      "mma",
    title:   "Mixed Martial Arts",
    tagline: "Striking & Grappling Combined",
    whoFor:  [
      "Beginners looking for a full-body training program",
      "Athletes wanting to develop fighting skills",
      "Those training for competition",
    ],
    learn: [
      "Striking fundamentals (punches, kicks, elbows, knees)",
      "Takedowns and clinch wrestling",
      "Ground work and submission defense",
      "Live sparring (optional)",
    ],
    structure: [
      "Warmup & conditioning — 15 min",
      "Technical drilling — 25 min",
      "Situational training — 15 min",
      "Live sparring (optional) — 20 min",
    ],
    desc: "MMA classes at Flow MMA Academy combine striking and grappling into a structured training program. Classes are open to all skill levels.",
  },
  {
    id:      "kids",
    title:   "Kids Classes",
    tagline: "Martial Arts for Kids",
    whoFor:  [
      "Children with no prior martial arts experience",
      "Kids looking for structure and physical activity",
      "Young athletes in a supervised training environment",
    ],
    learn: [
      "Basic strikes and movement",
      "Takedowns and safe grappling",
      "Focus, listening, and respect",
      "Physical fitness and coordination",
    ],
    structure: [
      "Games & warmup — 10 min",
      "Technique instruction — 20 min",
      "Drills and games — 20 min",
      "Cool-down — 10 min",
    ],
    desc: "Kids classes at Flow MMA Academy focus on helping children build confidence, discipline, and fitness in a structured and supportive setting.",
  },
];

function InfoBlock({
  title,
  items,
  marker,
}: {
  title: string;
  items: string[];
  marker: string;
}) {
  return (
    <div className="bg-flow-card border border-white/8 rounded-sm p-6">
      <h3 className="font-body font-semibold text-xs uppercase tracking-widest text-flow-teal mb-4">
        {title}
      </h3>
      <ul className="flex flex-col gap-2.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 font-body text-sm text-flow-muted">
            <span className="text-flow-orange mt-0.5 shrink-0 text-xs">{marker}</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Train at Flow MMA"
        title="PROGRAMS"
        description="Four disciplines. All skill levels welcome. Whether you're a complete beginner or prepping for competition — we have the right class for you."
      />

      {programs.map((prog, i) => (
        <section
          key={prog.id}
          id={prog.id}
          className={`py-20 lg:py-24 border-b border-white/8 ${
            i % 2 === 0 ? "bg-flow-black" : "bg-flow-dark"
          }`}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Text side */}
              <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="w-10 h-0.5 bg-gradient-to-r from-flow-orange to-flow-sunset mb-5" />
                <p className="font-body font-semibold text-flow-teal uppercase tracking-widest text-sm mb-2">
                  {prog.tagline}
                </p>
                <h2 className="font-display text-4xl lg:text-5xl text-flow-cream leading-tight mb-6">
                  {prog.title.toUpperCase()}
                </h2>
                <p className="font-body text-flow-muted text-base leading-relaxed mb-8 max-w-lg">
                  {prog.desc}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-7 py-3.5 bg-flow-orange hover:bg-flow-orange-hover text-flow-black font-body font-bold uppercase tracking-wider text-sm rounded-sm transition-all duration-150 shadow-orange hover:shadow-orange-lg"
                >
                  Get Started
                </Link>
              </div>

              {/* Detail cards */}
              <div className={`flex flex-col gap-4 ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                <InfoBlock title="Who It's For"       items={prog.whoFor}    marker="✓" />
                <InfoBlock title="What You'll Learn"  items={prog.learn}     marker="→" />
                <div className="bg-flow-card border border-white/8 rounded-sm p-6">
                  <h3 className="font-body font-semibold text-xs uppercase tracking-widest text-flow-teal mb-4">
                    Class Structure
                  </h3>
                  <div className="flex flex-col gap-3">
                    {prog.structure.map((step, idx) => (
                      <div key={step} className="flex items-center gap-3">
                        <span className="w-5 h-5 rounded-sm bg-flow-orange/15 border border-flow-orange/25 flex items-center justify-center font-display text-flow-orange text-xs shrink-0">
                          {idx + 1}
                        </span>
                        <span className="font-body text-flow-muted text-sm">{step}</span>
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
        headline="Find your program."
        subtext="Contact Flow MMA Academy to get started."
        ctaLabel="Get Started"
      />
    </>
  );
}
