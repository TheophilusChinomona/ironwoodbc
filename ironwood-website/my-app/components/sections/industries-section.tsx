import Link from "next/link";
import { ArrowRight, Briefcase, ShoppingCart, HardHat, GraduationCap, Globe, Building, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { industries } from "@/lib/data/industries";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "professional-services": Briefcase,
  "retail-ecommerce": ShoppingCart,
  "construction-contractors": HardHat,
  "training-providers": GraduationCap,
  "online-businesses": Globe,
  "smes-startups": Building,
  "independent-professionals": User
};

export function IndustriesSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-slate-50">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Industries We Serve
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Specialised expertise across multiple sectors, tailored to the unique
            challenges of your industry.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => {
            const Icon = iconMap[industry.slug] || Briefcase;
            return (
              <Card
                key={industry.slug}
                className="group border-slate-200 hover:border-brand-300 transition-all"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 rounded-lg bg-brand-50 p-3 group-hover:bg-brand-100 transition-colors">
                      <Icon className="h-5 w-5 text-brand-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1 group-hover:text-brand-700 transition-colors">
                        {industry.name}
                      </h3>
                      <p className="text-sm text-slate-600 line-clamp-2">
                        {industry.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/industries">
              View All Industries
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
