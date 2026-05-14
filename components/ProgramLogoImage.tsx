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
        className={`flex h-full min-h-[10rem] w-full flex-col items-center justify-center rounded-xl border border-white/10 bg-[#0a0a0a]/80 px-4 ${className}`}
        role="img"
        aria-label={alt}
      >
        <p className="text-center font-body text-sm leading-relaxed text-flow-muted/80">
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
