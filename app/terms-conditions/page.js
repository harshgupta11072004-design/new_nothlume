import LegalLayout from "@/components/LegalLayout";
import { createMetadata } from "@/lib/seo";
import { legalPages } from "@/data/legal";

const slug = "terms-conditions";

export const metadata = createMetadata({
  title: legalPages[slug].title,
  description: legalPages[slug].description,
  path: `/${slug}`,
});

export default function TermsPage() {
  return <LegalLayout slug={slug} />;
}
