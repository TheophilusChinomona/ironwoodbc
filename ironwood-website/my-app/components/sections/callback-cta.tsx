import { Container } from "@/components/layout/container";
import { CallbackForm } from "@/components/forms/callback-form";
import { Phone, Clock, Shield } from "lucide-react";

export function CallbackCTA() {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-brand-900 overflow-hidden">
      {/* Subtle gradient overlay for depth */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          background: "radial-gradient(ellipse 60% 80% at 30% 50%, white, transparent 70%)",
        }}
        aria-hidden
      />
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Info */}
          <div className="text-white">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-brand-100 leading-relaxed mb-8">
              Request a callback and one of our team members will contact you
              during your preferred time. We&apos;ll discuss your needs and how we
              can help your business thrive.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-brand-800 p-2">
                  <Phone className="h-5 w-5 text-brand-300" />
                </div>
                <span className="text-brand-100">Free initial consultation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-brand-800 p-2">
                  <Clock className="h-5 w-5 text-brand-300" />
                </div>
                <span className="text-brand-100">Response within 24 hours</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-brand-800 p-2">
                  <Shield className="h-5 w-5 text-brand-300" />
                </div>
                <span className="text-brand-100">No obligation, confidential discussion</span>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-slate-900 mb-6">
              Request a Callback
            </h3>
            <CallbackForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
