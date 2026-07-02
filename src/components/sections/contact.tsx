"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { submitContact } from "@/app/actions/contact";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Textarea } from "@/components/ui/textarea";
import {
  contactSchema,
  type ContactFormData,
} from "@/lib/validations/contact";

export function Contact() {
  const [isPending, startTransition] = useTransition();
  const [submitState, setSubmitState] = useState<{
    success?: boolean;
    error?: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
      website: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    setSubmitState(null);
    startTransition(async () => {
      const result = await submitContact(data);
      if (result.success) {
        setSubmitState({ success: true });
        reset();
      } else {
        setSubmitState({ error: result.error });
      }
    });
  };

  return (
    <Section id="contacto">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <SectionHeader
          eyebrow="Contacto"
          title="Hablemos de tu proyecto"
          description="Cuéntanos sobre tu empresa y los desafíos que enfrentas. Te responderemos en menos de 24 horas hábiles."
        />

        <FadeIn>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
            aria-label="Formulario de contacto"
            noValidate
          >
            <div className="absolute -left-[9999px]" aria-hidden="true">
              <Label htmlFor="website">Website</Label>
              <Input
                id="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                {...register("website")}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Nombre *</Label>
              <Input
                id="name"
                placeholder="Tu nombre"
                aria-invalid={!!errors.name}
                {...register("name")}
              />
              {errors.name && (
                <p className="text-sm text-destructive" role="alert">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                placeholder="tu@empresa.cl"
                aria-invalid={!!errors.email}
                {...register("email")}
              />
              {errors.email && (
                <p className="text-sm text-destructive" role="alert">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Empresa</Label>
              <Input
                id="company"
                placeholder="Nombre de tu empresa"
                {...register("company")}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Mensaje *</Label>
              <Textarea
                id="message"
                placeholder="Cuéntanos sobre tu proyecto o desafío..."
                rows={5}
                aria-invalid={!!errors.message}
                {...register("message")}
              />
              {errors.message && (
                <p className="text-sm text-destructive" role="alert">
                  {errors.message.message}
                </p>
              )}
            </div>

            {submitState?.success && (
              <div
                className="flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-800"
                role="status"
              >
                <CheckCircle2 className="size-4 shrink-0" />
                ¡Mensaje enviado! Te contactaremos pronto.
              </div>
            )}

            {submitState?.error && (
              <div
                className="flex items-center gap-2 rounded-lg border border-destructive/20 bg-destructive/10 p-4 text-sm text-destructive"
                role="alert"
              >
                <AlertCircle className="size-4 shrink-0" />
                {submitState.error}
              </div>
            )}

            <Button
              type="submit"
              size="lg"
              className="w-full sm:w-auto"
              disabled={isPending}
            >
              {isPending ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                "Enviar mensaje"
              )}
            </Button>
          </form>
        </FadeIn>
      </div>
    </Section>
  );
}
