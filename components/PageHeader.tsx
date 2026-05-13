interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="pt-32 pb-14 lg:pt-40 lg:pb-16 bg-[#0A0A0A] border-b border-white/8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {eyebrow && (
          <p className="font-display font-semibold text-brand-red uppercase tracking-widest text-sm mb-4">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display font-black text-5xl lg:text-7xl uppercase tracking-tightest text-white leading-none mb-5">
          {title}
        </h1>
        {description && (
          <p className="text-white/55 text-lg max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
