import Link from "next/link";
import { legalLinks, navLinks, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <Link href="/" className="inline-flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-accent-gradient text-sm font-bold text-ink">
              N
            </span>
            <span className="text-lg font-semibold text-white">Northlume</span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-mute">
            Northlume is a modern learning platform focused on practical skills in AI,
            digital marketing, technology, and business. Learn clearly, practice with
            purpose, and grow at your own pace.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-mute transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Legal</h3>
          <ul className="mt-4 space-y-2">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-mute transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-sm text-mute">© 2026 {site.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
