import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Class Schedule — Weekly MMA, BJJ & Muay Thai Times",
  description:
    "View the weekly class schedule for MMA, Brazilian Jiu-Jitsu, Muay Thai, and Kids classes at Flow MMA Academy in Mesa, AZ.",
};

export default function SchedulePage() {
  return (
    <>
      <PageHeader
        eyebrow="Plan Your Week"
        title="Class Schedule"
        description="View our current weekly training schedule. All classes are drop-in friendly."
      />

      {/* Schedule image */}
      <section className="py-16 lg:py-20 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-sm overflow-hidden border border-white/10 shadow-[0_8px_64px_rgba(0,0,0,0.6)]">
            <Image
              src="/images/schedule.png"
              alt="Flow MMA Academy weekly class schedule"
              width={1200}
              height={800}
              className="w-full h-auto"
              priority
            />
          </div>
          <p className="text-white/30 text-sm mt-5 text-center font-body">
            Schedule subject to change. Contact us for latest updates.
          </p>
        </div>
      </section>

      {/* Info note */}
      <section className="pb-16 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl bg-[#141414] border border-white/8 rounded-sm p-6">
            <h3 className="font-display font-black text-lg uppercase tracking-tight text-white mb-2">
              First Time?
            </h3>
            <p className="text-white/55 text-sm leading-relaxed">
              Arrive 10 minutes early for any class. We&apos;ll make sure you
              get settled in with an instructor. Your first class is completely
              free — no signup required.
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
