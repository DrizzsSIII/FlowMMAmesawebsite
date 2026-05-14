import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import PageHeader from "@/components/PageHeader";
import SocialLinks from "@/components/SocialLinks";
import { GOOGLE_MAPS_URL, SITE_ADDRESS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — Flow MMA Academy",
  description:
    "Contact Flow MMA Academy in Mesa, AZ. Fill out the form to get more information about our programs.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="CONTACT US"
        description="Fill out the form below and we&apos;ll get back to you with information about Flow MMA Academy&apos;s programs."
      />

      <section className="py-16 lg:py-20 bg-flow-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            <div className="lg:col-span-2 flex flex-col gap-5">
              {/* Visit us */}
              <div className="bg-flow-card border border-white/8 rounded-sm p-6">
                <div className="w-6 h-0.5 bg-flow-orange mb-4" />
                <h3 className="font-display text-lg text-flow-cream mb-4">
                  Visit us
                </h3>
                <address className="font-body text-flow-muted text-sm not-italic leading-relaxed mb-5">
                  <span className="text-flow-cream font-semibold">{SITE_ADDRESS.org}</span>
                  <br />
                  {SITE_ADDRESS.line1}
                  <br />
                  {SITE_ADDRESS.city}
                </address>
                <div className="flex flex-wrap items-center gap-4 mb-5">
                  <span className="font-body text-xs uppercase tracking-widest text-flow-muted/50">
                    Follow
                  </span>
                  <SocialLinks />
                </div>
                <Link
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-2.5 border border-flow-orange/40 hover:border-flow-teal/50 text-flow-cream font-body font-semibold text-xs uppercase tracking-wider rounded-sm transition-colors duration-150"
                >
                  Open in Maps
                </Link>
              </div>

              <div className="bg-flow-card border border-white/8 rounded-sm p-6">
                <div className="w-6 h-0.5 bg-flow-teal mb-4" />
                <h3 className="font-display text-lg text-flow-cream mb-3">
                  Contact details
                </h3>
                <p className="font-body text-flow-muted/40 text-sm">
                  Contact details coming soon.
                </p>
              </div>

              <div className="bg-flow-card border border-white/8 rounded-sm p-6">
                <div className="w-6 h-0.5 bg-flow-orange mb-4" />
                <h3 className="font-display text-lg text-flow-cream mb-3">
                  Gym hours
                </h3>
                <p className="font-body text-flow-muted/40 text-sm">
                  Hours coming soon.
                </p>
              </div>

              <div className="bg-flow-card border border-flow-orange/20 rounded-sm p-5">
                <p className="font-body text-flow-muted text-sm leading-relaxed">
                  Fill out the form and we&apos;ll reach out with more information about programs and training at Flow MMA Academy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
