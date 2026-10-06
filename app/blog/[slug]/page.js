import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { blogs, getBlogBySlug } from "@/data/blogs";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = getBlogBySlug(params.slug);
  if (!post) return {};
  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

export default function BlogDetailPage({ params }) {
  const post = getBlogBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      <PageHero title={post.title} subtitle={post.excerpt} />
      <article className="py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-mute">
            <span className="rounded-full border border-white/10 px-3 py-1">{post.category}</span>
            <time>{post.date}</time>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-mute">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Link
            href="/blog"
            className="mt-10 inline-flex text-sm font-medium text-cyan-200 hover:text-white"
          >
            ← Back to Insights
          </Link>
        </div>
      </article>
    </>
  );
}
