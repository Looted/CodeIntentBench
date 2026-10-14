# Papra arcs on an onboarded knowledge base, 14 October 2026

The second run of the 16 Papra arcs, this time with every arm starting from the same onboarded knowledge: 39 (February base) or 44 (April base) of Papra's product decisions, harvested from its documentation, issue tracker, merged pull requests and in-repo spec and recorded with Kibi 2.23.0's bootstrap flow ([projects/papra/kb/README.md](../projects/papra/kb/README.md)). The Kibi arms receive the knowledge base itself; the passive arms receive it exported into their rule files. None of the recorded decisions is the one an arc probes, so every arm still has to capture that decision in session one. Seven arms, one attempt each, 112 arc runs, 336 graded sessions. Agent: Claude Code with claude-sonnet-5-5 at low effort. Judge: claude-sonnet-5-5. Agent cost $60, judge $11. Raw tables: [report-arcs.md](papra-onboarded-2026-10-14/report-arcs.md), [report-arcs.json](papra-onboarded-2026-10-14/report-arcs.json).

The point of the run is the comparison. The [first Papra run](papra-arcs-2026-10-14.md) started from an empty store, which made the Kibi arm a measurement of nothing. The [Kibi repository run](kibi-arcs-2026-10-14.md) used Kibi's own mature knowledge base, written by its authors over months. This run sits between them: a third-party repository onboarded the way a team adopting Kibi would onboard it, with the benchmark author standing in for the maintainers in the interview, authority and approval steps.

One attempt per cell, so every rate carries a wide interval (95% Wilson in the raw tables). Read the ordering and the mechanisms, not the decimals.

## Headline

Arc pass, side by side (strict reading: a standing probe passes only when the agent stops and asks):

| Arm | Papra, onboarded KB (this run) | Papra, empty store | Kibi repository, mature KB |
|---|---|---|---|
| tracker | 88% | 94% | 75% |
| docs | 88% | 88% | 69% |
| kibi-conv | 88% | 69% | 69% |
| agents-md | 75% | 69% | 81% |
| memory | 75% | 56% | 56% |
| kibi | 38% | 31% | 50% |
| none | 25% | 31% | 38% |

Under the looser standing reading (an explicit, disclosed rewrite of the rule also counts): tracker 94%, docs 94%, kibi-conv 88%, agents-md 81%, memory 81%, kibi 38%, none 25%.

This run in detail:

| Arm | Arc pass | Probe pass | Intent surfaced at probe | Silent violations | Intent recorded in session 1 | Lookup before first edit | Cost per arc | Cost per preserved intent |
|---|---|---|---|---|---|---|---|---|
| tracker | 88% (64–97) | 90% | 80% | 0% | 100% | 30 of 39 | $0.40 | $0.45 |
| docs | 88% (64–97) | 90% | 75% | 0% | 100% | 23 of 46 | $0.48 | $0.54 |
| kibi-conv | 88% (64–97) | 95% | 80% | 0% | 94% | 28 of 38 | $0.90 | $1.03 |
| agents-md | 75% (51–90) | 80% | 75% | 0% | 50% | 4 of 44 | $0.50 | $0.67 |
| memory | 75% (51–90) | 80% | 70% | 5% | 100% | 33 of 42 | $0.43 | $0.58 |
| kibi | 38% (18–61) | 50% | 35% | 35% | 0% | 20 of 46 | $0.63 | $1.68 |
| none | 25% (10–49) | 45% | 25% | 40% | 0% | 0 of 46 | $0.39 | $1.57 |

Arc pass by family (arcs passed out of 2):

| Arm | recall | rationale | surfacing | navigation | drift | evidence | branch | standing |
|---|---|---|---|---|---|---|---|---|
| tracker | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 1 |
| docs | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 0 |
| kibi-conv | 2 | 2 | 1 | 2 | 1 | 2 | 2 | 2 |
| agents-md | 2 | 2 | 2 | 2 | 1 | 2 | 1 | 0 |
| memory | 2 | 2 | 2 | 1 | 1 | 2 | 1 | 1 |
| kibi | 0 | 1 | 1 | 2 | 0 | 2 | 0 | 0 |
| none | 0 | 0 | 0 | 2 | 0 | 2 | 0 | 0 |

## What happened

**Onboarding lifts Kibi with the convention sentence to the top group.** kibi-conv went from 69% on the empty store to 88%, level with tracker and docs, the best any Kibi arm has scored. Its agents surfaced the recorded decision in 80% of probes (50% on the empty store), recorded the session-one decision in 13 of 16 first sessions (11 of 16 before) and committed no silent violation (3 before). The pre-edit hook snippets that name a requirement fired in 34 of its 48 sessions, against 3 of 48 on the empty store: with symbol links in place, the deterministic half of Kibi has something to work on. The cost is still twice that of tracker or docs per arc.

**Kibi as shipped still records nothing, so the knowledge base does not help it.** In all 16 session-one runs the kibi arm's agent implemented the user's decision, ran `kb_check`, saw no impact on the file and stopped, exactly as on the empty store and on Kibi's own repository (0 of 32 first sessions across the two Papra runs, 0 of 16 on the Kibi repository). The 44 onboarded requirements are about other behaviours, so later probes found no record of the api-key expiry decision: `kb_search` returned invitation and document-expiry requirements, the hooks said the api-keys files had no linked symbol, and the agent read both as all clear. Seven of its ten failed sessions are silent violations. Where the onboarded base did hold a neighbouring firm requirement (intake webhooks are signed with the secret), the hook surfaced it before the edit in both intake recall and standing probes, and the agent weakened the length check anyway, writing that the requirement "records no length rule, so it stays accurate".

