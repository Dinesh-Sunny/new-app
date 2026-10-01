# new-app

<!-- Created from claude-project-template. Replace this README with the project's own once it starts. -->

Project starter with a full Claude Code setup and a self-maintaining AI-context system.

## Start a new project
- GitHub: **Use this template**, or `gh repo create <name> --private --template Dinesh-Sunny/claude-project-template --clone`
- Local, with the playbook: `~/CodeProjects/ai-playbook/bin/new-project.sh <dir>`

## Stack profiles
Start stack-neutral, or apply a proven profile: `./stacks/nextjs/setup.sh . --name <name>` (Next.js + shadcn/ui + pnpm/uv monorepo + Python sidecar). See [stacks/](stacks/).

## First steps
1. Fill the stubs: `grep -rn "{{" AGENTS.md .claude/rules` (stack, commands, architecture).
2. Health check: `python3 .claude/scripts/ctx.py check`
3. Work normally. Capture lessons with `/learn`; curate weekly with `/docs-garden`.

## What's inside
| Path | Purpose |
| --- | --- |
| `AGENTS.md` | Canonical, tool-neutral instructions (Codex, Cursor and Copilot read it natively) |
| `CLAUDE.md` | Thin Claude layer: `@AGENTS.md` + Claude-only guidance |
| `.claude/` | rules, skills, agents, hooks, workflows, templates, `ctx.py` context engine, settings |
| `.claude/context.config.json` | Context budgets and style limits |
| `docs/knowledge/` | Cold-tier knowledge base |
| `.github/`, `.cursor/`, `GEMINI.md`, `context-pack.md` | Generated adapters for other AI tools (`ctx.py sync`) |
| `stacks/` | Stack profiles (`nextjs`); applied once, then removed from the project |
| `.playbook-managed` | Shared machinery synced with the template via `ai-playbook/bin/playbook-sync.sh` |

## Evolving the template
Improve machinery in any project, then push it back: `ai-playbook/bin/playbook-sync.sh push <project>` → commit and push this repo.
Projects pull updates with `playbook-sync.sh pull <project>`.
