import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";
import { BOOKING_URL, SITE_ADDRESS } from "@/lib/site";

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

const ctaClass =
  "inline-flex w-full sm:w-auto items-center justify-center px-7 py-3.5 bg-flow-orange hover:bg-flow-orange-hover text-flow-black font-body font-bold uppercase tracking-wider text-sm rounded-sm transition-colors duration-150 shadow-orange hover:shadow-orange-lg";

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-flow-dark">
      <div className="h-px bg-gradient-to-r from-flow-orange/50 via-flow-teal/50 to-flow-orange/50" />

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Brand column */}
          <div className="lg:col-span-5">
            <Link href="/" className="mb-6 inline-block" aria-label="Flow MMA Academy home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logoimagewithnobackground.png"
                alt="Flow MMA Academy"
                className="h-20 w-auto object-contain md:h-28 lg:h-32"
              />
            </Link>
            <p className="mb-5 max-w-sm font-body text-sm leading-relaxed text-flow-muted">
              Mixed Martial Arts training in Mesa, Arizona. BJJ, Muay Thai, MMA, and Kids Classes.
            </p>
            <address className="mb-6 font-body text-sm not-italic leading-relaxed text-flow-muted/90">
              <span className="font-semibold text-flow-cream">{SITE_ADDRESS.org}</span>
              <br />
              {SITE_ADDRESS.line1}
              <br />
              {SITE_ADDRESS.city}
            </address>
            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <SocialLinks />
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${ctaClass} shrink-0`}
              >
                Train With Us
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-12 lg:col-span-7 lg:grid-cols-2">
            <div>
              <h3 className="mb-5 font-body text-xs font-semibold uppercase tracking-widest text-flow-orange">
                Navigate
              </h3>
              <ul className="flex flex-col gap-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-body text-sm text-flow-muted transition-colors duration-150 hover:text-flow-cream"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-5 font-body text-xs font-semibold uppercase tracking-widest text-flow-teal">
                Programs
              </h3>
              <ul className="flex flex-col gap-2.5">
                {programs.map((p) => (
                  <li key={p.href}>
                    <Link
                      href={p.href}
                      className="font-body text-sm text-flow-muted transition-colors duration-150 hover:text-flow-cream"
                    >
                      {p.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/8 pt-8 sm:flex-row">
          <p className="text-center font-body text-xs text-flow-muted/50 sm:text-left">
            © {new Date().getFullYear()} Flow MMA Academy · Mesa, Arizona
          </p>
        </div>
      </div>
    </footer>
  );
}
