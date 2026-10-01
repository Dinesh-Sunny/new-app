<!-- last-verified: 2026-10-01 -->
# Context hygiene

- New lessons go to `.claude/inbox.md` via `/learn`; never append to AGENTS.md, CLAUDE.md, or rules directly.
- One fact per bullet, imperative, ≤30 words. No stories or dates in hot files.
- Don't write what the code already says (commands, structure); it is injected at session start.
- Never edit generated files (GEMINI.md, `context-pack*.md`, `.github/copilot-instructions.md`, `.cursor/rules/`); edit the source.
- When the context linter reports a violation, fix it before continuing.
