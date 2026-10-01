<!--
  CLAUDE.md: thin Claude Code layer. Shared project instructions live in AGENTS.md (imported below).
  Put ONLY Claude Code-specific guidance here. Budget: ≤60 lines (enforced by .claude/scripts/ctx.py).
  last-verified: 2026-10-01
-->

@AGENTS.md

## Claude Code specifics

- Plan with `/plan`; review with `/review` or the `code-reviewer` subagent before PRs.
- Delegate noisy work to subagents: `test-runner` (tests), `debugger` (failures), `architect` (design), `security-auditor`, `docs-writer`.
- Multi-file sweeps: workflows `/review-branch`, `/audit-codebase`.
- Learned something reusable? Run `/learn "<one-line lesson>"`. Never edit AGENTS.md, CLAUDE.md, or rules directly for lessons.
- Context files are linted on save (size, style, references). Fix reported violations immediately.
- Pasting into another AI chat? Run `/context-pack` and share `context-pack.md`.

## Map of Claude Code files

- `.claude/rules/`: always-loaded rules (no `paths:`) and path-scoped rules (`paths:`)
- `.claude/skills/`: plan, review, commit, fix-issue, test, deploy, onboard, learn, docs-garden, context-pack, playbook-sync, project-conventions
- `.claude/agents/`: code-reviewer, debugger, test-runner, architect, security-auditor, docs-writer, context-curator
- `.claude/hooks/`: guard rails, formatter, session context, context lint
- `.claude/scripts/ctx.py`: context lint, budgets, refs, registry, adapter sync, packs, promote
- `.claude/context.config.json`: budgets and style limits (single source of truth)
- `.claude/inbox.md`: staging for new lessons · `.claude/registry.json`: generated index of every context item
- `.claude/templates/`: blank templates · `SETTINGS_REFERENCE.md`: every settings key
