import { Container } from "@/components/layout/container";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description: "We start with a free consultation to understand your needs, challenges, and goals."
  },
  {
    number: "02",
    title: "Custom Proposal",
    description: "Based on your requirements, we create a tailored service proposal with clear deliverables and pricing."
  },
  {
    number: "03",
    title: "Onboarding",
    description: "Seamless setup including system access, document collection, and process documentation."
  },
  {
    number: "04",
    title: "Ongoing Service",
    description: "Regular delivery of agreed services with proactive communication and deadline management."
  },
  {
    number: "05",
    title: "Review & Optimise",
    description: "Periodic reviews to ensure our services continue to meet your evolving business needs."
  }
];

export function HowWeWork() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            How We Work
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            A simple, transparent process designed to get you up and running quickly.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-4xl font-bold text-brand-200 mb-3">
                {step.number}
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-4 right-0 w-1/2 h-px bg-slate-200 transform translate-x-1/2" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
