"use server";

import { Resend } from "resend";
import {
  contactSchema,
  type ContactFormData,
} from "@/lib/validations/contact";
import type { ContactFormState } from "@/types";

export async function submitContact(
  data: ContactFormData
): Promise<ContactFormState> {
  const parsed = contactSchema.safeParse(data);

  if (!parsed.success) {
    return {
      error: "Datos del formulario inválidos",
      fieldErrors: parsed.error.flatten().fieldErrors as Record<
        string,
        string[]
      >,
    };
  }

  const { name, email, company, message, website } = parsed.data;

  if (website) {
    return { success: true };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL ?? "contacto@altumtech.cl";
  const fromEmail =
    process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";

  if (!apiKey) {
    console.error("RESEND_API_KEY no configurada");
    return {
      error:
        "El servicio de contacto no está configurado. Por favor, escríbenos directamente a contacto@altumtech.cl",
    };
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: `Altum Tech <${fromEmail}>`,
      to: contactEmail,
      replyTo: email,
      subject: `Nuevo contacto de ${name}${company ? ` - ${company}` : ""}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company ? `<p><strong>Empresa:</strong> ${company}</p>` : ""}
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Error al enviar email:", error);
      return {
        error: "No pudimos enviar tu mensaje. Por favor, inténtalo de nuevo.",
      };
    }

    return { success: true };
  } catch (err) {
    console.error("Error inesperado:", err);
    return {
      error: "Ocurrió un error inesperado. Por favor, inténtalo más tarde.",
    };
  }
}
