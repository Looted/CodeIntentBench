# Arm `basic-memory`

Decisions live in [Basic Memory](https://github.com/basicmachines-co/basic-memory) (the open-source
`basic-memory` package, run locally, version pinned in `requirements.lock`): Markdown notes in a folder that
Basic Memory indexes for full-text and vector search (its default local FastEmbed model,
bge-small-en-v1.5), reached over its own MCP server (`basic-memory mcp`) with its own tools and
descriptions (`bm_search`, `bm_read`, `bm_write`, `bm_edit`, ...). No LLM calls.

- `setup` writes one note per rule, as an agent saving it with `bm_write` would: title (the decision's first
  clause), folder `decisions/<component>`, tags, observations (`[decision]`, `[why]`, `[applies_to]`,
  `[standing]`, `[id]`) and supersession relations (`harness/src/render.ts`, `basicMemoryNote`). Basic Memory
  itself indexes them (`project add`). A seeded store is cached per note set; the run gets a copy
  (`<run>/bm-notes`, `<run>/bm-config`), re-pointed at the copy and re-indexed (`repoint.py`, `project index`).
- The project-delete tool is not allow-listed; every other Basic Memory tool is.
- Same convention sentence as the other memory arms.

Stands for: Basic Memory, and notes-as-memory servers generally (Markdown knowledge bases over MCP).
