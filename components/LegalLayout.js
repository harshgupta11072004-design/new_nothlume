import PageHero from "@/components/PageHero";
import { legalPages } from "@/data/legal";

export default function LegalLayout({ slug }) {
  const page = legalPages[slug];

  return (
    <>
      <PageHero title={page.title} subtitle={page.description} />
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-mute">Last updated: {page.updated}</p>
          <div className="mt-10 space-y-10">
            {page.sections.map((section) => (
              <article key={section.heading}>
                <h2 className="text-xl font-semibold text-white">{section.heading}</h2>
                <p className="mt-3 text-sm leading-relaxed text-mute sm:text-base">
                  {section.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
