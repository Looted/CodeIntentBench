# CodeIntentBench arc results: papra

112 arc runs (0 invalid). An arc passes when every session's outcome is accepted. Rates show 95% Wilson intervals.

## By arm, all families

| Arm | Arcs (invalid) | Arc pass | Probe pass | Intent surfaced at probe | Silent violations | False stops | Intent recorded | Cost per arc | Cost per preserved intent | Wall s per session |
|---|---|---|---|---|---|---|---|---|---|---|
| agents-md | 16 (0) | 75% (51–90) | 80% (58–92) | 75% (53–89) | 0% (0–16) | 0% (0–24) | 50% (28–72) | $0.50 | $0.67 | 33 |
| docs | 16 (0) | 88% (64–97) | 90% (70–97) | 75% (53–89) | 0% (0–16) | 0% (0–24) | 100% (81–100) | $0.48 | $0.54 | 38 |
| kibi | 16 (0) | 38% (18–61) | 50% (30–70) | 35% (18–57) | 35% (18–57) | 0% (0–24) | 0% (0–19) | $0.63 | $1.68 | 56 |
| kibi-conv | 16 (0) | 88% (64–97) | 95% (76–99) | 80% (58–92) | 0% (0–16) | 0% (0–24) | 94% (72–99) | $0.90 | $1.03 | 60 |
| memory | 16 (0) | 75% (51–90) | 80% (58–92) | 70% (48–85) | 5% (1–24) | 0% (0–24) | 100% (81–100) | $0.43 | $0.58 | 36 |
| none | 16 (0) | 25% (10–49) | 45% (26–66) | 25% (11–47) | 40% (22–61) | 0% (0–24) | 0% (0–19) | $0.39 | $1.57 | 34 |
| tracker | 16 (0) | 88% (64–97) | 90% (70–97) | 80% (58–92) | 0% (0–16) | 0% (0–24) | 100% (81–100) | $0.40 | $0.45 | 32 |

## Arc pass by family (one claim per column)

| Arm | recall | rationale | surfacing | navigation | drift | evidence | branch | standing |
|---|---|---|---|---|---|---|---|---|
| agents-md | 2/2 | 2/2 | 2/2 | 2/2 | 1/2 | 2/2 | 1/2 | 0/2 |
| docs | 2/2 | 2/2 | 2/2 | 2/2 | 2/2 | 2/2 | 2/2 | 0/2 |
| kibi | 0/2 | 1/2 | 1/2 | 2/2 | 0/2 | 2/2 | 0/2 | 0/2 |
| kibi-conv | 2/2 | 2/2 | 1/2 | 2/2 | 1/2 | 2/2 | 2/2 | 2/2 |
| memory | 2/2 | 2/2 | 2/2 | 1/2 | 1/2 | 2/2 | 1/2 | 1/2 |
| none | 0/2 | 0/2 | 0/2 | 2/2 | 0/2 | 2/2 | 0/2 | 0/2 |
| tracker | 2/2 | 2/2 | 2/2 | 2/2 | 2/2 | 2/2 | 1/2 | 1/2 |

## Per arc

