import type { Technology } from "@/types";

export const technologiesContent = {
  eyebrow: "Tecnologías",
  title: "Stack moderno y probado",
  description:
    "Utilizamos herramientas de clase mundial para construir soluciones robustas, seguras y de alto rendimiento.",
  items: [
    { name: "Next.js", category: "Frontend" },
    { name: "TypeScript", category: "Lenguaje" },
    { name: "React", category: "Frontend" },
    { name: "Python", category: "Backend" },
    { name: "OpenAI", category: "IA" },
    { name: "PostgreSQL", category: "Base de datos" },
    { name: "AWS", category: "Cloud" },
    { name: "Vercel", category: "Deploy" },
    { name: "Docker", category: "Infraestructura" },
    { name: "Tailwind CSS", category: "Estilos" },
    { name: "Node.js", category: "Backend" },
    { name: "Redis", category: "Cache" },
  ] satisfies Technology[],
};
