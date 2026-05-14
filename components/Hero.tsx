"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BOOKING_URL } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-flow-black">
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

      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[min(90vw,520px)] w-[min(90vw,520px)] -translate-x-1/2 rounded-full bg-flow-orange/6 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 pb-24 pt-28 text-center sm:px-6 lg:px-8 lg:pb-32 lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mb-8 flex justify-center lg:mb-10"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logoimagewithnobackground.png"
            alt="Flow MMA Academy"
            className="mx-auto h-auto w-auto max-h-[min(60vh,32rem)] max-w-[min(94vw,38rem)] object-contain sm:max-h-[min(58vh,34rem)] md:max-h-[min(56vh,36rem)] lg:max-h-[min(52vh,38rem)]"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mb-4 font-display text-2xl leading-tight tracking-wide text-flow-cream sm:text-3xl md:text-4xl"
        >
          Mixed Martial Arts Training in Mesa, Arizona
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.14 }}
          className="mb-4 font-body text-sm font-semibold tracking-wide text-flow-orange sm:text-base"
        >
          Book a free trial
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.18 }}
          className="mx-auto mb-10 max-w-md font-body text-sm leading-relaxed text-flow-muted sm:text-base"
        >
          Brazilian Jiu-Jitsu, Muay Thai, and MMA training in Mesa, Arizona.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.24 }}
          className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
        >
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-sm bg-flow-orange px-8 py-4 font-body text-sm font-bold uppercase tracking-wider text-flow-black shadow-orange transition-colors duration-150 hover:bg-flow-orange-hover hover:shadow-orange-lg"
          >
            Train With Us
          </a>
          <Link
            href="/schedule"
            className="inline-flex items-center justify-center rounded-sm border border-white/20 px-8 py-4 font-body text-sm font-semibold uppercase tracking-wider text-flow-cream/90 transition-colors duration-150 hover:border-flow-teal/60 hover:text-flow-cream"
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
          className="mx-auto h-8 w-px bg-gradient-to-b from-flow-orange/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
