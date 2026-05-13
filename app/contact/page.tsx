import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Start Your Free Trial",
  description:
    "Contact Flow MMA Academy in Mesa, AZ to start your free trial class. Call us, email us, or fill out the form. We'll get back to you the same day.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-brand-black overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-brand-red/8 blur-[160px] rounded-full" />
        </div>
        <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-brand-red font-display font-700 uppercase tracking-widest text-sm mb-3">
            Get Started
          </p>
          <h1 className="font-display font-900 text-5xl lg:text-8xl uppercase tracking-tightest text-white leading-none mb-6">
            Try a Free Class
          </h1>
          <p className="text-brand-white/60 text-lg max-w-xl">
            Fill out the form and we&apos;ll reach out within a few hours to
            schedule your first class. No experience needed. No obligation.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-20 bg-brand-black">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Info */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {/* Phone */}
              <div className="bg-brand-gray-mid border border-white/10 rounded-xl p-6">
                <h3 className="font-display font-800 text-lg uppercase tracking-tight text-brand-red mb-4">
                  Call or Text
                </h3>
                <a
                  href="tel:+14805551234"
                  className="text-2xl font-display font-900 text-white hover:text-brand-red transition-colors duration-200"
                >
                  (480) 555-1234
                </a>
                <p className="text-brand-white/50 text-sm mt-1">
                  Mon–Sat, 6 AM – 9 PM
                </p>
              </div>

              {/* Location */}
              <div className="bg-brand-gray-mid border border-white/10 rounded-xl p-6">
                <h3 className="font-display font-800 text-lg uppercase tracking-tight text-brand-red mb-4">
                  Find Us
                </h3>
                <p className="text-brand-white/70 text-sm leading-relaxed mb-4">
                  123 W Main St, Suite 100
                  <br />
                  Mesa, Arizona 85201
                </p>
                {/* Map placeholder — replace src with real embed URL */}
                <div className="rounded-lg overflow-hidden h-48 bg-brand-gray-light border border-white/10 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106540.41649428027!2d-111.93537!3d33.42!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b08fdb7b37e09%3A0x27d3c2e0fd9d59fb!2sMesa%2C%20AZ!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Flow MMA Academy Location"
                  />
                </div>
              </div>

              {/* Hours */}
              <div className="bg-brand-gray-mid border border-white/10 rounded-xl p-6">
                <h3 className="font-display font-800 text-lg uppercase tracking-tight text-brand-red mb-4">
                  Gym Hours
                </h3>
                <div className="flex flex-col gap-2">
                  {[
                    ["Monday – Friday", "5:30 AM – 9:00 PM"],
                    ["Saturday", "8:30 AM – 2:00 PM"],
                    ["Sunday", "9:00 AM – 1:00 PM"],
                  ].map(([days, hours]) => (
                    <div key={days} className="flex justify-between text-sm">
                      <span className="text-brand-white/60">{days}</span>
                      <span className="text-brand-white font-body font-500">{hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
