import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { footerNavigation, contactInfo } from "@/lib/data/navigation";

export function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-background-dark border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column - Stitch Style */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/images/logo.png"
                alt="Ironwood Business Consulting"
                height={32}
                width={160}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
              Empowering South African SMEs with professional accounting and advisory services.
            </p>
          </div>

          {/* Services Column - Stitch Style */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              {footerNavigation.services.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-accent-blue transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column - Stitch Style */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              {footerNavigation.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-accent-blue transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column - Stitch Style */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-slate-600 dark:text-slate-400">
                <MapPin className="h-4 w-4 text-accent-blue mt-0.5 shrink-0" />
                <span>{contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <Mail className="h-4 w-4 text-accent-blue shrink-0" />
                <span>{contactInfo.email}</span>
              </li>
              <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <Phone className="h-4 w-4 text-accent-blue shrink-0" />
                <span>{contactInfo.phone}</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-slate-200 dark:border-slate-800" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; 2026 Ironwood Business Consulting. All rights reserved.</p>
          <div className="flex gap-6">
            {footerNavigation.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
