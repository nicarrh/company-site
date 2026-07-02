import {
  Code2,
  BrainCircuit,
  Plug,
  Lightbulb,
  RefreshCw,
  HeadphonesIcon,
} from "lucide-react";
import type { Service } from "@/types";

export const servicesContent = {
  eyebrow: "Servicios",
  title: "Soluciones integrales para tu transformación digital",
  description:
    "Desde la estrategia hasta la implementación, acompañamos cada etapa de tu evolución tecnológica.",
  items: [
    {
      icon: Code2,
      title: "Desarrollo de software a medida",
      description:
        "Aplicaciones web y móviles diseñadas para resolver los desafíos específicos de tu empresa.",
    },
    {
      icon: BrainCircuit,
      title: "Automatización con IA",
      description:
        "Agentes inteligentes, chatbots y flujos automatizados que potencian la productividad de tu equipo.",
    },
    {
      icon: Plug,
      title: "Integraciones y APIs",
      description:
        "Conectamos tus sistemas existentes para unificar datos y eliminar silos de información.",
    },
    {
      icon: Lightbulb,
      title: "Consultoría en transformación digital",
      description:
        "Diagnóstico, roadmap tecnológico y acompañamiento estratégico para decisiones informadas.",
    },
    {
      icon: RefreshCw,
      title: "Modernización de sistemas legacy",
      description:
        "Migramos y actualizamos plataformas obsoletas sin interrumpir tu operación diaria.",
    },
    {
      icon: HeadphonesIcon,
      title: "Soporte y evolución continua",
      description:
        "Mantenimiento proactivo, mejoras iterativas y soporte técnico para garantizar el éxito a largo plazo.",
    },
  ] satisfies Service[],
};
