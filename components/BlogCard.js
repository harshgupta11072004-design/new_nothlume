import Link from "next/link";
import { ArrowRight } from "lucide-react";

const gradients = {
  AI: "from-indigo-500/40 to-cyan-400/10",
  Marketing: "from-fuchsia-500/25 to-indigo-500/15",
  Technology: "from-sky-500/30 to-slate-700/20",
  Business: "from-violet-500/30 to-cyan-500/10",
  Productivity: "from-teal-400/25 to-indigo-600/15",
};

export default function BlogCard({ post }) {
  const gradient = gradients[post.category] || gradients.AI;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-200 transition duration-300 hover:-translate-y-1 hover:border-indigo-400/30 hover:shadow-glow">
      <div className={`h-36 bg-gradient-to-br ${gradient}`} />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3 text-xs text-mute">
          <span className="rounded-full border border-white/10 px-3 py-1">{post.category}</span>
          <time>{post.date}</time>
        </div>
        <h3 className="mt-4 text-xl font-semibold text-white">{post.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-mute">{post.excerpt}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-200 transition hover:text-white"
        >
          Read More <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}
