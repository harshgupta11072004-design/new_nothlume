import { site } from "@/data/site";

export function createMetadata({ title, description, path = "/" }) {
  const isHome = path === "/";
  const fullTitle = isHome ? title : `${title} | Northlume`;
  const url = `${site.url}${path}`;

  return {
    title: isHome ? { absolute: title } : title,
    description,
    keywords: site.keywords,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
