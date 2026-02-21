import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/shared/page-header";
import { Container } from "@/components/layout/container";
import { CallbackCTA } from "@/components/sections/callback-cta";
import { services } from "@/lib/data/services";
import { ArrowRight, Calculator, FileText, Users, TrendingUp, Building2, Cloud } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "accounting-financial-reporting": FileText,
  "tax-services": Calculator,
  "payroll-services": Users,
  "business-advisory-cfo": TrendingUp,
  "company-secretarial-compliance": Building2,
  "accounting-systems-digital": Cloud
};

export const metadata: Metadata = {
  title: "Our Services",
  description: "Comprehensive accounting, tax, and advisory services for South African businesses. From bookkeeping to CFO services, we deliver professional financial expertise remotely.",
  openGraph: {
    title: "Our Services | Ironwood Business Consulting",
    description: "Comprehensive accounting, tax, and advisory services for South African businesses."
  }
};

export default function ServicesPage() {
  return (
    <>
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Our Services",
            description: "Comprehensive accounting, tax, and advisory services from Ironwood Business Consulting",
            url: "https://ironwoodbc.co.za/services",
            hasPart: services.map(service => ({
              "@type": "Service",
              name: service.title,
              description: service.shortDescription,
              url: `https://ironwoodbc.co.za/services/${service.slug}`
            }))
          })
        }}
      />

      <PageHeader
        title="Our Services"
        description="Professional accounting, tax, and advisory solutions tailored for South African businesses and individuals. From day-to-day bookkeeping to strategic CFO guidance."
      />

      {/* Services Overview */}
      <section className="py-16 md:py-20 lg:py-24 bg-background-light">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = iconMap[service.slug] || FileText;
              return (
                <Card
                  key={service.slug}
                  className="group h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-slate-100 relative overflow-hidden"
                >
                  {/* Decorative corner element - Stitch style */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />

                  <CardHeader className="pb-4 relative">
                    <div className="mb-4 w-14 h-14 rounded-lg bg-accent-blue/10 flex items-center justify-center text-accent-blue group-hover:bg-accent-blue group-hover:text-white transition-colors duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-accent-blue transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 flex-1 flex flex-col relative">
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                      {service.shortDescription}
                    </p>
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center text-sm font-semibold text-accent-blue hover:text-accent-blue-dark transition-colors group/link"
                    >
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Service Model Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-slate-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
              Flexible Service Options
            </h2>
            <p className="text-lg text-slate-600 mb-12">
              We offer flexible engagement models to suit your business needs and budget.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              <Card className="bg-white">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-slate-900 mb-2">Ad-hoc Services</h3>
                  <p className="text-sm text-slate-600">
                    One-time assistance for specific needs like tax clearance applications or annual returns.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-slate-900 mb-2">Monthly Retainer</h3>
                  <p className="text-sm text-slate-600">
                    Ongoing support with predictable monthly fees for regular bookkeeping, payroll, and compliance.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-slate-900 mb-2">Project-Based</h3>
                  <p className="text-sm text-slate-600">
                    Fixed-price engagements for specific projects like system implementations or financial reviews.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-brand-teal">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
              Not Sure What You Need?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Every business is unique. Let&apos;s discuss your specific situation and
              recommend the right services for your needs.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent-blue hover:bg-accent-blue-dark text-white shadow-lg shadow-accent-blue/30"
            >
              <Link href="/contact">
                Schedule a Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      <CallbackCTA />
    </>
  );
}
