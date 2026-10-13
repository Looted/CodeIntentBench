# Arms

An arm decides how a project's rules (`projects/<name>/rules/*.yaml`) reach the agent. Every arm starts from the same pinned checkout with `rules/`, hidden tests and gold removed.

| Arm | Rule mode (single-session tasks) | Arc mode (multi-session feature arcs) | Stands for |
|---|---|---|---|
| `none` | Nothing added. | Nothing added; code, tests and Git history are the only memory. | the real-world default |
| `docs` | One decision file per rule under `docs/decisions/`. | Empty `docs/decisions/` folder; the convention says to record decisions there. | a requirements folder, ADRs, a wiki in the repo |
| `tracker` | Rules seeded as closed issues in a file-backed issue tracker over MCP. | Empty tracker; the convention says to search it and file decisions as issues. | Jira, YouTrack, Linear, GitHub issues |
| `memory` | Rules seeded as notes in a file-backed keyword-search memory over MCP. | Empty memory; the convention says to search it and save decisions. | mem0, Zep, auto-memory, vector memory stores |
| `agents-md` | All rules rendered into one `AGENTS.md`, plus a `CLAUDE.md` pointer. | Empty `AGENTS.md`; the convention says to record decisions there. | the always-in-context ceiling |
| `kibi` | Rules imported as firm requirements with tests and symbol links; the kibi-claude plugin (hooks, skills, MCP) installed. | Empty knowledge base after `kibi init`; the plugin's own skill is the only instruction. | Kibi |

The tracker and memory stores (`harness/src/arm-tools/{tracker,memory}-mcp.ts`) are passive by construction: nothing fires when the agent reads or edits code, the agent has to ask. That is the property the arc families test.

## Conventions

In arc mode every arm's agent gets the same step-1 words plus one sentence in `CLAUDE.md`, the arm's `convention.md`, saying where decisions live and to consult them before changing behaviour. It is the equivalent of the instruction each product gives its users; the Kibi arm gets none beyond its plugin's skill. Nothing else differs between arms.

## Adapter contract

An adapter is a directory `arms/<tool>/` with:

- `setup` — executable. Arguments: `<workspace> <rulesDir> <runDir>`; environment `CIB_WORKSPACE`, `CIB_RULES_DIR`, `CIB_RUN_DIR`, `CIB_PROJECT`. `rulesDir` holds only the rules that apply at the task's commit, and is empty in arc mode. Installs the tool (into `runDir`, never into the project's own dependency files) and imports the rules. Must not write anything that mentions the benchmark, tasks or tests.
- `host.json` — what the agent host needs: `plugin_dirs` (`--plugin-dir` values; `${RUN_DIR}`, `${ARM_DIR}`, `${WORKSPACE}` expand), `env`, `path_prepend` (directories under the run dir whose `node_modules/.bin` goes on PATH), `allowed_tools` (tool patterns the arm needs when the agent runs with `--permissions accept-edits`) and `mcp_config` (an MCP configuration file passed with `--mcp-config` and `--strict-mcp-config`).
- `convention.md` (optional) — the one sentence appended to the workspace's `CLAUDE.md` in arc mode.
- `hygiene` (optional) — executable run after the agent stops, arguments `<workspace> <runDir>`; prints one JSON object on the tool's own state (for example, a knowledge base left valid). Reported separately, never part of the main score.
- `README.md` — tool version, install source and anything a reader needs to reproduce the arm.

Adapters may not tune the tool for the benchmark beyond importing the rules: no task-specific prompts, hints or configuration.
