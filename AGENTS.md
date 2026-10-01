<!--
  AGENTS.md: CANONICAL, tool-neutral project instructions. Single source of truth.
  Read natively by Codex, Cursor, Copilot and others. Claude Code includes it via CLAUDE.md → @AGENTS.md.
  Generated from this file (never edit those): GEMINI.md, .github/copilot-instructions.md, context-pack.md.
  Rules: ≤120 lines · one fact per bullet · ≤30 words per bullet · no derivable facts. Run `python3 .claude/scripts/ctx.py check`.
  last-verified: 2026-10-01
-->

# new-app

{{ONE_LINE_PROJECT_DESCRIPTION}}

## Stack

- Monorepo: pnpm workspaces (JS/TS) + uv workspace (Python), one repo
- Node ≥24, pnpm 12 (pinned via `packageManager`); Python 3.14 (`.python-version`), uv
- Frontend: Next.js 16 App Router in `apps/web` (TypeScript strict, Tailwind 4, React Compiler)
- UI: shadcn/ui preset `b4XwA3eDL6` (radix, vega, violet), Hugeicons. Internal dev-only reference: the /design page (404 in production); new UI must reuse it
- JS/TS lint + format: Biome (root `biome.json`). Python: ruff (lint + format), mypy strict, pytest
- Backend, database, auth, hosting: {{TBD}}. Choose per task and record the decision in docs/adr/

## Commands

<!-- Root scripts in package.json are the source of truth; session start also injects them. -->
| Task | Command |
| --- | --- |
| First setup | `pnpm setup` (pnpm install + uv sync --all-packages) |
| Dev server (web) | `pnpm dev` |
| Python sidecar | `pnpm dev:py` (FastAPI on :8000, docs at /docs) · both via Vercel: `pnpm dev:all` |
| Lint / format | `pnpm lint` · `pnpm format` |
| Type-check | `pnpm typecheck` (next typegen + tsc, mypy) |
| Test | `pnpm test` (JS packages + pytest) |
| Everything | `pnpm check` (lint → typecheck → test) |
| Build | `pnpm build` |
| One JS package | `pnpm --filter <name> <script>` |
| One Python member | `uv run --package <name> <cmd>` |
| Add a JS dependency | `pnpm --filter <name> add <dep>` (ask first) |
| Add a Python dependency | `uv add --package <name> <dep>` (ask first) |

Before calling a task done: `pnpm check` must pass.

## Architecture

- `apps/*`: deployable JS apps (pnpm). `apps/web` is the Next.js frontend; it has its own AGENTS.md with Next.js 16 guidance
- `packages/*`: shared JS/TS packages named `@new-app/<name>`, consumed with `workspace:*`
- `python/*`: uv workspace members (src layout, tests beside src). Cross-member deps use `{ workspace = true }`
- Next.js is the full-stack app. `python/api` is a PRIVATE FastAPI sidecar only for Python-only libraries
- Next server code calls Python via `apps/web/src/lib/python-api.ts`; `vercel.json` services bind it as `BACKEND_INTERNAL_URL`
- Root holds shared tooling only: `package.json` scripts, `pnpm-workspace.yaml`, `pyproject.toml` (ruff/mypy/pytest), `biome.json`
- Design context: PRODUCT.md (product truth, via Impeccable) and `apps/web/DESIGN.md` (visual system, a generated mirror of `globals.css`)
- Copy context: `VOICE.md` (voice, tone, vocabulary, claims policy). All user-facing words follow it; `pnpm copy:check` enforces it
- Design values only from tokens; no hardcoded colors, sizes, or fonts. `pnpm design:tokens` enforces it
- UI work runs Impeccable automatically (shape → harden/polish → audit); a hook gates turns that change UI
- Deep dives live in `docs/knowledge/`. See its README index; load only what the task needs.

## Conventions

- Read existing code before writing; follow nearby patterns, naming, and structure.
- Reuse first: search for existing utilities, components, and types before writing new ones.
- Prefer libraries already in the project; ask before adding a dependency.
- Verify library APIs against current docs, not memory.
- Single source of truth for constants, types, and config. No magic strings.
- Small, focused modules placed where project conventions say.
- Comment *why*, not *what*; match the surrounding comment density.

## Workflow

- Non-trivial work: plan first, then implement in small verifiable steps.
- One branch per change: `<feat|fix|chore|docs|refactor>/<short-slug>` off `main`. Conventional Commits.
- Never commit secrets, `.env*`, or build output. Never force-push shared branches.
- Get an independent review before merging.

## Do not

- Edit generated files: `apps/web/DESIGN.md`, `apps/web/next-env.d.ts`, `pnpm-lock.yaml`, `uv.lock`, `GEMINI.md`, `context-pack*.md`, `.github/copilot-instructions.md`, `.cursor/rules/`.
- Touch `vercel.json`, `.github/workflows/`, `.env*`, `components.json` without asking.
- Disable lint rules, type checks, or tests to make something pass.
- Run destructive commands (DB drops, `rm -rf`, `git reset --hard`, force push) without explicit confirmation.

## Environment

- Required env var names are in `apps/web/.env.example` and `python/api/.env.example`. Never read or print secret values.
- Local services: none yet (Next on :3000, Python sidecar on :8000)

## Knowledge upkeep

- Record new lessons in `.claude/inbox.md` (one line each); never append to this file directly.
- This file has a hard budget. When it's full, demote detail to `docs/knowledge/` and leave a one-line pointer.
