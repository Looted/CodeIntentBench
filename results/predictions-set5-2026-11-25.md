# Predictions for set 5, "as upstream" Papra (frozen 2026-11-25, before any set 5 arc exists)

This file freezes what set 5 is expected to show, so the result can prove the predictions wrong. Fable wrote the ranges
on 2026-11-25 (`fable-realistic-difficulty-nov25.md`, section 9) from mechanisms, before any arc, store or hidden test
of the set was built, and before sets 1 to 4 ran. It is separate from `predictions-2026-11-25.md` and is not to be
edited once the first set 5 arc is committed. Arc counts are targets; if a part ends with fewer arcs, its ranges are
scaled, and the scaling is stated here before the run.

Setup assumed: Sonnet 5.5 at low effort, three attempts per arc, the `kibi` arm with verification off, the `none` arm
as a floor, store `true-only` (the 182 real decisions and the 580 true in-product entries, no generated entries).
Probes are counted under the strict pass (`strictProbePass` in `harness/src/report-arcs.ts`).

Floor rule, fixed before the run: an arc whose probe the `none` arm keeps in two of three attempts is reported in the
easy tier.

| Part | Arcs | Probes (3 attempts) | Controls |
|---|---|---|---|
| 5a Half-finished refactor | 6 | 18 | 18 |
| 5b Flag and mode | 6 | 18 | 18 (opposite mode) |
| 5c Real supersession | 5 | 15 | 15 (mirror) |
| 5d Workarounds | 5 | 15 | 15 |
| 5e Across modules | 4 | 12 | 12 |
| 5f Record and code disagree (side measure) | 3 | 9 questions | none |

**New predictions (written Nov 25, before any of these arcs exists; separate from the frozen file).** Probes kept
under the strict pass. A prediction is wrong when the result falls outside its range.

| Arm | 5a (18) | 5b probes (18) | 5b controls passed (18) | 5c (15) | 5d (15) | 5e (12) |
|---|---|---|---|---|---|---|
| kibi | 9 to 14 | 11 to 16 | 10 to 15 | 10 to 14 | 10 to 14 | 3 to 7 |
| docs | 8 to 13 | 10 to 15 | 13 to 17 | 9 to 13 | 6 to 11 | 3 to 7 |
| tracker | 6 to 11 | 9 to 14 | 13 to 17 | 7 to 12 | 5 to 9 | 2 to 5 |
| mem0 | 5 to 10 | 7 to 13 | 12 to 17 | 5 to 10 | 4 to 8 | 1 to 5 |
| memory | 4 to 9 | 7 to 12 | 13 to 17 | 5 to 10 | 3 to 8 | 1 to 4 |
| memory-embed | 3 to 8 | 6 to 11 | 13 to 17 | 4 to 9 | 3 to 7 | 1 to 4 |
| gitea | 1 to 6 | 3 to 9 | 14 to 18 | 2 to 7 | 1 to 5 | 0 to 3 |
| none | 1 to 5 | 2 to 7 | 15 to 18 | 1 to 5 | 2 to 6 | 0 to 2 |

Also predicted:

- Without crowding, the search arms sit closer to docs than on Nov 25; the order docs, tracker, mem0, memory,
  memory-embed, gitea holds in at least four of the five parts.
- 5a: at least half of every arm's failures keep the decision on one path and break it on the other.
- 5b: Kibi has the most false stops on the controls and the most probes kept. If Kibi's controls match docs', its
  agents read the condition better than I expect.
- 5c: at least one "followed a stale comment against the record" in every arm, Kibi included.
- 5d: in at least two thirds of Kibi's passes the decision is first shown by the edit hook.
- 5e: no arm keeps half.
- 5f: no arm reports the difference in more than 4 of 9.
- Floor: `none` keeps two of three on at most 6 of the 26 probe arcs; those go to the easy tier.
- Cost: `kibi` between 1.2 and 1.7 times docs per attempt.

I expect to be wrong on at least one arm in every part. These are ranges from mechanisms; no data exists on these
shapes.
