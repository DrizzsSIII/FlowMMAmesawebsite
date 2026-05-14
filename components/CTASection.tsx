"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface CTASectionProps {
  headline?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export default function CTASection({
  headline = "Start your training today.",
  subtext = "Contact Flow MMA Academy to get started.",
  ctaLabel = "Train With Us",
  ctaHref = "/contact",
  secondaryCtaLabel,
  secondaryCtaHref = "/schedule",
}: CTASectionProps) {
  return (
    <section className="py-20 lg:py-28 bg-flow-dark border-t border-white/8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="origin-left w-10 h-0.5 bg-flow-orange mb-7"
          />

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.06 }}
            className="font-display text-3xl lg:text-4xl text-flow-cream leading-tight tracking-wide mb-5"
          >
            {headline}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="font-body text-flow-muted text-lg mb-10 leading-relaxed"
          >
            {subtext}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.18 }}
            className="flex flex-col sm:flex-row flex-wrap gap-3"
          >
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center px-8 py-4 bg-flow-orange hover:bg-flow-orange-hover text-flow-black font-body font-bold uppercase tracking-wider text-sm rounded-sm transition-colors duration-150 shadow-orange hover:shadow-orange-lg"
            >
              {ctaLabel}
            </Link>
            {secondaryCtaLabel ? (
              <Link
                href={secondaryCtaHref}
                className="inline-flex items-center justify-center px-8 py-4 border border-white/15 hover:border-flow-teal/50 text-flow-cream/85 hover:text-flow-cream font-body font-semibold uppercase tracking-wider text-sm rounded-sm transition-colors duration-150"
              >
                {secondaryCtaLabel}
              </Link>
            ) : null}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
