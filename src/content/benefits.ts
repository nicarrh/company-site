import {
  TrendingDown,
  Bot,
  Layers,
  Rocket,
} from "lucide-react";
import type { Benefit } from "@/types";

export const benefitsContent = {
  eyebrow: "Beneficios",
  title: "Tecnología que impulsa resultados reales",
  description:
    "Ayudamos a PyMEs a operar con mayor eficiencia, reducir costos y escalar con soluciones digitales diseñadas para su negocio.",
  items: [
    {
      icon: TrendingDown,
      title: "Reducción de costos operativos",
      description:
        "Automatizamos tareas repetitivas y optimizamos procesos para que tu equipo se enfoque en lo que genera valor.",
    },
    {
      icon: Bot,
      title: "Procesos automatizados con IA",
      description:
        "Integramos inteligencia artificial en flujos de trabajo clave: atención al cliente, reportes, análisis y más.",
    },
    {
      icon: Layers,
      title: "Software a medida escalable",
      description:
        "Construimos soluciones adaptadas a tu operación, con arquitectura moderna preparada para crecer contigo.",
    },
    {
      icon: Rocket,
      title: "Time-to-market acelerado",
      description:
        "Metodología ágil con entregas iterativas para que veas resultados desde las primeras semanas del proyecto.",
    },
  ] satisfies Benefit[],
};
