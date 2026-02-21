import { Shield, Lock, Cloud, Award } from "lucide-react";
import { Container } from "@/components/layout/container";

const trustItems = [
  {
    icon: Award,
    title: "Registered Tax Practitioner",
    description: "All tax matters overseen by a SARS-registered practitioner"
  },
  {
    icon: Lock,
    title: "Confidential & Ethical",
    description: "Your information is handled with the utmost confidentiality"
  },
  {
    icon: Cloud,
    title: "Digital-First Approach",
    description: "Modern cloud accounting systems for real-time insights"
  },
  {
    icon: Shield,
    title: "POPIA Compliant",
    description: "Full compliance with data protection regulations"
  }
];

export function TrustBar() {
  return (
    <section className="bg-brand-50 border-y border-brand-100 py-8 md:py-10">
      <Container>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="flex-shrink-0 rounded-lg bg-brand-100 p-2">
                <item.icon className="h-5 w-5 text-brand-700" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 text-sm">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
