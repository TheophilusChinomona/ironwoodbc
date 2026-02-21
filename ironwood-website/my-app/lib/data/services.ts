export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  benefits: string[];
  seoMeta: {
    title: string;
    description: string;
    keywords: string;
  };
}

export const services: Service[] = [
  {
    slug: "accounting-financial-reporting",
    title: "Accounting & Financial Reporting",
    shortDescription: "Accurate bookkeeping and comprehensive financial reporting tailored for South African SMEs",
    fullDescription: "Our accounting and financial reporting services provide the foundation for sound business decisions. We maintain accurate records and deliver timely reports that give you a clear picture of your financial position, ensuring compliance with local regulations and international standards.",
    deliverables: [
      "Monthly bookkeeping and general ledger maintenance",
      "Bank reconciliations and AR/AP management",
      "Fixed asset register maintenance",
      "Trial balance preparation and review",
      "Management accounts (monthly/quarterly)",
      "Budgeting and forecasting support",
      "Cash flow projections and monitoring",
      "Annual Financial Statements (AFS) preparation",
      "IFRS for SMEs compliance and reporting",
      "Year-end adjustments and accruals",
      "Audit preparation and support"
    ],
    benefits: [
      "Clear visibility into your business financial health",
      "Compliance with SARS and CIPC requirements",
      "Informed decision-making with timely, accurate data",
      "Reduced risk of errors and financial discrepancies",
      "Streamlined audit processes",
      "Professional reports for stakeholders and investors"
    ],
    seoMeta: {
      title: "Accounting & Financial Reporting Services | Ironwood Business Consulting",
      description: "Professional accounting and financial reporting services for South African businesses. Monthly bookkeeping, management accounts, AFS preparation, and audit support.",
      keywords: "accounting services, bookkeeping South Africa, management accounts, annual financial statements, IFRS compliance, audit support, remote accounting"
    }
  },
  {
    slug: "tax-services",
    title: "Tax Services",
    shortDescription: "Comprehensive tax compliance and planning with Registered Tax Practitioner oversight",
    fullDescription: "Navigate South Africa's complex tax landscape with confidence. Our tax services are overseen by a Registered Tax Practitioner, ensuring full compliance with SARS regulations while optimising your tax position. From routine filings to complex disputes, we handle it all.",
    deliverables: [
      "Individual tax returns (ITR12)",
      "Provisional tax calculations and submissions (IRP6)",
      "Corporate tax returns (ITR14)",
      "VAT registration and deregistration",
      "Monthly/quarterly VAT returns (VAT201)",
      "VAT reconciliations and compliance reviews",
      "PAYE, UIF, and SDL submissions (EMP201)",
      "Payroll tax administration",
      "SARS audits and verifications support",
      "Tax objections and dispute resolution",
      "Tax clearance certificate applications",
      "Tax planning and structuring advice"
    ],
    benefits: [
      "Registered Tax Practitioner oversight on all matters",
      "Minimised risk of penalties and interest from SARS",
      "Optimised tax position through legitimate planning",
      "Peace of mind with full SARS compliance",
      "Expert representation during audits and disputes",
      "Timely filing ensuring no missed deadlines"
    ],
    seoMeta: {
      title: "Tax Services South Africa | Registered Tax Practitioner | Ironwood Business Consulting",
      description: "Expert tax services with Registered Tax Practitioner oversight. Individual and corporate tax returns, VAT, PAYE, SARS audit support, and tax clearance certificates.",
      keywords: "registered tax practitioner, tax services South Africa, SARS compliance, tax returns, VAT returns, PAYE submissions, tax clearance certificate, SARS audit support"
    }
  },
  {
    slug: "payroll-services",
    title: "Payroll Services",
    shortDescription: "End-to-end payroll administration ensuring accurate processing and full statutory compliance",
    fullDescription: "Our comprehensive payroll services ensure your employees are paid accurately and on time, while maintaining full compliance with all statutory requirements. We handle everything from setup to annual reconciliations, giving you peace of mind and your employees a professional experience.",
    deliverables: [
      "Payroll setup and system configuration",
      "Monthly payroll processing",
      "Payslip generation and distribution",
      "Leave tracking and management",
      "Statutory deductions calculation (PAYE, UIF, SDL)",
      "Employee benefits administration",
      "IRP5 and IT3(a) certificate generation",
      "Bi-annual IRP5/IT3(a) submissions to SARS",
      "Annual payroll reconciliations",
      "UI-19 forms for terminated employees",
      "EMP501 reconciliation submissions",
      "Payroll compliance checks and audits"
    ],
    benefits: [
      "Accurate, on-time salary payments every month",
      "Full compliance with labour and tax legislation",
      "Reduced administrative burden on your team",
      "Professional payslips and employee communication",
      "Accurate statutory filings avoiding SARS penalties",
      "Secure handling of sensitive employee data"
    ],
    seoMeta: {
      title: "Payroll Services South Africa | Ironwood Business Consulting",
      description: "Complete payroll administration services. Monthly processing, payslips, leave management, statutory compliance, IRP5 certificates, and annual reconciliations.",
      keywords: "payroll services, payroll administration, PAYE submissions, UIF compliance, IRP5 certificates, payroll processing South Africa, EMP501"
    }
  },
  {
    slug: "business-advisory-cfo",
    title: "Business Advisory & CFO Services",
    shortDescription: "Strategic financial leadership and advisory for growing enterprises",
    fullDescription: "Access high-level financial expertise without the cost of a full-time executive. Our business advisory and CFO services provide strategic guidance, financial analysis, and operational insights to help your business grow profitably and sustainably.",
    deliverables: [
      "Comprehensive business health assessments",
      "Financial performance analysis and benchmarking",
      "Profitability improvement strategies",
      "Cost control and reduction programmes",
      "Internal control reviews and recommendations",
      "Financial modelling and scenario planning",
      "Board packs and management reporting",
      "Strategic planning and forecasting",
      "Cash flow management and optimisation",
      "Working capital analysis",
      "Investment appraisal and funding advice",
      "Risk assessment and mitigation planning"
    ],
    benefits: [
      "Executive-level financial expertise at a fraction of the cost",
      "Data-driven insights for strategic decision-making",
      "Improved profitability and operational efficiency",
      "Robust internal controls reducing risk",
      "Professional reporting for boards and investors",
      "Proactive cash flow management"
    ],
    seoMeta: {
      title: "Business Advisory & CFO Services | Ironwood Business Consulting",
      description: "Strategic CFO services and business advisory for South African enterprises. Financial analysis, board reporting, strategic planning, and profitability improvement.",
      keywords: "CFO services, business advisory, financial analysis, strategic planning, board reports, cash flow management, virtual CFO South Africa"
    }
  },
  {
    slug: "company-secretarial-compliance",
    title: "Company Secretarial & Compliance",
    shortDescription: "Complete company administration and statutory compliance management",
    fullDescription: "Stay compliant with CIPC and other regulatory requirements with our comprehensive company secretarial services. We handle all administrative aspects of company maintenance, allowing you to focus on running and growing your business.",
    deliverables: [
      "New company registrations (Pty Ltd, Co-ops, etc.)",
      "Director and shareholder changes",
      "Annual returns filing (CIPC compliance)",
      "Company name changes and reservations",
      "Amendments to Memorandum of Incorporation (MOI)",
      "Share certificate issuance and share register maintenance",
      "Beneficial ownership declarations",
      "Compliance calendar management",
      "CIPC correspondence and queries handling",
      "Governance documentation preparation",
      "Statutory compliance health checks",
      "CIPC deregistration and liquidation support"
    ],
    benefits: [
      "Full CIPC compliance avoiding penalties",
      "Accurate and up-to-date company records",
      "Timely filing of annual returns",
      "Professional handling of regulatory changes",
      "Reduced risk of non-compliance",
      "Clear governance structure and documentation"
    ],
    seoMeta: {
      title: "Company Secretarial Services | CIPC Compliance | Ironwood Business Consulting",
      description: "Complete company secretarial and CIPC compliance services. Company registration, annual returns, director changes, beneficial ownership, and governance support.",
      keywords: "company secretarial services, CIPC compliance, company registration South Africa, annual returns, beneficial ownership, director changes"
    }
  },
  {
    slug: "accounting-systems-digital",
    title: "Accounting Systems & Digital Solutions",
    shortDescription: "Cloud accounting setup, optimisation, and digital transformation for modern businesses",
    fullDescription: "Embrace digital transformation with our accounting systems and digital solutions. We help you select, implement, and optimise cloud accounting platforms that streamline your operations and provide real-time financial insights accessible from anywhere.",
    deliverables: [
      "Cloud accounting platform setup (Xero, QuickBooks, Sage)",
      "System optimisation and configuration",
      "Chart of accounts design and implementation",
      "Workflow automation setup",
      "Third-party integrations (bank feeds, payment gateways)",
      "Data migration from legacy systems",
      "Custom dashboard creation and configuration",
      "Management reporting automation",
      "User training and documentation",
      "Ongoing system support and maintenance",
      "Digital document management setup",
      "Process automation and efficiency reviews"
    ],
    benefits: [
      "Real-time access to financial data from anywhere",
      "Automated processes reducing manual errors",
      "Streamlined workflows saving time and money",
      "Better integration between business systems",
      "Professional dashboards and reports",
      "Scalable solutions that grow with your business"
    ],
    seoMeta: {
      title: "Cloud Accounting & Digital Solutions | Ironwood Business Consulting",
      description: "Cloud accounting setup, optimisation, and digital solutions. Xero, QuickBooks, Sage implementation, workflow automation, and real-time reporting.",
      keywords: "cloud accounting, Xero setup, QuickBooks South Africa, digital accounting, workflow automation, accounting software implementation"
    }
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((service) => service.slug);
}
