import HomeHero from "@/components/HomeHero";
import OffersSection from "@/components/OffersSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChoose from "@/components/WhyChoose";
import LearningApproach from "@/components/LearningApproach";
import { CTASection } from "@/components/PageHero";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Northlume | Learn AI, Marketing & Digital Skills",
  description:
    "Practical learning programs designed to help you understand AI, digital marketing, technology and modern business skills.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <OffersSection />
      <FeaturedCourses />
      <WhyChoose />
      <LearningApproach />
      <CTASection
        title="Start Your Learning Journey With Northlume"
        description="Explore our courses and build practical skills for the modern digital world."
      />
    </>
  );
}
