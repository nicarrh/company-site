import { FadeIn } from "@/components/motion/fade-in";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { benefitsContent } from "@/content/benefits";

export function Benefits() {
  return (
    <Section id="beneficios" className="bg-muted/30">
      <SectionHeader
        eyebrow={benefitsContent.eyebrow}
        title={benefitsContent.title}
        description={benefitsContent.description}
        align="center"
        className="mx-auto"
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {benefitsContent.items.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <FadeIn key={benefit.title} delay={index * 0.1}>
              <div className="group h-full rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg hover:shadow-primary/5">
                <div className="mb-4 inline-flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
}
