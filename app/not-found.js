import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-4 pt-24 text-center">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-cyan-200/80">404</p>
        <h1 className="mt-3 text-4xl font-semibold text-white">Page not found</h1>
        <p className="mt-3 text-mute">The page you are looking for does not exist.</p>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-11 items-center rounded-full bg-accent-gradient px-6 py-2.5 text-sm font-semibold text-ink"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
