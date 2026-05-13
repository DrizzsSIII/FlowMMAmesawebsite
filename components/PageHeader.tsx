interface PageHeaderProps {
  eyebrow?:    string;
  title:       string;
  description?: string;
}

export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="pt-32 pb-12 lg:pt-40 lg:pb-14 bg-flow-black border-b border-white/8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {eyebrow && (
          <p className="font-body font-semibold text-flow-orange uppercase tracking-widest text-xs mb-5">
            {eyebrow}
          </p>
        )}
        <div className="w-10 h-0.5 bg-flow-orange mb-6" />
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-flow-cream leading-tight tracking-wide mb-5">
          {title}
        </h1>
        {description && (
          <p className="font-body text-flow-muted text-base lg:text-lg max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
