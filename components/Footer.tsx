import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";
import { SITE_ADDRESS } from "@/lib/site";

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
      <div className="h-px bg-gradient-to-r from-flow-orange/50 via-flow-teal/50 to-flow-orange/50" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand + address + social */}
          <div className="sm:col-span-2">
            <Link href="/" className="inline-block mb-5" aria-label="Flow MMA Academy home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logoimagewithnobackground.png"
                alt="Flow MMA Academy"
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="font-body text-flow-muted text-sm leading-relaxed max-w-sm mb-2">
              Mixed Martial Arts training in Mesa, Arizona.
              BJJ, Muay Thai, MMA, and Kids Classes.
            </p>
            <address className="font-body text-flow-muted/90 text-sm not-italic leading-relaxed mb-5">
              <span className="text-flow-cream font-semibold">{SITE_ADDRESS.org}</span>
              <br />
              {SITE_ADDRESS.line1}
              <br />
              {SITE_ADDRESS.city}
            </address>
            <SocialLinks />
          </div>

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

        <div className="mt-12 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-flow-muted/40 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Flow MMA Academy · Mesa, Arizona
          </p>
        </div>
      </div>
    </footer>
  );
}
