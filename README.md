# PYTEC

Aplicación SaaS de gestión comercial para pequeñas empresas y trabajadores independientes en Chile.

## Tecnología

- Next.js y TypeScript, desplegable en Vercel.
- Supabase: PostgreSQL, Auth, Storage y Row Level Security.
- Zona horaria: `America/Santiago`. Moneda inicial: CLP.

## Configuración requerida

1. Cree un proyecto Supabase y ejecute la migración en `supabase/migrations/`.
2. Configure en Vercel las variables indicadas en `.env.example`.
3. Conecte el repositorio de GitHub a Vercel para habilitar despliegues automáticos.

No incluya claves ni archivos `.env` en el repositorio.
