"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Accent = "orange" | "teal";

interface HomeProgramFeatureProps {
  title: string;
  description: string;
  href: string;
  accent: Accent;
  imageRight: boolean;
  index: number;
}

function Placeholder({ accent }: { accent: Accent }) {
  const border = accent === "teal" ? "border-flow-teal/25" : "border-flow-orange/25";
  return (
    <div
      className={`relative h-[220px] sm:h-[260px] lg:h-[min(340px,36vw)] w-full rounded-2xl border ${border} bg-[#0c0c0c] overflow-hidden flex items-center justify-center`}
    >
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_30%_20%,#16C7D9,transparent_55%),radial-gradient(circle_at_70%_80%,#D77A1F,transparent_50%)]" />
      <span className="relative font-body text-[10px] sm:text-xs uppercase tracking-[0.22em] text-flow-cream/25">
        Image coming soon
      </span>
    </div>
  );
}

export default function HomeProgramFeature({
  title,
  description,
  href,
  accent,
  imageRight,
  index,
}: HomeProgramFeatureProps) {
  const line = accent === "teal" ? "bg-flow-teal" : "bg-flow-orange";

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group"
    >
      <Link
        href={href}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 lg:items-center"
      >
        <div className={imageRight ? "lg:order-2" : ""}>
          <Placeholder accent={accent} />
        </div>
        <div className={imageRight ? "lg:order-1 lg:text-right lg:ml-auto" : ""}>
          <div className={`w-10 h-0.5 ${line} mb-5 ${imageRight ? "lg:ml-auto" : ""}`} />
          <h3 className="font-display text-3xl sm:text-4xl text-flow-cream tracking-wide mb-4 group-hover:text-flow-orange transition-colors duration-200">
            {title}
          </h3>
          <p className="font-body text-flow-muted text-base leading-relaxed max-w-md group-hover:text-flow-cream/85 transition-colors duration-200">
            {description}
          </p>
          <span
            className={`mt-6 inline-flex items-center gap-2 font-body font-semibold text-xs uppercase tracking-widest ${
              accent === "teal" ? "text-flow-teal" : "text-flow-orange"
            } group-hover:gap-3 transition-all duration-200`}
          >
            View program
            <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
