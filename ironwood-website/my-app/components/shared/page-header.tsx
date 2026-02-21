import { Container } from "@/components/layout/container";

interface PageHeaderProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <section className="bg-slate-900 py-12 md:py-16 lg:py-20">
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              {description}
            </p>
          )}
          {children}
        </div>
      </Container>
    </section>
  );
}
