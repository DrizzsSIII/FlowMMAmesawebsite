import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About — Our Story, Coaches & Philosophy",
  description:
    "Learn about Flow MMA Academy's story, world-class coaching staff, and training philosophy. Mesa's premier MMA gym dedicated to every athlete's growth.",
};

const coaches = [
  {
    name: "Coach Carlos Reyes",
    title: "Head MMA Coach & Founder",
    bio: "Carlos is a professional MMA veteran with a 12-3 record and over 15 years of coaching experience. He built Flow MMA to create the kind of gym he always wanted — one where world-class training meets genuine community.",
    credentials: ["Pro MMA Record: 12-3", "UFC Veteran", "Certified S&C Coach"],
    image: "https://placehold.co/400x500/1C1C1C/C8102E?text=Coach+Carlos",
  },
  {
    name: "Coach Ana Ferreira",
    title: "Head BJJ Coach",
    bio: "Ana is a black belt under the legendary Marcelo Garcia lineage with multiple IBJJF World titles. Her technical instruction and patience make her exceptional at developing grapplers from white belt through competition.",
    credentials: ["BJJ Black Belt", "IBJJF World Champion", "Marcelo Garcia Lineage"],
    image: "https://placehold.co/400x500/1C1C1C/C8102E?text=Coach+Ana",
  },
  {
    name: "Coach Nattapong Srisuk",
    title: "Head Muay Thai Coach",
    bio: "Nattapong trained from the age of 8 in Thailand and amassed a 65-fight professional Muay Thai career before relocating to Arizona. He teaches authentic Thai boxing with an emphasis on footwork, timing, and power generation.",
    credentials: ["65 Pro Fights", "WBC Muay Thai Champion", "Lumpinee Stadium Veteran"],
    image: "https://placehold.co/400x500/1C1C1C/C8102E?text=Coach+Nat",
  },
  {
    name: "Coach Sarah Mitchell",
    title: "Kids Program Director",
    bio: "Sarah holds degrees in both kinesiology and child development, and has dedicated her career to youth athletics. She creates a safe, structured, and genuinely fun environment where kids develop real martial arts skills alongside life skills.",
    credentials: ["BS Child Development", "CPR/First Aid Certified", "10 Years Youth Coaching"],
    image: "https://placehold.co/400x500/1C1C1C/C8102E?text=Coach+Sarah",
  },
];

const values = [
  { icon: "🎯", title: "Technique First", desc: "We never skip the fundamentals. Deep technical knowledge is what separates average fighters from great ones." },
  { icon: "💪", title: "Earn It", desc: "No shortcuts. Every belt, every skill, every improvement is earned through hard work on the mat." },
  { icon: "🤝", title: "Elevate Each Other", desc: "Your training partners are your biggest asset. We compete against each other in training so we can fight for each other in life." },
  { icon: "🏠", title: "Family Atmosphere", desc: "We don't tolerate ego or disrespect. Every person who walks in is treated with dignity regardless of experience." },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-brand-black overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[600px] h-[500px] bg-brand-red/8 blur-[160px] rounded-full" />
        </div>
        <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-brand-red font-display font-700 uppercase tracking-widest text-sm mb-3">
            Our Story
          </p>
          <h1 className="font-display font-900 text-5xl lg:text-8xl uppercase tracking-tightest text-white leading-none mb-6">
            About Flow MMA
          </h1>
          <p className="text-brand-white/60 text-lg max-w-2xl">
            Built by fighters, for everyone. Flow MMA Academy is Mesa&apos;s
            home for serious martial arts training in a welcoming, ego-free
            environment.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-28 bg-brand-black">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="font-display font-900 text-4xl lg:text-5xl uppercase tracking-tightest text-white leading-none mb-6">
                How It All Started
              </h2>
              <div className="flex flex-col gap-4 text-brand-white/70 leading-relaxed">
                <p>
                  Flow MMA Academy was founded in 2013 by Carlos Reyes, a
                  professional MMA fighter who spent years training at gyms that
                  felt either too intimidating for regular people or too casual
                  for fighters trying to compete.
                </p>
                <p>
                  He wanted to build something different — a place where a
                  parent signing their kid up for the first time and a fighter
                  prepping for a bout next weekend could both feel completely at
                  home, training side-by-side with mutual respect.
                </p>
                <p>
                  Over a decade later, Flow MMA has developed dozens of
                  competitive fighters, helped hundreds of people transform
                  their lives through martial arts, and became one of the most
                  respected gyms in the Mesa / East Valley area.
                </p>
                <p>
                  We&apos;re proud of every white belt who shows up nervous for
                  the first time just as much as every fighter who steps in the
                  cage. That&apos;s the Flow way.
                </p>
              </div>
            </div>
            <div className="relative h-80 lg:h-[500px] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80&auto=format&fit=crop"
                alt="Training at Flow MMA Academy"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 lg:py-28 bg-brand-gray-dark">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-12">
            <p className="text-brand-red font-display font-700 uppercase tracking-widest text-sm mb-3">
              What We Stand For
            </p>
            <h2 className="font-display font-900 text-4xl lg:text-6xl uppercase tracking-tightest text-white leading-none">
              Our Philosophy
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-brand-gray-mid border border-white/10 rounded-xl p-6 flex gap-5"
              >
                <span className="text-3xl shrink-0">{v.icon}</span>
                <div>
                  <h3 className="font-display font-800 text-xl uppercase tracking-tight text-white mb-2">
                    {v.title}
                  </h3>
                  <p className="text-brand-white/60 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaches */}
      <section className="py-20 lg:py-28 bg-brand-black">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-12">
            <p className="text-brand-red font-display font-700 uppercase tracking-widest text-sm mb-3">
              World-Class Instruction
            </p>
            <h2 className="font-display font-900 text-4xl lg:text-6xl uppercase tracking-tightest text-white leading-none">
              Meet the Coaches
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coaches.map((coach) => (
              <div
                key={coach.name}
                className="bg-brand-gray-mid border border-white/10 rounded-xl overflow-hidden group"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={coach.image}
                    alt={coach.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-gray-mid via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-800 text-lg uppercase tracking-tight text-white mb-0.5">
                    {coach.name}
                  </h3>
                  <p className="text-brand-red text-xs font-body font-600 mb-3">
                    {coach.title}
                  </p>
                  <p className="text-brand-white/60 text-xs leading-relaxed mb-4">
                    {coach.bio}
                  </p>
                  <div className="flex flex-col gap-1.5">
                    {coach.credentials.map((cred) => (
                      <div key={cred} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-brand-red shrink-0" />
                        <span className="text-brand-white/50 text-xs">{cred}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Train With the Best"
        subtext="Come meet the coaches in person. Your first class is free."
        ctaLabel="Book Free Trial"
        variant="red"
      />
    </>
  );
}
