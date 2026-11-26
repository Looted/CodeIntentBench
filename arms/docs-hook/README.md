# Arm `docs-hook`

The `docs` arm with one addition: a Claude Code plugin hook (`plugin/docs-decisions`) that runs before
Read, Edit, MultiEdit, Write and NotebookEdit. It lists the decision files in `docs/decisions` whose
**Where** section names the file about to be read or edited: the decision's first lines, its status and
firmness, current decisions first, at most 5 (with the names of the rest). Each file's list is shown once
per session for reads and once for edits.

Stands for: the hook a careful team writes in twenty lines once it keeps ADRs in the repository. It is the
fair counterpart of Kibi's read and edit hooks for a plain decision folder: the same trigger, a path match
instead of Kibi's links and symbols. A decision whose Where names no file (unlinked) is never shown by
the hook; the agent has to look, as in `docs`.

Same store, convention sentence (`convention.md`, copied from `docs`) and tools as `docs`.
