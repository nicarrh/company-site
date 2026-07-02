import type { CaseStudyMetric } from "@/types";

export const caseStudyContent = {
  eyebrow: "Caso de éxito",
  title: "EqusForce",
  subtitle: "Plataforma de gestión ecuestre",
  industry: "Deportes y equitación",
  problem:
    "EqusForce gestionaba entrenamientos, caballos y competencias con hojas de cálculo y comunicación dispersa por WhatsApp, generando errores y pérdida de tiempo.",
  solution:
    "Desarrollamos una plataforma web integral con gestión de caballos, calendario de entrenamientos, seguimiento de rendimiento y reportes automatizados con IA.",
  metrics: [
    { value: "-40%", label: "Tiempo en tareas manuales" },
    { value: "3x", label: "Eficiencia operativa" },
    { value: "100%", label: "Trazabilidad de entrenamientos" },
  ] satisfies CaseStudyMetric[],
  quote:
    "Altum Tech entendió nuestra operación desde el primer día. La plataforma transformó cómo gestionamos nuestro centro de entrenamiento.",
  author: "Equipo EqusForce",
  role: "Centro de entrenamiento ecuestre",
};
