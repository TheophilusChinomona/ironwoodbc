import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/shared/page-header";
import { Container } from "@/components/layout/container";
import { CallbackCTA } from "@/components/sections/callback-cta";
import { contactInfo } from "@/lib/data/navigation";

export const metadata: Metadata = {
  title: "POPIA Compliance",
  description: "Ironwood Business Consulting's commitment to the Protection of Personal Information Act (POPIA). How we collect, use, and protect your personal information.",
  openGraph: {
    title: "POPIA Compliance | Ironwood Business Consulting",
    description: "Our commitment to POPIA and how we protect your personal information."
  }
};

const LAST_UPDATED = "2026";

export default function PopiaPage() {
  return (
    <>
      <PageHeader
        title="POPIA Compliance"
        description="Ironwood Business Consulting is committed to complying with the Protection of Personal Information Act (POPIA). This page explains how we handle your personal information."
      />

      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <Container>
          <div className="mx-auto max-w-3xl prose prose-slate prose-headings:scroll-mt-20 prose-p:leading-relaxed prose-li:leading-relaxed space-y-10">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-4">
              Our commitment
            </h2>
            <p className="text-slate-600 leading-relaxed">
              The Protection of Personal Information Act 4 of 2013 (POPIA) promotes the protection
              of personal information and sets out conditions for the lawful processing thereof.
              Ironwood Business Consulting is committed to processing personal information in a
              lawful, transparent, and responsible manner.
            </p>

            <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-4">
              Personal information we collect
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We may collect and process personal information that you provide when you contact us,
              request a callback, or engage our services. This may include:
            </p>
            <ul className="list-disc pl-6 text-slate-600 leading-relaxed space-y-2">
              <li>Name and contact details (email, phone number)</li>
              <li>Business name and details where relevant</li>
              <li>Information you provide in correspondence or in the course of our engagement</li>
              <li>Information required for tax, accounting, or advisory services</li>
            </ul>

            <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-4">
              Purpose and lawful basis
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We process your personal information for purposes such as: responding to your
              inquiries; providing accounting, tax, and advisory services; fulfilling our legal
              and regulatory obligations; and communicating with you about our services. We do
              so on the basis of your consent, performance of a contract, or where we have another
              lawful basis under POPIA.
            </p>

            <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-4">
              How we protect and store your data
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We implement appropriate technical and organisational measures to protect your
              personal information against unauthorised access, loss, or misuse. Access is
              limited to those who need it for the purposes described above. We retain personal
              information only for as long as necessary to fulfil those purposes or as required
              by law.
            </p>

            <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-4">
              Your rights
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Under POPIA, you have the right to: know what personal information we hold about
              you; request access to and correction of your personal information; object to
              processing in certain circumstances; request deletion where appropriate; and lodge
              a complaint with the Information Regulator of South Africa if you believe your
              rights have been infringed.
            </p>

            <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-4">
              Contact for POPIA-related requests
            </h2>
            <p className="text-slate-600 leading-relaxed">
              For any questions about how we process your personal information, or to exercise
              your rights, please contact us at{" "}
              <a href={`mailto:${contactInfo.email}`} className="text-accent-blue hover:underline">
                {contactInfo.email}
              </a>{" "}
              or call {contactInfo.phone}. You can also use our{" "}
              <Link href="/contact" className="text-accent-blue hover:underline">
                Contact
              </Link>{" "}
              page to request a callback.
            </p>

            <p className="text-sm text-slate-500 pt-4 border-t border-slate-200">
              Last updated: {LAST_UPDATED}. We may update this page from time to time to reflect
              our practices or changes in the law.
            </p>
          </div>
        </Container>
      </section>

      <CallbackCTA />
    </>
  );
}
