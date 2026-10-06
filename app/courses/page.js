import CourseCard from "@/components/CourseCard";
import PageHero from "@/components/PageHero";
import { courses } from "@/data/courses";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Courses",
  description:
    "Build practical skills in AI, marketing, technology and the digital world with Northlume courses.",
  path: "/courses",
});

export default function CoursesPage() {
  return (
    <>
      <PageHero
        title="Explore Our Courses"
        subtitle="Build practical skills in AI, marketing, technology and the digital world."
      />
      <section className="py-14 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
          {courses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </section>
    </>
  );
}
