
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Privacy Policy | NORTHLUME",
  description:
    "Learn how NORTHLUME collects, uses, stores, and protects your personal information.",
  path: "/privacy-policy",
});

const sections = [
  {
    number: "01",
    title: "Information We Collect",
    blocks: [
      {
        title: "Account & Profile Information",
        description:
          "Name, email address, phone number, and account password stored securely in hashed format.",
      },
      {
        title: "Purchase & Billing Data",
        description:
          "Order details, subscription tier, course purchases, and payment status. Payment card details, UPI credentials, and net-banking information are processed by integrated payment processors such as Razorpay or Stripe. We do not store raw financial credentials.",
      },
      {
        title: "User-Submitted Content",
        description:
          "Messages, inquiries, feedback, quiz responses, assignment submissions, community posts, and support ticket communications.",
      },
      {
        title: "Third-Party & Community Data",
        description:
          "Identifiers associated with third-party messaging and interaction channels, such as Telegram handles, Discord IDs, or video-conferencing details.",
      },
      {
        title: "Device & Usage Analytics",
        description:
          "IP address, browser type, device identifiers, operating system, log data, and website navigation patterns.",
      },
    ],
  },
  {
    number: "02",
    title: "How We Use Your Information",
    paragraphs: [
      "We process your personal information for legitimate business purposes, including to:",
    ],
    bullets: [
      "Create, manage, and secure your account and provide access to purchased courses or memberships.",
      "Process transactions, issue invoices, and send order confirmations.",
      "Organize educational sessions, track learning progress, and issue certificates where applicable.",
      "Respond to customer support inquiries, technical issues, and feedback.",
      "Maintain platform security, prevent fraud, and enforce access restrictions.",
      "Send operational notices, service updates, policy changes, and educational material.",
      "Deliver promotional communications where applicable consent has been provided.",
      "Comply with applicable statutory, tax, legal, and accounting obligations in India.",
    ],
  },
  {
    number: "03",
    title: "Cookies and Tracking Technologies",
    paragraphs: [
      "We use cookies, web beacons, and similar technologies to maintain active sessions, remember preferences, analyze website traffic, and improve the user experience on www.northlume.in.",
      "You can control or restrict cookies through your browser settings. Disabling cookies may affect certain platform functionality.",
    ],
  },
  {
    number: "04",
    title: "How We Share Your Information",
    paragraphs: [
      "We do not sell, rent, or trade your personal data to third parties. We share information when necessary to operate the platform, provide services, comply with the law, or protect our legal rights.",
    ],
    blocks: [
      {
        title: "Payment Processors",
        description:
          "Payment gateways such as Razorpay and Stripe to process fees and subscriptions.",
      },
      {
        title: "Infrastructure & Hosting Providers",
        description:
          "Cloud services, hosting providers, and database servers used to store and process information.",
      },
      {
        title: "Communication Tools",
        description:
          "Email delivery platforms, SMS gateways, Telegram, and video-conferencing applications used to deliver updates and community access.",
      },
      {
        title: "Analytics Services",
        description:
          "Analytics providers that help evaluate website traffic and improve platform performance.",
      },
      {
        title: "Legal & Regulatory Authorities",
        description:
          "Authorities or courts when disclosure is required by applicable law or necessary to protect our rights and user safety.",
      },
    ],
  },
  {
    number: "05",
    title: "Data Retention",
    paragraphs: [
      "We retain personal and transaction data for as long as your account remains active and for a reasonable period afterward when necessary to comply with legal, tax, accounting, and dispute-resolution requirements.",
      "When information is no longer required, we take appropriate steps to delete or anonymize it, subject to applicable legal obligations.",
    ],
  },
  {
    number: "06",
    title: "Your Rights",
    paragraphs: [
      "Subject to applicable Indian data protection laws, you may have the following rights regarding your personal information:",
    ],
    blocks: [
      {
        title: "Access",
        description:
          "Request information about the personal data we hold about you.",
      },
      {
        title: "Correction",
        description:
          "Request corrections or updates to inaccurate or incomplete personal details.",
      },
      {
        title: "Erasure",
        description:
          "Request deletion of your personal data and closure of your account, subject to applicable legal retention requirements.",
      },
      {
        title: "Withdraw Consent",
        description:
          "Withdraw consent for marketing emails or promotional notifications using unsubscribe links or by contacting us.",
      },
    ],
    paragraphsAfter: [
      "To exercise your rights, contact us at support@northlume.in.",
    ],
  },
  {
    number: "07",
    title: "Data Security",
    paragraphs: [
      "We implement reasonable technical, operational, and organizational security measures, including SSL/TLS encryption for data in transit, restricted administrative access, and hashed password storage, to protect personal information against unauthorized access, loss, or disclosure.",
      "However, no online transmission or storage system is completely secure, and absolute security cannot be guaranteed.",
    ],
    warning:
      "No online transmission or storage system can be guaranteed to be 100% secure.",
  },
  {
    number: "08",
    title: "Children’s Privacy",
    paragraphs: [
      "The platform is not intended for individuals under 18 without appropriate parental or legal guardian supervision and consent, where required.",
      "If a parent or guardian believes that a minor has submitted personal information without appropriate authorization, please contact us so that we can review the request and take appropriate action.",
    ],
  },
  {
    number: "09",
    title: "International Data Transfers",
    paragraphs: [
      "Our primary operations are based in India. However, hosting infrastructure, cloud services, and communication tools may process or store information on servers located in other countries.",
      "Where cross-border data transfers occur, we take appropriate steps in accordance with applicable data protection requirements.",
    ],
  },
  {
    number: "10",
    title: "Changes to This Privacy Policy",
    paragraphs: [
      'We may update this Privacy Policy from time to time. Material changes will be published on www.northlume.in with an updated "Last updated" date or communicated through appropriate channels.',
      "Continued use of the platform after an updated policy becomes effective will be subject to applicable terms and requirements of law.",
    ],
  },
];

