import BlogCard from "@/components/BlogCard";
import PageHero from "@/components/PageHero";
import { blogs } from "@/data/blogs";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Blog",
  description:
    "Explore practical insights on AI, digital marketing, technology and modern business from Northlume.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Northlume Insights"
        subtitle="Explore practical insights on AI, digital marketing, technology and modern business."
      />
      <section className="py-14 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
          {blogs.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </>
  );
}
