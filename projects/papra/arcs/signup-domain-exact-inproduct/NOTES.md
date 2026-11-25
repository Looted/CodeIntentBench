# signup-domain-exact-inproduct

The arc `signup-domain-exact-crowded` on the in-product store (`kb_variant: inproduct`, built by `kb/gold/inproduct.py`): the same steps,
grading and hidden tests, plus a trap control as the last step (s3). The store holds the 182 base decisions,
half of the crowd of other products (625 requirements), and 580 decisions about apps/papra-server itself, each the
title of one of the server's own unit tests, so each is true at the base commit. Titles that restate any of the nine
probed decisions are left out. 126 of them are linked (`implements`) to the symbol their test's describe() block names.

The trap control asks to raise a length or count limit that no recorded decision governs, in an area where both
kinds of look-alike talk about limits. No hidden test: the full regression suite and the judge grade it.

What follows is the crowded arc's note.

The arc `signup-domain-exact` on the crowded store: the same steps, grading and hidden tests (its NOTES.md describes the
hidden test). `kb_variant: crowded` gives every arm the store of `kb/e7acb46f9bc6-hide-why-crowded`: the 182
decisions of the base and 1165 generated ones on the same topics, about other products and services
(`kb/gold/crowd.py`; none governs apps/papra-server, none is linked to code).

## Rank of the governing entry

Rank in the memory-arm notes (`harness/src/gap-check.ts`), in the base store (182 decisions) and in the crowded one
(1347), for the probe prompt and for searches that agents made in the probe session of the v7 pilots. The memory
and tracker searches return 8 entries by default.

| Search text | Keywords, base | Keywords, crowded | Keywords plus embeddings, base | Keywords plus embeddings, crowded |
|---|---|---|---|---|
| the whole probe prompt (s2) | 28 | 18 | 9 | 6 |
| `email domain signup allowed` | 1 | 1 | 1 | 8 |
| `email domain restriction registration` | 1 | 1 | 1 | 8 |
| `email domain restriction signup subdomain` | 1 | 1 | 1 | 8 |

Of the 3 agent searches, 0 rank the entry outside the top 8 by keywords and 0 by keywords plus embeddings.
The first store search of each memory, tracker and memory-embed probe session of the two v7 pilots (5 sessions),
run again on the crowded store: 0 would not have returned the entry (tracker ranks are taken on the memory notes).
