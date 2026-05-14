"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ProgramCardProps {
  title:        string;
  description:  string;
  href:         string;
  accent?:      "orange" | "teal";
  index?:       number;
}

function ImagePlaceholder({ accent }: { accent: "orange" | "teal" }) {
  const borderCls = accent === "teal"
    ? "border-flow-teal/20"
    : "border-flow-orange/20";

  return (
    <div
      className={`relative w-full h-60 sm:h-72 bg-[#111318] border-b ${borderCls} flex items-center justify-center select-none`}
    >
      <div className="flex flex-col items-center gap-3">
        <svg
          width="40" height="40" viewBox="0 0 40 40" fill="none"
          className="text-white/10"
        >
          <rect x="2" y="8" width="36" height="24" rx="4" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="1.5" />
          <path d="M13 8l2.5-4h9L27 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <span className="font-body text-[10px] uppercase tracking-[0.18em] text-white/20">
          Image coming soon
        </span>
      </div>
    </div>
  );
}

export default function ProgramCard({
  title,
  description,
  href,
  accent  = "orange",
  index   = 0,
}: ProgramCardProps) {
  const cardBorder  = accent === "teal" ? "border-flow-teal/20 hover:border-flow-teal/45" : "border-flow-orange/20 hover:border-flow-orange/45";
  const hoverShadow = accent === "teal"
    ? "hover:shadow-[0_8px_48px_rgba(22,199,217,0.10)]"
    : "hover:shadow-[0_8px_48px_rgba(215,122,31,0.10)]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="h-full"
    >
      <Link
        href={href}
        className={`group flex flex-col h-full bg-flow-card border ${cardBorder} ${hoverShadow} rounded-2xl overflow-hidden transition-all duration-300`}
      >
        <ImagePlaceholder accent={accent} />

        <div className="p-6 flex flex-col flex-1">
          <div className="w-6 h-0.5 bg-flow-orange mb-4 group-hover:w-10 transition-all duration-300" />
          <h3 className="font-display text-xl text-flow-cream leading-tight tracking-wide mb-3 group-hover:text-flow-orange transition-colors duration-200">
            {title}
          </h3>
          <p className="font-body text-flow-muted text-sm leading-relaxed flex-1">
            {description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
