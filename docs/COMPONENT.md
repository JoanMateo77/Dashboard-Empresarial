# Component conventions

Each component lives in its own folder with a small, consistent structure:

```
ComponentName/
  ComponentName.tsx       # the component
  ComponentName.type.ts   # its props/types (optional)
  index.ts                # barrel: export * from "./ComponentName"
```

Guidelines:

- UI primitives from **shadcn/ui** live in `components/ui` and are imported via
  `@/components/ui/*`.
- Compose Tailwind classes with the `cn()` helper from `@/lib/utils`.
- Components that use state, effects or browser APIs start with `"use client"`.
- Prefer the `@/` path alias over long relative imports.

Example barrel (`index.ts`):

```ts
export * from "./CardSummary";
```

Example typed props (`CardSummary.types.ts`):

```ts
import { LucideIcon } from "lucide-react";

export type CardSummaryProps = {
  icon: LucideIcon;
  total: string;
  average: number;
  title: string;
  tooltipText: string;
};
```
