import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Class Schedule — Weekly MMA, BJJ & Muay Thai Times",
  description:
    "View the weekly class schedule for MMA, BJJ, Muay Thai, and Kids classes at Flow MMA Academy in Mesa, AZ.",
};

export default function SchedulePage() {
  return (
    <>
      <PageHeader
        eyebrow="Plan Your Week"
        title="CLASS SCHEDULE"
        description="View our current weekly training schedule. All classes are drop-in friendly."
      />

      {/* Schedule image */}
      <section className="py-16 lg:py-20 bg-flow-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Branded frame — orange outer, teal inner glow */}
          <div className="relative rounded-sm overflow-hidden border border-flow-orange/30 shadow-[0_8px_64px_rgba(232,137,10,0.15),0_0_0_1px_rgba(22,199,217,0.10),0_0_80px_rgba(22,199,217,0.05)]">
            {/* Subtle top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-flow-orange via-flow-teal to-flow-orange z-10" />
            <Image
              src="/images/schedule.png"
              alt="Flow MMA Academy weekly class schedule"
              width={1200}
              height={800}
              className="w-full h-auto"
              priority
            />
          </div>
          <p className="font-body text-flow-muted/40 text-sm mt-5 text-center">
            Schedule subject to change. Contact us for latest updates.
          </p>
        </div>
      </section>

      {/* First-timer note */}
      <section className="pb-16 bg-flow-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl bg-flow-card border border-flow-teal/20 rounded-sm p-6">
            <div className="w-8 h-0.5 bg-gradient-to-r from-flow-orange to-flow-teal mb-4" />
            <h3 className="font-display text-xl text-flow-cream mb-2">
              FIRST TIME?
            </h3>
            <p className="font-body text-flow-muted text-sm leading-relaxed">
              Arrive 10 minutes early for any class. We&apos;ll make sure you get
              settled in with an instructor. Your first class is completely free —
              no signup required.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        headline="Come try a class."
        subtext="All skill levels welcome. No commitment."
        ctaLabel="Get Started"
      />
    </>
  );
}
