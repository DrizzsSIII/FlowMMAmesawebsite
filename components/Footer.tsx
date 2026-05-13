import Link from "next/link";

const navLinks = [
  { label: "Programs", href: "/programs" },
  { label: "Schedule", href: "/schedule" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const programs = [
  { label: "MMA", href: "/programs#mma" },
  { label: "Brazilian Jiu-Jitsu", href: "/programs#bjj" },
  { label: "Muay Thai", href: "/programs#muay-thai" },
  { label: "Kids Classes", href: "/programs#kids" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-gray-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="font-display text-3xl font-black tracking-tightest text-brand-white uppercase">
                Flow<span className="text-brand-red">MMA</span>
              </span>
            </Link>
            <p className="text-brand-white/60 text-sm leading-relaxed max-w-xs font-body">
              Mesa&apos;s premier MMA academy training beginner-friendly classes
              and elite fighters in MMA, BJJ, and Muay Thai.
            </p>
            <div className="mt-6 flex flex-col gap-2">
              <a
                href="tel:+14805551234"
                className="text-brand-white/70 hover:text-brand-red text-sm transition-colors duration-200"
              >
                📞 (480) 555-1234
              </a>
              <p className="text-brand-white/70 text-sm">
                📍 Mesa, Arizona 85201
              </p>
              <a
                href="mailto:info@flowmmaacademy.com"
                className="text-brand-white/70 hover:text-brand-red text-sm transition-colors duration-200"
              >
                ✉️ info@flowmmaacademy.com
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display font-700 uppercase tracking-widest text-xs text-brand-red mb-4">
              Navigate
            </h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brand-white/60 hover:text-brand-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-display font-700 uppercase tracking-widest text-xs text-brand-red mb-4">
              Programs
            </h3>
            <ul className="flex flex-col gap-3">
              {programs.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="text-brand-white/60 hover:text-brand-white text-sm transition-colors duration-200"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-brand-white/40 text-xs">
            © {new Date().getFullYear()} Flow MMA Academy. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-brand-white/40 hover:text-brand-red text-sm transition-colors duration-200"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-brand-white/40 hover:text-brand-red text-sm transition-colors duration-200"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
