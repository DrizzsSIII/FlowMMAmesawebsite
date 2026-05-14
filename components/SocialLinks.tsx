"use client";

import { FACEBOOK_URL, INSTAGRAM_URL } from "@/lib/site";

const iconBtn =
  "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-flow-black/80 text-flow-cream/70 transition-colors duration-150 hover:border-flow-orange/50 hover:text-flow-orange hover:shadow-[0_0_16px_rgba(215,122,31,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flow-teal/60 focus-visible:ring-offset-2 focus-visible:ring-offset-flow-black";

export default function SocialLinks({ className = "" }: { className?: string }) {
  const fbIsPlaceholder = FACEBOOK_URL === "#";

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Flow MMA Academy Instagram"
        className={iconBtn}
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17" cy="7" r="1.2" fill="currentColor" stroke="none" />
        </svg>
      </a>
      <a
        href={fbIsPlaceholder ? "#" : FACEBOOK_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Flow MMA Academy Facebook"
        aria-disabled={fbIsPlaceholder}
        title={fbIsPlaceholder ? "Facebook link coming soon" : undefined}
        onClick={fbIsPlaceholder ? (e) => e.preventDefault() : undefined}
        className={`${iconBtn} hover:border-flow-teal/45 hover:text-flow-teal hover:shadow-[0_0_16px_rgba(22,199,217,0.12)] ${fbIsPlaceholder ? "cursor-default opacity-80" : ""}`}
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M13.5 22v-9h3l.5-4h-4V7.5c0-1 .3-1.7 1.8-1.7H17V2.1C16.6 2 15.3 2 13.9 2 10.8 2 8.7 3.9 8.7 7.2V9H5v4h3.7v9h4.8Z" />
        </svg>
      </a>
    </div>
  );
}
