import {
  ShoppingBag,
  Truck,
  Factory,
  Briefcase,
  HeartPulse,
  Landmark,
} from "lucide-react";
import type { Industry } from "@/types";

export const industriesContent = {
  eyebrow: "Industrias",
  title: "Experiencia en sectores clave",
  description:
    "Adaptamos nuestras soluciones a las particularidades de cada industria y sus desafíos operativos.",
  items: [
    { icon: ShoppingBag, name: "Retail" },
    { icon: Truck, name: "Logística" },
    { icon: Factory, name: "Manufactura" },
    { icon: Briefcase, name: "Servicios profesionales" },
    { icon: HeartPulse, name: "Salud" },
    { icon: Landmark, name: "Finanzas" },
  ] satisfies Industry[],
};
