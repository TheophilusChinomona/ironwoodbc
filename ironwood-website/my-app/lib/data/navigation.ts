export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export const mainNavigation: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Accounting & Financial Reporting", href: "/services/accounting-financial-reporting" },
      { label: "Tax Services", href: "/services/tax-services" },
      { label: "Payroll Services", href: "/services/payroll-services" },
      { label: "Business Advisory & CFO Services", href: "/services/business-advisory-cfo" },
      { label: "Company Secretarial & Compliance", href: "/services/company-secretarial-compliance" },
      { label: "Accounting Systems & Digital Solutions", href: "/services/accounting-systems-digital" }
    ]
  },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" }
];

export const footerNavigation = {
  services: [
    { label: "Accounting & Financial Reporting", href: "/services/accounting-financial-reporting" },
    { label: "Tax Services", href: "/services/tax-services" },
    { label: "Payroll Services", href: "/services/payroll-services" },
    { label: "Business Advisory & CFO", href: "/services/business-advisory-cfo" },
    { label: "Company Secretarial", href: "/services/company-secretarial-compliance" },
    { label: "Digital Solutions", href: "/services/accounting-systems-digital" }
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Industries We Serve", href: "/industries" },
    { label: "Contact", href: "/contact" }
  ],
  legal: [
    { label: "POPIA Compliance", href: "/popia" },
    { label: "Privacy Policy", href: "/privacy" }
  ]
};

export const contactInfo = {
  email: "info@ironwoodbc.co.za",
  phone: "+27 65 076 2860",
  address: "Remote services across South Africa",
  hours: "Monday - Friday: 08:00 - 17:00"
};
