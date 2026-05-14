import Link from "next/link";
import { BOOKING_URL } from "@/lib/site";

type Variant = "compact" | "featured";

interface ProgramsSharedCTAProps {
  /** Homepage: buttons only. Programs page: heading + subtext + buttons. */
  variant?: Variant;
}

const primaryClass =
  "inline-flex min-w-[200px] items-center justify-center px-8 py-4 bg-flow-orange hover:bg-flow-orange-hover text-flow-black font-body font-bold uppercase tracking-wider text-sm rounded-sm transition-colors duration-150 shadow-orange hover:shadow-orange-lg";

const secondaryClass =
  "inline-flex min-w-[200px] items-center justify-center px-8 py-4 border border-flow-teal/45 text-flow-cream/90 hover:border-flow-teal hover:text-flow-cream hover:bg-flow-teal/5 font-body font-semibold uppercase tracking-wider text-sm rounded-sm transition-colors duration-150";

export default function ProgramsSharedCTA({ variant = "compact" }: ProgramsSharedCTAProps) {
  return (
    <div
      className={
        variant === "featured"
          ? "mx-auto max-w-2xl px-4 text-center"
          : "mx-auto max-w-xl px-4 text-center"
      }
    >
      {variant === "featured" && (
        <>
          <h2 className="font-display text-3xl tracking-wide text-flow-cream sm:text-4xl">
            Train With Us
          </h2>
          <p className="font-body mt-4 text-base leading-relaxed text-flow-muted sm:text-lg">
            Contact Flow MMA Academy to get started.
          </p>
        </>
      )}

      <div
        className={
          variant === "featured"
            ? "mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap"
            : "flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap"
        }
      >
        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={primaryClass}>
          Train With Us
        </a>
        <Link href="/schedule" className={secondaryClass}>
          View Schedule
        </Link>
      </div>
    </div>
  );
}
