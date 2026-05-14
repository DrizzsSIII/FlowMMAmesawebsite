"use client";

import { useState } from "react";

interface ProgramLogoImageProps {
  src:         string;
  alt:         string;
  className?:  string;
}

/**
 * Renders program logo; on load error shows “Program logo coming soon”.
 */
export default function ProgramLogoImage({ src, alt, className = "" }: ProgramLogoImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex min-h-[12rem] w-full items-center justify-center rounded-xl border border-white/10 bg-black/40 ${className}`}
        role="img"
        aria-label={alt}
      >
        <p className="font-body px-6 text-center text-sm leading-relaxed text-flow-muted/80">
          Program logo coming soon
        </p>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
}
