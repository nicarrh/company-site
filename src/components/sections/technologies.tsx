import { FadeIn } from "@/components/motion/fade-in";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { technologiesContent } from "@/content/technologies";

export function Technologies() {
  return (
    <Section id="tecnologias">
      <SectionHeader
        eyebrow={technologiesContent.eyebrow}
        title={technologiesContent.title}
        description={technologiesContent.description}
        align="center"
        className="mx-auto"
      />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {technologiesContent.items.map((tech, index) => (
          <FadeIn key={tech.name} delay={index * 0.04}>
            <div className="flex h-full flex-col items-center justify-center rounded-xl border border-border bg-card p-4 text-center transition-colors hover:border-accent/30 hover:bg-accent/5">
              <span className="text-sm font-semibold text-foreground">
                {tech.name}
              </span>
              <span className="mt-1 text-xs text-muted-foreground">
                {tech.category}
              </span>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
