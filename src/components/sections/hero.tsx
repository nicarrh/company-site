import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-50" />
      <div className="pointer-events-none absolute top-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />

      <Container className="relative">
        <FadeIn>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm">
            <Sparkles className="size-4 text-accent" />
            Transformación digital para PyMEs
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            {siteConfig.tagline.split("Software e Inteligencia Artificial")[0]}
            <span className="text-gradient">
              Software e Inteligencia Artificial
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Ayudamos a pequeñas y medianas empresas a operar con mayor
            eficiencia, escalar sus operaciones y competir en la era digital con
            soluciones tecnológicas a medida.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              render={<Link href="#contacto" />}
              className="h-11 px-6"
            >
              Hablemos de tu proyecto
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              render={<Link href="#servicios" />}
              className="h-11 px-6"
            >
              Ver servicios
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.4} className="mt-16 md:mt-24">
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-primary/5">
            <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-3">
              <div className="size-3 rounded-full bg-red-400/80" />
              <div className="size-3 rounded-full bg-yellow-400/80" />
              <div className="size-3 rounded-full bg-green-400/80" />
              <span className="ml-2 text-xs text-muted-foreground">
                dashboard.altumtech.cl
              </span>
            </div>
            <div className="grid gap-4 p-6 md:grid-cols-3 md:p-8">
              <div className="rounded-lg border border-border bg-background p-4">
                <p className="text-xs text-muted-foreground">Eficiencia</p>
                <p className="mt-1 text-2xl font-semibold text-foreground">
                  +127%
                </p>
                <div className="mt-3 h-2 rounded-full bg-muted">
                  <div className="h-2 w-3/4 rounded-full bg-accent" />
                </div>
              </div>
              <div className="rounded-lg border border-border bg-background p-4">
                <p className="text-xs text-muted-foreground">
                  Procesos automatizados
                </p>
                <p className="mt-1 text-2xl font-semibold text-foreground">
                  24
                </p>
                <div className="mt-3 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-8 flex-1 rounded bg-accent/20"
                      style={{ height: `${20 + i * 8}px` }}
                    />
                  ))}
                </div>
              </div>
              <div className="rounded-lg border border-border bg-background p-4">
                <p className="text-xs text-muted-foreground">Ahorro mensual</p>
                <p className="mt-1 text-2xl font-semibold text-foreground">
                  $4.2M
                </p>
                <div className="mt-3 h-16 rounded-lg bg-gradient-to-t from-accent/20 to-transparent" />
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
