"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function StickyTrialCTA() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  // Hide on contact page (no need to show CTA when already on it)
  const isContactPage = pathname === "/contact";

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isContactPage) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-5 left-0 right-0 z-40 flex justify-center px-5 lg:hidden"
        >
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 w-full max-w-sm px-8 py-4 bg-brand-red hover:bg-brand-red-light active:bg-brand-red-dark text-white font-display font-800 uppercase tracking-wider text-lg rounded-full shadow-[0_8px_32px_rgba(200,16,46,0.45)] hover:shadow-[0_8px_40px_rgba(200,16,46,0.6)] transition-all duration-200"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M12 8v8M8 12h8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            Start Free Trial
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
