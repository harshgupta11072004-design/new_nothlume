import FeatureCard from "@/components/FeatureCard";
import PageHero, { CTASection } from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { philosophy } from "@/data/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About",
  description:
    "Northlume is a modern education and digital learning platform focused on AI, marketing, technology and practical business skills.",
  path: "/about",
});

const focusAreas = [
  {
    title: "AI",
    description: "Learn practical ways to use AI tools for research, content, productivity and automation.",
    icon: "Sparkles",
  },
  {
    title: "Digital Marketing",
    description: "Build a clear foundation in audience, channels, messaging and online growth.",
    icon: "Megaphone",
  },
  {
    title: "Technology",
    description: "Gain confidence with the digital tools and concepts used in modern work.",
    icon: "Cpu",
  },
  {
    title: "Automation",
    description: "Understand how to simplify repetitive work with thoughtful workflows.",
    icon: "Workflow",
  },
  {
    title: "Business Skills",
    description: "Develop practical thinking around offers, customers, operations and digital growth.",
    icon: "Briefcase",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Northlume"
        subtitle="Northlume is a modern education and digital learning platform. We help people understand AI, digital marketing, technology and business skills through clear, practical programs."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <SectionHeading
            align="left"
            eyebrow="Our Mission"
            title="Make modern digital skills easier to understand."
          />
          <p className="self-center text-base leading-relaxed text-mute">
            Northlume aims to make modern digital skills easier to understand and more accessible
            to learners. We focus on simple explanations, useful examples, and structured learning
            that respects your time. Whether you are starting out or updating your skills, the goal
            is the same: practical knowledge you can apply.
          </p>
        </div>
      </section>

      <section className="border-y border-white/5 bg-ink-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="What We Focus On" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Learning Philosophy"
            description="A straightforward approach designed for real people learning real skills."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {philosophy.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Explore what you can learn with Northlume."
        description="Browse practical courses in AI, marketing, technology and digital growth."
      />
    </>
  );
}
