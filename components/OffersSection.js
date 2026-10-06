import FeatureCard from "@/components/FeatureCard";
import SectionHeading from "@/components/SectionHeading";
import { offers } from "@/data/content";

export default function OffersSection() {
  return (
    <section className="border-t border-white/5 bg-ink-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What Northlume Offers"
          title="Learning Built for the Modern World"
          description="Northlume focuses on practical and accessible learning across AI, digital marketing, technology, business, automation, and modern digital skills."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {offers.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
