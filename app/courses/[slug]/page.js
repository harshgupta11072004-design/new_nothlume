import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero, { CTASection } from "@/components/PageHero";
import { courses, getCourseBySlug } from "@/data/courses";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export function generateMetadata({ params }) {
  const course = getCourseBySlug(params.slug);
  if (!course) return {};
  return createMetadata({
    title: course.title,
    description: course.description,
    path: `/courses/${course.slug}`,
  });
}

export default function CourseDetailPage({ params }) {
  const course = getCourseBySlug(params.slug);
  if (!course) notFound();

  return (
    <>
      <PageHero title={course.title} subtitle={course.description} />
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-wrap gap-2 text-sm text-mute">
            <span className="rounded-full border border-white/10 px-3 py-1">{course.category}</span>
            <span className="rounded-full border border-white/10 px-3 py-1">{course.difficulty}</span>
            <span className="rounded-full border border-white/10 px-3 py-1">{course.duration}</span>
          </div>
          <h2 className="text-2xl font-semibold text-white">About this course</h2>
          <p className="mt-4 leading-relaxed text-mute">{course.overview}</p>
          <h3 className="mt-10 text-xl font-semibold text-white">What you will learn</h3>
          <ul className="mt-4 space-y-3 text-mute">
            {course.outcomes.map((item) => (
              <li key={item} className="rounded-xl border border-white/5 bg-ink-200 px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="mt-10 inline-flex min-h-11 items-center rounded-full bg-accent-gradient px-6 py-2.5 text-sm font-semibold text-ink"
          >
            Ask about this course
          </Link>
        </div>
      </section>
      <CTASection
        title="Ready to explore more?"
        description="Browse the full Northlume course library and find your next skill."
      />
    </>
  );
}
