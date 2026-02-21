import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/shared/page-header";
import { Container } from "@/components/layout/container";
import { CallbackCTA } from "@/components/sections/callback-cta";
import { Award, GraduationCap, Building2, Users, Target, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Ironwood Business Consulting. Founded by Thabani Chinomona, we provide professional accounting, tax, and advisory services to businesses and individuals across South Africa.",
  openGraph: {
    title: "About Us | Ironwood Business Consulting",
    description: "Learn about Ironwood Business Consulting. Founded by Thabani Chinomona, we provide professional accounting, tax, and advisory services across South Africa."
  }
};

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We uphold the highest ethical standards in all our dealings. Honesty and transparency are at the core of everything we do."
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in every service we deliver. Our commitment to quality ensures you receive the best possible outcomes."
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our success. We tailor our services to meet your unique needs and build lasting relationships based on trust."
  }
];

const credentials = [
  {
    icon: Award,
    title: "Registered Tax Practitioner",
    description: "All tax services are overseen by a SARS-registered practitioner, ensuring full compliance and professional standards."
  },
  {
    icon: GraduationCap,
    title: "Professional Qualifications",
    description: "Our team holds relevant professional qualifications and maintains continuous professional development."
  },
  {
    icon: Building2,
    title: "Multi-Sector Experience",
    description: "Extensive experience across diverse industries, from professional services to retail, construction, and online businesses."
  }
];

export default function AboutPage() {
  return (
    <>
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            mainEntity: {
              "@type": "ProfessionalService",
              name: "Ironwood Business Consulting",
              founder: {
                "@type": "Person",
                name: "Thabani Chinomona"
              },
              description: "Professional accounting, tax, and advisory services delivered remotely across South Africa.",
              areaServed: {
                "@type": "Country",
                name: "South Africa"
              }
            }
          })
        }}
      />

      <PageHeader
        title="About Ironwood Business Consulting"
        description="A trusted partner for South African businesses and individuals seeking professional financial services delivered with integrity and expertise."
      />

      {/* Our Story Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
                Our Story
              </h2>
              <div className="prose prose-slate max-w-none">
                <p className="text-lg text-slate-600 leading-relaxed">
                  Ironwood Business Consulting was founded by Thabani Chinomona with a clear
                  vision: to make professional accounting and advisory services accessible to
                  businesses and individuals across South Africa, regardless of location.
                </p>
                <p className="text-slate-600 leading-relaxed mt-4">
                  In today&apos;s digital age, quality financial services shouldn&apos;t be limited
                  by geography. We leverage modern technology and cloud-based systems to
                  deliver comprehensive accounting, tax, and advisory services remotely,
                  serving clients from Johannesburg to Cape Town and everywhere in between.
                </p>
                <p className="text-slate-600 leading-relaxed mt-4">
                  Our approach combines technical expertise with a deep understanding of
                  the South African business landscape. Whether you&apos;re a startup founder,
                  an established SME, or an individual seeking tax assistance, we provide
                  the same level of dedication and professional service.
                </p>
              </div>
            </div>

            {/* Founder Image */}
            <div className="relative">
              <div className="aspect-[4/5] max-w-md mx-auto relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/founder.png"
                  alt="Thabani Chinomona - Founder of Ironwood Business Consulting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-slate-50">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              The principles that guide every aspect of our work.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-white border-slate-100">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex rounded-lg bg-brand-50 p-3 mb-4">
                    <value.icon className="h-6 w-6 text-brand-700" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Credentials Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Credentials & Expertise
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Qualifications and experience you can trust.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {credentials.map((cred, index) => (
              <Card key={index} className="bg-slate-50 border-slate-100">
                <CardContent className="p-6">
                  <div className="inline-flex rounded-lg bg-brand-100 p-3 mb-4">
                    <cred.icon className="h-6 w-6 text-brand-700" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{cred.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {cred.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Remote Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-brand-900">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
              Why Remote?
            </h2>
            <p className="text-lg text-brand-100 leading-relaxed mb-8">
              Remote delivery isn&apos;t a limitation — it&apos;s an advantage. By embracing cloud
              accounting and digital workflows, we provide faster, more efficient service
              while reducing the overhead costs that traditional firms pass on to clients.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 text-left">
              <div className="bg-brand-800/50 rounded-lg p-6">
                <h3 className="font-semibold text-white mb-2">Cost Effective</h3>
                <p className="text-sm text-brand-200">
                  Lower overheads mean competitive pricing without compromising on quality.
                </p>
              </div>
              <div className="bg-brand-800/50 rounded-lg p-6">
                <h3 className="font-semibold text-white mb-2">Accessible</h3>
                <p className="text-sm text-brand-200">
                  Service delivery to any location in South Africa, regardless of where you&apos;re based.
                </p>
              </div>
              <div className="bg-brand-800/50 rounded-lg p-6">
                <h3 className="font-semibold text-white mb-2">Efficient</h3>
                <p className="text-sm text-brand-200">
                  Digital workflows enable faster turnaround times and real-time collaboration.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CallbackCTA />
    </>
  );
}
