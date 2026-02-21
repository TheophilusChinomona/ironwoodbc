import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Card, CardContent } from "@/components/ui/card";
import { Award, GraduationCap, Building2 } from "lucide-react";

export function FounderSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto lg:max-w-none relative rounded-2xl overflow-hidden">
              <Image
                src="/images/founder.png"
                alt="Thabani Chinomona - Founder of Ironwood Business Consulting"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Content Column */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
              Meet the Founder
            </h2>

            <div className="prose prose-slate max-w-none">
              <p className="text-lg font-bold text-slate-600 leading-relaxed">
                Thabani Chinomona founded Ironwood Business Consulting with a clear mission:
                to provide South African businesses and individuals with accessible,
                professional accounting and advisory services that drive real results.
              </p>

              <p className="text-slate-600 leading-relaxed mt-4">
                With extensive experience across accounting, tax, and business advisory,
                Thabani brings a wealth of knowledge to every client engagement. As a
                Registered Tax Practitioner, he ensures all tax matters are handled with
                the highest standards of compliance and professionalism.
              </p>

              <p className="text-slate-600 leading-relaxed mt-4">
                The firm operates on principles of integrity, confidentiality, and
                client-focused service — values that have earned the trust of businesses
                and individuals across South Africa.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              <Card className="bg-slate-50 border-slate-100">
                <CardContent className="p-4 text-center">
                  <Award className="h-6 w-6 text-brand-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-slate-900">Registered Tax Practitioner</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-50 border-slate-100">
                <CardContent className="p-4 text-center">
                  <GraduationCap className="h-6 w-6 text-brand-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-slate-900">Professional Qualifications</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-50 border-slate-100">
                <CardContent className="p-4 text-center">
                  <Building2 className="h-6 w-6 text-brand-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-slate-900">Multi-Sector Experience</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
