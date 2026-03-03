# Dashboard Empresarial

A white-label business dashboard built with Next.js. It ships with authentication,
a companies CRM, charts and a set of ready-to-use admin pages, so it can be used as
a starting point for internal tools or as a portfolio project.

> The product name is configurable (white-label): set `NEXT_PUBLIC_APP_NAME` to
> rebrand the whole app without touching the code.

## Features

- 🔐 **Authentication** with Clerk (sign in / sign up, user menu).
- 📊 **Dashboard** with KPI cards, an area chart and a pie chart (Recharts).
- 🏢 **Companies CRM** — create, list, search, sort and delete companies. Data is
  persisted in the browser (`localStorage`), so it works with no backend.
- 🧩 **Admin pages** — Analytics, Settings (with theme switch), Security, FAQs and Calendar.
- 🌗 **Light / dark / system** theme with `next-themes`.
- 📱 **Responsive** layout with a collapsible sidebar.
- 🎨 **White-label** branding through environment variables.

## Tech stack

| Area        | Tech                                             |
| ----------- | ------------------------------------------------ |
| Framework   | [Next.js 15](https://nextjs.org) (App Router)    |
| Language    | TypeScript, React 19                             |
| Styling     | Tailwind CSS v4, [shadcn/ui](https://ui.shadcn.com) |
| Auth        | [Clerk](https://clerk.com)                       |
| Tables      | [TanStack Table](https://tanstack.com/table)     |
| Charts      | [Recharts](https://recharts.org)                 |
| Icons       | [lucide-react](https://lucide.dev)               |

## Getting started

### Prerequisites

- Node.js 18.18+ (20+ recommended)
- A [Clerk](https://dashboard.clerk.com) application (free) for the auth keys

### Installation

```bash
npm install
cp .env.example .env.local   # then fill in your Clerk keys
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

> The Clerk keys are **required**: without them the production build fails when
> prerendering. See `.env.example` for the full list of variables.

## Environment variables

| Variable                            | Required | Description                          |
| ----------------------------------- | -------- | ------------------------------------ |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | ✅       | Clerk publishable key                |
| `CLERK_SECRET_KEY`                  | ✅       | Clerk secret key                     |
| `NEXT_PUBLIC_APP_NAME`              | —        | Product name shown in the UI         |
| `NEXT_PUBLIC_APP_DESCRIPTION`       | —        | Short tagline used on the auth screen |

## Scripts

| Command         | Description                       |
| --------------- | --------------------------------- |
| `npm run dev`   | Start the dev server (Turbopack)  |
| `npm run build` | Production build                  |
| `npm run start` | Run the production build          |
| `npm run lint`  | Lint with ESLint                  |

## Routes

| Path         | Description                          |
| ------------ | ------------------------------------ |
| `/`          | Dashboard overview                   |
| `/Companies` | Companies CRM (create / list / delete) |
| `/analytics` | Analytics with charts                |
| `/settings`  | Profile and appearance               |
| `/security`  | Security settings                    |
| `/faqs`      | Frequently asked questions           |
| `/task`      | Calendar and upcoming events         |
| `/sign-in`   | Clerk sign in                        |
| `/sign-up`   | Clerk sign up                        |

## Project structure

```
app/
  (auth)/        # sign-in / sign-up (Clerk)
  (routes)/      # dashboard layout + pages and widgets
components/      # shared UI (sidebar, navbar, ui/, ...)
config/          # white-label site config
data/            # static data for charts and the sidebar
lib/             # helpers (cn, formatPrice)
```

More detail in [`docs/`](./docs).

## License

Released under the MIT License. See [LICENSE](./LICENSE).
