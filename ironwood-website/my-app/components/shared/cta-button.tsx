import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "@/components/ui/button";

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  href?: string;
  variantType?: "primary" | "secondary" | "outline";
  asChild?: boolean;
}

export function CTAButton({
  href = "/contact",
  variantType = "primary",
  className,
  ...props
}: CTAButtonProps) {
  const variantClasses = {
    primary: "bg-brand-700 hover:bg-brand-800 text-white",
    secondary: "bg-white hover:bg-slate-100 text-brand-700",
    outline: "border-brand-500 text-brand-700 hover:bg-brand-50"
  };

  return (
    <Button
      asChild
      className={cn(variantClasses[variantType], className)}
      {...props}
    >
      <Link href={href}>
        <Phone className="mr-2 h-4 w-4" />
        Request a Callback
      </Link>
    </Button>
  );
}
