# Making the benchmark hard the way real projects are hard (Nov 25, evening)

Design only. Nothing was run, no repository was changed, and the frozen sets 1 to 4 and their predictions
(`results/predictions-2026-11-25.md`) are untouched. The predictions in section 9 are **new** and belong to a set
that does not exist yet.

Sources: METHODOLOGY, README, `projects/papra/kb/README.md`, the crowded, chains, unlinked, in-product and
side-effect arcs with their notes, the Nov 25 run (`runs/2026-11-25-crowded`), the team notes on the hard-tier
rebuild, the v6 audit, the v7 and side-effect pilots, the crowded runs, the read-hook audit, my three reports of
today (cost and harder bench, retrieval rethink, search failures), Papra's full history (the benchmark's mirror,
1,179 commits up to the pin), and a quick look at two candidate second projects on GitHub.

"Verified" means I read it in the code, the history or the run data today. "Proposed" means it still has to be
checked when the arc is built.

## 1. Headline

1. **Move the difficulty from the store into the workspace.** Sets 1 to 4 make the store harder (more entries, closer
   entries, replaced entries). Real projects are hard because the evidence disagrees: two code paths, a flag with
   the old and the new behaviour, a comment that is out of date, a test that pins a workaround, a record written in
   last year's words. Every arm sees the same workspace, so this kind of difficulty is fair by construction.
2. **Papra already contains this, for real.** I found a nine-day window where validation was half migrated from one
   library to another (and one migration commit changed a limit without saying so), a "legacy" flag that keeps the
   old storage behaviour as the default, at least six settings that mean different rules for self-hosted and
   hosted instances, half a dozen workarounds with a comment or a test that pins them, three places where the
   documentation and the code disagree, and ten real supersession chains. None of it needs generated text.
