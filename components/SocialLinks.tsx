"use client";

import type { ReactNode } from "react";
import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  TWITTER_URL,
} from "@/lib/site";

const iconBtn =
  "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-flow-black/80 text-flow-cream/70 transition-colors duration-150 hover:border-flow-orange/50 hover:text-flow-orange hover:shadow-[0_0_16px_rgba(215,122,31,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flow-teal/60 focus-visible:ring-offset-2 focus-visible:ring-offset-flow-black";

const iconBtnTealHover =
  "hover:border-flow-teal/45 hover:text-flow-teal hover:shadow-[0_0_16px_rgba(22,199,217,0.12)]";

function PlaceholderSocial({
  href,
  label,
  title,
  children,
}: {
  href: string;
  label: string;
  title: string;
  children: ReactNode;
}) {
  const isPh = href === "#";
  return (
    <a
      href={isPh ? "#" : href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      aria-disabled={isPh}
      title={isPh ? title : undefined}
      onClick={isPh ? (e) => e.preventDefault() : undefined}
      className={`${iconBtn} ${iconBtnTealHover} ${isPh ? "cursor-default opacity-80" : ""}`}
    >
      {children}
    </a>
  );
}

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      <PlaceholderSocial
        href={FACEBOOK_URL}
        label="Flow MMA Academy Facebook"
        title="Facebook link coming soon — TODO: Add verified Facebook URL"
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M13.5 22v-9h3l.5-4h-4V7.5c0-1 .3-1.7 1.8-1.7H17V2.1C16.6 2 15.3 2 13.9 2 10.8 2 8.7 3.9 8.7 7.2V9H5v4h3.7v9h4.8Z" />
        </svg>
      </PlaceholderSocial>

      <PlaceholderSocial
        href={TWITTER_URL}
        label="Flow MMA Academy Twitter"
        title="Twitter link coming soon — TODO: Add verified Twitter/X URL"
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M18.22 3h3.42l-7.48 8.55L22 21h-6.88l-5.38-7.07L5.56 21H2.1l8-9.15L2 3h7.05l4.86 6.34L18.22 3Zm-1.2 16.2h1.9L7.93 5.72H5.9l11.12 13.48Z" />
        </svg>
      </PlaceholderSocial>

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

      <PlaceholderSocial
        href={LINKEDIN_URL}
        label="Flow MMA Academy LinkedIn"
        title="LinkedIn link coming soon — TODO: Add verified LinkedIn URL"
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M5 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm-1.75 6.75h3.5V21h-3.5V9.75ZM10.75 9.75H14v1.6h.05c.45-.85 1.55-1.75 3.2-1.75 3.42 0 4.05 2.25 4.05 5.18V21h-3.65v-5.6c0-1.34-.02-3.05-1.86-3.05-1.86 0-2.14 1.46-2.14 2.97V21h-3.65V9.75Z" />
        </svg>
      </PlaceholderSocial>
    </div>
  );
}
