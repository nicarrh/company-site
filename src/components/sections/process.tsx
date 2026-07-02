import { FadeIn } from "@/components/motion/fade-in";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { processContent } from "@/content/process";

export function Process() {
  return (
    <Section id="proceso">
      <SectionHeader
        eyebrow={processContent.eyebrow}
        title={processContent.title}
        description={processContent.description}
      />

      <div className="relative">
        <div className="absolute top-0 bottom-0 left-5 hidden w-px bg-border md:left-1/2 md:block md:-translate-x-px" />

        <div className="space-y-12">
          {processContent.steps.map((step, index) => (
            <FadeIn key={step.step} delay={index * 0.1}>
              <div
                className={`relative flex flex-col gap-6 md:flex-row md:items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 md:text-right">
                  <div
                    className={`md:px-8 ${
                      index % 2 === 1 ? "md:text-left" : "md:text-right"
                    }`}
                  >
                    <span className="text-sm font-medium text-accent">
                      Paso {step.step}
                    </span>
                    <h3 className="mt-1 text-xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-background text-sm font-bold text-accent md:absolute md:left-1/2 md:-translate-x-1/2">
                  {step.step}
                </div>

                <div className="hidden flex-1 md:block" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}
