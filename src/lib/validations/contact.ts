import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "El nombre es demasiado largo"),
  email: z.email("Ingresa un email válido"),
  company: z.string().max(100, "El nombre de empresa es demasiado largo").optional(),
  message: z
    .string()
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .max(2000, "El mensaje es demasiado largo"),
  website: z.string().max(0, "Campo no válido").optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
