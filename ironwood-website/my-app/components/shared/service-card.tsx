import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

export function ServiceCard({ title, description, href, icon: Icon }: ServiceCardProps) {
  return (
    <Card className="group h-full transition-all duration-200 hover:shadow-lg hover:border-brand-200">
      <CardHeader className="pb-4">
        <div className="mb-4 inline-flex rounded-lg bg-brand-50 p-3 group-hover:bg-brand-100 transition-colors">
          <Icon className="h-6 w-6 text-brand-700" />
        </div>
        <CardTitle className="text-xl font-semibold text-slate-900 group-hover:text-brand-700 transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          {description}
        </p>
        <Button
          variant="ghost"
          asChild
          className="p-0 h-auto text-brand-700 hover:text-brand-800 hover:bg-transparent font-medium"
        >
          <Link href={href}>
            Learn more
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
