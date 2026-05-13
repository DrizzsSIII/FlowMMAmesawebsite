interface PageHeaderProps {
  eyebrow?:    string;
  title:       string;
  description?: string;
}

export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="pt-32 pb-14 lg:pt-40 lg:pb-16 bg-flow-black border-b border-white/8 relative overflow-hidden">
      {/* Subtle teal glow top-right */}
      <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-flow-teal/6 blur-[100px] rounded-full pointer-events-none" />
      {/* Subtle orange glow bottom-left */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[200px] bg-flow-orange/6 blur-[80px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {eyebrow && (
          <p className="font-body font-semibold text-flow-teal uppercase tracking-widest text-sm mb-4">
            {eyebrow}
          </p>
        )}
        {/* Sunset gradient accent line */}
        <div className="w-10 h-0.5 bg-gradient-to-r from-flow-orange to-flow-sunset mb-5" />
        <h1 className="font-display text-5xl lg:text-7xl text-flow-cream leading-none mb-5">
          {title}
        </h1>
        {description && (
          <p className="font-body text-flow-muted text-lg max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
