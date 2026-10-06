import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import { site } from "@/data/site";
import { createMetadata } from "@/lib/seo";
import { Clock3, Mail, MapPin } from "lucide-react";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Have a question about Northlume or our courses? We would love to hear from you.",
  path: "/contact",
});

const details = [
  {
    icon: Mail,
    label: "Email",
    value: site.email,
  },
  {
    icon: Clock3,
    label: "Phone number",
    value: site.phonenumber,
  },
  {
    icon: MapPin,
    label: "Location",
    value: site.location,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get in Touch"
        subtitle="Have a question about Northlume or our courses? We'd love to hear from you."
      />
      <section className="py-14 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:px-8">
          <ContactForm />
          <aside className="space-y-4">
            {details.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-ink-200 p-6"
                >
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-cyan-200">
                    <Icon size={18} />
                  </div>
                  <p className="text-sm text-mute">{item.label}</p>
                  <p className="mt-1 text-lg font-medium text-white">{item.value}</p>
                </div>
              );
            })}
          </aside>
        </div>
      </section>
    </>
  );
}
