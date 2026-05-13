import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0A0A0A] px-4">
      <div className="text-center max-w-md">
        <p className="font-display font-black text-[120px] lg:text-[180px] text-white/5 leading-none select-none">
          404
        </p>
        <div className="w-8 h-px bg-brand-red mx-auto -mt-4 mb-8" />
        <h1 className="font-display font-black text-4xl uppercase tracking-tightest text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-white/45 text-base mb-8">
          That page doesn&apos;t exist. Let&apos;s get you back on the mat.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-7 py-3.5 bg-brand-red hover:bg-brand-red-dark text-white font-display font-black uppercase tracking-wider text-sm rounded-sm transition-colors duration-150"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
