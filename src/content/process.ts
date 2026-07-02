import type { ProcessStep } from "@/types";

export const processContent = {
  eyebrow: "Proceso",
  title: "Cómo trabajamos contigo",
  description:
    "Un proceso transparente y colaborativo que minimiza riesgos y maximiza el valor entregado en cada iteración.",
  steps: [
    {
      step: 1,
      title: "Descubrimiento",
      description:
        "Entendemos tu negocio, objetivos y desafíos actuales mediante workshops y análisis de procesos.",
    },
    {
      step: 2,
      title: "Diseño y arquitectura",
      description:
        "Definimos la solución técnica, prototipos y roadmap con entregables claros y plazos realistas.",
    },
    {
      step: 3,
      title: "Desarrollo iterativo",
      description:
        "Construimos en sprints cortos con demos frecuentes para validar avances y ajustar prioridades.",
    },
    {
      step: 4,
      title: "Lanzamiento y soporte",
      description:
        "Desplegamos, capacitamos a tu equipo y brindamos soporte continuo para asegurar la adopción.",
    },
  ] satisfies ProcessStep[],
};
