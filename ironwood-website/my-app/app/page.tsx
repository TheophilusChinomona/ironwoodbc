import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { ServicesGrid } from "@/components/sections/services-grid";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { HowWeWork } from "@/components/sections/how-we-work";
import { IndustriesSection } from "@/components/sections/industries-section";
import { FounderSection } from "@/components/sections/founder-section";
import { CallbackCTA } from "@/components/sections/callback-cta";
import { SectionReveal } from "@/components/shared/section-reveal";

export default function HomePage() {
  return (
    <>
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Ironwood Business Consulting",
            description: "Professional accounting, tax, and advisory services delivered remotely across South Africa.",
            url: "https://ironwoodbc.co.za",
            email: "info@ironwoodbc.co.za",
            areaServed: {
              "@type": "Country",
              name: "South Africa"
            },
            serviceType: [
              "Accounting Services",
              "Tax Services",
              "Payroll Services",
              "Business Advisory",
              "CFO Services",
              "Company Secretarial Services"
            ],
            priceRange: "$$",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Business Consulting Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Accounting & Financial Reporting"
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Tax Services"
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Payroll Services"
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Business Advisory & CFO Services"
                  }
                }
              ]
            }
          })
        }}
      />
      <Hero />
      <SectionReveal>
        <TrustBar />
      </SectionReveal>
      <SectionReveal>
        <ServicesGrid />
      </SectionReveal>
      <SectionReveal>
        <WhyChooseUs />
      </SectionReveal>
      <SectionReveal>
        <HowWeWork />
      </SectionReveal>
      <SectionReveal>
        <IndustriesSection />
      </SectionReveal>
      <SectionReveal>
        <FounderSection />
      </SectionReveal>
      <SectionReveal>
        <CallbackCTA />
      </SectionReveal>
    </>
  );
}
