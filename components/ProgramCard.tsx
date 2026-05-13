"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ProgramCardProps {
  title:       string;
  description: string;
  tags:        string[];
  href:        string;
  index?:      number;
}

export default function ProgramCard({
  title,
  description,
  tags,
  href,
  index = 0,
}: ProgramCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <Link
        href={href}
        className="group flex flex-col h-full bg-flow-card border border-white/8 rounded-sm p-6 hover:border-flow-teal/40 hover:shadow-[0_8px_40px_rgba(22,199,217,0.10)] transition-all duration-200"
      >
        {/* Orange accent top bar */}
        <div className="w-8 h-0.5 bg-gradient-to-r from-flow-orange to-flow-sunset mb-5 group-hover:w-12 transition-all duration-300" />

        <h3 className="font-display text-2xl text-flow-orange leading-tight mb-3 group-hover:text-flow-cream transition-colors duration-150">
          {title}
        </h3>

        <p className="font-body text-flow-muted text-sm leading-relaxed flex-1 mb-5">
          {description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-body text-flow-muted/60 border border-white/10 rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <span className="flex items-center gap-2 font-body font-semibold text-xs uppercase tracking-widest text-flow-teal group-hover:gap-3 transition-all duration-200">
          Learn more
          <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none">
            <path
              d="M2.5 7h9M8 3.5L11.5 7 8 10.5"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </Link>
    </motion.div>
  );
}
