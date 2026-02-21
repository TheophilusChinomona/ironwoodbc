import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Container } from "@/components/layout/container";
import { CallbackForm } from "@/components/forms/callback-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { services, getServiceBySlug, getAllServiceSlugs } from "@/lib/data/services";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({
    slug
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found"
    };
  }

  return {
    title: service.seoMeta.title,
    description: service.seoMeta.description,
    keywords: service.seoMeta.keywords,
    openGraph: {
      title: service.seoMeta.title,
      description: service.seoMeta.description,
      url: `https://ironwoodbc.co.za/services/${service.slug}`
    },
    alternates: {
      canonical: `/services/${service.slug}`
    }
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            description: service.fullDescription,
            provider: {
              "@type": "ProfessionalService",
              name: "Ironwood Business Consulting",
              url: "https://ironwoodbc.co.za"
            },
            areaServed: {
              "@type": "Country",
              name: "South Africa"
            },
            serviceType: service.title
          })
        }}
      />

      <PageHeader
        title={service.title}
        description={service.fullDescription}
      />

      {/* Service Details */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Deliverables */}
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-6">
                  What We Deliver
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.deliverables.map((deliverable, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{deliverable}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-6">
                  Key Benefits
                </h2>
                <div className="grid gap-4">
                  {service.benefits.map((benefit, index) => (
                    <Card key={index} className="bg-slate-50 border-slate-100">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0">
                            <span className="text-brand-700 font-semibold text-sm">
                              {index + 1}
                            </span>
                          </div>
                          <span className="text-slate-700">{benefit}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Related Services */}
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-6">
                  Related Services
                </h2>
                <div className="flex flex-wrap gap-3">
                  {services
                    .filter((s) => s.slug !== service.slug)
                    .slice(0, 3)
                    .map((relatedService) => (
                      <Button
                        key={relatedService.slug}
                        variant="outline"
                        asChild
                      >
                        <Link href={`/services/${relatedService.slug}`}>
                          {relatedService.title}
                        </Link>
                      </Button>
                    ))}
                </div>
              </div>
            </div>

            {/* Sidebar - CTA Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Card className="bg-brand-50 border-brand-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      Interested in {service.title}?
                    </h3>
                    <p className="text-sm text-slate-600 mb-6">
                      Request a callback and let&apos;s discuss how we can help with your specific needs.
                    </p>
                    <Button
                      asChild
                      className="w-full bg-brand-700 hover:bg-brand-800"
                    >
                      <Link href="/contact">
                        <Phone className="mr-2 h-4 w-4" />
                        Request a Callback
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="mt-6 bg-white">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">
                      Service Areas
                    </h3>
                    <p className="text-sm text-slate-600 mb-4">
                      This service is available to clients across South Africa,
                      delivered remotely via our cloud-based systems.
                    </p>
                    <Link
                      href="/contact"
                      className="text-sm text-brand-700 hover:text-brand-800 font-medium inline-flex items-center"
                    >
                      View all services
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>

                {/* Tax Practitioner Note for Tax Services */}
                {service.slug === "tax-services" && (
                  <Card className="mt-6 bg-brand-900 text-white">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-2">
                        Registered Tax Practitioner
                      </h3>
                      <p className="text-sm text-brand-100">
                        All tax services are overseen by a SARS-registered tax practitioner,
                        ensuring full compliance and professional standards.
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-20 lg:py-24 bg-slate-50">
        <Container>
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-slate-600">
                Complete the form below and we&apos;ll contact you to discuss your {service.title.toLowerCase()} needs.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <CallbackForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
