"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Programs", href: "/programs" },
  { label: "Schedule", href: "/schedule" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-brand-black/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.6)]"
          : "bg-gradient-to-b from-black/80 to-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-display text-2xl lg:text-3xl font-black tracking-tightest text-brand-white uppercase">
            Flow<span className="text-brand-red">MMA</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-display text-sm font-600 uppercase tracking-widest transition-colors duration-200 ${
                pathname === link.href
                  ? "text-brand-red"
                  : "text-brand-white/70 hover:text-brand-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 px-5 py-2.5 bg-brand-red hover:bg-brand-red-light active:bg-brand-red-dark text-white font-display font-700 uppercase tracking-wider text-sm rounded transition-all duration-200 shadow-[0_4px_16px_rgba(200,16,46,0.35)] hover:shadow-[0_4px_24px_rgba(200,16,46,0.5)]"
          >
            Free Trial
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col gap-[5px] p-2 rounded"
        >
          <span
            className={`block h-0.5 w-6 bg-brand-white transition-all duration-300 origin-center ${
              isOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-brand-white transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-brand-white transition-all duration-300 origin-center ${
              isOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden bg-brand-black border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col px-5 py-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-display text-xl font-700 uppercase tracking-wider py-1 transition-colors duration-200 ${
                    pathname === link.href
                      ? "text-brand-red"
                      : "text-brand-white/80 hover:text-brand-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 text-center px-6 py-3.5 bg-brand-red hover:bg-brand-red-light text-white font-display font-800 uppercase tracking-wider text-lg rounded transition-all duration-200"
              >
                Start Free Trial
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
