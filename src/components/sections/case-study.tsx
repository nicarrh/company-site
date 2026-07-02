import { Quote } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { caseStudyContent } from "@/content/case-study";

export function CaseStudy() {
  return (
    <Section id="casos" className="bg-muted/30">
      <SectionHeader
        eyebrow={caseStudyContent.eyebrow}
        title="Resultados que hablan por sí solos"
        description="Conoce cómo ayudamos a empresas como la tuya a transformar su operación."
      />

      <FadeIn>
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <div className="grid lg:grid-cols-2">
            <div className="border-b border-border p-8 lg:border-r lg:border-b-0 lg:p-12">
              <Badge variant="secondary" className="mb-4">
                Caso de éxito
              </Badge>
              <h3 className="text-2xl font-semibold text-foreground md:text-3xl">
                {caseStudyContent.title}
              </h3>
              <p className="mt-1 text-muted-foreground">
                {caseStudyContent.subtitle} · {caseStudyContent.industry}
              </p>

              <div className="mt-8 space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-foreground">
                    El desafío
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {caseStudyContent.problem}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">
                    La solución
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {caseStudyContent.solution}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between p-8 lg:p-12">
              <div className="grid grid-cols-3 gap-4">
                {caseStudyContent.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-lg border border-border bg-background p-4 text-center"
                  >
                    <p className="text-2xl font-bold text-accent">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>

              <blockquote className="mt-8 rounded-xl border border-border bg-muted/50 p-6">
                <Quote className="mb-3 size-5 text-accent" />
                <p className="text-sm leading-relaxed text-foreground italic">
                  &ldquo;{caseStudyContent.quote}&rdquo;
                </p>
                <footer className="mt-4">
                  <p className="text-sm font-semibold text-foreground">
                    {caseStudyContent.author}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {caseStudyContent.role}
                  </p>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
