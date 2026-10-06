import Link from "next/link";

export default function PageHero({ title, subtitle }) {
  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-hero-glow pt-28 pb-16 sm:pt-32 sm:pb-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,156,255,0.12),transparent_45%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-cyan-200/80">
          Northlume
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-mute sm:text-lg">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}

export function CTASection({
  title,
  description,
  href = "/courses",
  buttonLabel = "Explore Courses",
}) {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#101427] via-ink-100 to-ink-200 px-6 py-14 text-center shadow-glow sm:px-12">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
          <h2 className="relative text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-base leading-relaxed text-mute">
            {description}
          </p>
          <Link
            href={href}
            className="relative mt-8 inline-flex min-h-11 items-center justify-center rounded-full bg-accent-gradient px-7 py-2.5 text-sm font-semibold text-ink shadow-glow-sm transition hover:brightness-110"
          >
            {buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
