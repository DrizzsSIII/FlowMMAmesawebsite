import type { Metadata } from "next";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import CoachProfileCard from "@/components/CoachProfileCard";
import PageHeader from "@/components/PageHeader";
import {
  ABOUT_US_INTRO,
  COACH_BJJ_LABEL,
  DERIC_BULLETS,
  LINDSEY_BULLETS,
} from "@/lib/coaches";

export const metadata: Metadata = {
  title: "About — Flow MMA Academy",
  description:
    "Meet coaches Deric and Lindsey at Flow MMA Academy in Mesa, AZ. Brazilian Jiu-Jitsu, MMA, Muay Thai, and Kids Classes.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title="ABOUT US"
        description="Flow MMA Academy offers MMA, Brazilian Jiu-Jitsu, Muay Thai, and Kids Classes in Mesa, Arizona."
      />

      <section className="bg-flow-black py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-lg overflow-hidden rounded-2xl border border-flow-orange/35 ring-1 ring-flow-teal/25 lg:mx-0 lg:max-w-none">
              <Image
                src="/images/coaches.jpg"
                alt="Flow MMA Academy coaches Deric and Lindsey"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            <div>
              <div className="mb-5 h-0.5 w-10 bg-gradient-to-r from-flow-orange to-flow-teal" />
              <h2 className="font-display text-3xl tracking-wide text-flow-cream sm:text-4xl">About Us</h2>
              <p className="mt-6 font-body text-base leading-relaxed text-flow-muted sm:text-lg">{ABOUT_US_INTRO}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8 bg-flow-dark py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="font-body text-xs font-semibold uppercase tracking-widest text-flow-teal">Instruction</p>
            <div className="mt-3 h-0.5 w-10 bg-flow-teal" />
            <h2 className="mt-4 font-display text-3xl tracking-wide text-flow-cream sm:text-4xl lg:text-5xl">
              Meet the Coaches
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
            <CoachProfileCard
              name="Lindsey"
              beltLabel={COACH_BJJ_LABEL}
              bullets={LINDSEY_BULLETS}
              accent="orange"
            />
            <CoachProfileCard
              name="Deric"
              beltLabel={COACH_BJJ_LABEL}
              bullets={DERIC_BULLETS}
              accent="teal"
            />
          </div>
        </div>
      </section>

      <CTASection
        headline="Come train with us."
        subtext="Reach out to Flow MMA Academy for program details and training options."
        ctaLabel="Train With Us"
        secondaryCtaLabel="View Schedule"
      />
    </>
  );
}
