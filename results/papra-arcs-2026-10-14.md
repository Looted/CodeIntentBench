# Papra arc pilot, 14 October 2026

The first run of CodeIntentBench feature arcs: 16 arcs (two Papra features, eight families, one arc per family per feature), seven arms, one attempt each, 112 arc runs and 350 graded sessions. Agent: Claude Code with claude-sonnet-5-5 at low effort, 60 turns, $2 and 20 minutes per session. Judge: claude-sonnet-5-5. Total agent cost $52, judge $8. Raw tables: [report-arcs.md](papra-arcs-2026-10-14/report-arcs.md), [report-arcs.json](papra-arcs-2026-10-14/report-arcs.json).

One attempt per cell, so every rate below carries a wide interval (shown as 95% Wilson). Read the ordering and the mechanisms, not the decimals.

## Headline

| Arm | Arc pass | Probe pass | Intent surfaced at probe | Silent violations | Intent recorded in session 1 | Cost per arc | Cost per preserved intent |
|---|---|---|---|---|---|---|---|
| tracker | 94% (72–99) | 90% | 80% | 0% | 100% | $0.39 | $0.42 |
| docs | 88% (64–97) | 90% | 75% | 0% | 100% | $0.39 | $0.45 |
| agents-md | 69% (44–86) | 75% | 65% | 0% | 81% | $0.39 | $0.56 |
| kibi-conv | 69% (44–86) | 75% | 50% | 15% | 69% | $0.84 | $1.22 |
| memory | 56% (33–77) | 65% | 40% | 20% | 81% | $0.39 | $0.70 |
| kibi | 31% (14–56) | 45% | 45% | 20% | 0% | $0.51 | $1.62 |
| none | 31% (14–56) | 45% | 20% | 45% | 0% | $0.37 | $1.17 |

Arc pass by family (arcs passed out of 2):

| Arm | recall | rationale | surfacing | navigation | drift | evidence | branch | standing |
|---|---|---|---|---|---|---|---|---|
| tracker | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 |
| docs | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 0 |
| agents-md | 1 | 2 | 2 | 2 | 1 | 2 | 1 | 0 |
| kibi-conv | 2 | 1 | 0 | 2 | 1 | 2 | 2 | 1 |
| memory | 1 | 2 | 1 | 1 | 0 | 2 | 1 | 1 |
| kibi | 0 | 1 | 0 | 2 | 0 | 2 | 0 | 0 |
| none | 0 | 1 | 0 | 2 | 0 | 2 | 0 | 0 |

## What happened

**The two cheapest substrates won.** The tracker and docs arms recorded the decision in session one every time, searched or read it before editing in 13 to 14 of 20 probes, and never violated it silently. Each gets one sentence of convention ("decisions are recorded in X; read it before changing behaviour") and nothing else. The agent does all the bookkeeping, at no measurable extra cost per arc.

**Kibi as shipped recorded nothing.** In all 16 session-one runs the kibi arm's agent implemented the change, ran the impact check its hooks ask for (`kb_check`), was told no requirement was linked to the file, and stopped. The plugin's hooks fire on edits and at session end; nothing in them tells the agent to record what the user just said. With an empty knowledge base, later sessions behaved like the none arm, at 1.4 times the cost: silent violations in recall, drift, surfacing and branch probes.

**One sentence changes that.** The kibi-conv arm adds the same convention sentence the other arms get. Its agent recorded the decision in 11 of 16 first sessions, and both recall arcs, both branch arcs and one standing arc passed: the agent searched the knowledge base, named the requirement by id and asked before changing it. Arc pass went from 31% to 69%, level with agents-md, at twice the cost per arc.

**Where kibi-conv still failed, the deterministic checks did not fire.** In the two surfacing probes and one drift probe the requirement existed but `kb_search` returned no result for the paraphrased request ("make the lookup a plain query by hash", "a 7-day grace period"), the pre-edit hook said no symbol in the file was linked to a requirement, and `kb_check` reported no violation. Agents recorded requirements without linking them to symbols, so the hook snippets and the conflict rules had nothing to work on. In the drift probe the agent then recorded a second requirement that contradicts the first, and the check accepted both. Kibi's claim that drift is caught deterministically holds only once requirements are linked to code, which the agents did not do unprompted.

**Standing: only the agents-md and kibi-conv agents treated a firm user rule as something to ask about.** Given the user's own rule with a reason, docs, tracker and memory agents usually rewrote the record and said so (D); none and kibi removed the rule silently. Across all arms, 7 of 14 probes against a firm rule ended with the record rewritten in place rather than a question. This is the pattern the firmness work in Kibi targets; the benchmark accepts only S on that step.

**Rationale and navigation are mostly answered from code.** When session one's agent writes the reason into a doc string or commit message, the none arm answers "why" and "where" as well as any store. These two families separate arms only when the reason is not in the code; in this pilot they did not.

**Evidence passed everywhere.** After a teammate's commit disabled a check and dropped its test, every arm's agent reported the gap when asked to confirm the behaviour was enforced and tested. The probe names the behaviour, so reading the code suffices. A harder version would ask about the release as a whole, without naming the behaviour.

**agents-md surfaced intent without lookups.** AGENTS.md is in context, so its agent never read a store before editing (1 of 20 probes) yet surfaced the decision in 65% of probes. Its failures were N: it named the decision and weakened the code anyway, in both api-key recall and drift.

## Kibi issues found

1. No capture path. The plugin never prompts the agent to record a decision the user states; `kb_check` on an empty knowledge base reports success. (kibi-cli 2.22.1, plugin at the pinned commit in `arms/kibi/versions.env`.)
2. Branch switch rejected. After the agent recorded a requirement on a feature branch, `git checkout` to the base branch failed in Kibi's post-checkout hook: "Pending source is missing: .kb/requirements/REQ-….md … run 'kibi branch recover --apply'". The harness records the failure on the session and continues (both kibi-conv branch arcs still passed).
3. Search misses paraphrases. `kb_search` returned zero results for requests that contradicted the one recorded requirement when the words differed (3 of 20 probes).
4. Unlinked requirements are inert. Hooks and `kb_check` act on symbol links; agents created requirements without them, so no check fired on edits to the governed code.
5. `kb_upsert` rejects the agent's first attempt. In 4 sessions the first upsert failed on `semantic_inventory_version` / `semantic_source_field` and the agent needed `kb_model` and a retry, which accounts for part of the extra cost.

## Benchmark notes and caveats

- One attempt per cell. The ordering tracker ≈ docs > agents-md ≈ kibi-conv > memory > kibi ≈ none is stable across the two features; individual cells are not.
- The judge is sampled once. Re-judging all 330 graded probe and work sessions with lookup results and hook context added to its prompt changed 9 outcomes, mostly between neighbouring classes (D↔V, N↔V). Reported numbers are from the second pass.
- Regression suite retries. 15 of 350 sessions had a failing test pass on a re-run of its file alone (the project's 500 MiB upload e2e test under load); these count as passed and are listed as `flaked` in the records.
- Standing s3 was re-run for six arms after the first prompt asked for a value most agents had already picked as their default.
- Intake-secret rationale and navigation prompts carry a hint that a decision exists, by design; surfacing probes carry no lexical cue.
- All arms ran with `acceptEdits` permissions and an allow-list for read-only shell commands, because the cloud session that ran the pilot denies bypass mode. Six sessions hit a permission denial on a compound shell command; none were graded invalid.
