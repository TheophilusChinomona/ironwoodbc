import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/shared/page-header";
import { Container } from "@/components/layout/container";
import { CallbackCTA } from "@/components/sections/callback-cta";
import { industries } from "@/lib/data/industries";
import {
  Briefcase,
  ShoppingCart,
  HardHat,
  GraduationCap,
  Globe,
  Building,
  User,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "professional-services": Briefcase,
  "retail-ecommerce": ShoppingCart,
  "construction-contractors": HardHat,
  "training-providers": GraduationCap,
  "online-businesses": Globe,
  "smes-startups": Building,
  "independent-professionals": User
};

export const metadata: Metadata = {
  title: "Industries We Serve",
  description: "Specialised accounting and advisory services for professional services, retail, construction, training providers, online businesses, SMEs, and independent professionals across South Africa.",
  openGraph: {
    title: "Industries We Serve | Ironwood Business Consulting",
    description: "Specialised accounting and advisory services for diverse industries across South Africa."
  }
};

export default function IndustriesPage() {
  return (
    <>
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Industries We Serve",
            description: "Specialised accounting and advisory services for diverse industries",
            url: "https://ironwoodbc.co.za/industries",
            hasPart: industries.map(industry => ({
              "@type": "WebPage",
              name: industry.name,
              description: industry.description
            }))
          })
        }}
      />

      <PageHeader
        title="Industries We Serve"
        description="Specialised expertise across multiple sectors. We understand the unique challenges and opportunities in your industry, delivering tailored solutions that drive results."
      />

      {/* Industries Grid */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <Container>
          <div className="grid gap-8">
            {industries.map((industry) => {
              const Icon = iconMap[industry.slug] || Briefcase;
              return (
                <Card
                  key={industry.slug}
                  id={industry.slug}
                  className="overflow-hidden border-slate-200 hover:border-brand-200 transition-all"
                >
                  <CardContent className="p-6 md:p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Left Column - Overview */}
                      <div>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="rounded-lg bg-brand-50 p-3">
                            <Icon className="h-6 w-6 text-brand-700" />
                          </div>
                          <h2 className="text-2xl font-bold text-slate-900">
                            {industry.name}
                          </h2>
                        </div>
                        <p className="text-slate-600 leading-relaxed mb-6">
                          {industry.description}
                        </p>
                        <Button
                          asChild
                          variant="outline"
                          className="border-brand-300 text-brand-700 hover:bg-brand-50"
                        >
                          <Link href="/contact">
                            Discuss Your Needs
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>

                      {/* Right Column - Challenges & Solutions */}
                      <div className="space-y-6">
                        <div>
                          <h3 className="font-semibold text-slate-900 mb-3">
                            Industry Challenges
                          </h3>
                          <ul className="space-y-2">
                            {industry.challenges.slice(0, 3).map((challenge, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                <span className="text-slate-400 mt-1">•</span>
                                <span>{challenge}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="font-semibold text-slate-900 mb-3">
                            How We Help
                          </h3>
                          <ul className="space-y-2">
                            {industry.solutions.slice(0, 3).map((solution, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                <CheckCircle className="h-4 w-4 text-brand-500 mt-0.5 flex-shrink-0" />
                                <span>{solution}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Cross-Industry Expertise */}
      <section className="py-16 md:py-20 lg:py-24 bg-slate-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
              Cross-Industry Expertise
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              While we specialise in specific industries, our core expertise in accounting,
              tax, and business advisory translates across sectors. Every engagement benefits
              from our broad experience and deep technical knowledge.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 text-left">
              <Card className="bg-white">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-slate-900 mb-2">Technical Excellence</h3>
                  <p className="text-sm text-slate-600">
                    Deep expertise in accounting standards, tax legislation, and regulatory compliance.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-slate-900 mb-2">Industry Context</h3>
                  <p className="text-sm text-slate-600">
                    Understanding of industry-specific challenges, KPIs, and best practices.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-slate-900 mb-2">Tailored Approach</h3>
                  <p className="text-sm text-slate-600">
                    Solutions customised to your specific industry context and business needs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-brand-900">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
              Your Industry Not Listed?
            </h2>
            <p className="text-lg text-brand-100 mb-8">
              These are our primary focus areas, but we serve clients across many other sectors.
              Contact us to discuss your specific industry needs.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-brand-700 hover:bg-brand-50"
            >
              <Link href="/contact">
                Get in Touch
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
