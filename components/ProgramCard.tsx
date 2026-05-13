"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ProgramCardProps {
  title: string;
  description: string;
  tags: string[];
  href: string;
  index?: number;
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
        className="group flex flex-col h-full bg-[#141414] border border-white/8 rounded-sm p-6 hover:border-white/20 hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)] transition-all duration-200"
      >
        <h3 className="font-display font-black text-2xl uppercase tracking-tightest text-white mb-3 group-hover:text-brand-red transition-colors duration-150">
          {title}
        </h3>
        <p className="text-white/55 text-sm leading-relaxed flex-1 mb-5">
          {description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs text-white/35 border border-white/10 rounded-sm font-body"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="flex items-center gap-2 text-brand-red font-display font-bold text-xs uppercase tracking-widest group-hover:gap-3 transition-all duration-200">
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
