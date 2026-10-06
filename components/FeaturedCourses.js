import CourseCard from "@/components/CourseCard";
import SectionHeading from "@/components/SectionHeading";
import { ButtonLink } from "@/components/Container";
import { getFeaturedCourses } from "@/data/courses";

export default function FeaturedCourses() {
  const courses = getFeaturedCourses();

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured Courses"
          title="Explore Our Courses"
          description="Start with practical programs designed to help you learn AI, marketing, and digital growth with clarity."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {courses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <ButtonLink href="/courses" variant="secondary">
            View All Courses
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
