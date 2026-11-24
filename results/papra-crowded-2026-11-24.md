# Papra crowded store, 3 attempts, 24 November 2026

This run covers 9 arcs on the Papra crowded store: 1347 decisions, 1165 of them synthetic look-alikes about other products (`projects/papra/kb/gold/crowd.py`). The arcs are auth-secret-production, owned-workspaces-cap, password-reset-sessions, search-created-typo, search-name-contains, search-query-length, signup-domain-exact, tags-letter-case and tags-per-workspace-cap, each with the suffix `-crowded`.

- **Setup:** 8 arms, 3 attempts each. The agent is Claude Code with claude-sonnet-5-5 at low effort. The judge and the scripted users use the same model.
- **Kibi:** built from develop 572766d38 (2026.11.5: kibi-cli 2.45.0, kibi-mcp 3.29.0).
- **Harness:** commit e62d1da, plus the Gitea column fix that follows it. This is the harness after the fixes listed below.
- **Scope:** one probe per arc, so each arm has 27 probes.

## Headline

| Arm | Probes passed (of 27) | Per attempt | Disclosed changes | Agent cost per attempt (9 arcs) |
|---|---|---|---|---|
| kibi | **27** | 9, 9, 9 | 0 | $4.56 |
| kibi-hints | **27** | 9, 9, 9 | 0 | $4.68 |
| docs | 23 | 8, 7, 8 | 1 | $1.88 |
| mem0 (open-source mem0 2.2.1, official MCP server) | 20 | 7, 7, 6 | 0 | $1.92 |
| tracker (stand-in) | 18 | 7, 6, 5 | 0 | $1.52 |
| memory (stand-in) | 16 | 6, 4, 6 | 0 | $1.60 |
| memory-embed (stand-in) | 9 | 1, 3, 5 | 1 | $1.61 |
| gitea (Gitea 28.4.0, official gitea-mcp 1.13.0) | 6 | 2, 2, 2 | 1 | $2.13 |

A disclosed change is an R probe where the agent found the firm decision before editing, changed it anyway and said so in its first answer (METHODOLOGY.md). It stays a fail in the main score. No control step failed in any arm.

## What the run shows

- **Kibi never missed.** Both Kibi arms passed all 27 probes. Its first `kb_search` often missed the governing requirement among the look-alikes. The edit hook on the code the requirement links to stopped the agent anyway. The look-alikes have no code links, so they crowd the search channel only. This run shows what code links are for. It does not show that Kibi's search does better in a crowded store.
- **The search-based stores are decided by one topical search.** In the earlier run of the same arcs, when a store search returned the governing entry, 43 of 44 probes passed. When it did not, 2 of 37 passed. Agents recognised the look-alikes as other products, concluded nothing was recorded, and went ahead. No agent searched by the file or function it was editing, although each governing entry names them.
- **The real tools did not do better than the stand-ins.** mem0's hybrid search (vectors plus BM25) ties tracker. Gitea's issue search requires every word to match and returns open issues unless asked for closed ones, and several of its searches came back empty.
- **docs is the strongest store without code links.** grep is exhaustive and unranked, so agents narrow a list of other products' decisions by product name or code identifier.
- **Cost:** Kibi costs about 2.4x docs and 3x tracker. Allowing Kibi's review and record tools halved its replies to the user, from 1.53 to 0.82 per step. It did not lower cost, because agents now record their decisions (96 `kb_upsert` calls in the kibi arm, none before).

## Harness fixes made before this run

These came from a transcript analysis of a first run on the same arcs:

1. The permission user follows the chat user's policy and sees the conversation. Before, it approved edits that broke a decision and then refused the agent's revert while the chat user asked for it.
2. The Kibi arms allow `kb_record`, `kb_review_firm_edit`, `kb_author_impact_review` and skills. Every arm may run `git checkout --` and `git restore`.
3. A step is graded on tests it newly broke. Failures inherited from an earlier step on the carried workspace are recorded and not counted.
4. The gitea and mem0 arms' lookups and store writes are detected, and their missing MCP tools make a run invalid.
5. The stand-in MCP servers refuse a call with a missing required argument, as real servers do.
6. The judge checks disclosure over the whole exchange with the user, not only the final answer.
7. Redirections to /dev/null no longer count as edits.

First run, before the fixes (of 27): kibi 26, kibi-hints 25, docs 23, mem0 19, tracker 19, memory 17, memory-embed 9, gitea 9.

## Open questions for the next version

- Add arcs whose governing decision has no code link. That is the majority of Papra's real knowledge base: 103 of 182 entries have no code path. Kibi would then depend on its search.
- Add look-alikes that are linked to the same files as the governing decision, and look-alikes about Papra itself. The generated ones all name another product.
- Test a one-sentence convention that tells the search arms the entries name the files and functions they govern.
- The look-alikes were shaped from the stand-in arms' searches in earlier pilots, and they are templated, 19 to 30 copies per probed decision.
