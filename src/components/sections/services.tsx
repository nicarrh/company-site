import { FadeIn } from "@/components/motion/fade-in";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { servicesContent } from "@/content/services";

export function Services() {
  return (
    <Section id="servicios">
      <SectionHeader
        eyebrow={servicesContent.eyebrow}
        title={servicesContent.title}
        description={servicesContent.description}
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {servicesContent.items.map((service, index) => {
          const Icon = service.icon;
          return (
            <FadeIn key={service.title} delay={index * 0.08}>
              <div className="group h-full rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-md">
                <div className="mb-4 inline-flex size-10 items-center justify-center rounded-lg bg-muted text-foreground">
                  <Icon className="size-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
}
