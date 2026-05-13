"use client";

import { motion } from "framer-motion";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  rating?: number;
  index?: number;
}

export default function TestimonialCard({
  quote,
  name,
  role,
  rating = 5,
  index = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-brand-gray-mid border border-white/10 rounded-xl p-7 flex flex-col gap-5"
    >
      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: rating }).map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 text-yellow-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-brand-white/80 text-sm leading-relaxed flex-1">
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3 pt-1 border-t border-white/10">
        <div className="w-9 h-9 rounded-full bg-brand-red/20 border border-brand-red/30 flex items-center justify-center">
          <span className="text-brand-red font-display font-800 text-sm uppercase">
            {name[0]}
          </span>
        </div>
        <div>
          <p className="text-brand-white font-display font-700 text-sm uppercase tracking-wide">
            {name}
          </p>
          <p className="text-brand-white/40 text-xs">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}
