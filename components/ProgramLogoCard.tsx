import type { ReactNode } from "react";
import type { ProgramAccent, ProgramDefinition } from "@/lib/programs";
import ProgramLogoImage from "@/components/ProgramLogoImage";
import { BOOKING_URL } from "@/lib/site";

type CardSize = "home" | "page";

interface ProgramLogoCardProps {
  program:       ProgramDefinition;
  size:          CardSize;
  /** Programs page: alternate image column (desktop). */
  splitReverse?: boolean;
}

const trainBtnClass =
  "inline-flex w-full min-h-[48px] items-center justify-center rounded-sm bg-flow-orange px-6 py-3.5 font-body text-sm font-bold uppercase tracking-wider text-flow-black shadow-orange transition-colors duration-150 hover:bg-flow-orange-hover hover:shadow-orange";

function ProgramImageFrame({
  size,
  accent,
  children,
}: {
  size:     CardSize;
  accent:   ProgramAccent;
  children: ReactNode;
}) {
  const border =
    accent === "teal"
      ? "border-flow-teal/35 hover:border-flow-teal/55"
      : "border-flow-orange/35 hover:border-flow-orange/55";
  const height =
    size === "home"
      ? "h-[200px] sm:h-[220px] md:h-[230px] lg:h-[250px]"
      : "h-[240px] sm:h-[260px] md:h-[340px] lg:h-[420px] xl:h-[480px]";

  return (
    <div
      className={`flex w-full shrink-0 items-center justify-center overflow-hidden rounded-2xl border ${border} bg-black/40 p-4 transition-colors duration-200 sm:p-5 ${height}`}
    >
      {children}
    </div>
  );
}

const imgInnerClass =
  "mx-auto max-h-[90%] max-w-[85%] object-contain select-none";

export default function ProgramLogoCard({ program, size, splitReverse = false }: ProgramLogoCardProps) {
  const { title, description, image, accent, placeholderLabel } = program;

  const imageBlock = (
    <ProgramImageFrame size={size} accent={accent}>
      <ProgramLogoImage
        src={image}
        alt={`${title} program artwork`}
        placeholderLabel={placeholderLabel}
        className={imgInnerClass}
      />
    </ProgramImageFrame>
  );

  const accentLine = accent === "teal" ? "bg-flow-teal" : "bg-flow-orange";

  if (size === "page") {
    return (
      <article className="group flex h-full min-h-0 flex-col">
        <div className="grid h-full min-h-0 grid-cols-1 items-stretch gap-10 lg:grid-cols-2 lg:gap-14">
          <div className={splitReverse ? "lg:order-2" : ""}>{imageBlock}</div>
          <div
            className={`flex min-h-0 flex-col ${splitReverse ? "lg:order-1 lg:pr-2" : "lg:pl-2"}`}
          >
            <div className={`h-0.5 w-10 shrink-0 ${accentLine}`} />
            <h2 className="mt-5 font-display text-3xl uppercase leading-tight tracking-wide text-flow-cream sm:text-4xl lg:text-[2.125rem] lg:leading-[1.15]">
              {title}
            </h2>
            <p className="mt-4 max-w-xl flex-1 font-body text-base leading-relaxed text-flow-muted">
              {description}
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${trainBtnClass} mt-8 lg:mt-auto lg:pt-2`}
            >
              Train With Us
            </a>
          </div>
        </div>
      </article>
    );
  }

  const outerBorder =
    accent === "teal"
      ? "border-flow-teal/25 hover:border-flow-teal/45"
      : "border-flow-orange/25 hover:border-flow-orange/45";

  return (
    <article
      className={`group flex h-full flex-col rounded-2xl border ${outerBorder} bg-[#070707]/80 p-6 transition-[transform,border-color] duration-200 ease-out hover:-translate-y-0.5 sm:p-7`}
    >
      {imageBlock}

      <div className="flex flex-1 flex-col pt-6 text-center">
        <div className={`mx-auto h-0.5 w-10 shrink-0 ${accentLine}`} />
        <h3 className="mt-4 font-display text-2xl uppercase leading-tight tracking-wide text-flow-cream sm:text-3xl">
          {title}
        </h3>
        <p className="mx-auto mt-3 max-w-[22rem] flex-1 font-body text-sm leading-relaxed text-flow-muted sm:text-base">
          {description}
        </p>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`${trainBtnClass} mt-auto pt-6`}
        >
          Train With Us
        </a>
      </div>
    </article>
  );
}
