import type { NavLink } from "@/types";

export const siteConfig = {
  name: "Altum Tech",
  tagline: "Digitalizamos empresas con Software e Inteligencia Artificial",
  description:
    "Transformación digital, desarrollo de software a medida y automatización con IA para pequeñas y medianas empresas.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://altumtech.cl",
  email: "contacto@altumtech.cl",
  linkedin: "https://linkedin.com/company/altum-tech",
};

export const navLinks: NavLink[] = [
  { href: "#beneficios", label: "Beneficios" },
  { href: "#servicios", label: "Servicios" },
  { href: "#industrias", label: "Industrias" },
  { href: "#proceso", label: "Proceso" },
  { href: "#casos", label: "Casos" },
  { href: "#faq", label: "FAQ" },
];

export const footerLinks: NavLink[] = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#casos", label: "Casos de éxito" },
  { href: "#contacto", label: "Contacto" },
];
