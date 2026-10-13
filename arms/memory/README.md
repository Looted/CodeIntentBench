# Arm `memory`

Decisions live in a passive notes memory outside the repository: a small file-backed MCP server (`harness/src/arm-tools/memory-mcp.ts`) with save, search, list and delete. Search is keyword-ranked (TF-IDF) rather than embedding-based, so it is weaker at paraphrase than a vector store; what it shares with those products is the property under test: it answers only when asked, nothing fires on a read or an edit. The agent gets one sentence in `CLAUDE.md` (see `convention.md`), the instruction memory products give their users.

Stands for: mem0, Zep, an agent's auto-memory, vector memory databases.

The store (`<run>/memory.json`) is outside Git, so it does not follow branches, exactly like those products.

In rule mode the project's rules are seeded as notes by `harness/src/arm-tools/seed-store.ts`.
