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
  "inline-flex w-full items-center justify-center px-6 py-3.5 bg-flow-orange hover:bg-flow-orange-hover text-flow-black font-body font-bold uppercase tracking-wider text-sm rounded-sm transition-colors duration-150 shadow-orange hover:shadow-orange-lg";

function ProgramImageFrame({
  size,
  accent,
  children,
}: {
  size:    CardSize;
  accent:  ProgramAccent;
  children: ReactNode;
}) {
  const border =
    accent === "teal"
      ? "border-flow-teal/30 hover:border-flow-teal/50"
      : "border-flow-orange/30 hover:border-flow-orange/50";
  const height =
    size === "home"
      ? "h-[230px] sm:h-[240px] md:h-[300px] lg:h-[340px] xl:h-[360px]"
      : "h-[260px] sm:h-[280px] md:h-[380px] lg:h-[460px] xl:h-[520px]";

  return (
    <div
      className={`flex w-full items-center justify-center overflow-hidden rounded-2xl border ${border} bg-[#0a0a0a] transition-colors duration-200 ease-out ${height}`}
    >
      {children}
    </div>
  );
}

function ProgramBody({
  title,
  description,
  accent,
  align = "center",
}: {
  title:       string;
  description: string;
  accent:      ProgramAccent;
  align?:      "center" | "left";
}) {
  const line = accent === "teal" ? "bg-flow-teal" : "bg-flow-orange";
  const text = align === "left" ? "text-left" : "text-center";
  const lineMx = align === "left" ? "" : "mx-auto";

  return (
    <>
      <div className={`mt-6 h-0.5 w-10 ${line} ${lineMx} lg:mt-0`} />
      <h3
        className={`font-display mt-5 text-2xl tracking-wide text-flow-cream sm:text-3xl lg:text-4xl ${text} ${
          align === "left" ? "lg:mt-6" : ""
        }`}
      >
        {title}
      </h3>
      <p className={`mt-4 font-body text-sm leading-relaxed text-flow-muted sm:text-base ${text}`}>
        {description}
      </p>
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`${trainBtnClass} mt-6`}
      >
        Train With Us
      </a>
    </>
  );
}

export default function ProgramLogoCard({ program, size, splitReverse = false }: ProgramLogoCardProps) {
  const { title, description, image, accent } = program;

  const imgClass =
    "mx-auto h-full w-full max-h-full max-w-full object-contain p-4 sm:p-5 md:p-6 select-none";

  const frameInner = (
    <ProgramImageFrame size={size} accent={accent}>
      <ProgramLogoImage src={image} alt={`${title} logo`} className={imgClass} />
    </ProgramImageFrame>
  );

  if (size === "page") {
    return (
      <article className="group">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className={splitReverse ? "lg:order-2" : ""}>{frameInner}</div>
          <div className={splitReverse ? "lg:order-1 lg:pr-4" : "lg:pl-4"}>
            <ProgramBody title={title} description={description} accent={accent} align="left" />
          </div>
        </div>
      </article>
    );
  }

  const outerBorder =
    accent === "teal"
      ? "border-flow-teal/20 hover:border-flow-teal/45"
      : "border-flow-orange/20 hover:border-flow-orange/45";

  return (
    <article
      className={`group flex h-full flex-col rounded-2xl border ${outerBorder} bg-transparent p-5 transition-[transform,border-color] duration-200 ease-out hover:-translate-y-1 sm:p-6 lg:p-7`}
    >
      {frameInner}
      <ProgramBody title={title} description={description} accent={accent} align="center" />
    </article>
  );
}
