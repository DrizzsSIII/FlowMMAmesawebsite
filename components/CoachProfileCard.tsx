type Accent = "orange" | "teal";

interface CoachProfileCardProps {
  name:       string;
  beltLabel:  string;
  bullets:    readonly string[];
  accent:     Accent;
}

export default function CoachProfileCard({ name, beltLabel, bullets, accent }: CoachProfileCardProps) {
  const line = accent === "teal" ? "bg-flow-teal" : "bg-flow-orange";
  const border =
    accent === "teal"
      ? "border-flow-teal/25 hover:border-flow-teal/40"
      : "border-flow-orange/25 hover:border-flow-orange/40";

  return (
    <article
      className={`flex h-full flex-col rounded-2xl border ${border} bg-[#0a0a0a] p-6 shadow-[0_12px_48px_rgba(0,0,0,0.35)] transition-colors duration-200 sm:p-8`}
    >
      <div className={`mb-5 h-0.5 w-12 ${line}`} />
      <h3 className="font-display text-2xl tracking-wide text-flow-cream sm:text-3xl">{name}</h3>
      <p className="mt-2 font-body text-sm font-semibold uppercase tracking-wider text-flow-orange/90">
        {beltLabel}
      </p>
      <ul className="mt-6 flex list-none flex-col gap-3 font-body text-sm leading-relaxed text-flow-muted sm:text-[15px]">
        {bullets.map((item, i) => (
          <li key={i} className="flex gap-3">
            <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${accent === "teal" ? "bg-flow-teal" : "bg-flow-orange"}`} aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
