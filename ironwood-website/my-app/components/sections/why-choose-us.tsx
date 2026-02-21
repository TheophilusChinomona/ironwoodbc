import { CheckCircle, MessageSquare, Scale, Eye } from "lucide-react";
import { Container } from "@/components/layout/container";

const reasons = [
  {
    icon: Scale,
    title: "Compliance-Focused Processes",
    description: "Every service is designed with regulatory compliance at its core. We ensure you meet all SARS, CIPC, and industry-specific requirements."
  },
  {
    icon: Eye,
    title: "Strategic Financial Insight",
    description: "Beyond the numbers, we provide actionable insights that help you make informed decisions and drive business growth."
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    description: "Clear, jargon-free communication. We explain your financial position in terms you understand, keeping you informed every step of the way."
  },
  {
    icon: CheckCircle,
    title: "Ethical Conduct & Confidentiality",
    description: "Your trust is paramount. We adhere to the highest ethical standards and maintain strict confidentiality on all client matters."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-slate-50">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
              Why Choose Ironwood?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We combine technical expertise with a client-centric approach. Our
              focus is on building long-term relationships based on trust,
              transparency, and tangible results for your business or personal finances.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm border border-slate-100"
              >
                <div className="inline-flex rounded-lg bg-brand-50 p-2 mb-4">
                  <reason.icon className="h-5 w-5 text-brand-700" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
