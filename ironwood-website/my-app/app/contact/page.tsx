import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { Container } from "@/components/layout/container";
import { CallbackForm } from "@/components/forms/callback-form";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { contactInfo } from "@/lib/data/navigation";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Request a callback from Ironwood Business Consulting. Professional accounting, tax, and advisory services for South African businesses. Free initial consultation.",
  openGraph: {
    title: "Contact Us | Ironwood Business Consulting",
    description: "Request a callback from Ironwood Business Consulting. Professional accounting, tax, and advisory services for South African businesses."
  }
};

const contactMethods = [
  {
    icon: Phone,
    label: "Phone",
    value: contactInfo.phone,
    description: "Call or WhatsApp us"
  },
  {
    icon: Mail,
    label: "Email",
    value: contactInfo.email,
    description: "Send us an email anytime"
  },
  {
    icon: MapPin,
    label: "Location",
    value: contactInfo.address,
    description: "Serving all of South Africa"
  },
  {
    icon: Clock,
    label: "Hours",
    value: contactInfo.hours,
    description: "Response within 24 hours"
  }
];

export default function ContactPage() {
  return (
    <>
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            mainEntity: {
              "@type": "ProfessionalService",
              name: "Ironwood Business Consulting",
              email: contactInfo.email,
              telephone: contactInfo.phone,
              address: {
                "@type": "PostalAddress",
                addressCountry: "South Africa"
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:00",
                closes: "17:00"
              },
              areaServed: {
                "@type": "Country",
                name: "South Africa"
              }
            }
          })
        }}
      />

      <PageHeader
        title="Contact Us"
        description="Ready to take the next step? Request a callback and we'll contact you during your preferred time. Free initial consultation with no obligation."
      />

      {/* Contact Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                We&apos;d love to hear from you. Whether you have a specific question about our
                services or want to discuss how we can help your business, we&apos;re here to help.
                Fill out the callback form or reach out to us directly.
              </p>

              <div className="grid gap-3 mb-8">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="border-slate-100 group hover:border-accent-blue/30 transition-all duration-200 hover:shadow-md">
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="rounded-lg bg-accent-blue/10 p-2.5 group-hover:bg-accent-blue transition-colors duration-300">
                        <method.icon className="h-5 w-5 text-accent-blue group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-slate-500 font-medium mb-0.5">{method.label}</p>
                        <p className="text-sm font-semibold text-slate-900">{method.value}</p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-slate-300 group-hover:text-accent-blue transition-colors" />
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Additional Info */}
              <Card className="bg-slate-50 border-slate-100">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-slate-900 mb-3">
                    What to Expect
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-accent-blue">✓</span>
                      <span>Free initial consultation with no obligation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-blue">✓</span>
                      <span>Response within 24 hours of your inquiry</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-blue">✓</span>
                      <span>Confidential discussion about your needs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-blue">✓</span>
                      <span>Clear, transparent pricing with no hidden fees</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-blue">✓</span>
                      <span>Personalised service recommendations</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* POPIA Note */}
              <Card className="mt-4 bg-accent-blue/5 border-accent-blue/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Your Data is Protected
                  </h3>
                  <p className="text-sm text-slate-600">
                    We are fully compliant with the Protection of Personal Information Act (POPIA).
                    Your personal information is collected and processed securely, used only for
                    the purpose of contacting you regarding your inquiry, and stored in accordance
                    with data protection regulations.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Form */}
            <div>
              <Card className="shadow-lg border-accent-blue/20 bg-white">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                    <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-accent-blue" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold tracking-tight text-slate-900">
                        Request a Callback
                      </h2>
                      <p className="text-xs text-slate-500">
                        We&apos;ll call you within 24 hours
                      </p>
                    </div>
                  </div>
                  <CallbackForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Remote Service Note */}
      <section className="py-16 md:py-20 lg:py-24 bg-slate-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-4">
              Serving All of South Africa
            </h2>
            <p className="text-slate-600 leading-relaxed">
              While we&apos;re based remotely, we serve clients across all nine provinces of South Africa.
              Our cloud-based systems and digital workflows ensure seamless service delivery
              whether you&apos;re in Johannesburg, Cape Town, Durban, or anywhere in between. Distance
              is never a barrier to receiving professional accounting and advisory services.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
