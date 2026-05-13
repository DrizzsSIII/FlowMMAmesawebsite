import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-brand-black px-5">
      <div className="text-center">
        <p className="font-display font-900 text-[120px] lg:text-[200px] text-brand-red/20 leading-none select-none">
          404
        </p>
        <h1 className="font-display font-900 text-4xl lg:text-6xl uppercase tracking-tightest text-white -mt-6 mb-4">
          Page Not Found
        </h1>
        <p className="text-brand-white/60 text-lg mb-8">
          That page doesn&apos;t exist. Let&apos;s get you back on the mat.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-brand-red hover:bg-brand-red-light text-white font-display font-800 uppercase tracking-wider text-base rounded transition-all duration-200"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
