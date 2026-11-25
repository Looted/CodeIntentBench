# Predictions for the next Papra run (frozen 2026-11-25, before any run)

This file freezes what the next run is expected to show, so the result can prove the predictions wrong. It was written
before any agent ran on the stores and arcs below, and is not to be edited after the run starts. Tuning Kibi (or any
arm) against these arcs before the run would void it.

Setup assumed: Sonnet 5.5 at low effort, three attempts per arc, the `kibi` arm with verification off. A prediction is
wrong if the result falls outside its range. `kibi-verified` is predicted within 2 of `kibi` everywhere, and
`kibi-hints`, if carried, within 2 of `kibi`. Reference (2026-11-25 crowded run, 27 probes): kibi 27, docs 25,
tracker 21, mem0 19, memory 16, memory-embed 13, gitea 7.

## The four new sets

| Set | Arcs | Store (`kb_variant`) | What it tests |
|---|---|---|---|
| 1. In-product crowd with trap controls | `*-inproduct` (9) | `inproduct` | Look-alikes about the Papra server itself, some linked to the governed files; a trap control per arc |
| 2. Unlinked decisions | `*-unlinked` (6) | `crowded` | Real decisions with no symbol, test or code path in the store |
| 3. Supersession chains with mirror controls | `*-chains` (6) | `chains` | Two replaced versions per decision; a mirror control the replaced version would refuse |
| 4. Side-effect requests | `batch-long-filter`, `billing-admins`, `overdue-plan-limits`, `plain-search-whole-word`, `member-self-leave`, `share-link-member-preview` `-crowded` (6) | `crowded` | A request whose simplest edit breaks a decision it never mentions |

Stores: `projects/papra/kb/README.md` ("The crowded store", "The chains store", "The in-product store").

Set 4 has the six arcs it was planned with: the last two (`member-self-leave-crowded`, `share-link-member-preview-crowded`)
were added after the ranges below were written, which are Fable's ranges for 18 probes, unchanged.

## 1. In-product crowd (27 probes, 27 trap controls)

| Arm | Probes kept | Trap controls passed |
|---|---|---|
| kibi | 19 to 24 | 22 to 26 |
| docs | 13 to 20 | 22 to 27 |
| tracker | 9 to 16 | 23 to 27 |
| mem0 | 7 to 14 | 22 to 27 |
| memory | 5 to 12 | 23 to 27 |
| memory-embed | 4 to 10 | 23 to 27 |
| gitea | 1 to 7 | 24 to 27 |

Also predicted: Kibi's misses concentrate on arcs whose governed file has more than four linked decisions
(`owned-workspaces-cap`, `search-name-contains`, `search-created-typo`, `search-query-length`, `signup-domain-exact`,
`password-reset-sessions` through `auth.models.ts`); docs keeps fewer probes than Kibi; no search arm beats docs. If
Kibi still keeps 27, the hook's four-requirement limit is not the constraint it is thought to be.

## 2. Unlinked decisions (18 probes)

| Arm | Probes kept |
|---|---|
| kibi | 8 to 13 |
| docs | 12 to 16 |
| tracker | 9 to 14 |
| mem0 | 8 to 13 |
| memory | 6 to 11 |
| memory-embed | 5 to 10 |
| gitea | 2 to 6 |

Also predicted: docs keeps more than Kibi, and Kibi's failures are V with the decision never shown. If Kibi matches
docs here, its search is better at rephrased second queries than the first-query numbers suggest.

## 3. Supersession chains (18 probes, 18 mirror controls)

| Arm | Probes kept | Mirror controls passed |
|---|---|---|
| kibi | 15 to 18 | 14 to 18 |
| docs | 12 to 16 | 13 to 17 |
| tracker | 9 to 14 | 13 to 17 |
| mem0 | 6 to 12 | 10 to 16 |
| memory | 6 to 11 | 10 to 16 |
| memory-embed | 5 to 10 | 10 to 16 |
| gitea | 2 to 7 | 14 to 18 |

Also predicted: at least one "treated a replaced entry as current" in each of mem0, memory and memory-embed, and
none in kibi.

## 4. Side-effect requests (18 probes; report next to set 2, never alone)

| Arm | Probes kept |
|---|---|
| kibi | 12 to 17 |
| docs | 5 to 11 |
| tracker | 3 to 9 |
| mem0 | 2 to 8 |
| memory | 2 to 8 |
| memory-embed | 2 to 7 |
| gitea | 0 to 4 |

Also predicted: in Kibi's passes the decision is first shown by the hook in at least two thirds; an arm other than
Kibi passes mostly by C (changed only the requested behaviour), not by naming the decision.

## Cost

`kibi` between 1.3 and 1.8 times docs per attempt; `kibi-verified` between 2 and 3.5 times.

## Offline check of the stores (no agents)

Kibi's search (the build at develop b21fea335) on the 35 `kb_search` queries the `kibi` arm typed in its 27 probe
sessions on 2026-11-25, and on the nine probe prompts. The rank is the governing requirement's place among
requirement results, out of up to 300.

| Store | First query of a probe: top 3 / top 10 / not returned (of 27) | All 35 queries: top 10 | Probe prompt as the query: returned (of 9) |
|---|---|---|---|
| crowded | 14 / 15 / 6 | 23 | 1 |
| chains | 15 / 16 / 5 | 24 | 1 |
| inproduct | 14 / 17 / 6 | 25 | 1 |

Of the 105 top-three requirement results on the in-product store, 20 are the governing decision, 72 are about other
products, 6 are other real Papra decisions and 4 are in-product entries. The in-product entries are the server's own
test titles, short and in the code's words, so they rarely outrank anything in search. Set 1 is expected to bite
through the edit and read hooks (more linked decisions on the governed files) and through the loss of the
"is it about another product?" cue in the file-based arms, not through Kibi's search ranking. If Kibi's search
results on set 1 are no worse than on the crowded store, that is consistent with this check, not a surprise.

The first-query recall on every store is between 50% and 65%, inside the 30% to 70% band the sets were built for.
