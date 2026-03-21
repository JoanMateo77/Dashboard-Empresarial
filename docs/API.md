# Data & state

This project has no HTTP backend. Data comes from two places.

## Static data (`data/`)

Plain TypeScript modules consumed by the charts and the sidebar:

- `GraficSuscribers.data.ts` — area chart series.
- `TotalSuscribers.data.ts` — pie chart slices.
- `SideBarRoutes.data.ts` — sidebar navigation items.

## Companies state (`app/(routes)/Companies`)

Companies are managed on the client and persisted in `localStorage`:

- `companies-context.tsx` — exposes `CompaniesProvider` and the `useCompanies()` hook.
- `companies.types.ts` — `Company` and `NewCompany` types.
- `companies.data.ts` — seed data loaded on first run.

### `useCompanies()`

| Member               | Type                         | Description                          |
| -------------------- | ---------------------------- | ------------------------------------ |
| `companies`          | `Company[]`                  | Current list of companies.           |
| `addCompany(data)`   | `(data: NewCompany) => void` | Adds a company (generates id + date).|
| `removeCompany(id)`  | `(id: string) => void`       | Removes a company by id.             |
| `hydrated`           | `boolean`                    | `true` once `localStorage` was read. |

Swapping `localStorage` for a real API only requires changing the provider
implementation; the components keep using the same hook.
