import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn } from "@/components/motion/fade-in";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { faqContent } from "@/content/faq";

export function FAQ() {
  return (
    <Section id="faq" className="bg-muted/30">
      <SectionHeader
        eyebrow={faqContent.eyebrow}
        title={faqContent.title}
        description={faqContent.description}
        align="center"
        className="mx-auto"
      />

      <FadeIn className="mx-auto max-w-3xl">
        <Accordion className="w-full">
          {faqContent.items.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-base">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </FadeIn>
    </Section>
  );
}
