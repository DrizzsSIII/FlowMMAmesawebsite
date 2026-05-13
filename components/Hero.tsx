"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0A0A]">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=1600&q=80&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="font-display font-semibold text-brand-red uppercase tracking-widest text-sm mb-5"
          >
            Mesa, Arizona
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="font-display font-black text-6xl sm:text-7xl lg:text-8xl uppercase tracking-tightest text-white leading-none mb-5"
          >
            Flow MMA
            <br />
            Academy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="text-white/65 text-lg lg:text-xl font-body leading-relaxed max-w-lg mb-10"
          >
            Mixed Martial Arts Training in Mesa, Arizona.
            <br />
            Beginner-friendly classes and serious fighter development under one roof.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-red hover:bg-brand-red-dark text-white font-display font-black uppercase tracking-wider text-base rounded-sm transition-colors duration-150"
            >
              Get Started
            </Link>
            <Link
              href="/schedule"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/25 hover:border-white/50 text-white font-display font-bold uppercase tracking-wider text-base rounded-sm transition-colors duration-150"
            >
              View Schedule
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-white/25 to-transparent"
        />
      </motion.div>
    </section>
  );
}
