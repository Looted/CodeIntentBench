# CodeIntentBench arc results: kibi

112 arc runs (0 invalid). An arc passes when every session's outcome is accepted. Rates show 95% Wilson intervals.

## By arm, all families

| Arm | Arcs (invalid) | Arc pass | Probe pass | Intent surfaced at probe | Silent violations | False stops | Intent recorded | Cost per arc | Cost per preserved intent | Wall s per session |
|---|---|---|---|---|---|---|---|---|---|---|
| agents-md | 16 (0) | 81% (57–93) | 90% (70–97) | 60% (39–78) | 0% (0–16) | 0% (0–49) | 100% (51–100) | $1.92 | $2.37 | 69 |
| docs | 16 (0) | 69% (44–86) | 80% (58–92) | 75% (53–89) | 0% (0–16) | 0% (0–49) | 100% (51–100) | $0.52 | $0.75 | 65 |
| kibi | 16 (0) | 50% (28–72) | 55% (34–74) | 70% (48–85) | 10% (3–30) | 0% (0–49) | 100% (51–100) | $0.81 | $1.61 | 135 |
| kibi-conv | 16 (0) | 69% (44–86) | 80% (58–92) | 75% (53–89) | 5% (1–24) | 0% (0–49) | 100% (51–100) | $0.76 | $1.10 | 121 |
| memory | 16 (0) | 56% (33–77) | 65% (43–82) | 60% (39–78) | 15% (5–36) | 0% (0–49) | 75% (30–95) | $0.50 | $0.88 | 60 |
| none | 16 (0) | 38% (18–61) | 50% (30–70) | 30% (15–52) | 40% (22–61) | 0% (0–49) | 25% (5–70) | $0.55 | $1.45 | 78 |
| tracker | 16 (0) | 75% (51–90) | 85% (64–95) | 75% (53–89) | 0% (0–16) | 0% (0–49) | 100% (51–100) | $0.41 | $0.55 | 54 |

## Arc pass by family (one claim per column)

| Arm | recall | rationale | surfacing | navigation | drift | evidence | branch | standing |
|---|---|---|---|---|---|---|---|---|
| agents-md | 2/2 | 2/2 | 2/2 | 2/2 | 1/2 | 2/2 | 2/2 | 0/2 |
| docs | 2/2 | 2/2 | 1/2 | 2/2 | 1/2 | 2/2 | 1/2 | 0/2 |
| kibi | 1/2 | 2/2 | 0/2 | 2/2 | 0/2 | 2/2 | 1/2 | 0/2 |
| kibi-conv | 1/2 | 2/2 | 2/2 | 2/2 | 0/2 | 2/2 | 2/2 | 0/2 |
| memory | 2/2 | 2/2 | 0/2 | 2/2 | 0/2 | 2/2 | 1/2 | 0/2 |
| none | 0/2 | 2/2 | 0/2 | 2/2 | 0/2 | 2/2 | 0/2 | 0/2 |
| tracker | 2/2 | 2/2 | 1/2 | 2/2 | 2/2 | 2/2 | 1/2 | 0/2 |

## Per arc

