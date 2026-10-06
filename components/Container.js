import Link from "next/link";

export default function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function ButtonLink({ href, children, variant = "primary", className = "" }) {
  const styles =
    variant === "primary"
      ? "bg-accent-gradient text-ink font-semibold shadow-glow-sm hover:brightness-110"
      : "border border-white/15 bg-white/[0.03] text-white hover:bg-white/[0.07]";

  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-full px-6 py-2.5 text-sm transition ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}
