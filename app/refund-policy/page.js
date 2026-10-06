import LegalLayout from "@/components/LegalLayout";
import { createMetadata } from "@/lib/seo";
import { legalPages } from "@/data/legal";

const slug = "refund-policy";

export const metadata = createMetadata({
  title: legalPages[slug].title,
  description: legalPages[slug].description,
  path: `/${slug}`,
});

export default function RefundPage() {
  return <LegalLayout slug={slug} />;
}