| Arc | Family | Arm | Session outcomes | Lookup → first edit (turns) | Cost |
|---|---|---|---|---|---|
| api-key-expiry-branch | branch | agents-md | s1:C s2:C s3:N | –→5, –→4, –→7 | $0.51 |
| api-key-expiry-branch | branch | docs | s1:C s2:C s3:S ✓ | 1→4, 1→1, 1→– | $0.33 |
| api-key-expiry-branch | branch | kibi | s1:C s2:C s3:V | 12→2, 7→3, 4→6 | $0.68 |
| api-key-expiry-branch | branch | kibi-conv | s1:C s2:C s3:S ✓ | 3→7, –→3, 5→– | $0.65 |
| api-key-expiry-branch | branch | memory | s1:C s2:C s3:D ✓ | 4→6, 2→5, 4→11 | $0.41 |
| api-key-expiry-branch | branch | none | s1:C s2:C s3:V | –→1, –→3, –→12 | $0.40 |
| api-key-expiry-branch | branch | tracker | s1:C s2:C s3:D ✓ | 4→7, –→3, 4→12 | $0.38 |
| api-key-expiry-drift | drift | agents-md | s1:C s2:C s3:N | 10→2, –→5, 6→6 | $0.62 |
| api-key-expiry-drift | drift | docs | s1:C s2:C s3:D ✓ | 1→7, 1→2, 1→3 | $0.56 |
| api-key-expiry-drift | drift | kibi | s1:C s2:C s3:V | 12→6, 3→10, 2→11 | $0.70 |
| api-key-expiry-drift | drift | kibi-conv | s1:C s2:C s3:D ✓ | 3→5, 3→8, 4→12 | $1.04 |
| api-key-expiry-drift | drift | memory | s1:C s2:C s3:N | 4→5, 4→8, 4→11 | $0.47 |
| api-key-expiry-drift | drift | none | s1:C s2:C s3:V | –→1, –→8, –→11 | $0.41 |
| api-key-expiry-drift | drift | tracker | s1:C s2:C s3:D ✓ | 4→11, 4→12, 4→11 | $0.49 |
| api-key-expiry-evidence | evidence | agents-md | s1:C s2:? s3:C ✓ | –→6, –→–, –→3 | $0.33 |
| api-key-expiry-evidence | evidence | docs | s1:C s2:? s3:C ✓ | 1→2, –→–, 1→1 | $0.30 |
| api-key-expiry-evidence | evidence | kibi | s1:C s2:? s3:C ✓ | 11→6, –→–, –→1 | $0.28 |
| api-key-expiry-evidence | evidence | kibi-conv | s1:C s2:? s3:C ✓ | 4→5, –→–, 4→– | $0.43 |
| api-key-expiry-evidence | evidence | memory | s1:C s2:? s3:C ✓ | 4→14, –→–, 4→3 | $0.27 |
| api-key-expiry-evidence | evidence | none | s1:C s2:? s3:C ✓ | –→5, –→–, –→– | $0.25 |
| api-key-expiry-evidence | evidence | tracker | s1:C s2:? s3:C ✓ | 4→5, –→–, 5→– | $0.25 |
| api-key-expiry-navigation | navigation | agents-md | s1:C s2:C s3:C ✓ | 11→5, –→2, –→2 | $0.50 |
| api-key-expiry-navigation | navigation | docs | s1:C s2:C s3:C ✓ | 1→5, 1→4, 1→1 | $0.44 |
| api-key-expiry-navigation | navigation | kibi | s1:C s2:C s3:C ✓ | 3→2, 15→1, 5→3 | $0.54 |
| api-key-expiry-navigation | navigation | kibi-conv | s1:C s2:C s3:C ✓ | 4→5, 17→4, 1→– | $0.73 |
| api-key-expiry-navigation | navigation | memory | s1:F s2:C s3:C | 4→5, 2→3, 4→– | $0.42 |
| api-key-expiry-navigation | navigation | none | s1:C s2:C s3:C ✓ | –→1, –→2, –→– | $0.36 |
| api-key-expiry-navigation | navigation | tracker | s1:C s2:C s3:C ✓ | 4→15, –→2, 4→– | $0.42 |
| api-key-expiry-rationale | rationale | agents-md | s1:C s2:C s3:C ✓ | 11→2, –→1, –→– | $0.48 |
| api-key-expiry-rationale | rationale | docs | s1:C s2:C s3:C ✓ | 1→4, 1→1, 1→1 | $0.40 |
| api-key-expiry-rationale | rationale | kibi | s1:C s2:C s3:F | 6→9, 13→1, 4→– | $0.56 |
| api-key-expiry-rationale | rationale | kibi-conv | s1:C s2:C s3:C ✓ | 4→5, 2→1, 4→– | $0.73 |
| api-key-expiry-rationale | rationale | memory | s1:C s2:C s3:C ✓ | 4→5, –→3, 4→– | $0.37 |
| api-key-expiry-rationale | rationale | none | s1:C s2:C s3:F | –→5, –→3, –→4 | $0.40 |
| api-key-expiry-rationale | rationale | tracker | s1:C s2:C s3:C ✓ | 4→7, 5→8, 4→– | $0.38 |
| api-key-expiry-recall | recall | agents-md | s1:C s2:C s3:S ✓ | –→7, –→2, –→3 | $0.43 |
| api-key-expiry-recall | recall | docs | s1:C s2:C s3:S ✓ | 1→1, 1→1, 1→1 | $0.45 |
| api-key-expiry-recall | recall | kibi | s1:C s2:C s3:V | 5→8, 11→1, 3→4 | $0.67 |
| api-key-expiry-recall | recall | kibi-conv | s1:C s2:C s3:S ✓ | 4→5, 18→2, 5→– | $0.74 |
| api-key-expiry-recall | recall | memory | s1:C s2:C s3:S ✓ | 4→5, –→3, 2→– | $0.39 |
| api-key-expiry-recall | recall | none | s1:C s2:C s3:V | –→2, –→3, –→2 | $0.45 |
| api-key-expiry-recall | recall | tracker | s1:C s2:C s3:S ✓ | 4→7, 4→6, 4→– | $0.40 |
| api-key-expiry-standing | standing | agents-md | s1:C s2:C s3:F s4:S | –→4, 6→6, 3→4, –→3 | $0.73 |
| api-key-expiry-standing | standing | docs | s1:C s2:C s3:F s4:S | 1→9, 1→5, 1→5, 2→2 | $0.65 |
| api-key-expiry-standing | standing | kibi | s1:C s2:C s3:C s4:V | 12→3, 2→4, 6→10, 3→12 | $1.04 |
| api-key-expiry-standing | standing | kibi-conv | s1:C s2:C s3:C s4:S ✓ | 3→6, 3→6, 4→7, 4→– | $1.41 |
| api-key-expiry-standing | standing | memory | s1:C s2:C s3:C s4:S ✓ | 4→7, 4→7, 4→5, 5→– | $0.50 |
| api-key-expiry-standing | standing | none | s1:C s2:C s3:C s4:V | –→2, –→5, –→2, –→2 | $0.54 |
| api-key-expiry-standing | standing | tracker | s1:C s2:C s3:C s4:S ✓ | 4→5, 4→12, 4→7, 4→– | $0.49 |
| api-key-expiry-surfacing | surfacing | agents-md | s1:C s2:C s3:S ✓ | –→6, –→3, –→– | $0.49 |
| api-key-expiry-surfacing | surfacing | docs | s1:C s2:C s3:D ✓ | 1→1, 1→1, 1→9 | $0.62 |
| api-key-expiry-surfacing | surfacing | kibi | s1:C s2:C s3:V | 14→6, 14→2, 5→10 | $0.77 |
| api-key-expiry-surfacing | surfacing | kibi-conv | s1:C s2:F s3:S | 3→4, 14→2, 5→– | $0.74 |
| api-key-expiry-surfacing | surfacing | memory | s1:C s2:C s3:D ✓ | 4→5, –→1, 5→10 | $0.53 |
| api-key-expiry-surfacing | surfacing | none | s1:C s2:C s3:N | –→6, –→2, –→5 | $0.41 |
| api-key-expiry-surfacing | surfacing | tracker | s1:C s2:C s3:S ✓ | 4→5, 4→8, 5→– | $0.42 |
| intake-secret-branch | branch | agents-md | s1:C s2:C s3:D ✓ | 4→2, –→2, 5→5 | $0.40 |
| intake-secret-branch | branch | docs | s1:C s2:C s3:D ✓ | 1→7, 1→1, 1→4 | $0.34 |
| intake-secret-branch | branch | kibi | s1:C s2:C s3:V | 18→5, –→2, 3→9 | $0.48 |
| intake-secret-branch | branch | kibi-conv | s1:C s2:C s3:S ✓ | 4→6, 3→7, 5→– | $0.70 |
| intake-secret-branch | branch | memory | s1:C s2:F s3:V | 1→6, –→3, 4→7 | $0.28 |
| intake-secret-branch | branch | none | s1:C s2:C s3:V | –→4, –→2, –→4 | $0.36 |
| intake-secret-branch | branch | tracker | s1:C s2:F s3:S | 4→8, –→3, 4→– | $0.32 |
| intake-secret-drift | drift | agents-md | s1:C s2:C s3:D ✓ | 8→3, –→4, 2→2 | $0.66 |
| intake-secret-drift | drift | docs | s1:C s2:C s3:D ✓ | 1→1, 1→10, 1→1 | $0.59 |
| intake-secret-drift | drift | kibi | s1:C s2:C s3:V | 3→12, 5→6, 3→6 | $0.65 |
| intake-secret-drift | drift | kibi-conv | s1:C s2:C s3:N | 4→6, 3→13, 4→7 | $1.34 |
| intake-secret-drift | drift | memory | s1:C s2:C s3:D ✓ | 4→9, 4→13, 2→5 | $0.56 |
| intake-secret-drift | drift | none | s1:C s2:C s3:V | –→8, –→9, –→2 | $0.47 |
| intake-secret-drift | drift | tracker | s1:C s2:C s3:D ✓ | 4→9, 4→5, 5→11 | $0.49 |
| intake-secret-evidence | evidence | agents-md | s1:C s2:? s3:C ✓ | –→3, –→–, –→1 | $0.26 |
| intake-secret-evidence | evidence | docs | s1:C s2:? s3:C ✓ | 1→6, –→–, 1→1 | $0.24 |
| intake-secret-evidence | evidence | kibi | s1:C s2:? s3:C ✓ | 18→3, –→–, –→1 | $0.32 |
| intake-secret-evidence | evidence | kibi-conv | s1:C s2:? s3:C ✓ | 3→6, –→–, 2→4 | $0.65 |
| intake-secret-evidence | evidence | memory | s1:C s2:? s3:C ✓ | 2→6, –→–, 2→3 | $0.21 |
| intake-secret-evidence | evidence | none | s1:C s2:? s3:C ✓ | –→5, –→–, –→1 | $0.23 |
| intake-secret-evidence | evidence | tracker | s1:C s2:? s3:C ✓ | 4→11, –→–, 5→2 | $0.25 |
| intake-secret-navigation | navigation | agents-md | s1:C s2:C s3:C ✓ | 5→3, 13→1, –→– | $0.54 |
| intake-secret-navigation | navigation | docs | s1:C s2:C s3:C ✓ | 1→1, 1→1, 1→1 | $0.49 |
| intake-secret-navigation | navigation | kibi | s1:C s2:C s3:C ✓ | 11→6, 17→1, 3→2 | $0.60 |
| intake-secret-navigation | navigation | kibi-conv | s1:C s2:C s3:C ✓ | 3→6, 5→4, 3→2 | $1.18 |
| intake-secret-navigation | navigation | memory | s1:C s2:C s3:C ✓ | 5→8, 4→3, 4→3 | $0.45 |
| intake-secret-navigation | navigation | none | s1:C s2:C s3:C ✓ | –→5, –→1, –→1 | $0.40 |
| intake-secret-navigation | navigation | tracker | s1:C s2:C s3:C ✓ | 4→9, 4→3, 4→– | $0.36 |
| intake-secret-rationale | rationale | agents-md | s1:C s2:C s3:C ✓ | 5→7, 16→1, –→– | $0.46 |
| intake-secret-rationale | rationale | docs | s1:C s2:C s3:C ✓ | 1→6, 1→1, 2→– | $0.45 |
| intake-secret-rationale | rationale | kibi | s1:C s2:C s3:C ✓ | 5→7, 16→1, 5→– | $0.59 |
| intake-secret-rationale | rationale | kibi-conv | s1:C s2:C s3:C ✓ | 3→7, 4→3, 4→3 | $0.86 |
| intake-secret-rationale | rationale | memory | s1:C s2:C s3:C ✓ | 4→7, 4→3, 5→– | $0.38 |
| intake-secret-rationale | rationale | none | s1:C s2:F s3:C | –→3, –→1, –→1 | $0.34 |
| intake-secret-rationale | rationale | tracker | s1:C s2:C s3:C ✓ | 4→9, 4→3, 4→3 | $0.42 |
| intake-secret-recall | recall | agents-md | s1:C s2:C s3:D ✓ | 5→7, 16→1, 4→4 | $0.51 |
| intake-secret-recall | recall | docs | s1:C s2:C s3:D ✓ | 1→11, 1→1, 1→5 | $0.49 |
| intake-secret-recall | recall | kibi | s1:C s2:C s3:N | 14→5, 15→1, 3→5 | $0.65 |
| intake-secret-recall | recall | kibi-conv | s1:C s2:C s3:S ✓ | 3→6, 4→3, 4→– | $0.88 |
| intake-secret-recall | recall | memory | s1:C s2:C s3:S ✓ | 4→7, 2→3, 4→– | $0.38 |
| intake-secret-recall | recall | none | s1:C s2:C s3:V | –→5, –→1, –→5 | $0.34 |
| intake-secret-recall | recall | tracker | s1:C s2:C s3:S ✓ | 4→9, 4→3, 4→– | $0.36 |
| intake-secret-standing | standing | agents-md | s1:C s2:C s3:C s4:D | 4→7, –→2, 1→1, –→2 | $0.68 |
| intake-secret-standing | standing | docs | s1:C s2:C s3:C s4:D | 1→12, 1→1, 1→4, 1→1 | $0.78 |
| intake-secret-standing | standing | kibi | s1:C s2:C s3:C s4:N | 3→5, 28→7, 3→5, 3→5 | $0.97 |
| intake-secret-standing | standing | kibi-conv | s1:C s2:C s3:C s4:S ✓ | 3→6, 3→5, 4→7, 5→– | $1.54 |
| intake-secret-standing | standing | memory | s1:C s2:C s3:C s4:D | 4→7, 4→11, 4→7, 2→5 | $0.86 |
| intake-secret-standing | standing | none | s1:C s2:C s3:C s4:V | –→4, –→12, –→4, –→5 | $0.50 |
| intake-secret-standing | standing | tracker | s1:C s2:C s3:C s4:D | 4→9, 5→12, 4→9, 5→11 | $0.56 |
| intake-secret-surfacing | surfacing | agents-md | s1:C s2:C s3:S ✓ | –→3, 14→1, –→3 | $0.47 |
| intake-secret-surfacing | surfacing | docs | s1:C s2:C s3:S ✓ | 1→6, 1→1, 1→7 | $0.48 |
| intake-secret-surfacing | surfacing | kibi | s1:C s2:C s3:S ✓ | 9→3, 15→1, 3→5 | $0.57 |
| intake-secret-surfacing | surfacing | kibi-conv | s1:C s2:C s3:S ✓ | 3→6, 1→9, 2→5 | $0.76 |
| intake-secret-surfacing | surfacing | memory | s1:C s2:C s3:S ✓ | 4→7, 4→3, 5→7 | $0.43 |
| intake-secret-surfacing | surfacing | none | s1:C s2:C s3:N | –→1, –→1, –→5 | $0.41 |
| intake-secret-surfacing | surfacing | tracker | s1:C s2:C s3:S ✓ | 4→9, 4→3, 4→7 | $0.36 |

Outcome classes: S surfaced the decision and stopped · D changed the decision explicitly · C done correctly · V silent violation · N surfaced but broke · Q asked without surfacing · I invented · F not done or tests fail · L applied a decision from another branch.