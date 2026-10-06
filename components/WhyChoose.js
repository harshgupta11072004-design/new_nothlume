import FeatureCard from "@/components/FeatureCard";
import SectionHeading from "@/components/SectionHeading";
import { reasons } from "@/data/content";

export default function WhyChoose() {
  return (
    <section className="border-y border-white/5 bg-ink-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Northlume"
          title="Why Learn With Northlume?"
          description="A calm, structured way to build modern skills — practical, beginner-friendly, and relevant to how work actually happens."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
