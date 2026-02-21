import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/shared/page-header";
import { Container } from "@/components/layout/container";
import { CallbackCTA } from "@/components/sections/callback-cta";
import { contactInfo } from "@/lib/data/navigation";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Ironwood Business Consulting. How we collect, use, and protect your information when you use our website and services. POPIA compliant.",
  openGraph: {
    title: "Privacy Policy | Ironwood Business Consulting",
    description: "How we collect, use, and protect your information. POPIA compliant."
  }
};

const LAST_UPDATED = "2026";

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        description="This policy explains how Ironwood Business Consulting collects, uses, and protects your information when you use our website and services. We comply with the Protection of Personal Information Act (POPIA)."
      />

      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <Container>
          <div className="mx-auto max-w-3xl prose prose-slate prose-headings:scroll-mt-20 prose-p:leading-relaxed prose-li:leading-relaxed space-y-10">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-4">
              Introduction
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Ironwood Business Consulting (“we”, “us”, “our”) provides accounting, tax, and
              advisory services to businesses and individuals in South Africa. This Privacy
              Policy applies to information we collect through our website and in the course of
              providing our services. We are committed to protecting your privacy and comply
              with the Protection of Personal Information Act 4 of 2013 (POPIA).
            </p>

            <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-4">
              Information we collect
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We may collect information that you provide when you contact us, request a
              callback, or engage our services. This may include your name, email address,
              phone number, business name and details, and any other information you choose to
              provide. Our website may use essential cookies necessary for its operation; we
              do not use non-essential tracking cookies for advertising purposes.
            </p>

            <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-4">
              How we use your information
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We use the information we collect to respond to your inquiries, provide our
              services, communicate with you about your engagement, improve our services, and
              meet our legal and regulatory obligations. We do not sell your personal
              information to third parties.
            </p>

            <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-4">
              Sharing and disclosure
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We may share your information only where necessary: with your consent; to comply
              with law or legal process; to protect our rights or the rights of others; or with
              service providers who assist us under strict confidentiality obligations. We do
              not disclose your personal information for marketing purposes to third parties.
            </p>

            <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-4">
              Data retention and security
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We retain your personal information only for as long as needed to fulfil the
              purposes for which it was collected or as required by law (for example, for tax
              and accounting records). We implement appropriate technical and organisational
              measures to keep your data secure and to prevent unauthorised access, loss, or
              misuse.
            </p>

            <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-4">
              Your rights
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Under POPIA, you have the right to access your personal information, request
              correction of inaccuracies, object to certain processing, request deletion where
              applicable, and lodge a complaint with the Information Regulator of South Africa.
              To exercise these rights, please contact us using the details below.
            </p>

            <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-4">
              Changes to this policy
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We may update this Privacy Policy from time to time. The “Last updated” date
              below indicates when the policy was last revised. We encourage you to review this
              page periodically for any changes.
            </p>

            <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-4">
              Contact us
            </h2>
            <p className="text-slate-600 leading-relaxed">
              For any questions about this Privacy Policy or our handling of your personal
              information, please contact us at{" "}
              <a href={`mailto:${contactInfo.email}`} className="text-accent-blue hover:underline">
                {contactInfo.email}
              </a>
              , call {contactInfo.phone}, or use our{" "}
              <Link href="/contact" className="text-accent-blue hover:underline">
                Contact
              </Link>{" "}
              page to request a callback.
            </p>

            <p className="text-sm text-slate-500 pt-4 border-t border-slate-200">
              Last updated: {LAST_UPDATED}.
            </p>
          </div>
        </Container>
      </section>

      <CallbackCTA />
    </>
  );
}
