# Dashboard Empresarial

Panel de administración de marca blanca hecho con Next.js. Incluye autenticación con Clerk, un CRM de empresas, gráficas y páginas de administración. Sirve como base para herramientas internas.

El nombre del producto se configura con `NEXT_PUBLIC_APP_NAME`: cambia la marca de toda la app sin tocar el código.

## Qué hace

- **Autenticación con Clerk:** inicio de sesión, registro y menú de usuario.
- **Dashboard** con tarjetas de indicadores, gráfica de área y gráfica circular (Recharts).
- **CRM de empresas:** crear, listar, buscar por nombre, ordenar, paginar y eliminar. Los datos se guardan en el navegador (`localStorage`), así que funciona sin backend.
- **Formulario con validación:** nombre, email y país obligatorios; formato de email y de URL del sitio web.
- **Páginas de administración:** analítica, configuración (con cambio de tema), seguridad, preguntas frecuentes y calendario.
- **Tema claro, oscuro o del sistema** con `next-themes`.
- **Diseño adaptable:** barra lateral fija en escritorio y menú lateral desplegable en móvil.
- **Metadatos SEO y Open Graph** generados desde la configuración de marca.

## Stack

| Área | Tecnología |
| --- | --- |
| Framework | [Next.js 15](https://nextjs.org) (App Router) |
| Lenguaje | TypeScript, React 19 |
| Estilos | Tailwind CSS v4, [shadcn/ui](https://ui.shadcn.com) (Radix UI) |
| Autenticación | [Clerk](https://clerk.com) |
| Tablas | [TanStack Table](https://tanstack.com/table) |
| Gráficas | [Recharts](https://recharts.org) |
| Íconos | [lucide-react](https://lucide.dev) |
| CI | GitHub Actions (lint y typecheck) |

## Estructura

```
app/
  (auth)/        # Inicio de sesión y registro (Clerk)
  (routes)/      # Layout del dashboard, páginas y widgets
    Companies/   # CRM: contexto, tipos, datos semilla y componentes
components/      # UI compartida (barra lateral, navbar, ui/ de shadcn)
config/site.ts   # Configuración de marca blanca
data/            # Datos estáticos de gráficas y barra lateral
lib/             # Utilidades (cn, formatPrice)
middleware.ts    # Middleware de Clerk
```

Más detalle en [`docs/`](./docs).

## Cómo correrlo

Requisitos: Node.js 18.18 o superior (se recomienda 20) y una aplicación de [Clerk](https://dashboard.clerk.com) para las claves.

```bash
npm install
cp .env.example .env.local   # completa las claves de Clerk
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

Las claves de Clerk son obligatorias: sin ellas, el build de producción falla al prerenderizar.

| Variable | Obligatoria | Descripción |
| --- | --- | --- |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Sí | Clave pública de Clerk |
| `CLERK_SECRET_KEY` | Sí | Clave secreta de Clerk |
| `NEXT_PUBLIC_APP_NAME` | No | Nombre del producto en la interfaz |
| `NEXT_PUBLIC_APP_DESCRIPTION` | No | Descripción corta en la pantalla de acceso |
| `NEXT_PUBLIC_APP_URL` | No | URL pública para los metadatos |

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Servidor de desarrollo (Turbopack) |
| `npm run build` | Build de producción |
| `npm run start` | Sirve el build de producción |
| `npm run lint` | ESLint |
| `npm run typecheck` | Verificación de tipos con `tsc` |

## Rutas

| Ruta | Contenido |
| --- | --- |
| `/` | Resumen del dashboard |
| `/Companies` | CRM de empresas |
| `/analytics` | Analítica con gráficas |
| `/settings` | Perfil y apariencia |
| `/security` | Seguridad de la cuenta |
| `/faqs` | Preguntas frecuentes |
| `/task` | Calendario y próximos eventos |
| `/sign-in`, `/sign-up` | Acceso con Clerk |

## Decisiones técnicas

- **Marca blanca en un solo archivo.** `config/site.ts` lee nombre, descripción y URL de variables de entorno, con valores por defecto. La interfaz y los metadatos salen de ahí.
- **Estado del CRM en un contexto de React.** `CompaniesProvider` expone `useCompanies()` y persiste en `localStorage`. El primer render usa los datos semilla y luego sincroniza con `localStorage`, para no romper la hidratación entre servidor y cliente.
- **Tabla con TanStack Table.** Ordenamiento, filtro por nombre y paginación del lado del cliente.
- **CI en cada push y PR a `master`:** `npm ci`, lint y typecheck.

## Limitaciones

- No hay backend: las empresas viven en el `localStorage` de cada navegador.
- Las cifras del dashboard, la analítica, la seguridad y el calendario son datos de ejemplo fijos en el código.
- El middleware de Clerk no protege rutas: el dashboard se puede ver sin iniciar sesión.
- Las empresas se pueden crear y eliminar, pero no editar.
- La interfaz mezcla textos en inglés y español, y no hay pruebas automatizadas.

## Licencia

MIT. Consulta [LICENSE](./LICENSE).

---

Hecho por [Joan Mateo Cardona](https://github.com/JoanMateo77).
