"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface CTASectionProps {
  headline?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function CTASection({
  headline = "Start your training today.",
  subtext = "Your first class is free. No experience needed.",
  ctaLabel = "Get Started",
  ctaHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="py-20 lg:py-24 bg-[#0D0D0D] border-t border-white/8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -2 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="w-10 h-px bg-brand-red mb-8"
          />
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="font-display font-black text-4xl lg:text-6xl uppercase tracking-tightest text-white leading-none mb-5"
          >
            {headline}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="text-white/55 text-lg font-body mb-10"
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
              className="inline-flex items-center px-8 py-4 bg-brand-red hover:bg-brand-red-dark text-white font-display font-black uppercase tracking-wider text-base rounded-sm transition-colors duration-150"
            >
              {ctaLabel}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
