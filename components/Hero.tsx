"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BOOKING_URL } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-flow-black">

      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=1600&q=80&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-flow-black/90 via-flow-black/85 to-flow-black" />
      </div>

      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[min(90vw,520px)] h-[min(90vw,520px)] rounded-full bg-flow-orange/6 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 lg:pt-36 lg:pb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="flex justify-center mb-8 lg:mb-10"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logoimagewithnobackground.png"
            alt="Flow MMA Academy"
            className="mx-auto h-44 sm:h-56 md:h-72 lg:h-96 w-auto max-w-[min(92vw,520px)] object-contain drop-shadow-[0_0_28px_rgba(22,199,217,0.25)]"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.12 }}
          className="font-display text-2xl sm:text-3xl md:text-4xl text-flow-cream tracking-wide leading-tight mb-4"
        >
          Mixed Martial Arts Training in Mesa, Arizona
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.16 }}
          className="font-body font-semibold text-flow-orange text-sm sm:text-base tracking-wide mb-3"
        >
          Free trial
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="font-body text-flow-muted text-sm sm:text-base max-w-md mx-auto leading-relaxed mb-10"
        >
          Brazilian Jiu-Jitsu, Muay Thai, and MMA training in Mesa, Arizona.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.28 }}
          className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center"
        >
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-flow-orange hover:bg-flow-orange-hover text-flow-black font-body font-bold uppercase tracking-wider text-sm rounded-sm transition-colors duration-150 shadow-orange hover:shadow-orange-lg"
          >
            Train With Us
          </a>
          <Link
            href="/schedule"
            className="inline-flex items-center justify-center px-8 py-4 border border-white/20 hover:border-flow-teal/60 text-flow-cream/90 hover:text-flow-cream font-body font-semibold uppercase tracking-wider text-sm rounded-sm transition-colors duration-150"
          >
            View Schedule
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.45 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-flow-orange/50 to-transparent mx-auto"
        />
      </motion.div>
    </section>
  );
}
