import Link from "next/link";
import { ArrowRight, Calculator, FileText, Users, TrendingUp, Building2, Cloud } from "lucide-react";
import { Container } from "@/components/layout/container";
import { services } from "@/lib/data/services";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "accounting-financial-reporting": FileText,
  "tax-services": Calculator,
  "payroll-services": Users,
  "business-advisory-cfo": TrendingUp,
  "company-secretarial-compliance": Building2,
  "accounting-systems-digital": Cloud
};

// Stitch-style color schemes for each service card
const colorSchemes = [
  {
    bg: "bg-accent-blue/10",
    icon: "text-accent-blue",
    hoverBg: "group-hover:bg-accent-blue",
    hoverIcon: "group-hover:text-white",
    arrow: "group-hover:text-accent-blue"
  },
  {
    bg: "bg-teal-100",
    icon: "text-teal-600",
    hoverBg: "group-hover:bg-teal-500",
    hoverIcon: "group-hover:text-white",
    arrow: "group-hover:text-teal-500"
  },
  {
    bg: "bg-orange-50",
    icon: "text-orange-500",
    hoverBg: "group-hover:bg-orange-500",
    hoverIcon: "group-hover:text-white",
    arrow: "group-hover:text-orange-500"
  },
  {
    bg: "bg-indigo-50",
    icon: "text-indigo-500",
    hoverBg: "group-hover:bg-indigo-500",
    hoverIcon: "group-hover:text-white",
    arrow: "group-hover:text-indigo-500"
  },
  {
    bg: "bg-purple-50",
    icon: "text-purple-500",
    hoverBg: "group-hover:bg-purple-500",
    hoverIcon: "group-hover:text-white",
    arrow: "group-hover:text-purple-500"
  },
  {
    bg: "bg-slate-100",
    icon: "text-slate-600",
    hoverBg: "group-hover:bg-slate-800",
    hoverIcon: "group-hover:text-white",
    arrow: "group-hover:text-slate-800"
  }
];

export function ServicesGrid() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background-light dark:bg-background-dark">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-accent-blue font-semibold text-sm uppercase tracking-wide">
            Our Expertise
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl mt-2">
            Services We Offer
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Comprehensive accounting, tax, and advisory solutions tailored for
            South African businesses and individuals.
          </p>
        </div>

        {/* Stitch-style card stack */}
        <div className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.slug] || FileText;
            const colors = colorSchemes[index % colorSchemes.length];

            return (
              <article
                key={service.slug}
                className="group bg-white dark:bg-slate-800 p-5 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 dark:border-slate-700 relative overflow-hidden"
              >
                {/* Decorative corner element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />

                <div className="relative">
                  {/* Icon and Arrow Row */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={cn(
                        "w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300",
                        colors.bg,
                        colors.icon,
                        colors.hoverBg,
                        colors.hoverIcon
                      )}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <ArrowRight
                      className={cn(
                        "h-5 w-5 text-slate-300 transition-colors duration-300",
                        colors.arrow
                      )}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2 group-hover:text-accent-blue transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>

                  {/* Link */}
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-accent-blue hover:text-accent-blue-dark transition-colors"
                  >
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 font-medium hover:bg-white dark:hover:bg-slate-800 transition-colors"
          >
            View All Services
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
