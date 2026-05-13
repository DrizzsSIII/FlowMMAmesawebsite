"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function StickyTrialCTA() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 450);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathname === "/contact") return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 72, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 72, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-4 left-0 right-0 z-40 flex justify-center px-4 lg:hidden"
        >
          <Link
            href="/contact"
            className="w-full max-w-sm flex items-center justify-center gap-2 px-8 py-4 bg-brand-red hover:bg-brand-red-dark text-white font-display font-black uppercase tracking-wider text-base rounded-sm shadow-[0_4px_24px_rgba(0,0,0,0.5)] transition-colors duration-150"
          >
            Get Started — Free Class
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
