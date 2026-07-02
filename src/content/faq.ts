import type { FAQItem } from "@/types";

export const faqContent = {
  eyebrow: "FAQ",
  title: "Preguntas frecuentes",
  description:
    "Resolvemos las dudas más comunes sobre nuestros servicios y forma de trabajo.",
  items: [
    {
      question: "¿Cuánto tarda un proyecto típico?",
      answer:
        "Depende del alcance. Un MVP puede estar listo en 6-8 semanas, mientras que proyectos más complejos pueden tomar 3-6 meses. Siempre definimos hitos claros desde el inicio.",
    },
    {
      question: "¿Trabajan con pequeñas y medianas empresas?",
      answer:
        "Sí, nuestras soluciones están diseñadas específicamente para PyMEs que buscan competir con herramientas digitales sin la complejidad de grandes corporaciones.",
    },
    {
      question: "¿Ofrecen soporte post-lanzamiento?",
      answer:
        "Absolutamente. Ofrecemos planes de mantenimiento, monitoreo y evolución continua para que tu solución siga creciendo con tu negocio.",
    },
    {
      question: "¿Cómo integran inteligencia artificial?",
      answer:
        "Evaluamos tus procesos para identificar oportunidades de automatización. Implementamos IA en tareas como análisis de datos, atención al cliente, generación de reportes y más.",
    },
    {
      question: "¿Pueden integrarse con mis sistemas actuales?",
      answer:
        "Sí, tenemos amplia experiencia en integraciones con ERPs, CRMs, plataformas de e-commerce y herramientas internas mediante APIs.",
    },
    {
      question: "¿Cuál es el modelo de precios?",
      answer:
        "Trabajamos con presupuestos por proyecto o retainer mensual según tus necesidades. En la consulta inicial definimos la opción más conveniente para tu caso.",
    },
    {
      question: "¿Dónde están ubicados?",
      answer:
        "Operamos de forma remota con clientes en Chile y Latinoamérica, con reuniones virtuales y presenciales según se requiera.",
    },
    {
      question: "¿Qué pasa si necesito cambios durante el desarrollo?",
      answer:
        "Nuestra metodología ágil contempla ajustes de prioridades en cada sprint. Los cambios de alcance se evalúan de forma transparente para mantener plazos y presupuesto.",
    },
  ] satisfies FAQItem[],
};
