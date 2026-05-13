"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-black">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=1600&q=80&auto=format&fit=crop')`,
          }}
        />
        {/* Layered dark overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-black/30" />
        {/* Red accent light */}
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-brand-red/15 blur-[120px] rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-3xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-red/15 border border-brand-red/30 rounded-full mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
            <span className="text-brand-red font-display font-700 uppercase tracking-widest text-xs">
              Mesa, Arizona
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-900 text-5xl sm:text-6xl lg:text-8xl uppercase tracking-tightest text-white leading-none mb-6"
          >
            Train{" "}
            <span className="text-gradient-red">MMA</span>
            {", "}
            <br className="hidden sm:block" />
            BJJ &amp; Muay Thai
            <br />
            <span className="text-3xl sm:text-4xl lg:text-5xl font-600 text-white/70 normal-case tracking-tight">
              in Mesa, AZ
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base lg:text-xl text-white/70 font-body leading-relaxed max-w-xl mb-10"
          >
            Beginner-friendly classes and elite fighter development under one
            roof. Whether you&apos;re stepping on the mat for the first time or
            competing at the highest level — you belong here.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-red hover:bg-brand-red-light active:bg-brand-red-dark text-white font-display font-800 uppercase tracking-wider text-lg rounded transition-all duration-200 shadow-[0_4px_32px_rgba(200,16,46,0.4)] hover:shadow-[0_4px_40px_rgba(200,16,46,0.55)]"
            >
              Start Free Trial
            </Link>
            <Link
              href="/programs"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/30 text-white font-display font-700 uppercase tracking-wider text-lg rounded transition-all duration-200 backdrop-blur-sm"
            >
              View Programs
            </Link>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-6 mt-14 pt-8 border-t border-white/10"
          >
            {[
              { value: "200+", label: "Active Members" },
              { value: "4.9★", label: "Google Rating" },
              { value: "3", label: "Disciplines" },
              { value: "10+", label: "Years Experience" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display font-900 text-2xl text-white leading-none">
                  {stat.value}
                </p>
                <p className="text-white/50 text-xs mt-1 font-body">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs font-body uppercase tracking-widest">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-0.5 h-8 bg-gradient-to-b from-white/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}
