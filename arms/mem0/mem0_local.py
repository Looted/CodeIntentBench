"""The mem0 arm's store: open-source mem0 (mem0ai) run locally, served through mem0's official MCP server.

  python mem0_local.py serve  <storeDir> <costLog>        stdio MCP server (mem0-mcp-server's own tools)
  python mem0_local.py seed   <storeDir> <memory-seed.json>
  python mem0_local.py export <storeDir> <out.json>

The official server (mem0-mcp-server) talks to mem0's hosted platform through MemoryClient. Here its client is
swapped for LocalClient, which answers the same calls from an open-source mem0 Memory: Qdrant on disk (mem0's
default vector store, with its BM25 sparse vectors), fastembed embeddings (mem0's default fastembed model) and
spaCy lemmas for keyword matching. mem0's LLM steps (fact extraction and the update decision on add) run on
Claude Haiku through the Claude CLI, since the container has no API key; each call's cost is appended to costLog.

Seeding adds each decision note verbatim (infer=False), so mem0 holds the same text the memory arm holds;
memories the agent adds later go through mem0's normal LLM extraction (infer=True, mem0's default).
"""
import json, os, re, subprocess, sys, tempfile, time

os.environ.setdefault("MEM0_TELEMETRY", "False")
USER = "papra"
LLM_MODEL = "claude-haiku-5-5"


def build_memory(store):
    from mem0 import Memory
    from mem0.configs.llms.base import BaseLlmConfig
    # mem0's config accepts only its built-in providers, so it is built with the OpenAI one (never called:
    # its key is a placeholder) and the LLM is then replaced with the Claude CLI one.
    m = Memory.from_config({
        "llm": {"provider": "openai", "config": {"model": LLM_MODEL, "api_key": "unused"}},
        "embedder": {"provider": "fastembed", "config": {}},
        "vector_store": {"provider": "qdrant", "config": {"collection_name": "mem0", "path": os.path.join(store, "qdrant"),
                                                          "on_disk": True, "embedding_model_dims": 1024}},
        "history_db_path": os.path.join(store, "history.db"),
    })
    m.llm = ClaudeCliLLM(BaseLlmConfig(model=LLM_MODEL))
    return m


from mem0.llms.base import LLMBase  # noqa: E402


class ClaudeCliLLM(LLMBase):
    """mem0's LLM step on Claude through the Claude CLI (no tools, no settings, no session files)."""

    def generate_response(self, messages, response_format=None, tools=None, tool_choice="auto", **kwargs):
        system = "\n\n".join(m["content"] for m in messages if m["role"] == "system")
        rest = "\n\n".join(f"{m['role'].upper()}:\n{m['content']}" if len(messages) > 1 else m["content"] for m in messages if m["role"] != "system")
        wants_json = bool(response_format) and "json" in json.dumps(response_format, default=str).lower()
        if wants_json:
            system = (system + "\n\nRespond with one JSON object only, no prose and no code fences.").strip()
        env = {k: v for k, v in os.environ.items() if not k.startswith(("CLAUDECODE", "CLAUDE_CODE_ENTRYPOINT", "MCP_"))}
        env["CLAUDE_CODE_DISABLE_AUTO_MEMORY"] = "1"
        args = ["claude", "-p", "--model", self.config.model or LLM_MODEL, "--output-format", "json", "--tools", "",
                "--strict-mcp-config", "--setting-sources", "", "--disable-slash-commands", "--no-session-persistence"]
        if system:
            args += ["--system-prompt", system]
        with tempfile.TemporaryDirectory() as cwd:
            r = subprocess.run(args, input=rest, capture_output=True, text=True, cwd=cwd, env=env, timeout=300)
        try:
            out = json.loads(r.stdout)
        except json.JSONDecodeError:
            raise RuntimeError(f"claude CLI failed: {r.stderr[-500:] or r.stdout[-500:]}")
        log = os.environ.get("MEM0_ARM_COST_LOG")
        if log:
            with open(log, "a") as f:
                f.write(json.dumps({"at": time.time(), "cost_usd": out.get("total_cost_usd", 0), "usage": out.get("usage", {})}) + "\n")
        text = out.get("result", "") or ""
        if wants_json:
            m = re.search(r"```(?:json)?\s*(.*?)```", text, re.S)
            text = (m.group(1) if m else text).strip()
        return text


