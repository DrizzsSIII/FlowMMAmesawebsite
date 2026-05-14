import type { ProgramDefinition } from "@/lib/programs";
import ProgramLogoImage from "@/components/ProgramLogoImage";

type CardSize = "home" | "page";

interface ProgramLogoCardProps {
  program: ProgramDefinition;
  size:    CardSize;
}

/** Logo box: mobile ~180–240px height, desktop larger on Programs page. */
const imageClass: Record<CardSize, string> = {
  home:
    "mx-auto h-[180px] w-full max-w-[280px] object-contain px-2 sm:h-[200px] md:h-[240px] lg:h-[280px]",
  page:
    "mx-auto h-[200px] w-full max-w-xl object-contain px-3 sm:h-[240px] md:h-[260px] lg:h-[300px] xl:h-[20rem]",
};

export default function ProgramLogoCard({ program, size }: ProgramLogoCardProps) {
  const { title, description, image, accent } = program;
  const border =
    accent === "teal"
      ? "border-flow-teal/20 hover:border-flow-teal/40"
      : "border-flow-orange/20 hover:border-flow-orange/40";
  const pad = size === "page" ? "p-8 lg:p-12" : "p-6 lg:p-8";

  return (
    <article
      className={`group flex h-full flex-col rounded-2xl border ${border} bg-transparent ${pad} transition-[transform,border-color] duration-200 ease-out hover:-translate-y-1`}
    >
      <div className="flex flex-1 items-center justify-center py-2">
        <ProgramLogoImage
          src={image}
          alt={`${title} logo`}
          className={`${imageClass[size]} select-none`}
        />
      </div>
      <h3 className="font-display mt-6 text-center text-xl tracking-wide text-flow-cream sm:text-2xl lg:text-3xl">
        {title}
      </h3>
      <p className="font-body mt-3 text-center text-sm leading-relaxed text-flow-muted sm:text-base">
        {description}
      </p>
    </article>
  );
}
