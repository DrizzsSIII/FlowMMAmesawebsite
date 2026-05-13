"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-flow-black">

      {/* ── Background image ── */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=1600&q=80&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-flow-black/95 via-flow-black/82 to-flow-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-flow-black via-transparent to-transparent" />
      </div>

      {/* Single subtle brand glow — left side only */}
      <div className="absolute left-0 top-1/4 w-[480px] h-[480px] rounded-full bg-flow-orange/8 blur-[140px] pointer-events-none" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-44 lg:pb-28">
        <div className="max-w-xl">

          {/* Location eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="font-body font-semibold text-flow-orange uppercase tracking-widest text-xs mb-5"
          >
            Mesa, Arizona
          </motion.p>

          {/* Orange accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="origin-left w-10 h-0.5 bg-flow-orange mb-7"
          />

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl text-flow-cream leading-tight tracking-wide mb-4"
          >
            Flow MMA Academy
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="font-body text-flow-muted text-base lg:text-lg leading-relaxed mb-10"
          >
            Brazilian Jiu-Jitsu, Muay Thai, and MMA training in Mesa, Arizona.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-flow-orange hover:bg-flow-orange-hover text-flow-black font-body font-bold uppercase tracking-wider text-sm rounded-sm transition-colors duration-150 shadow-orange hover:shadow-orange-lg"
            >
              Get Started
            </Link>
            <Link
              href="/schedule"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/20 hover:border-flow-teal/60 text-flow-cream/80 hover:text-flow-cream font-body font-semibold uppercase tracking-wider text-sm rounded-sm transition-colors duration-150"
            >
              View Schedule
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-flow-orange/60 to-transparent mx-auto"
        />
      </motion.div>
    </section>
  );
}
