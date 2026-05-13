import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-flow-black px-4">
      <div className="text-center max-w-md">
        <p className="font-display text-[140px] lg:text-[200px] text-flow-orange/8 leading-none select-none">
          404
        </p>
        <div className="w-10 h-0.5 bg-gradient-to-r from-flow-orange to-flow-teal mx-auto -mt-6 mb-8" />
        <h1 className="font-display text-4xl text-flow-cream mb-4">
          PAGE NOT FOUND
        </h1>
        <p className="font-body text-flow-muted text-base mb-8">
          That page doesn&apos;t exist. Let&apos;s get you back on the mat.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-7 py-3.5 bg-flow-orange hover:bg-flow-orange-hover text-flow-black font-body font-bold uppercase tracking-wider text-sm rounded-sm transition-all duration-150 shadow-orange"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
