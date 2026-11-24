# Arm `mem0`

Decisions live in [mem0](https://github.com/mem0ai/mem0) (the open-source `mem0ai` package, run locally), reached over mem0's official MCP server (`mem0-mcp-server`) with its own tools and descriptions. It is the real-tool counterpart of `memory`. Versions are pinned in `requirements.lock`.

- The official server talks to mem0's hosted platform. `mem0_local.py` swaps its client for one that answers the same calls from a local `Memory`: Qdrant on disk (mem0's default vector store, with its BM25 sparse vectors for hybrid search), fastembed embeddings with mem0's default fastembed model (`thenlper/gte-large`), and spaCy lemmas for keyword matching (mem0's `nlp` extra). Search returns 10 results unless the agent asks for more, as the platform does.
- mem0's LLM steps (fact extraction and the add/update decision when a memory is added) run on Claude Haiku through the Claude CLI, because the container has no API key. Each call's cost is appended to `<run>/mem0-llm-cost.jsonl` and is not in the agent's cost.
- The project's rules are rendered exactly as `memory` renders them (`seed-store.ts memory`) and added verbatim (`infer=False`), so mem0 holds the same text as `memory`. Memories the agent adds go through mem0's normal extraction (`infer=True`, the default). A seeded store is cached per rendered note set.
- Telemetry is off (`MEM0_TELEMETRY=False`, `HF_HUB_DISABLE_TELEMETRY=1`).
- `<run>/mem0-export.json` is what the store holds after setup; the equivalence audit reads it.

Stands for: mem0, Zep, other memory layers with LLM extraction and hybrid search.
