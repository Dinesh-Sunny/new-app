---
paths:
  - "**/*.test.*"
  - "**/*.spec.*"
  - "**/__tests__/**"
  - "**/tests/**"
  - "e2e/**"
---
<!-- last-verified: 2026-10-01 -->
# Testing

- Python: pytest, files `python/<member>/tests/test_*.py`. Run one with `uv run pytest <path>`.
- JS/TS: no runner chosen yet. Ask before adding one, and wire it as a `test` script so `pnpm test` picks it up.
- Names: "should <expected> when <condition>" (JS) / `test_<behavior>_when_<condition>` (Python).
- Arrange / Act / Assert. One behavior per test.
- Mock at the boundaries (network, time, randomness, FS). Don't mock the unit under test.
- Bug fix → write a failing test first, then fix.
- No `.only` / `.skip` committed. No sleeps; use fake timers or await conditions.
