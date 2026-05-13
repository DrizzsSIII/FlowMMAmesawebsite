"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Programs", href: "/programs" },
  { label: "Schedule", href: "/schedule" },
  { label: "About",    href: "/about"    },
  { label: "Contact",  href: "/contact"  },
];

export default function Navbar() {
  const [isOpen,   setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [pathname]);

  const scrolledStyle = "bg-flow-black/95 backdrop-blur-md border-b border-white/8 shadow-[0_2px_24px_rgba(0,0,0,0.6)]";
  const clearStyle    = "bg-transparent";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen ? scrolledStyle : clearStyle
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">

        {/* Logo — mix-blend-mode:screen makes the black background invisible on dark surfaces */}
        <Link href="/" className="shrink-0 group" aria-label="Flow MMA Academy home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/flow-logo-transparent.png"
            alt="Flow MMA Academy"
            className="h-14 lg:h-16 w-auto object-contain [mix-blend-mode:screen] group-hover:brightness-110 transition-all duration-200"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-body font-semibold text-sm uppercase tracking-widest transition-colors duration-150 ${
                pathname === link.href
                  ? "text-flow-orange"
                  : "text-flow-cream/70 hover:text-flow-cream"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-3 px-5 py-2.5 bg-flow-orange hover:bg-flow-orange-hover text-flow-black font-body font-bold text-sm uppercase tracking-wider rounded-sm transition-all duration-150 shadow-orange hover:shadow-orange-lg"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
          className="lg:hidden w-10 h-10 flex items-center justify-center"
        >
          <div className="flex flex-col gap-[5px]">
            {["top", "mid", "bot"].map((pos, i) => (
              <span
                key={pos}
                className={`block h-px w-6 bg-flow-cream transition-all duration-300 origin-center ${
                  isOpen
                    ? i === 0 ? "rotate-45 translate-y-[6px]"
                    : i === 1 ? "opacity-0"
                    : "-rotate-45 -translate-y-[6px]"
                    : ""
                }`}
              />
            ))}
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="lg:hidden bg-flow-black border-t border-white/8 overflow-hidden"
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-body font-semibold text-lg uppercase tracking-wider py-3 border-b border-white/6 transition-colors duration-150 ${
                    pathname === link.href
                      ? "text-flow-orange"
                      : "text-flow-cream/70 hover:text-flow-cream"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-5 text-center px-6 py-4 bg-flow-orange hover:bg-flow-orange-hover text-flow-black font-body font-bold uppercase tracking-wider text-base rounded-sm transition-colors duration-150"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
