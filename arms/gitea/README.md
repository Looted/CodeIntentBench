# Arm `gitea`

Decisions live as issues in a self-hosted [Gitea](https://about.gitea.com) (the official release binary, version in `versions.env`), reached over Gitea's official MCP server [gitea-mcp](https://gitea.com/gitea/gitea-mcp) with its issue tools (`search_issues`, `list_issues`, `issue_read`, `issue_write`; the server's `-O` flag loads only those). It is the real-tool counterpart of `tracker`: Papra itself tracks its work in GitHub issues, and Gitea is the closest self-hosted equivalent.

- Binaries are downloaded once into the cache and checked against their published SHA-256 sums.
- Each run gets its own instance under `<run>/gitea` (SQLite, Gitea's default bleve issue indexer, no SSH, no mail, registration off). `gitea-mcp-serve` starts it on a Unix socket for each agent session and stops it when the session ends; `hygiene` stops any instance left over.
- The project's rules are rendered exactly as `tracker` renders them (`seed-store.ts tracker`: title, body with decision, reason, where and standing, labels) and filed through Gitea's API, closed as `tracker`'s issues are. Issues of products that an organisation would keep in repositories of their own (`projects/<project>/gitea-repos.json`, by component label) go to those repositories; the rest go to `papra/papra` with their component labels. Before Nov 26 2026 every issue went to `papra/papra` and was titled with its id's words, which defeated Gitea's all-words search. Setup waits until the indexer has indexed every issue. A seeded instance is cached per rendered issue set.
- Nothing is tuned: search, ranking, defaults (for example, Gitea lists and searches open issues unless asked for `closed` or `all`) are Gitea's own.
- `<run>/gitea-issues.json` is what the instance holds, exported through the API after setup; the equivalence audit reads it.

Stands for: GitHub issues, Gitea, Jira, YouTrack, Linear.
