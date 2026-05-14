"use client";

import { useState } from "react";

interface ProgramLogoImageProps {
  src?:              string;
  alt:               string;
  placeholderLabel:  string;
  className?:        string;
}

/**
 * Renders program art when `src` is set; otherwise or on error shows `placeholderLabel`.
 */
export default function ProgramLogoImage({
  src,
  alt,
  placeholderLabel,
  className = "",
}: ProgramLogoImageProps) {
  const [failed, setFailed] = useState(false);
  const showPlaceholder = !src || failed;

  if (showPlaceholder) {
    return (
      <div
        className={`flex h-full w-full max-h-full max-w-[90%] flex-col items-center justify-center rounded-xl border border-white/12 bg-black/50 px-3 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <p className="font-body text-xs leading-relaxed text-flow-muted/90 sm:text-sm">{placeholderLabel}</p>
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
