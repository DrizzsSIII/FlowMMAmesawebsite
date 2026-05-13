"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface CTASectionProps {
  headline?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  variant?: "dark" | "red";
}

export default function CTASection({
  headline = "Ready to Start Training?",
  subtext = "Your first class is free. No experience needed.",
  ctaLabel = "Start Free Trial",
  ctaHref = "/contact",
  variant = "red",
}: CTASectionProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={`relative py-20 lg:py-28 overflow-hidden ${
        isDark ? "bg-brand-gray-mid" : "bg-brand-red"
      }`}
    >
      {/* Background accent */}
      {!isDark && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[400px] h-[400px] rounded-full bg-black/20 blur-3xl" />
        </div>
      )}

      <div className="relative z-10 max-w-4xl mx-auto px-5 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display font-900 text-4xl lg:text-6xl uppercase tracking-tightest text-white mb-4 leading-none"
        >
          {headline}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`text-lg lg:text-xl font-body mb-10 ${
            isDark ? "text-brand-white/60" : "text-white/80"
          }`}
        >
          {subtext}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href={ctaHref}
            className={`inline-block px-10 py-4 font-display font-800 uppercase tracking-wider text-lg lg:text-xl rounded transition-all duration-200 ${
              isDark
                ? "bg-brand-red text-white hover:bg-brand-red-light shadow-[0_4px_24px_rgba(200,16,46,0.4)] hover:shadow-[0_4px_32px_rgba(200,16,46,0.55)]"
                : "bg-white text-brand-red hover:bg-brand-white/90 shadow-[0_4px_24px_rgba(0,0,0,0.25)]"
            }`}
          >
            {ctaLabel}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
