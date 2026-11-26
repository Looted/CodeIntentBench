# Arm `claude-memory`

Decisions live in Claude Code's built-in auto memory: Markdown files in a memory directory, with a
`MEMORY.md` index that Claude Code loads into context at the start of every session. The agent reads and
writes the files with its ordinary tools (Read, Grep, Edit, Write); nothing fires when it reads or edits code.

- `setup` writes the rules as auto memory would keep them: one topic file per component
  (`decisions-<component>.md`, with Claude Code's frontmatter: name, description, type), each decision a
  note in the `memory` arm's words, and `MEMORY.md` with one line per topic file
  (`harness/src/render.ts`, `claudeMemoryFiles`).
- `host.json` turns auto memory on for this arm only (`CLAUDE_CODE_DISABLE_AUTO_MEMORY=0`) and sets
  `autoMemoryDirectory` to `<run>/claude-memory` in the agent's own settings, so every session of an arc
  shares one memory.
- Same convention sentence as the other memory arms.

Stands for: Claude Code auto memory, and similar built-in memories (Copilot memory, Cursor memories).
A Claude Code result only: other harnesses have their own memory.