3. **Use a store in which every entry is true.** The 182 real decisions plus the 580 true in-product entries (the
   server's own test titles), and no entries about invented products. Look-alikes then are what they are in a
   real project: neighbouring rules of the same product.
4. **Eight families, ranked.** Half-finished refactors first, then flag- and mode-scoped decisions, real
   supersession with stale leftovers, workarounds and the tests that pin them, rules that span modules, records
   that disagree with the code, decisions that live only in history, and naming drift.
5. **Of the four options on the table:** strict pass, yes, now. Opposite-ruling twins and contradicted records, yes,
   but only in their real form (a rule that holds in one mode and not the other; a record that the code
   contradicts), not as generated entries. The scale ladder, no agents: keep it as an offline capacity table.
6. **A second project is needed, and it is the more honest half of the answer.** Papra is the repository Kibi was
   tuned on. I recommend building the next set on Papra first (the material is there and the knowledge base
   exists), then repeating the same recipe on Actual Budget as a held-out project frozen before any tuning.
7. **I expect Kibi to lead less clearly than today.** It should lead on workarounds, tie with docs on half-finished
   refactors and real supersession, and have the most false stops on mode controls, because its hook asks before
   an edit to firmly governed code whatever the mode. No arm should pass half of the cross-module probes.
8. **Cost.** About 29 arcs. One attempt on eight arms is about $150 to $180; three attempts $450 to $550. A
   three-arm pilot (none, docs, kibi), one attempt, is about $55 to $70. Build: about four weeks for Papra, three
   to four more for the second project.

## 2. What the earlier research says, and what follows from it

| Finding | Where | What follows |
|---|---|---|
| When the code states the decision (a comment, a constant's name), every store arm ties | v5 hard rebuild: 6 of 6 for four arms | Do not hide the decision by stripping more comments. Pick situations where the real code says nothing, or says something out of date. |
| Agents search with the code's words after reading code, so a "search gap" closes by itself | v7 pilot: memory and three others 9 of 9 | Wording tricks in the request do not last. Drift between the record's words and today's code does. |
| Shared code is visible; side-effect arcs did not separate arms on the small store | v7 side-effect pilot: all store arms 4 of 4 | A side effect is only hard when something else misleads, such as a second path that looks like the first. |
| Crowding separates topic search; docs holds because file names carry the product | crowded runs: kibi 27, docs 25, tracker 21, mem0 19, memory 16, memory-embed 13, gitea 7 | The crowd of other products is a shortcut for every arm. An all-true store removes it. |
| In 53 of 61 failed probes outside Kibi the decision was never shown; mem0 found it and edited anyway five times | cost and harder bench, 2.1 | Report retrieval ("shown before the first edit") apart from judgment. The new families mostly test judgment. |
| Kibi's first search finds the decision in 13 of 27; the edit hook carries it (43 of 81 sessions) | search failures; harder bench 2.2 | Shapes where the hook is wrong or silent test Kibi honestly: unlinked paths, mode controls, the unmigrated twin. |
| The request is a bad query; the text of the edit is a good one | retrieval rethink, 2.4 | Arcs whose violating edit lands in a file that is not linked (14 of 55 sessions already) are realistic and hard for link-based tools. |
| 103 of the 182 real decisions have no code link | retrieval rethink | Do not add links to make an arc work. Links stay as the real onboarding made them. |
| The scripted user was an oracle; the judge saw no code; S after an edit is R | v6 audit, fixed | Keep the decision-blind user and the mechanical evidence. New outcome rules below stay mechanical where possible. |
| No arm treated a replaced entry as current (0 cases) with generated chains | harder bench, A6 | Generated chains are too clean. Real chains come with leftovers in code, docs and tests. |
| An assumption stated with a decision is recorded by no arm | three follow-up pilots | Stopgaps ("until we migrate") belong in the workaround family, graded on the record every arm was given. |
| Read snippets exist in three Kibi harness packages only | read-hook audit | A Kibi pass that depends on a read snippet must be visible in the report (section 6, rule 7). |
| Kibi versus docs is p = 0.49 at n = 3; one repository; tuned on these arcs | run report, publication criteria | More distinct decisions, a floor arm, and a held-out project. |

## 3. The principle

An arc of the new kind starts from a workspace in which **at least two real sources disagree** about the behaviour
the request touches:

| Disagreement | Family |
|---|---|
| Two code paths do the same job; one was migrated | 1. Half-finished refactor |
| The old and the new behaviour both live, behind a flag or a deployment mode | 2. Flag- and mode-scoped decisions |
| A newer decision replaced an older one; a comment, a doc page or a test still states the old one | 3. Real supersession |
| Code that looks wrong or dead is there on purpose; a test pins it | 4. Workarounds |
| The rule is enforced in another module than the one the request names | 5. Rules across modules |
| The record says one thing and the code does another | 6. Record and code disagree |
| The decision is in a commit message, a pull request or an issue, and nowhere else | 7. History only |
| The record uses a name the code no longer uses | 8. Naming drift |

Three rules keep this honest.

- **The misleading evidence is real.** It exists in the project at the arc's base commit. Nothing is planted. Where
  a family needs a base commit other than the pin (a mid-migration state), the knowledge base is rebuilt at that
  commit with the existing `gold/snapshot.sh`, which already takes only the claims dated on or before the base.
- **The store is all true.** A new variant, here called `true-only`: the 182 real decisions and the 580 true
  in-product entries of `gold/inproduct.py`, with no generated other-product entries and no generated chains. More
  real entries can be added from the 240 changelog entries not yet used.
- **The `none` arm runs on every new arc as a floor.** If an agent with no store keeps the probe in two of three
  attempts, the code itself tells the answer and the arc is reported in the easy tier. This rule is fixed before
  the run, so it cannot be used to tune.

## 4. What Papra's history offers (verified today)

| Material | Where | Family |
|---|---|---|
| Validation migrated from zod to valibot module by module, 9 to 16 April 2026 (PRs #1028 to #1049). At `401efe2f`, 39 server files import zod and 35 valibot; at `791d08c4`, 32 and 48; at the pin, none. Old schemas sit in `*.schemas.legacy.ts` beside the new ones, with two validation middlewares. | history | 1 |
| The tags migration (#1044, titled "refactor") changed a rule: the old route accepted a tag name of at most 50 characters on create and 64 on update; the new shared schema accepts 64 on both. The commit says nothing about it. | `e05e6e86` | 1, 6 |
| Tagging has a single path (`addTagToDocument`) and a batch path (`applyTagsToDocuments`, `addTagsToDocumentsBatch`) after "mutualize batch tagging method" (#1199). | pin | 1, 5 |
| `DOCUMENT_STORAGE_USE_LEGACY_STORAGE_KEY_DEFINITION_SYSTEM`: the old key scheme and the pattern scheme both live. The docs say the legacy scheme stays the default "for backward compatibility". A test title: "is opt-in and does not synchronize legacy keys". | `document-storage.usecases.ts` and its test | 2, 3 |
| Self-hosted against hosted: `isFreePlanUnlimited` ("basically always true" for self-hosting), `AI_CREDITS_IS_ENABLED` ("enable for metered instances; leave disabled for self-hosting"), the first-user-admin setting, the Stripe settings ("useless for self-hosting"), the self-host plan entitlements. | `*.config.ts` | 2 |
| "Legacy: organizations.deleted_by has no ON DELETE clause in the DB, so it must be nulled manually before deleting the user." | `users.usecases.ts` | 4 |
| "TODO: introduce a createTags method with a new checkIfOrganizationCanCreateNewTag": auto-tagging creates tags one by one through `createTag`. | `auto-tagging.usecases.ts` | 4, 5 |
| A regular expression "copied from zod ... while waiting to migrate to zod v4". The project migrated to valibot instead, so the comment's premise is dead. | `intake-emails.constants.ts` | 4, 3 |
| Tests that pin a workaround: driver errors wrapped "since drizzle-orm 0.44 ... must still be detected"; "ensure Buffer can base64 decode unpadded string, as the PHC spec requires"; the S3 settings kept "backward compatible"; tagging rules default to match mode "all" "for backwards compatibility". | test files | 4 |
| The docs and the code disagree in three places the onboarding already noted: "contains matching" is a prefix-token match; an invalid `created:` date matches nothing instead of being ignored; the first-user-admin check can yield no admin under concurrent sign-ups. The onboarding also declared one conflict between sources, and the store holds the owner-deletion rule twice from two sources. | `kb/README.md`, `claims.json` | 6 |
| Ten real chains: the search endpoint (#650, #758, #899), document order (#1089, #1192, with #1292), email escaping (#995, #1061), the B2 driver, email dry-run, the base URL, the intake secret (#892, #1502), storage key persistence, versioning, the member limit. | `gold/bulk.py`, `gold/later.json` | 3 |
| Decisions whose only source is a closed issue or a pull request title: 17 claims from issues, 6 from pull requests, most pull requests without a description. | `claims.json` | 7 |
| Real renames and moves: the storage module made document-agnostic (#1449), plan ids (#1160), the AI model identifier format (#1250), the invitation flow decoupled (#1533). | history | 8 |

## 5. The families, ranked

Ranked by how well each matches the request ("actual project problems"), how sure I am it separates arms without
favouring one, and what it costs. Each arc has three steps unless said otherwise: a compliant look-alike, the
probe, and a control where stopping is the error.

### 1. Half-finished refactor (two code paths, one migrated)

- **What it tests.** Whether the agent keeps a decision on both paths, and whether a refactor step drops a rule the
  old code enforced.
- **Shapes.**
  - *Finish the migration.* The step is the real follow-up commit ("migrate the tags routes to the new validation").
    The hidden tests are the project's own tests of the old behaviour at that commit. Dropping or changing a
    recorded limit while migrating is V. The #1044 case shows this happens in real work.
  - *Twin path.* The request is implemented most simply on one path; the recorded decision is enforced on both.
    The hidden test goes through both routes.
  - *Control.* A compliant change on the unmigrated path.
- **How to build.** Real history. Base `123b7c17` (16 April 2026): organizations, invitations, documents and
  intake emails are migrated; subscriptions, tagging rules, users, tags and webhooks are not. A second base at the
  pin for the single and batch tagging paths. No patch, no generated code.
- **Equivalence.** The workspace is the same commit for every arm. The store is the snapshot at that base. Each
  decision's code paths are the ones the onboarding recorded, stale or not, in every arm. The audit adds one check:
  no arm's entry names a path the others lack.
- **Grading.** Probe: S or D, or C when the hidden two-path test passes. V or N when either path breaks. The
  finish-the-migration step is graded as `work`: C, or V when an intent test fails. A stop on the control is Q or I.
- **Expected effect.** Docs and Kibi about equal. Kibi's hook fires on the linked path only, and the onboarding
  linked the deciding function, not its twin. Search arms find the rule when they search at all, since the code's
  words lead to it, and then keep it on one path. The floor arm should fail the twin-path probes and pass some of
  the migration steps by copying the old schema.
- **Build cost.** 5 to 6 days: one snapshot at a new base, six arcs, two-path hidden tests.

### 2. Flag- and mode-scoped decisions (the real form of opposite-ruling twins)

- **What it tests.** Whether the agent applies a decision only where it holds: self-hosted or hosted, legacy scheme
  or pattern scheme, flag on or off.
- **Shape.** One arc carries both directions. The probe is a request in the mode where the decision bites ("on our
  hosted plan ..."). The control is the same-looking request in the mode where it does not ("we self-host ...").
  The user states the mode the way users do, in passing.
- **How to build.** Real settings at the pin (section 4). Six arcs: two on the legacy storage flag, two on plan
  limits, one on AI credits, one on first-user-admin.
- **Equivalence.** The condition must be part of the entry's text in every arm, not only a structured field one
  tool can show. The audit checks that the condition's words are in each arm's container.
- **Grading.** Hidden tests run once per mode. Probe: S or D, or C when the decision's test passes in its mode.
  Control: C; a stop is a false stop. Both are reported together, as precision and recall.
- **Expected effect.** Flag names are distinctive, so retrieval is easy for every arm. The errors are judgment:
  applying the rule in the wrong mode. I expect Kibi to have the most false stops on the controls, because its hook
  asks before an edit to firmly governed code and says nothing about mode. Passive arms should miss more probes
  and stop less.
- **Build cost.** 4 days, plus half a day for per-mode test runs in the harness.

### 3. Supersession as it really happened

- **What it tests.** The same as the frozen chains set, but with the leftovers real projects have: the old value in
  a comment, a doc page or a test title after the decision changed.
- **How to build.** The ten real chains. For each, a script lists the commits between the change of the code and
  the change of the docs, comments or tests; the base is a commit inside that window. Chains with no window stay
  out of this family. No generated history. These arcs run without the `hide-why` patch, since the stale text is
  the point.
- **Equivalence.** Every arm gets each version with its status and its replacement, as METHODOLOGY already
  requires. The stale text is in the repository, the same for all.
- **Grading.** Probe against the decision in force: S or D. Mirror control: C. "Treated a replaced entry as
  current" and "followed a stale comment against the record" are both recorded; the first already exists as a
  judge answer, the second is new.
- **Expected effect.** Harder than the generated chains for every arm, because the workspace now argues for the old
  version. Kibi and docs lead; arms whose search ignores status fall furthest.
- **Build cost.** 3 to 4 days. I have not yet measured how many chains have a usable window; if fewer than four do,
  this family shrinks.

### 4. Workarounds, and the tests that pin them

- **What it tests.** Whether the agent finds out why odd code is there before removing it.
- **Shape.** The probe is a clean-up request: "drop the manual null-out before deleting a user", "create the
  auto-tagging tags in one statement", "use the library's email check instead of the copied pattern", "this test is
  about an old driver version, delete it". The simplest clean-up breaks the decision the workaround protects. The
  control is a clean-up that is safe.
- **How to build.** Real sites (section 4). Each needs a real recorded decision behind it; where the store has none
  the arc is not built. The code is left as upstream wrote it, comment included. The floor arm tells us which
  comments already give the answer.
- **Equivalence.** Same workspace. The decision is in every store with its reason where a source states one.
- **Grading.** Probe: S or D, or C when the clean-up keeps the behaviour (hidden test). Hidden tests are restored,
  so deleting the pinning test does not pass.
- **Expected effect.** The request points at linked code, so Kibi's hook should show the decision; this is the
  family I expect Kibi to lead. Docs needs a search by path, which 2 of 27 sessions did on Nov 25.
- **Build cost.** 4 days.

### 5. Rules that span modules

- **What it tests.** Whether the agent sees a conflict that only exists when two decisions are read together: the
  tag cap and auto-tagging; trash, share links and restore-on-reupload; the member limit, pending invitations and
  resend.
- **How to build.** Real interactions at the pin, four arcs. The request names module A; the conflict is with a
  decision enforced in module B.
- **Equivalence.** Both decisions are in every store. Nothing new.
- **Grading.** Per decision. Under the strict pass the step counts only when each decision at stake is named or
  kept by test. This needs one small change to the decision table (a list of governing entries per step) and is
  reported with partial credit beside it.
- **Expected effect.** Low for all. No tool follows a rule across modules; my earlier scan found Kibi's candidate
  lookup is by words, not by call graph.
- **Build cost.** 4 to 5 days, including the grading change.

### 6. The record and the code disagree (the real form of contradicted records)

- **What it tests.** Whether the agent notices that what is written and what the code does differ, and says so
  instead of silently picking one.
- **Shape.** A question step ("does search match part of a word?") and a work step that touches the behaviour. The
  right answer reports both sides.
- **How to build.** The three documented differences, the declared source conflict and the duplicated entry.
- **Grading.** `require`, like the stale-assumption question: the answer must state both and that they differ. We
  do not know which side Papra's maintainers consider right, so no behaviour is graded.
- **Expected effect.** Low for all arms. A side measure, not part of the headline.
- **Build cost.** 2 days.

### 7. Decisions that live only in history

- **What it is.** A setting of the workspace more than a family. Today the workspace has no history and the
  changelogs are removed. A real project has both.
- **Proposal.** Run the new set "as upstream": real history up to the base commit, real changelogs, real comments.
  The stores stay as they are. Decisions whose only source is an issue or a pull request thread (23 of the first
  49 claims) are then in the store and nowhere in the tree, while changelog decisions are in both.
- **Risk.** Arms may tie at the top again, as in v5. The floor arm measures that, and the easy-tier rule handles it.
- **Build cost.** 1 to 2 days in the harness (a clone cut at the base instead of a single commit).

### 8. Naming drift

- **What it is.** A dial inside families 1, 3 and 4. A record harvested before a real rename keeps the old words and
  the old path.
- **Honest version.** The store is built at the commit before the rename and carried forward by whatever each tool
  does on its own without a person. Report two variants side by side, as the `webhook-moved` arcs do: paths stale
  in every arm, and paths as each tool maintains them.
- **Build cost.** 2 days for two or three arcs.

## 6. Rules for every new arc

1. **Same workspace, same records.** The equivalence audit runs before any session, as today, with the new checks
   named above (condition text, no extra path in one arm).
2. **Hidden tests are checked three ways** and the check is published with the arc: the base passes, the violating
   reference edit fails, the compliant reference edit passes. For mode arcs, in each mode.
3. **Links are not added for an arc.** A wrong link is corrected for every arm before the freeze and listed.
4. **A control beside every probe.**
5. **The floor arm decides the tier**, by the rule in section 3.
6. **Freeze before tuning.** Arcs, stores and predictions go into one commit before Kibi or any arm is changed
   with these shapes in mind.
7. **No result may rest on one harness.** The report gets a column "decision first shown by": search, edit hook,
   read snippet, or the agent's own reading. Passes that rest on read snippets are counted apart until every Kibi
   harness package has them. Any Kibi change that these arcs suggest (showing the mode condition, retrieval by
   the text of the edit) must land for all harnesses.
8. **More distinct decisions.** The Nov 25 result rests on nine. The set below adds about 30.

## 7. Verdict on the four options

| Option | Verdict | Why |
|---|---|---|
| Strict pass (only naming the governing decision counts) | **Adopt now**, as the headline, with today's pass beside it | Free. On Nov 25 it moves memory-embed from 13 to 11 and nothing else. One exception by design: a C that is proven by the hidden test needs no naming, or side-effect and two-path work done correctly would fail. Add "did not treat a replaced entry as current". |
| Opposite-ruling twins | **Adopt in the real form only** (family 2) | A generated twin is one more synthetic entry. A rule that holds for hosted and not for self-hosted is the same test with a real twin and a real control. |
| Contradicted records | **Adopt in the real form, as a side measure** (family 6) | Two generated active entries that disagree favour the one tool with a consistency check, and a curated store would not hold them. Records that the code contradicts are common and Papra has them. |
| Scale ladder (1x, 3x, 10x) | **Offline only** | It measures a constant in Kibi and the limits of our stand-ins more than recovery of intent. My simulation already gives the table (first-query recall 47% to 29% at ten times). No project has 12,000 decisions about other products. If scale is wanted, grow the true store with more real changelog entries. |

## 8. A second project

**Yes, and it matters more than any single family.** Layering on Papra is cheap and the material is real, but Kibi
was tuned on Papra, and every critic will say so. The honest design is both: build the set on Papra, then build
the same families on a project nobody tuned on, freeze it, and only then look.

| Candidate | What I checked today | Fit |
|---|---|---|
| **Actual Budget** (`actualbudget/actual`, MIT; already the planned second project) | Twelve live experimental flags in `loot-core/src/types/prefs.ts` (goal templates, formula mode, currency and others): old and new behaviour behind a flag, for real. A release-note file per pull request in `upcoming-release-notes/`. Docs in the repository (`packages/docs/docs`: budgeting, schedules, experimental, migration, contributing). Monthly tags; the latest is v26.11.0 (2 November). The October survey measured 1,285 unit tests in 165 seconds with in-process SQLite. | Best. A rich domain with interacting rules (budgets, rollover, schedules, the rules engine, transfers, sync) and two budget types, which gives mode-scoped decisions. |
| **Mozilla FxA** (`mozilla/fxa`) | 53 numbered decision records in `docs/adr`, with real reversals: GraphQL adopted (0016) and removed (0047), Hawk deprecated (0022), a database service retired (0025), an email service retired (0028). | The best real decision log I know of, but the decisions are architectural and hard to test with a hidden unit test, and the repository needs MySQL and Redis. Not next. |
| **Kresus** | From the survey: demo-mode prohibitions, 360 tests in 7 seconds. Not rechecked today. | A small fallback for mode-scoped decisions. |

**For Actual Budget:**

- **Base commit:** the v26.9.0 tag (1 September). Two later releases then exist as real follow-up work for the
  steps, and they show which flagged features became the default, which is ground truth for supersession.
- **Decision sources:** the docs pages (authoritative), the release-note files and the release pages (decision
  log), issue and pull request threads (the maintainers' words), and test titles (in-product entries, as for
  Papra). Onboarded with the same bootstrap flow, with the same stand-in for the maintainers, and stated as such.
- **Cautions:** it is better known than Papra, so more of it is in the model's training data; about a quarter of
  its recent commits are agent-authored; its suite is slower, which costs time, not money.

## 9. Recommended next set, with new predictions

**Set 5, "as upstream" Papra.** Store `true-only`. Sonnet 5.5 at low effort, three attempts, the `kibi` arm with
verification off, plus `none` as the floor.

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

**Cost per run.** The Nov 25 batch cost $0.41 per arc run with about 2.2 steps, judge and scripted user included.
The new arcs have three steps and longer sessions, so I assume $0.60 to $0.80. 29 arcs on eight arms: $150 to
$180 per attempt, $450 to $550 for three. A pilot on `none`, docs and kibi with one attempt: $55 to $70.

## 10. Build plan

| Step | What | Days |
|---|---|---|
| 0 | Strict pass and "shown before first edit" in the harness; recompute Nov 25. No runs. | 1 |
| 1 | Harness: workspace with history cut at the base; per-mode hidden test runs; a list of governing entries per step; three-way test check; the "first shown by" column. | 3 |
| 2 | Store `true-only` at the pin; snapshot at `123b7c17`; the script that finds stale-leftover windows for the ten chains. | 3 |
| 3 | Offline check of every store with the agents' real queries from Nov 25, as for sets 1 to 4. | 0.5 |
| 4 | Arcs 5a and 5b, written together, with hidden tests. | 9 |
| 5 | Arcs 5c, 5d, 5e, 5f. | 10 |
| 6 | Freeze: arcs, stores and the predictions above in one commit, in a new predictions file. | 0.5 |
| 7 | Pilot: `none`, docs, kibi, one attempt. Apply the easy-tier rule. Fix only harness and grading faults, and list them. | 1 |
| 8 | Full run, three attempts, eight arms. | 1 |
| 9 | Actual Budget: onboarding, stores, the same families, freeze, run. | 15 to 20 |

Order against the frozen work: sets 1 to 4 run first, as planned. Set 5 is built without looking at their results
for tuning, and its arcs live in new directories.

## 11. Where I am unsure

- **Whether enough sites have a recorded decision behind them.** For each workaround and each two-path site I
  verified that the code exists, not that the store holds the decision it protects. Some will drop out. The arc
  counts are targets.
- **Whether "as upstream" brings the tie back.** With comments, changelogs and history present, every arm may find
  the answer in the tree. The floor arm will show it in the pilot for under $70.
- **The stale-leftover windows.** I have not measured them. Family 3 depends on finding at least four.
- **The 50 against 64 tag-name case** is verified as a change inside a refactor commit. Whether 50 was ever a
  decision, or an accident, is not known; it illustrates the family and may not become an arc.
- **Mode controls and the scripted user.** The user must state the mode in the request and then stay
  decision-blind. That wording needs care, so the mode is not a hint.
- **Actual Budget** was checked from its GitHub pages only. The flags, the release-note folder, the docs folders
  and the tags are verified; the test numbers are from the October survey.
