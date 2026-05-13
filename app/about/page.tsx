import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "About — Flow MMA Academy",
  description:
    "Learn about Flow MMA Academy's training philosophy and community. Mesa's premier MMA gym dedicated to every athlete's growth.",
};

const values = [
  {
    title: "Technique First",
    desc: "We never skip the fundamentals. Deep technical knowledge is what separates average fighters from great ones.",
  },
  {
    title: "Earn It",
    desc: "No shortcuts. Every belt, every skill, every improvement is earned through hard work on the mat.",
  },
  {
    title: "Elevate Each Other",
    desc: "Your training partners are your biggest asset. We push each other in training so we can grow together.",
  },
  {
    title: "Family Atmosphere",
    desc: "We don't tolerate ego or disrespect. Every person who walks in is treated with dignity regardless of experience.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title="About Flow MMA Academy"
        description="Built for everyone — from first-timers to competitive fighters. Flow MMA is Mesa's home for serious martial arts in a welcoming, ego-free environment."
      />

      {/* Story */}
      <section className="py-20 lg:py-24 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="w-8 h-px bg-brand-red mb-8" />
            <h2 className="font-display font-black text-3xl lg:text-4xl uppercase tracking-tightest text-white leading-none mb-8">
              About Flow MMA
            </h2>
            <div className="flex flex-col gap-5 text-white/60 text-base leading-relaxed">
              <p>
                Flow MMA Academy was built on a simple idea: that world-class
                martial arts training and a genuinely welcoming community aren&apos;t
                mutually exclusive. You can have both under one roof.
              </p>
              <p>
                Whether you&apos;re stepping on the mat for the very first time or
                preparing for your next amateur bout, you&apos;ll find the coaching,
                the training partners, and the environment here to reach your goals.
              </p>
              <p>
                We train MMA, Brazilian Jiu-Jitsu, Muay Thai, and Kids Classes.
                Every program is taught by instructors who bring real experience and
                genuine care to every class.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 lg:py-24 bg-[#0D0D0D] border-t border-white/8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="font-display font-semibold text-brand-red uppercase tracking-widest text-sm mb-3">
              What We Stand For
            </p>
            <h2 className="font-display font-black text-4xl lg:text-5xl uppercase tracking-tightest text-white leading-none">
              Our Philosophy
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-[#141414] border border-white/8 rounded-sm p-6"
              >
                <div className="w-6 h-px bg-brand-red mb-5" />
                <h3 className="font-display font-black text-xl uppercase tracking-tight text-white mb-2">
                  {v.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaches */}
      <section className="py-20 lg:py-24 bg-[#0A0A0A] border-t border-white/8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="font-display font-semibold text-brand-red uppercase tracking-widest text-sm mb-3">
              World-Class Instruction
            </p>
            <h2 className="font-display font-black text-4xl lg:text-5xl uppercase tracking-tightest text-white leading-none">
              Meet the Coaches
            </h2>
          </div>
          <div className="bg-[#141414] border border-white/8 rounded-sm p-8 max-w-lg">
            <p className="text-white/45 text-sm leading-relaxed font-body">
              Coach profiles coming soon.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        headline="Come train with us."
        subtext="Your first class is free. See what Flow MMA is all about."
        ctaLabel="Book Free Trial"
      />
    </>
  );
}