function SectionTitle({ number, title }) {
  return (
    <div className="mb-6 flex items-start gap-4">
      <span className="flex h-9 min-w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-xs font-semibold text-gray-400">
        {number}
      </span>

      <h2 className="pt-1 text-xl font-semibold leading-7 text-white sm:text-2xl">
        {title}
      </h2>
    </div>
  );
}

function InfoBlock({ title, description }) {
  return (
    <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.025] p-5">
      <h3 className="mb-2 text-base font-semibold text-white">
        {title}
      </h3>

      <p className="leading-7 text-gray-400">{description}</p>
    </div>
  );
}

function BulletList({ items }) {
  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex gap-3 leading-7 text-gray-300"
        >
          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ContactCard({ title, items }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.025] p-5">
      <h3 className="mb-5 text-lg font-semibold text-white">
        {title}
      </h3>

      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index}>
            <p className="mb-1 text-xs uppercase tracking-wider text-gray-500">
              {item.label}
            </p>

            {item.href ? (
              <a
                href={item.href}
                className="break-all text-sm text-gray-300 transition hover:text-white"
              >
                {item.value}
              </a>
            ) : (
              <p className="break-words text-sm leading-6 text-gray-300">
                {item.value}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black pb-16 pt-24 text-white">
      <div className="mx-auto mt-12 w-full max-w-5xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <header className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-400">
            Privacy & Data Protection
          </span>

          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Privacy Policy
          </h1>

          <p className="text-sm text-gray-500">
            Last updated: 13 October 2026
          </p>
        </header>

        {/* Introduction */}
        <div className="mb-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <p className="leading-8 text-gray-300">
            This Privacy Policy explains how NORTHLUME we us or our
            collects, uses, shares, stores, and protects your personal
            information when you access or use our website, mobile experience,
            courses, memberships, digital resources, and related services
            (collectively, the "Platform" or "Services").
          </p>

          <p className="mt-4 leading-8 text-gray-300">
            By creating an account, subscribing, or using the Platform, you
            acknowledge this Privacy Policy, subject to applicable law.
          </p>

          <p className="mt-4 leading-8 text-gray-300">
            NORTHLUME is a brand operated by{" "}
            <span className="font-medium text-white">
              NORTHLUME (OPC) PRIVATE LIMITED
            </span>{" "}
            (CIN: U85500DC2026OPC474199), incorporated under the Companies Act,
            2013, with its registered office at E-135 t/f front, left side Om
            Vihar Phase 5, Uttam Nagar, New Delhi, West Delhi, Delhi, India,
            110059.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-6">
          {sections.map((section) => (
            <section
              key={section.number}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8"
            >
              <SectionTitle
                number={section.number}
                title={section.title}
              />

              {section.paragraphs?.map((paragraph, index) => (
                <p
                  key={index}
                  className="mb-4 leading-8 text-gray-300 last:mb-0"
                >
                  {paragraph}
                </p>
              ))}

              {section.bullets && (
                <BulletList items={section.bullets} />
              )}

              {section.blocks?.map((block) => (
                <InfoBlock
                  key={block.title}
                  title={block.title}
                  description={block.description}
                />
              ))}

              {section.paragraphsAfter?.map((paragraph, index) => (
                <p
                  key={index}
                  className="mt-5 leading-8 text-gray-300"
                >
                  {paragraph.replace(
                    "support@northlume.in",
                    ""
                  )}
                  <a
                    href="mailto:support@northlume.in"
                    className="font-medium text-white underline underline-offset-4 transition hover:text-gray-400"
                  >
                    support@northlume.in
                  </a>
                  .
                </p>
              ))}

              {section.warning && (
                <div className="mt-5 rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-5">
                  <p className="leading-7 text-yellow-200">
                    {section.warning}
                  </p>
                </div>
              )}
            </section>
          ))}

          {/* Contact & Grievance Redressal */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <SectionTitle
              number="11"
              title="Contact & Grievance Redressal"
            />

            <p className="mb-6 leading-8 text-gray-300">
              If you have questions, privacy concerns, complaints, or wish to
              exercise your data rights under applicable Indian laws, please
              contact us using the details below.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <ContactCard
                title="NORTHLUME Support"
                items={[
                  {
                    label: "Website",
                    value: "www.northlume.in",
                    href: "https://www.northlume.in",
                  },
                  {
                    label: "Email",
                    value: "support@northlume.in",
                    href: "mailto:support@northlume.in",
                  },
                ]}
              />

              <ContactCard
                title="Grievance Officer"
                items={[
                  {
                    label: "Name",
                    value: "Ankush Dabas",
                  },
                  {
                    label: "Entity",
                    value: "NORTHLUME (OPC) PRIVATE LIMITED",
                  },
                  {
                    label: "Email",
                    value: "admin@northlume.in",
                    href: "mailto:admin@northlume.in",
                  },
                ]}
              />
            </div>

            <div className="mt-4 rounded-xl border border-white/10 bg-black/40 p-5">
              <p className="mb-2 text-sm font-medium text-gray-400">
                Registered Office
              </p>

              <p className="leading-7 text-gray-300">
                E-135 t/f front, left side Om Vihar Phase 5, Uttam Nagar,
                New Delhi, West Delhi, Delhi, India, 110059.
              </p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} NORTHLUME. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}
