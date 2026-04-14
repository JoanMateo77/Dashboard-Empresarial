/**
 * Configuracion de marca (white-label).
 *
 * Toda la identidad visible del dashboard sale de aqui, asi se puede
 * renombrar el producto sin tocar los componentes. Los valores se pueden
 * sobreescribir con variables de entorno (ver .env.example).
 */
export const siteConfig = {
  name: process.env.NEXT_PUBLIC_APP_NAME?.trim() || "Nimbus",
  description:
    process.env.NEXT_PUBLIC_APP_DESCRIPTION?.trim() ||
    "Panel de administracion para gestionar empresas y clientes",
  url: process.env.NEXT_PUBLIC_APP_URL?.trim() || "http://localhost:3000",
} as const;

export type SiteConfig = typeof siteConfig;
