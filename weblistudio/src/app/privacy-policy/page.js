import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Webli Studio",
  description:
    "Learn how Webli Studio collects, uses, and protects personal information submitted through our website.",
};

const sections = [
  {
    number: "01",
    title: "Information We Collect",
    content: (
      <>
        <p>
          We collect personal information that you voluntarily provide when
          contacting Webli Studio through our website.
        </p>

        <p className="mt-4">This may include:</p>

        <ul className="mt-4 space-y-2 text-white/60">
          <li>• Your name</li>
          <li>• Your email address</li>
          <li>• The type of project you are interested in</li>
          <li>• Project details, requirements, goals, and timelines you provide</li>
        </ul>

        <p className="mt-4">
          Please avoid including sensitive personal information in the project
          details field unless it is genuinely necessary for your enquiry.
        </p>
      </>
    ),
  },
  {
    number: "02",
    title: "Why We Use Your Information",
    content: (
      <>
        <p>
          We use the information submitted through our website primarily to
          review, understand, and respond to your project enquiry.
        </p>

        <p className="mt-4">This may include using the information to:</p>

        <ul className="mt-4 space-y-2 text-white/60">
          <li>• Respond to your enquiry</li>
          <li>• Understand your project requirements</li>
          <li>• Discuss potential services, timelines, and pricing</li>
          <li>• Communicate with you about the project you contacted us about</li>
          <li>• Maintain appropriate business and communication records</li>
        </ul>

        <p className="mt-4">
          We do not intend to use information submitted through a project
          enquiry for unrelated purposes without an appropriate basis or
          additional notice where required.
        </p>
      </>
    ),
  },
  {
    number: "03",
    title: "How Your Enquiry Is Processed",
    content: (
      <>
        <p>
          When you submit our contact form, the information you provide is sent
          through a third-party form processing service so that Webli Studio can
          receive and respond to your enquiry.
        </p>

        <p className="mt-4">
          Third-party service providers may process information on our behalf
          according to their own infrastructure, security practices, and
          applicable terms.
        </p>

        <p className="mt-4">
          We aim to use service providers only for purposes connected with
          operating our website and handling business enquiries.
        </p>
      </>
    ),
  },
  {
    number: "04",
    title: "Sharing of Personal Information",
    content: (
      <>
        <p>
          We do not sell or rent personal information submitted through our
          website.
        </p>

        <p className="mt-4">
          Information may be shared with service providers where reasonably
          necessary to operate the website, process enquiries, provide our
          services, maintain security, or comply with applicable legal
          obligations.
        </p>

        <p className="mt-4">
          Where a project requires additional third-party platforms or services,
          relevant information may be processed through those services as
          necessary for the project and as communicated to you where
          appropriate.
        </p>
      </>
    ),
  },
  {
    number: "05",
    title: "Data Retention",
    content: (
      <>
        <p>
          We aim to retain personal information only for as long as reasonably
          necessary for the purpose for which it was collected, including
          responding to enquiries, managing client relationships, maintaining
          appropriate business records, resolving disputes, and meeting
          applicable legal obligations.
        </p>

        <p className="mt-4">
          Retention periods may vary depending on the nature of the enquiry,
          whether you become a client, and whether information must be retained
          for legitimate business or legal purposes.
        </p>

        <p className="mt-4">
          Information that is no longer reasonably required should be deleted
          or otherwise handled in accordance with our applicable data-handling
          practices.
        </p>
      </>
    ),
  },
  {
    number: "06",
    title: "Data Security",
    content: (
      <>
        <p>
          We take reasonable technical and organisational measures intended to
          protect personal information against unauthorised access, disclosure,
          alteration, loss, or misuse.
        </p>

        <p className="mt-4">
          However, no website, internet transmission, email system, or digital
          storage method can be guaranteed to be completely secure.
        </p>
      </>
    ),
  },
  {
    number: "07",
    title: "Cookies & Similar Technologies",
    content: (
      <>
        <p>
          Our website may use technical functionality required for the website
          to operate correctly.
        </p>

        <p className="mt-4">
          If we introduce analytics, advertising technologies, or other
          non-essential tracking tools, we will review the related privacy and
          consent requirements and update our practices where appropriate.
        </p>
      </>
    ),
  },
  {
    number: "08",
    title: "Your Privacy Choices",
    content: (
      <>
        <p>
          Depending on applicable law and the circumstances of processing, you
          may contact us regarding personal information you have provided to
          Webli Studio.
        </p>

        <p className="mt-4">For example, you may contact us to request:</p>

        <ul className="mt-4 space-y-2 text-white/60">
          <li>• Information about how your personal data is being handled</li>
          <li>• Correction or updating of inaccurate information</li>
          <li>• Deletion of personal information where applicable</li>
          <li>• Withdrawal of consent where processing is based on consent</li>
          <li>• Assistance with a privacy-related concern or grievance</li>
        </ul>

        <p className="mt-4">
          We may need to verify your identity before acting on certain requests.
          Some information may need to be retained where its continued
          processing or retention is permitted or required by applicable law.
        </p>
      </>
    ),
  },
  {
    number: "09",
    title: "Third-Party Links",
    content: (
      <>
        <p>
          Our website may contain links to third-party websites, social media
          platforms, or other external services.
        </p>

        <p className="mt-4">
          Their privacy practices are controlled by those third parties. We
          encourage you to review their privacy information before providing
          personal data to them.
        </p>
      </>
    ),
  },
  {
    number: "10",
    title: "Children's Privacy",
    content: (
      <>
        <p>
          Webli Studio's website and services are primarily intended for
          businesses, founders, professionals, and other persons seeking web
          development or related services.
        </p>

        <p className="mt-4">
          We do not intentionally design our contact form for the collection of
          children's personal information. If we become aware that information
          involving a child requires special handling under applicable law, we
          will take appropriate steps.
        </p>
      </>
    ),
  },
  {
    number: "11",
    title: "Changes to This Privacy Policy",
    content: (
      <>
        <p>
          We may update this Privacy Policy when our website, services,
          technology, third-party providers, or applicable requirements change.
        </p>

        <p className="mt-4">
          The latest version will be published on this page together with its
          updated effective date.
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="pointer-events-none absolute left-[8%] top-[10%] h-40 w-40 rounded-full bg-yellow-300/10 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-[15%] right-[8%] h-52 w-52 rounded-full bg-cyan-400/10 blur-[120px]" />

      <section className="relative mx-auto max-w-5xl px-4 pb-24 pt-28 sm:px-6 sm:pt-36 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-white/40">
            Legal / Privacy
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-7xl">
            Privacy{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-white to-yellow-100 bg-clip-text text-transparent">
              Policy.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
            This Privacy Policy explains how Webli Studio handles personal
            information when you visit our website, submit a project enquiry, or
            communicate with us through the website.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/50">
              Effective: September 28, 2026
            </span>

            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/50">
              Webli Studio
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="my-14 h-px bg-gradient-to-r from-white/20 via-white/5 to-transparent" />

        {/* Intro */}
        <div className="mb-16 grid gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8 lg:grid-cols-[0.7fr_2fr]">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-yellow-300/70">
              Our approach
            </span>
          </div>

          <p className="text-lg leading-8 text-white/70">
            We believe personal information should be collected for clear
            purposes, handled responsibly, and protected with appropriate
            safeguards. We aim to collect only information reasonably necessary
            to understand and respond to your enquiry.
          </p>
        </div>

        {/* Policy */}
        <div className="divide-y divide-white/10 border-y border-white/10">
          {sections.map((section) => (
            <article
              key={section.number}
              className="grid gap-5 py-10 sm:py-12 lg:grid-cols-[120px_1fr]"
            >
              <div>
                <span className="font-mono text-sm text-yellow-300/50">
                  {section.number}
                </span>
              </div>

              <div className="max-w-3xl">
                <h2 className="mb-5 text-2xl font-medium tracking-tight text-white sm:text-3xl">
                  {section.title}
                </h2>

                <div className="text-sm leading-7 text-white/60 sm:text-base">
                  {section.content}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Contact / Privacy requests */}
        <section className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 sm:p-10">
          <p className="text-xs uppercase tracking-[0.2em] text-white/40">
            Privacy requests
          </p>

          <div className="mt-4 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-medium sm:text-3xl">
                Have a question about your data?
              </h2>

              <p className="mt-4 leading-7 text-white/60">
                Contact Webli Studio through our contact page for questions,
                correction or deletion requests, consent withdrawal, or other
                privacy-related concerns. Please mention{" "}
                <span className="text-white">
                  &quot;Privacy Request&quot;
                </span>{" "}
                in your message so we can identify your request appropriately.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center rounded-full border border-white/20 px-7 py-3 text-sm text-white transition hover:bg-white hover:text-black"
            >
              Contact us →
            </Link>
          </div>
        </section>

        {/* Footer note */}
        <div className="mt-10 flex flex-col justify-between gap-3 text-xs leading-5 text-white/30 sm:flex-row">
          <p>© {new Date().getFullYear()} Webli Studio.</p>

          <Link
            href="/"
            className="transition hover:text-white/60"
          >
            Back to website ↑
          </Link>
        </div>
      </section>
    </main>
  );
}