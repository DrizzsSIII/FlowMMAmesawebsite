"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-flow-black">

      {/* ── Background MMA image with dark overlay ── */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=1600&q=80&auto=format&fit=crop')`,
          }}
        />
        {/* Main darkening layer */}
        <div className="absolute inset-0 bg-gradient-to-r from-flow-black/92 via-flow-black/80 to-flow-black/55" />
        {/* Bottom fade-out to page background */}
        <div className="absolute inset-0 bg-gradient-to-t from-flow-black via-transparent to-flow-black/40" />
      </div>

      {/* ── Branded sunset glow layers ── */}
      {/* Teal — top right, like the logo sky */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-flow-teal/10 blur-[120px] pointer-events-none" />
      {/* Orange — bottom left, like the logo FLOW lettering */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] rounded-full bg-flow-orange/12 blur-[100px] pointer-events-none" />
      {/* Sunset — centre-bottom warm bleed */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] rounded-full bg-flow-sunset/6 blur-[80px] pointer-events-none" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-2xl">

          {/* Logo mark */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Image
              src="/images/logo.png"
              alt="Flow MMA Academy"
              width={96}
              height={96}
              className="w-20 h-20 lg:w-24 lg:h-24 object-contain drop-shadow-[0_4px_20px_rgba(232,137,10,0.5)]"
              priority
            />
          </motion.div>

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="font-body font-semibold text-flow-teal uppercase tracking-widest text-sm mb-4"
          >
            Mesa, Arizona
          </motion.p>

          {/* Main headline — Bungee display */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.14 }}
            className="font-display text-6xl sm:text-7xl lg:text-8xl text-flow-cream leading-none mb-3"
          >
            FLOW
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="font-display text-2xl sm:text-3xl lg:text-4xl text-flow-orange leading-none mb-6"
          >
            MMA ACADEMY
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="font-body text-flow-cream/65 text-base lg:text-lg leading-relaxed max-w-lg mb-10"
          >
            Mixed Martial Arts Training in Mesa, Arizona.
            <br />
            Training in Brazilian Jiu-Jitsu, Muay Thai, and Mixed Martial Arts.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.36 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            {/* Primary — orange */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-flow-orange hover:bg-flow-orange-hover text-flow-black font-body font-bold uppercase tracking-wider text-sm rounded-sm transition-all duration-150 shadow-orange hover:shadow-orange-lg"
            >
              Get Started
            </Link>
            {/* Secondary — teal outline */}
            <Link
              href="/schedule"
              className="inline-flex items-center justify-center px-8 py-4 border border-flow-teal/50 hover:border-flow-teal text-flow-teal hover:bg-flow-teal/10 font-body font-semibold uppercase tracking-wider text-sm rounded-sm transition-all duration-150"
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
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-flow-orange/40 to-transparent mx-auto"
        />
      </motion.div>
    </section>
  );
}
