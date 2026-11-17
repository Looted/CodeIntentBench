# search-name-contains-crowded

The arc `search-name-contains` on the crowded store: the same steps, grading and hidden tests (its NOTES.md describes the
hidden test). `kb_variant: crowded` gives every arm the store of `kb/e7acb46f9bc6-hide-why-crowded`: the 182
decisions of the base and 1165 generated ones on the same topics, about other products and services
(`kb/gold/crowd.py`; none governs apps/papra-server, none is linked to code).

## Rank of the governing entry

Rank in the memory-arm notes (`harness/src/gap-check.ts`), in the base store (182 decisions) and in the crowded one
(1347), for the probe prompt and for searches that agents made in the probe session of the v7 pilots. The memory
and tracker searches return 8 entries by default.

| Search text | Keywords, base | Keywords, crowded | Keywords plus embeddings, base | Keywords plus embeddings, crowded |
|---|---|---|---|---|
| the whole probe prompt (s2) | 50 | 60 | 9 | 10 |
| `name search filter` | 1 | 6 | 1 | 14 |
| `name filter search exact match` | 1 | 1 | 1 | 11 |
| `document search name filter` | 1 | 1 | 2 | 3 |

Of the 3 agent searches, 0 rank the entry outside the top 8 by keywords and 2 by keywords plus embeddings.
The first store search of each memory, tracker and memory-embed probe session of the two v7 pilots (5 sessions),
run again on the crowded store: 1 would not have returned the entry (tracker ranks are taken on the memory notes).
