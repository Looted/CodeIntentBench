# Arm `docs`

Decisions live in `docs/decisions/*.md` inside the repository, ADR style, and travel with Git like any file. The only pointer the agent gets is one sentence in `CLAUDE.md` (see `convention.md`). Nothing surfaces a decision when the agent reads or edits the code it governs; the agent has to look.

Stands for: a requirements folder, a wiki exported to the repo, ADRs.

In rule mode (single-session tasks) the project's rules are rendered into the folder by `harness/src/arm-tools/render-docs.ts`, one file per rule.
