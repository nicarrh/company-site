import { FadeIn } from "@/components/motion/fade-in";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { industriesContent } from "@/content/industries";

export function Industries() {
  return (
    <Section id="industrias" className="bg-muted/30">
      <SectionHeader
        eyebrow={industriesContent.eyebrow}
        title={industriesContent.title}
        description={industriesContent.description}
        align="center"
        className="mx-auto"
      />

      <div className="flex flex-wrap justify-center gap-4">
        {industriesContent.items.map((industry, index) => {
          const Icon = industry.icon;
          return (
            <FadeIn key={industry.name} delay={index * 0.06}>
              <div className="flex items-center gap-3 rounded-full border border-border bg-card px-5 py-3 transition-colors hover:border-accent/40 hover:bg-accent/5">
                <Icon className="size-5 text-accent" />
                <span className="text-sm font-medium text-foreground">
                  {industry.name}
                </span>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
}