class LocalClient:
    """The subset of mem0's MemoryClient that mem0-mcp-server calls, answered by an open-source Memory."""

    def __init__(self, memory):
        self.m = memory

    @staticmethod
    def _filters(filters):
        """Platform filters ({"AND": [{"user_id": u}, ...]}) to OSS filters (entity ids at the top level)."""
        filters = json.loads(json.dumps(filters or {}))
        out = {}
        clauses = filters.pop("AND", None)
        if isinstance(clauses, list):
            rest = []
            for c in clauses:
                if isinstance(c, dict) and len(c) == 1 and next(iter(c)) in ("user_id", "agent_id", "run_id") and isinstance(next(iter(c.values())), str):
                    out.update(c)
                else:
                    rest.append(c)
            if rest:
                out["AND"] = rest
        out.update(filters)
        if not any(k in out for k in ("user_id", "agent_id", "run_id")):
            out["user_id"] = USER
        return out

    def add(self, messages, user_id=None, agent_id=None, run_id=None, metadata=None, app_id=None, enable_graph=None, **_):
        if app_id:
            metadata = {**(metadata or {}), "app_id": app_id}
        return self.m.add(messages, user_id=user_id, agent_id=agent_id, run_id=run_id, metadata=metadata)

    def search(self, query, filters=None, limit=None, enable_graph=None, **_):
        # mem0's platform search returns 10 results unless asked for more.
        return self.m.search(query, filters=self._filters(filters), top_k=int(limit or 10))

    def get_all(self, filters=None, page=None, page_size=None, enable_graph=None, **_):
        size = int(page_size or 10)
        page = int(page or 1)
        res = self.m.get_all(filters=self._filters(filters), top_k=size * page)
        items = res.get("results", res) if isinstance(res, dict) else res
        return {"results": items[size * (page - 1): size * page], "page": page, "page_size": size}

    def get(self, memory_id):
        return self.m.get(memory_id)

    def update(self, memory_id, text=None, **_):
        return self.m.update(memory_id, data=text)

    def delete(self, memory_id):
        return self.m.delete(memory_id)

    def delete_all(self, user_id=None, agent_id=None, run_id=None, app_id=None, **_):
        return self.m.delete_all(user_id=user_id, agent_id=agent_id, run_id=run_id)

    def users(self):
        return {"results": [{"type": "user", "name": USER}]}

    def delete_users(self, **_):
        raise RuntimeError("deleting entities is not supported by this store")


def serve(store, cost_log):
    os.environ["MEM0_ARM_COST_LOG"] = cost_log
    os.environ.setdefault("MEM0_API_KEY", "local")
    os.environ.setdefault("MEM0_DEFAULT_USER_ID", USER)
    import mem0_mcp_server.server as srv
    client = LocalClient(build_memory(store))
    srv._mem0_client = lambda api_key: client
    srv.main()


def seed(store, seed_file):
    notes = json.load(open(seed_file))["notes"]
    m = build_memory(store)
    for k, n in enumerate(notes):
        m.add([{"role": "user", "content": n["text"]}], user_id=USER, infer=False,
              metadata={"tags": n.get("tags", []), "recorded_at": n.get("created_at")})
        if k % 200 == 0:
            print(f"added {k + 1}/{len(notes)}", flush=True)
    print(f"seeded {len(notes)} memories", flush=True)


def export(store, out):
    m = build_memory(store)
    res = m.get_all(filters={"user_id": USER}, top_k=100000)
    items = res.get("results", res) if isinstance(res, dict) else res
    json.dump([{"id": i["id"], "memory": i["memory"], "metadata": i.get("metadata")} for i in items], open(out, "w"), indent=1)
    print(f"exported {len(items)} memories", flush=True)


if __name__ == "__main__":
    sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
    cmd, store, arg = sys.argv[1:4]
    {"serve": serve, "seed": seed, "export": export}[cmd](os.path.abspath(store), arg)
