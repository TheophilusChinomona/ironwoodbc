import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-teal py-16 md:py-20 lg:py-24">
      {/* Background Pattern - Stitch Style */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent-blue blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white blur-3xl opacity-20" />
      </div>
      {/* Subtle gradient overlay for depth */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 70% 20%, white, transparent 60%)",
        }}
        aria-hidden
      />

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center hero-reveal">
          {/* Badge - Stitch Style */}
          <div className="hero-reveal-item inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/20 text-white text-xs font-semibold uppercase tracking-wide mb-6 border border-accent-blue/30">
            <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
            South Africa&apos;s SME Specialists
          </div>

          <h1 className="hero-reveal-item text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Accounting, Tax & Advisory{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-blue-300">
              Built for Clarity
            </span>
          </h1>

          <p className="hero-reveal-item text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8">
            Remote delivery across South Africa. Expert financial guidance tailored for
            ambitious SMEs and compliant corporate structures.
          </p>

          {/* CTA Buttons - Stitch Style */}
          <div className="hero-reveal-item flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              variant="cta"
              size="lg"
              className="bg-accent-blue hover:bg-accent-blue-dark text-white shadow-md"
            >
              <Link href="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Request a Callback
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent"
            >
              <Link href="/services">
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Trust Badges - Stitch Style */}
          <div className="hero-reveal-item mt-12 flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span>Registered Tax Practitioner</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span>100% Confidential</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span>Serving all of South Africa</span>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Curve Divider - Stitch Style */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-background-light dark:bg-background-dark rounded-t-[50%] scale-x-150 translate-y-8" />
    </section>
  );
}
