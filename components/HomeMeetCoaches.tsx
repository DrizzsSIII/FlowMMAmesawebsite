import Link from "next/link";

export default function HomeMeetCoaches() {
  return (
    <section className="border-t border-white/8 bg-flow-black py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-5 h-0.5 w-10 bg-gradient-to-r from-flow-orange to-flow-teal" />
        <h2 className="font-display text-3xl tracking-wide text-flow-cream sm:text-4xl lg:text-5xl">
          Meet the Coaches
        </h2>
        <p className="mt-5 max-w-2xl font-body text-base leading-relaxed text-flow-muted sm:text-lg">
          Deric and Lindsey bring years of martial arts experience, competition, and coaching to Flow MMA Academy.
        </p>

        <ul className="mt-8 max-w-2xl space-y-4 font-body text-sm leading-relaxed text-flow-cream/90 sm:text-base">
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-flow-orange" aria-hidden />
            <span>
              <span className="font-semibold text-flow-cream">Lindsey</span>
              {" — "}
              Brazilian Jiu-Jitsu black belt with over 18 years of training
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-flow-teal" aria-hidden />
            <span>
              <span className="font-semibold text-flow-cream">Deric</span>
              {" — "}
              Brazilian Jiu-Jitsu black belt with over 15 years of training
            </span>
          </li>
        </ul>

        <div className="mt-10">
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-sm border border-flow-teal/50 bg-transparent px-8 py-3.5 font-body text-sm font-semibold uppercase tracking-wider text-flow-cream transition-colors duration-150 hover:border-flow-teal hover:bg-flow-teal/10 hover:text-flow-cream"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
