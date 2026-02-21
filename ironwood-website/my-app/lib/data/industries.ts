export interface Industry {
  slug: string;
  name: string;
  description: string;
  challenges: string[];
  solutions: string[];
}

export const industries: Industry[] = [
  {
    slug: "professional-services",
    name: "Professional Services",
    description: "Consultants, legal practices, marketing agencies, and other professional service firms require specialised accounting support that understands project-based billing, retainer arrangements, and partnership structures.",
    challenges: [
      "Project-based revenue tracking and profitability analysis",
      "Managing retainer and recurring billing arrangements",
      "Partner profit-sharing and equity calculations",
      "Time-tracking integration with accounting systems",
      "Professional indemnity and compliance requirements"
    ],
    solutions: [
      "Integrated project accounting and time tracking",
      "Automated recurring invoicing and collections",
      "Partner-specific reporting and profit allocation",
      "Cash flow forecasting for project-based businesses",
      "Compliance monitoring for professional standards"
    ]
  },
  {
    slug: "retail-ecommerce",
    name: "Retail & E-commerce",
    description: "From brick-and-mortar stores to online marketplaces, retail and e-commerce businesses face unique challenges in inventory management, multi-channel sales, and VAT compliance across different platforms.",
    challenges: [
      "Multi-channel sales reconciliation (online + physical)",
      "Inventory valuation and cost of sales tracking",
      "Platform fee accounting (Takealot, Amazon, Shopify)",
      "High-volume transaction processing",
      "Returns, refunds, and chargeback management"
    ],
    solutions: [
      "Automated sales channel integrations",
      "Real-time inventory and COGS tracking",
      "Platform-specific fee analysis and optimisation",
      "Bulk transaction processing and reconciliation",
      "Integrated payment gateway accounting"
    ]
  },
  {
    slug: "construction-contractors",
    name: "Construction & Contractors",
    description: "Construction companies and contractors need accounting systems that handle progress billing, retention management, job costing, and compliance with the Construction Industry Development Board (CIDB) requirements.",
    challenges: [
      "Progress billing and retention management",
      "Job costing and project profitability tracking",
      "Subcontractor payments and compliance",
      "Equipment and asset depreciation tracking",
      "CIDB grading and financial capability requirements"
    ],
    solutions: [
      "Project-based accounting and job costing",
      "Retention tracking and release management",
      "Subcontractor compliance monitoring",
      "Equipment register and depreciation management",
      "CIDB financial capability statement preparation"
    ]
  },
  {
    slug: "training-providers",
    name: "Training Providers",
    description: "Skills development and training providers face specific accounting challenges around SETA funding, learnership administration, and B-BBEE compliance reporting.",
    challenges: [
      "SETA grant claim tracking and reconciliation",
      "Learnership stipend processing and reporting",
      "B-BBEE skills development expenditure tracking",
      "Course revenue recognition and deferred income",
      "Grant funding compliance and audit requirements"
    ],
    solutions: [
      "SETA-specific grant tracking and reporting",
      "Learnership payroll and stipend administration",
      "B-BBEE skills development documentation",
      "Revenue recognition for multi-session courses",
      "Grant compliance and audit preparation support"
    ]
  },
  {
    slug: "online-businesses",
    name: "Online Businesses",
    description: "Digital entrepreneurs, SaaS companies, and content creators need agile accounting that handles subscription revenue, international payments, and digital service VAT obligations.",
    challenges: [
      "Subscription revenue recognition (MRR/ARR tracking)",
      "International payment processing and exchange rates",
      "Digital services VAT compliance",
      "Low-volume high-value transaction monitoring",
      "Cryptocurrency and alternative payment handling"
    ],
    solutions: [
      "SaaS metrics and subscription tracking",
      "Multi-currency accounting and FX management",
      "Digital VAT compliance automation",
      "Custom dashboards for online business KPIs",
      "Integration with payment processors (Stripe, PayPal)"
    ]
  },
  {
    slug: "smes-startups",
    name: "SMEs & Startups",
    description: "Small and medium enterprises need cost-effective accounting solutions that scale with their growth, from basic bookkeeping to full CFO services as they expand.",
    challenges: [
      "Limited internal accounting resources",
      "Cash flow management on tight budgets",
      "Investor reporting and due diligence preparation",
      "Scaling accounting processes with growth",
      "Understanding complex tax obligations"
    ],
    solutions: [
      "Flexible, scalable service packages",
      "Cash flow forecasting and burn rate analysis",
      "Investor-ready financial reporting",
      "Growth-stage accounting system upgrades",
      "Proactive tax planning and compliance"
    ]
  },
  {
    slug: "independent-professionals",
    name: "Independent Professionals",
    description: "Sole practitioners, freelancers, and independent contractors need personal and business accounting that maximises tax efficiency while keeping compliance simple.",
    challenges: [
      "Separating personal and business finances",
      "Provisional tax calculations and planning",
      "Maximising legitimate business deductions",
      "Retirement and savings planning within tax rules",
      "Simple, affordable compliance solutions"
    ],
    solutions: [
      "Integrated personal and business tax planning",
      "Provisional tax calendar and payment reminders",
      "Deduction optimisation and record keeping",
      "Retirement annuity and tax-efficient saving advice",
      "Affordable compliance packages for individuals"
    ]
  }
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((industry) => industry.slug === slug);
}

export function getAllIndustrySlugs(): string[] {
  return industries.map((industry) => industry.slug);
}
