# Contributing

Thanks for taking the time to contribute!

## Workflow

1. Create a branch from `master`: `git checkout -b feat/short-description`.
2. Keep commits small and focused.
3. Run the checks before pushing:
   ```bash
   npm run lint
   npm run build
   ```
4. Open a pull request describing what changed and why.

## Conventions

- Follow the component structure in [docs/COMPONENT.md](./docs/COMPONENT.md).
- TypeScript everywhere; avoid `any`.
- Style with Tailwind and the existing `@/components/ui` primitives.
- Use the `@/` import alias.

Commit messages are short and descriptive.
