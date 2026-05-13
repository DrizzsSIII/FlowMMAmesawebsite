import Link from "next/link";

const navLinks = [
  { label: "Programs", href: "/programs" },
  { label: "Schedule", href: "/schedule" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const programs = [
  { label: "Brazilian Jiu-Jitsu", href: "/programs#bjj" },
  { label: "Muay Thai", href: "/programs#muay-thai" },
  { label: "Mixed Martial Arts", href: "/programs#mma" },
  { label: "Kids Classes", href: "/programs#kids" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-white/8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="font-display font-black text-2xl tracking-tightest text-white uppercase">
                Flow<span className="text-brand-red">MMA</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs font-body mb-5">
              Mixed Martial Arts training in Mesa, Arizona.
              Brazilian Jiu-Jitsu, Muay Thai, MMA, and Kids Classes.
            </p>
            <p className="text-white/40 text-sm">Mesa, Arizona</p>
          </div>

          {/* Navigate */}
          <div>
            <h3 className="font-display font-bold uppercase tracking-widest text-xs text-white/30 mb-4">
              Navigate
            </h3>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/55 hover:text-white text-sm transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-display font-bold uppercase tracking-widest text-xs text-white/30 mb-4">
              Programs
            </h3>
            <ul className="flex flex-col gap-2.5">
              {programs.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="text-white/55 hover:text-white text-sm transition-colors duration-150"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Flow MMA Academy · Mesa, Arizona
          </p>
          <div className="flex gap-5">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white/70 text-xs transition-colors duration-150"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white/70 text-xs transition-colors duration-150"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
