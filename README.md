# Altum Tech — Sitio web corporativo

Sitio web corporativo de **Altum Tech**, empresa enfocada en transformación digital, desarrollo de software a medida y automatización con IA para PyMEs.

## Stack

- Next.js 15+ (App Router)
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Framer Motion
- React Hook Form + Zod
- Resend (formulario de contacto)

## Desarrollo local

### Requisitos

- Node.js 20+
- npm

### Instalación

```bash
git clone <repo-url> altum-tech
cd altum-tech
npm install
cp .env.example .env.local
```

Configura las variables en `.env.local`:

- `RESEND_API_KEY` — Obtén una en [resend.com](https://resend.com)
- `CONTACT_EMAIL` — Email donde recibir contactos
- `RESEND_FROM_EMAIL` — Usa `onboarding@resend.dev` en desarrollo

### Ejecutar

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

### Build de producción

```bash
npm run build
npm start
```

## Estructura del proyecto

```
src/
├── app/              # Rutas, layout, server actions
├── components/
│   ├── layout/       # Header, Footer, Logo
│   ├── sections/     # Secciones de la landing
│   ├── motion/       # Wrappers de animación
│   └── ui/           # Componentes shadcn/ui
├── content/          # Copy editable (español)
└── lib/              # Utilidades y validaciones
```

El contenido de cada sección vive en `src/content/` para facilitar ediciones sin tocar componentes.

## Despliegue en Vercel

1. Sube el repositorio a GitHub
2. Importa el proyecto en [vercel.com](https://vercel.com)
3. Configura las variables de entorno:
   - `NEXT_PUBLIC_SITE_URL`
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`
   - `RESEND_FROM_EMAIL` (dominio verificado en producción)
4. Deploy automático en cada push a `main`

## Secciones

- Hero
- Beneficios
- Servicios
- Industrias
- Proceso de trabajo
- Caso de éxito (EqusForce)
- Tecnologías
- FAQ
- Contacto
- Footer

## Licencia

Privado — Altum Tech © 2026
