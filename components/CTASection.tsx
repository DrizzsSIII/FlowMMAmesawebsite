"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface CTASectionProps {
  headline?: string;
  subtext?:  string;
  ctaLabel?: string;
  ctaHref?:  string;
}

export default function CTASection({
  headline = "Start your training today.",
  subtext  = "Contact Flow MMA Academy to get started.",
  ctaLabel = "Get Started",
  ctaHref  = "/contact",
}: CTASectionProps) {
  return (
    <section className="py-20 lg:py-24 bg-flow-dark border-t border-white/8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* Accent line — sunset gradient */}
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
            className="font-body text-flow-muted text-lg mb-10"
          >
            {subtext}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.18 }}
          >
            <Link
              href={ctaHref}
              className="inline-flex items-center px-8 py-4 bg-flow-orange hover:bg-flow-orange-hover text-flow-black font-body font-bold uppercase tracking-wider text-sm rounded-sm transition-all duration-150 shadow-orange hover:shadow-orange-lg"
            >
              {ctaLabel}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
