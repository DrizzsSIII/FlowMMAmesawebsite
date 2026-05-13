"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ProgramCardProps {
  title: string;
  description: string;
  tags: string[];
  href: string;
  icon: string;
  index?: number;
}

export default function ProgramCard({
  title,
  description,
  tags,
  href,
  icon,
  index = 0,
}: ProgramCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={href}
        className="group block bg-brand-gray-mid border border-white/10 rounded-xl overflow-hidden hover:border-brand-red/50 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(200,16,46,0.15)]"
      >
        <div className="p-7 lg:p-8">
          <div className="text-4xl mb-4">{icon}</div>
          <h3 className="font-display font-800 text-2xl uppercase tracking-tighter text-brand-white mb-3 group-hover:text-brand-red transition-colors duration-200">
            {title}
          </h3>
          <p className="text-brand-white/60 text-sm leading-relaxed mb-5">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-body font-500 text-brand-white/50 border border-white/15 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="inline-flex items-center gap-2 text-brand-red font-display font-700 text-sm uppercase tracking-wider group-hover:gap-3 transition-all duration-200">
            Learn More
            <svg
              className="w-4 h-4"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