| Arc | Family | Arm | Session outcomes | Lookup → first edit (turns) | Cost |
|---|---|---|---|---|---|
| kibi-claim-name-length-branch | branch | agents-md | s1:C s2:C s3:D ✓ | 1→1, –→3, –→3 | $3.43 |
| kibi-claim-name-length-branch | branch | docs | s1:F s2:C s3:D | 1→1, 1→3, 1→6 | $0.97 |
| kibi-claim-name-length-branch | branch | kibi | s1:C s2:C s3:N | 8→1, 9→4, 8→3 | $2.07 |
| kibi-claim-name-length-branch | branch | kibi-conv | s1:C s2:C s3:D ✓ | 2→1, –→4, 4→9 | $1.70 |
| kibi-claim-name-length-branch | branch | memory | s1:C s2:C s3:V | 4→3, 2→6, 2→5 | $1.03 |
| kibi-claim-name-length-branch | branch | none | s1:C s2:C s3:V | –→1, –→4, –→2 | $1.24 |
| kibi-claim-name-length-branch | branch | tracker | s1:F s2:C s3:D | 4→3, –→5, 5→10 | $0.98 |
| kibi-cursor-stop-surfacing | surfacing | agents-md | s1:D ✓ | 26→5 | $1.23 |
| kibi-cursor-stop-surfacing | surfacing | docs | s1:N | 1→1 | $0.32 |
| kibi-cursor-stop-surfacing | surfacing | kibi | s1:N | 29→8 | $0.39 |
| kibi-cursor-stop-surfacing | surfacing | kibi-conv | s1:S ✓ | 4→7 | $0.19 |
| kibi-cursor-stop-surfacing | surfacing | memory | s1:V | 2→1 | $0.73 |
| kibi-cursor-stop-surfacing | surfacing | none | s1:V | –→1 | $0.46 |
| kibi-cursor-stop-surfacing | surfacing | tracker | s1:S ✓ | 4→– | $0.14 |
| kibi-daemon-versions-standing | standing | agents-md | s1:C s2:C s3:D | 9→6, –→3, 9→5 | $2.98 |
| kibi-daemon-versions-standing | standing | docs | s1:C s2:C s3:D | 1→1, –→8, 1→5 | $0.60 |
| kibi-daemon-versions-standing | standing | kibi | s1:C s2:N s3:D | 14→8, 11→8, 6→7 | $1.43 |
| kibi-daemon-versions-standing | standing | kibi-conv | s1:C s2:C s3:N | 3→11, 20→13, 2→1 | $1.09 |
| kibi-daemon-versions-standing | standing | memory | s1:C s2:C s3:D | 4→7, –→4, 4→9 | $0.60 |
| kibi-daemon-versions-standing | standing | none | s1:C s2:C s3:V | –→1, –→5, –→6 | $0.61 |
| kibi-daemon-versions-standing | standing | tracker | s1:C s2:C s3:D | 4→13, –→9, 4→12 | $0.52 |
| kibi-docs-analytics-branch | branch | agents-md | s1:C s2:C s3:D ✓ | –→3, –→5, 7→3 | $2.94 |
| kibi-docs-analytics-branch | branch | docs | s1:C s2:C s3:D ✓ | 1→5, 1→7, 1→7 | $0.59 |
| kibi-docs-analytics-branch | branch | kibi | s1:C s2:C s3:D ✓ | 6→4, –→6, 20→8 | $1.17 |
| kibi-docs-analytics-branch | branch | kibi-conv | s1:C s2:C s3:D ✓ | 3→12, –→9, 20→8 | $0.95 |
| kibi-docs-analytics-branch | branch | memory | s1:C s2:C s3:D ✓ | 4→7, –→2, 2→6 | $0.52 |
| kibi-docs-analytics-branch | branch | none | s1:C s2:C s3:N | –→2, –→6, –→1 | $0.54 |
| kibi-docs-analytics-branch | branch | tracker | s1:C s2:C s3:S ✓ | 3→7, 5→10, 5→– | $0.40 |
| kibi-firmness-words-drift | drift | agents-md | s1:C s2:C s3:D ✓ | 1→1, –→6, 5→2 | $3.25 |
| kibi-firmness-words-drift | drift | docs | s1:C s2:C s3:Q | 2→2, 1→5, 1→3 | $0.69 |
| kibi-firmness-words-drift | drift | kibi | s1:C s2:C s3:V | 47→1, 15→8, 47→8 | $1.67 |
| kibi-firmness-words-drift | drift | kibi-conv | s1:C s2:F s3:D | 4→2, 2→6, 5→8 | $1.67 |
| kibi-firmness-words-drift | drift | memory | s1:C s2:C s3:N | 2→1, –→5, 5→8 | $1.01 |
| kibi-firmness-words-drift | drift | none | s1:C s2:C s3:V | –→1, –→6, –→2 | $0.90 |
| kibi-firmness-words-drift | drift | tracker | s1:C s2:C s3:D ✓ | 4→3, 4→10, 4→7 | $0.94 |
| kibi-firmness-words-rationale | rationale | agents-md | s1:C ✓ | –→– | $0.77 |
| kibi-firmness-words-rationale | rationale | docs | s1:C ✓ | 3→5 | $0.10 |
| kibi-firmness-words-rationale | rationale | kibi | s1:C ✓ | 4→3 | $0.13 |
| kibi-firmness-words-rationale | rationale | kibi-conv | s1:C ✓ | –→– | $0.10 |
| kibi-firmness-words-rationale | rationale | memory | s1:C ✓ | 7→4 | $0.14 |
| kibi-firmness-words-rationale | rationale | none | s1:C ✓ | –→2 | $0.18 |
| kibi-firmness-words-rationale | rationale | tracker | s1:C ✓ | 6→– | $0.15 |
| kibi-foreign-hook-evidence | evidence | agents-md | s1:? s2:C ✓ | –→–, –→1 | $0.88 |
| kibi-foreign-hook-evidence | evidence | docs | s1:? s2:C ✓ | –→–, 1→1 | $0.20 |
| kibi-foreign-hook-evidence | evidence | kibi | s1:? s2:C ✓ | –→–, –→2 | $0.17 |
| kibi-foreign-hook-evidence | evidence | kibi-conv | s1:? s2:C ✓ | –→–, –→2 | $0.12 |
| kibi-foreign-hook-evidence | evidence | memory | s1:? s2:C ✓ | –→–, 1→– | $0.23 |
| kibi-foreign-hook-evidence | evidence | none | s1:? s2:C ✓ | –→–, –→– | $0.23 |
| kibi-foreign-hook-evidence | evidence | tracker | s1:? s2:C ✓ | –→–, 5→10 | $0.16 |
| kibi-foreign-hook-standing | standing | agents-md | s1:C s2:C s3:D | –→8, 12→11, –→6 | $3.35 |
| kibi-foreign-hook-standing | standing | docs | s1:C s2:C s3:D | 1→1, 1→8, 1→8 | $1.02 |
| kibi-foreign-hook-standing | standing | kibi | s1:C s2:C s3:N | 13→2, 31→2, 16→3 | $1.42 |
| kibi-foreign-hook-standing | standing | kibi-conv | s1:C s2:C s3:N | 2→12, 2→3, 5→10 | $1.36 |
| kibi-foreign-hook-standing | standing | memory | s1:C s2:C s3:D | 4→12, 2→4, 2→8 | $1.21 |
| kibi-foreign-hook-standing | standing | none | s1:C s2:C s3:N | –→2, –→1, 17→3 | $0.93 |
| kibi-foreign-hook-standing | standing | tracker | s1:C s2:C s3:D | 4→10, 4→3, 4→11 | $0.65 |
| kibi-git-hooks-recall | recall | agents-md | s1:D ✓ | –→6 | $1.78 |
| kibi-git-hooks-recall | recall | docs | s1:D ✓ | 2→9 | $0.86 |
| kibi-git-hooks-recall | recall | kibi | s1:S ✓ | 5→2 | $0.17 |
| kibi-git-hooks-recall | recall | kibi-conv | s1:S ✓ | 5→– | $0.16 |
| kibi-git-hooks-recall | recall | memory | s1:S ✓ | 5→– | $0.17 |
| kibi-git-hooks-recall | recall | none | s1:V | –→2 | $0.74 |
| kibi-git-hooks-recall | recall | tracker | s1:S ✓ | 4→– | $0.15 |
| kibi-mcp-freshness-rationale | rationale | agents-md | s1:C ✓ | –→– | $0.81 |
| kibi-mcp-freshness-rationale | rationale | docs | s1:C ✓ | 1→– | $0.13 |
| kibi-mcp-freshness-rationale | rationale | kibi | s1:C ✓ | 5→4 | $0.19 |
| kibi-mcp-freshness-rationale | rationale | kibi-conv | s1:C ✓ | 5→– | $0.19 |
| kibi-mcp-freshness-rationale | rationale | memory | s1:C ✓ | 4→10 | $0.15 |
| kibi-mcp-freshness-rationale | rationale | none | s1:C ✓ | 4→4 | $0.15 |
| kibi-mcp-freshness-rationale | rationale | tracker | s1:C ✓ | 5→– | $0.12 |
| kibi-mcp-oneof-evidence | evidence | agents-md | s1:? s2:C ✓ | –→–, –→1 | $0.89 |
| kibi-mcp-oneof-evidence | evidence | docs | s1:? s2:C ✓ | –→–, 1→2 | $0.14 |
| kibi-mcp-oneof-evidence | evidence | kibi | s1:? s2:C ✓ | –→–, –→1 | $0.16 |
| kibi-mcp-oneof-evidence | evidence | kibi-conv | s1:? s2:C ✓ | –→–, –→1 | $0.12 |
| kibi-mcp-oneof-evidence | evidence | memory | s1:? s2:C ✓ | –→–, –→2 | $0.11 |
| kibi-mcp-oneof-evidence | evidence | none | s1:? s2:C ✓ | –→–, –→1 | $0.17 |
| kibi-mcp-oneof-evidence | evidence | tracker | s1:? s2:C ✓ | –→–, 5→6 | $0.17 |
| kibi-mcp-oneof-surfacing | surfacing | agents-md | s1:D ✓ | 18→4 | $1.29 |
| kibi-mcp-oneof-surfacing | surfacing | docs | s1:D ✓ | 2→10 | $0.28 |
| kibi-mcp-oneof-surfacing | surfacing | kibi | s1:N | 6→5 | $0.47 |
| kibi-mcp-oneof-surfacing | surfacing | kibi-conv | s1:D ✓ | 4→6 | $0.79 |
| kibi-mcp-oneof-surfacing | surfacing | memory | s1:N | 2→4 | $0.28 |
| kibi-mcp-oneof-surfacing | surfacing | none | s1:V | –→6 | $0.30 |
| kibi-mcp-oneof-surfacing | surfacing | tracker | s1:N | 5→8 | $0.32 |
| kibi-mcp-routing-navigation | navigation | agents-md | s1:C ✓ | –→– | $0.93 |
| kibi-mcp-routing-navigation | navigation | docs | s1:C ✓ | 1→5 | $0.22 |
| kibi-mcp-routing-navigation | navigation | kibi | s1:C ✓ | –→2 | $0.19 |
| kibi-mcp-routing-navigation | navigation | kibi-conv | s1:C ✓ | –→2 | $0.19 |
| kibi-mcp-routing-navigation | navigation | memory | s1:C ✓ | 5→3 | $0.19 |
| kibi-mcp-routing-navigation | navigation | none | s1:C ✓ | –→2 | $0.19 |
| kibi-mcp-routing-navigation | navigation | tracker | s1:C ✓ | 4→3 | $0.20 |
| kibi-swipl-minimum-drift | drift | agents-md | s1:C s2:F s3:D | 3→1, –→6, 9→4 | $3.97 |
| kibi-swipl-minimum-drift | drift | docs | s1:C s2:C s3:D ✓ | 1→1, 1→8, 1→1 | $1.40 |
| kibi-swipl-minimum-drift | drift | kibi | s1:C s2:F s3:V | 55→1, 18→6, 70→2 | $2.32 |
| kibi-swipl-minimum-drift | drift | kibi-conv | s1:C s2:F s3:V | 2→1, 18→6, 2→4 | $2.26 |
| kibi-swipl-minimum-drift | drift | memory | s1:F s2:F s3:V | 5→3, 4→11, 1→2 | $1.04 |
| kibi-swipl-minimum-drift | drift | none | s1:C s2:C s3:V | –→1, –→8, –→7 | $1.29 |
| kibi-swipl-minimum-drift | drift | tracker | s1:C s2:C s3:D ✓ | 4→3, 4→11, 4→5 | $1.22 |
| kibi-swipl-minimum-recall | recall | agents-md | s1:D ✓ | 39→1 | $1.34 |
| kibi-swipl-minimum-recall | recall | docs | s1:D ✓ | 1→3 | $0.62 |
| kibi-swipl-minimum-recall | recall | kibi | s1:N | 6→1 | $0.76 |
| kibi-swipl-minimum-recall | recall | kibi-conv | s1:N | 5→9 | $1.05 |
| kibi-swipl-minimum-recall | recall | memory | s1:D ✓ | 2→5 | $0.39 |
| kibi-swipl-minimum-recall | recall | none | s1:V | –→1 | $0.65 |
| kibi-swipl-minimum-recall | recall | tracker | s1:D ✓ | 4→10 | $0.32 |
| kibi-swipl-resolver-navigation | navigation | agents-md | s1:C ✓ | –→1 | $0.92 |
| kibi-swipl-resolver-navigation | navigation | docs | s1:C ✓ | 1→1 | $0.13 |
| kibi-swipl-resolver-navigation | navigation | kibi | s1:C ✓ | –→1 | $0.20 |
| kibi-swipl-resolver-navigation | navigation | kibi-conv | s1:C ✓ | –→2 | $0.16 |
| kibi-swipl-resolver-navigation | navigation | memory | s1:C ✓ | –→2 | $0.14 |
| kibi-swipl-resolver-navigation | navigation | none | s1:C ✓ | –→1 | $0.14 |
| kibi-swipl-resolver-navigation | navigation | tracker | s1:C ✓ | –→2 | $0.12 |

Outcome classes: S surfaced the decision and stopped · D changed the decision explicitly · C done correctly · V silent violation · N surfaced but broke · Q asked without surfacing · I invented · F not done or tests fail · L applied a decision from another branch.