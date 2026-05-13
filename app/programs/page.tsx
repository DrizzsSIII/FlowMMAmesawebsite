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
    id: "bjj",
    title: "Brazilian Jiu-Jitsu",
    tagline: "Master the ground game",
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
    tagline: "The art of 8 limbs",
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
      "Bag and partner drills — 15 min",
      "Sparring or clinch (optional) — 15 min",
    ],
    desc: "Muay Thai is the striking backbone of MMA and one of the most battle-tested combat sports in the world. Our instructors teach authentic technique with an emphasis on footwork, timing, and power generation. Expect to be pushed hard.",
  },
  {
    id: "mma",
    title: "Mixed Martial Arts",
    tagline: "The complete combat sport",
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
    desc: "MMA is the most complete form of combat sports training. Our MMA program weaves together striking, wrestling, and ground game into a seamless system. Whether you're preparing for competition or just want the most well-rounded training available, this is it.",
  },
  {
    id: "kids",
    title: "Kids Classes",
    tagline: "Building champions for life",
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
    desc: "Our Kids program is built around three things: safety, fun, and real martial arts development. Children learn fundamentals in an age-appropriate, positive environment. We see the discipline and confidence built here carry over into school, sports, and life.",
  },
];

function ListBlock({
  title,
  items,
  marker,
}: {
  title: string;
  items: string[];
  marker: string;
}) {
  return (
    <div className="bg-[#141414] border border-white/8 rounded-sm p-6">
      <h3 className="font-display font-bold text-xs uppercase tracking-widest text-brand-red mb-4">
        {title}
      </h3>
      <ul className="flex flex-col gap-2.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-white/60">
            <span className="text-brand-red mt-0.5 shrink-0 text-xs">{marker}</span>
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
        title="Programs"
        description="Four disciplines. All skill levels welcome. Whether you're a complete beginner or prepping for competition — we have the right class for you."
      />

      {programs.map((prog, i) => (
        <section
          key={prog.id}
          id={prog.id}
          className={`py-20 lg:py-24 border-b border-white/8 ${
            i % 2 === 0 ? "bg-[#0A0A0A]" : "bg-[#0D0D0D]"
          }`}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Text */}
              <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="w-8 h-px bg-brand-red mb-6" />
                <p className="font-display font-semibold text-brand-red uppercase tracking-widest text-sm mb-2">
                  {prog.tagline}
                </p>
                <h2 className="font-display font-black text-4xl lg:text-5xl uppercase tracking-tightest text-white leading-none mb-6">
                  {prog.title}
                </h2>
                <p className="text-white/55 text-base leading-relaxed mb-8 max-w-lg">
                  {prog.desc}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-7 py-3.5 bg-brand-red hover:bg-brand-red-dark text-white font-display font-black uppercase tracking-wider text-sm rounded-sm transition-colors duration-150"
                >
                  Start Free Trial
                </Link>
              </div>

              {/* Detail cards */}
              <div className={`flex flex-col gap-4 ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                <ListBlock title="Who It's For" items={prog.whoFor} marker="✓" />
                <ListBlock title="What You'll Learn" items={prog.learn} marker="→" />
                <div className="bg-[#141414] border border-white/8 rounded-sm p-6">
                  <h3 className="font-display font-bold text-xs uppercase tracking-widest text-brand-red mb-4">
                    Class Structure
                  </h3>
                  <div className="flex flex-col gap-3">
                    {prog.structure.map((step, idx) => (
                      <div key={step} className="flex items-center gap-3">
                        <span className="w-5 h-5 rounded-sm bg-brand-red/15 border border-brand-red/25 flex items-center justify-center text-brand-red font-display font-black text-xs shrink-0">
                          {idx + 1}
                        </span>
                        <span className="text-white/60 text-sm">{step}</span>
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
        subtext="Come in for a free class and try any of our programs risk-free."
        ctaLabel="Book Free Trial"
      />
    </>
  );
}
