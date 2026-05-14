import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "About — Flow MMA Academy",
  description:
    "Learn about Flow MMA Academy's training philosophy and community. Mesa's premier MMA gym for all skill levels.",
};

const values = [
  {
    title: "Technique First",
    desc:  "We never skip the fundamentals. Deep technical knowledge is what separates average fighters from great ones.",
  },
  {
    title: "Earn It",
    desc:  "No shortcuts. Every belt, every skill, every improvement is earned through hard work on the mat.",
  },
  {
    title: "Elevate Each Other",
    desc:  "Your training partners are your biggest asset. We push each other in training so we can grow together.",
  },
  {
    title: "Family Atmosphere",
    desc:  "We don't tolerate ego or disrespect. Every person who walks in is treated with dignity regardless of experience.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title="ABOUT FLOW MMA"
        description="Flow MMA Academy offers MMA, BJJ, Muay Thai, and Kids Classes in Mesa, Arizona."
      />

      {/* Story */}
      <section className="py-20 lg:py-24 bg-flow-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="w-10 h-0.5 bg-gradient-to-r from-flow-orange to-flow-sunset mb-8" />
            <h2 className="font-display text-3xl lg:text-4xl text-flow-cream leading-tight mb-8">
              ABOUT FLOW MMA
            </h2>
            <div className="flex flex-col gap-5 font-body text-flow-muted text-base leading-relaxed">
              <p>
                Flow MMA Academy offers martial arts training in Mesa, Arizona.
                Classes are available in MMA, Brazilian Jiu-Jitsu, Muay Thai,
                and Kids programs.
              </p>
              <p>
                Flow MMA Academy provides structured martial arts instruction in
                Mesa, Arizona. Programs include MMA, Brazilian Jiu-Jitsu, Muay Thai,
                and Kids Classes for all skill levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 lg:py-24 bg-flow-dark border-t border-white/8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="font-body font-semibold text-flow-teal uppercase tracking-widest text-sm mb-3">
              What We Stand For
            </p>
            <div className="w-10 h-0.5 bg-gradient-to-r from-flow-orange to-flow-sunset mb-4" />
            <h2 className="font-display text-4xl lg:text-5xl text-flow-cream leading-tight">
              OUR PHILOSOPHY
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((v) => (
              <div key={v.title} className="bg-flow-card border border-white/8 rounded-sm p-6 hover:border-flow-teal/30 transition-colors duration-200">
                <div className="w-8 h-0.5 bg-gradient-to-r from-flow-orange to-flow-teal mb-5" />
                <h3 className="font-display text-xl text-flow-orange leading-tight mb-2">
                  {v.title.toUpperCase()}
                </h3>
                <p className="font-body text-flow-muted text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaches */}
      <section className="py-20 lg:py-24 bg-flow-black border-t border-white/8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="font-body font-semibold text-flow-teal uppercase tracking-widest text-sm mb-3">
              Instruction
            </p>
            <div className="w-10 h-0.5 bg-gradient-to-r from-flow-orange to-flow-sunset mb-4" />
            <h2 className="font-display text-4xl lg:text-5xl text-flow-cream leading-tight">
              MEET THE COACHES
            </h2>
          </div>
          <div className="bg-flow-card border border-flow-teal/20 rounded-sm p-8 max-w-lg">
            <p className="font-body text-flow-muted/60 text-sm leading-relaxed">
              Coach profiles coming soon.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        headline="Come train with us."
        subtext="Contact Flow MMA Academy to get started."
        ctaLabel="Train With Us"
      />
    </>
  );
}
