import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Programs", href: "/programs" },
  { label: "Schedule", href: "/schedule" },
  { label: "About",    href: "/about"    },
  { label: "Contact",  href: "/contact"  },
];

const programs = [
  { label: "Brazilian Jiu-Jitsu", href: "/programs#bjj"       },
  { label: "Muay Thai",           href: "/programs#muay-thai" },
  { label: "Mixed Martial Arts",  href: "/programs#mma"       },
  { label: "Kids Classes",        href: "/programs#kids"      },
];

export default function Footer() {
  return (
    <footer className="bg-flow-dark border-t border-white/8">
      {/* Top accent bar */}
      <div className="h-px bg-gradient-to-r from-flow-orange/50 via-flow-teal/50 to-flow-orange/50" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="sm:col-span-2">
            <Link href="/" className="inline-block mb-5 group" aria-label="Flow MMA Academy home">
              <Image
                src="/images/flow-logo-transparent.png"
                alt="Flow MMA Academy"
                width={120}
                height={120}
                className="h-14 w-auto object-contain drop-shadow-[0_0_10px_rgba(22,199,217,0.25)] group-hover:drop-shadow-[0_0_16px_rgba(232,137,10,0.45)] transition-all duration-200"
              />
            </Link>
            <p className="font-body text-flow-muted text-sm leading-relaxed max-w-xs">
              Mixed Martial Arts training in Mesa, Arizona.
              BJJ, Muay Thai, MMA, and Kids Classes.
            </p>
            <p className="font-body text-flow-muted/60 text-sm mt-3">
              Mesa, Arizona
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h3 className="font-body font-semibold uppercase tracking-widest text-xs text-flow-orange mb-5">
              Navigate
            </h3>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-flow-muted hover:text-flow-cream text-sm transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-body font-semibold uppercase tracking-widest text-xs text-flow-teal mb-5">
              Programs
            </h3>
            <ul className="flex flex-col gap-2.5">
              {programs.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="font-body text-flow-muted hover:text-flow-cream text-sm transition-colors duration-150"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-flow-muted/40 text-xs">
            © {new Date().getFullYear()} Flow MMA Academy · Mesa, Arizona
          </p>
          <div className="flex gap-5">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-flow-muted/40 hover:text-flow-orange text-xs transition-colors duration-150"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-flow-muted/40 hover:text-flow-teal text-xs transition-colors duration-150"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
