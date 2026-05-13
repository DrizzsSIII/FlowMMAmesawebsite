import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHeader from "@/components/PageHeader";

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
        description="Fill out the form below and we'll get back to you with information about Flow MMA Academy's programs."
      />

      <section className="py-16 lg:py-20 bg-flow-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Info */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              {/* Location */}
              <div className="bg-flow-card border border-white/8 rounded-sm p-6">
                <div className="w-6 h-0.5 bg-flow-orange mb-4" />
                <h3 className="font-display text-lg text-flow-cream mb-3">
                  LOCATION
                </h3>
                <p className="font-body text-flow-muted text-sm">Mesa, Arizona</p>
              </div>

              {/* Contact details */}
              <div className="bg-flow-card border border-white/8 rounded-sm p-6">
                <div className="w-6 h-0.5 bg-flow-teal mb-4" />
                <h3 className="font-display text-lg text-flow-cream mb-3">
                  CONTACT DETAILS
                </h3>
                <p className="font-body text-flow-muted/40 text-sm">
                  Contact details coming soon.
                </p>
              </div>

              {/* Hours */}
              <div className="bg-flow-card border border-white/8 rounded-sm p-6">
                <div className="w-6 h-0.5 bg-flow-orange mb-4" />
                <h3 className="font-display text-lg text-flow-cream mb-3">
                  GYM HOURS
                </h3>
                <p className="font-body text-flow-muted/40 text-sm">
                  Hours coming soon.
                </p>
              </div>

              {/* Note */}
              <div className="bg-flow-card border border-flow-orange/20 rounded-sm p-5">
                <p className="font-body text-flow-muted text-sm leading-relaxed">
                  Fill out the form and we&apos;ll reach out within a few hours to
                  get your first class scheduled.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