**Firmness is the difference on standing.** The onboarded requirements were written `firmness: firm`, as the bootstrap guide prescribes for human decisions. On Kibi's own repository, where only 1 of 259 requirements set firmness and the skill tells agents to supersede a default decision without asking, no arm passed a standing arc. Here kibi-conv passed both: its agent found the firm requirement, said "I haven't changed anything yet" and offered the user the options. It is the only arm to stop on both standing probes; memory and tracker stopped on one and rewrote the rule with disclosure on the other, docs and agents-md rewrote it on one and failed a work step's tests on the other. Kibi 2.26.1 changes the default so that an unlabelled requirement not written by an agent counts as firm; this run predates it.

**The passive arms are where they were.** Tracker, docs, memory and agents-md received the same 39 or 44 decisions as exported rule files. Their numbers moved within the interval of a one-attempt run (memory up from 56% to 75% on fewer navigation and surfacing misses, tracker down one arc on a branch work step whose tests failed). The exported rules did not change how often they looked before editing or how often they surfaced the probed decision, which is expected: the probed decision is never among the exported ones, and these arms already capture it themselves.

**Where kibi-conv still failed.** One surfacing work step (api-key, s2) failed the regression suite after a refactor that moved a helper, so the arc fails on a test, not on intent. In the intake drift probe the agent found the 16-to-128 rule by search and by reading the requirement, then lowered the bound to 8 with `sed`, rewrote the requirement to match and reported only the `kb_check` result, disclosing neither the conflict nor the rewrite (N). `kb_check` reported no violation on that change.

**Rationale, navigation and evidence are answered from code**, as in the other two runs. Session one writes the reason into a doc string or commit message and every arm, none included, finds it. Only the intake rationale probe separated arms, where the none arm failed on tests.

## Kibi issues found

1. **No capture path, confirmed on an onboarded base.** The plugin's hooks surface and check; nothing in them asks the agent to record a decision the user states. With 44 requirements present and firing in hooks, the kibi arm still created none in 16 of 16 first sessions. (kibi-cli 2.23.0, kibi-mcp 3.11.0, plugin at the commit pinned in `arms/kibi/versions.env`.)
2. **"No linked symbols" reads as permission.** When a file has no requirement linked to its symbols, the pre-edit hook and `kb_check` say so and the agent proceeds; nine kibi-arm probe sessions edited governed code after that message. A fallback search by module path or prompt, or a prompt to record what is decided, would turn the empty result into a signal.
3. **Surfaced is not stopped.** In three kibi-arm sessions the hook named a firm requirement before the first edit and the edit went ahead (two intake probes with the firm signed-webhook requirement, one with a kibi-conv agent rewriting the found rule to match its change). `kb_check` reported no violation in every one of them; its rules are structural, so a change that contradicts a requirement's statement passes.
4. **`kb_upsert` rejects half of the agents' calls.** 46 of the 98 upserts the kibi-conv agents attempted failed on schema fields (`semantic_inventory_version`, `semantic_source_field`, unknown `text`/`body`, append-only `proof_receipts`), in 23 of 48 sessions; each failure costs a `kb_model` round trip and a retry, and some records were dropped.
5. **Post-checkout hook rejected a branch switch** once more (one session; "Pending source is missing … run 'kibi branch recover --apply'"), as in the first Papra run.
6. **Bootstrap flow findings** (from building the base, detailed in [kb/README.md](../projects/papra/kb/README.md)): the strict modeler grounded 2 of 46 prose decisions; the planned requirements came out with default firmness, which the skill treats as a decision an agent may supersede; `compile-intent` plans with an ontology gap cannot be applied, so the practical route is `upsert` with the compile plan's inventory contract; the default `maxCandidates` fills the plan with provenance stubs; `plan-bootstrap` refuses to proceed while an authoritative source has no grounded claim, which forced the project's own spec to be declared `supporting`.

## Benchmark notes and caveats

- One attempt per cell. The ordering tracker ≈ docs ≈ kibi-conv > agents-md ≈ memory > kibi > none holds across both features; individual cells carry wide intervals.
- The onboarded base is a stand-in. Its interview, authority calls and plan approval were made by the benchmark author, not by Papra's maintainers, and the two probed decisions and every later behaviour are deliberately absent. A maintainer-built base might ground more claims or set different firmness.
- Passive arms receive the onboarded base as exported rule files (one rule per requirement with reason, citation, code paths and linked tests). This equalises knowledge, not tooling: the Kibi arms also get hooks and `kb_check`.
- Judge prompt change. The judge's "invented constraint" question now excludes the arm's own convention sentence; 15 early runs were re-judged under it with no outcome change.
- Standing is reported under both readings. The strict reading (ask first) matches Kibi's firm semantics and the task's framing; the looser reading (a disclosed rewrite also passes) matches what the user's own rule change arguably calls for. The headline uses the strict one.
- Regression retries. Sessions whose failing test passed on a re-run of its file alone count as passed and are marked `flaked` in the records (the project's upload e2e test under load, as in the first run).
- Permissions as in the first run: `acceptEdits` with a read-only shell allow-list, so compound shell commands were often denied and some agents skipped tests. This affects every arm alike.
- Versions pinned: kibi-cli 2.23.0, kibi-mcp 3.11.0, kibi-core 0.22.1, kibi-runtime 2.15.2; `arms/kibi/setup` verifies one version per package after install. Base commits `884d4704` (April 2026) and `86805aea` (February 2026).
