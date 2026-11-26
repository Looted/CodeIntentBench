# Arm `beads`

Decisions live as issues in [beads](https://github.com/gastownhall/beads) (`bd`), the git-native issue
tracker built for coding agents (the official release binary, checked against its published SHA-256 sums;
version in `versions.env`). The agent uses its CLI through Bash.

- The workspace is set up as beads' quick start says: `bd init --non-interactive -p papra`, which writes
  beads' own AGENTS.md and CLAUDE.md guidance and the project Claude Code SessionStart hook that runs
  `bd prime`. Nothing of it is edited.
- The rules are imported as closed `decision` issues (beads' JSONL interchange format, `bd import`), titled,
  bodied and labelled as the tracker arm's issues. Search, ranking and defaults are beads' own (`bd search`
  matches titles and ids, all statuses; `--desc-contains` searches bodies).
- Anonymous usage metrics are turned off (`bd metrics off`).
- `<run>/beads-export.jsonl` is what the store holds after setup; the equivalence audit reads it.

Stands for: beads, and in-repo issue trackers for agents.
