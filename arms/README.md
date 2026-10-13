# Arms

An arm decides how a project's rules (`projects/<name>/rules/*.yaml`) reach the agent. Every arm starts from the same pinned checkout with `rules/`, hidden tests and gold removed.

| Arm | Setup |
|---|---|
| `none` | Nothing added. |
| `agents-md` | Render all rules (statement, rationale, scope paths) into one `AGENTS.md` at the repository root, plus a `CLAUDE.md` that points to it. |
| `<tool>` | The tool's adapter imports the rules into the tool's own store and installs the tool as its documentation tells users to. |

## Adapter contract

An adapter is a directory `arms/<tool>/` with:

- `setup` — executable. Arguments: workspace path, rules directory. Installs the tool and imports the rules. Must not write anything that mentions the benchmark, tasks or tests.
- `host.json` — extra host configuration the tool needs (plugins, MCP servers, environment variables), merged into the agent launch.
- `hygiene` (optional) — executable run after the agent stops; prints a JSON report on the tool's own state (for example, a knowledge base left valid). Reported separately, never part of the main score.
- `README.md` — tool version, install source and anything a reader needs to reproduce the arm.

Adapters may not tune the tool for the benchmark beyond importing the rules: no task-specific prompts, hints or configuration.
