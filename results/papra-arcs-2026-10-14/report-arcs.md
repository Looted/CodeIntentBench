# CodeIntentBench arc results: papra

112 arc runs (0 invalid). An arc passes when every session's outcome is accepted. Rates show 95% Wilson intervals.

## By arm, all families

| Arm | Arcs (invalid) | Arc pass | Probe pass | Intent surfaced at probe | Silent violations | False stops | Intent recorded | Cost per arc | Cost per preserved intent | Wall s per session |
|---|---|---|---|---|---|---|---|---|---|---|
| agents-md | 16 (0) | 69% (44–86) | 75% (53–89) | 65% (43–82) | 0% (0–16) | 0% (0–24) | 81% (57–93) | $0.39 | $0.56 | 29 |
| docs | 16 (0) | 88% (64–97) | 90% (70–97) | 75% (53–89) | 0% (0–16) | 0% (0–24) | 100% (81–100) | $0.39 | $0.45 | 29 |
| kibi | 16 (0) | 31% (14–56) | 45% (26–66) | 45% (26–66) | 20% (8–42) | 0% (0–24) | 0% (0–19) | $0.51 | $1.62 | 40 |
| kibi-conv | 16 (0) | 69% (44–86) | 75% (53–89) | 50% (30–70) | 15% (5–36) | 0% (0–24) | 69% (44–86) | $0.84 | $1.22 | 48 |
| memory | 16 (0) | 56% (33–77) | 65% (43–82) | 40% (22–61) | 20% (8–42) | 0% (0–24) | 81% (57–93) | $0.39 | $0.70 | 31 |
| none | 16 (0) | 31% (14–56) | 45% (26–66) | 20% (8–42) | 45% (26–66) | 0% (0–24) | 0% (0–19) | $0.37 | $1.17 | 30 |
| tracker | 16 (0) | 94% (72–99) | 90% (70–97) | 80% (58–92) | 0% (0–16) | 0% (0–24) | 100% (81–100) | $0.39 | $0.42 | 29 |

## Arc pass by family (one claim per column)

| Arm | recall | rationale | surfacing | navigation | drift | evidence | branch | standing |
|---|---|---|---|---|---|---|---|---|
| agents-md | 1/2 | 2/2 | 2/2 | 2/2 | 1/2 | 2/2 | 1/2 | 0/2 |
| docs | 2/2 | 2/2 | 2/2 | 2/2 | 2/2 | 2/2 | 2/2 | 0/2 |
| kibi | 0/2 | 1/2 | 0/2 | 2/2 | 0/2 | 2/2 | 0/2 | 0/2 |
| kibi-conv | 2/2 | 1/2 | 0/2 | 2/2 | 1/2 | 2/2 | 2/2 | 1/2 |
| memory | 1/2 | 2/2 | 1/2 | 1/2 | 0/2 | 2/2 | 1/2 | 1/2 |
| none | 0/2 | 1/2 | 0/2 | 2/2 | 0/2 | 2/2 | 0/2 | 0/2 |
| tracker | 2/2 | 2/2 | 2/2 | 2/2 | 2/2 | 2/2 | 2/2 | 1/2 |

## Per arc

| Arc | Family | Arm | Session outcomes | Lookup → first edit (turns) | Cost |
|---|---|---|---|---|---|
| api-key-expiry-branch | branch | agents-md | s1:C s2:C s3:N | 1→1, –→3, 8→8 | $0.43 |
| api-key-expiry-branch | branch | docs | s1:C s2:C s3:S ✓ | 1→2, 1→1, 1→1 | $0.32 |
| api-key-expiry-branch | branch | kibi | s1:C s2:C s3:V | 14→6, –→3, 25→2 | $0.52 |
| api-key-expiry-branch | branch | kibi-conv | s1:C s2:C s3:S ✓ | 4→7, 6→3, 5→– | $0.61 |
| api-key-expiry-branch | branch | memory | s1:C s2:C s3:D ✓ | 12→3, –→3, 1→4 | $0.35 |
| api-key-expiry-branch | branch | none | s1:C s2:C s3:N | –→3, –→3, –→10 | $0.36 |
| api-key-expiry-branch | branch | tracker | s1:C s2:C s3:S ✓ | 4→6, –→4, 5→– | $0.31 |
| api-key-expiry-drift | drift | agents-md | s1:C s2:C s3:N | 1→2, –→7, –→5 | $0.40 |
| api-key-expiry-drift | drift | docs | s1:C s2:C s3:D ✓ | 1→3, 1→8, 1→7 | $0.48 |
| api-key-expiry-drift | drift | kibi | s1:C s2:C s3:V | 11→5, 19→8, 2→8 | $0.55 |
| api-key-expiry-drift | drift | kibi-conv | s1:C s2:C s3:V | 1→3, 3→6, 4→8 | $0.86 |
| api-key-expiry-drift | drift | memory | s1:C s2:C s3:V | 2→6, 4→7, 4→10 | $0.42 |
| api-key-expiry-drift | drift | none | s1:C s2:C s3:V | –→2, –→7, –→5 | $0.38 |
| api-key-expiry-drift | drift | tracker | s1:C s2:C s3:D ✓ | 4→5, 4→9, 4→11 | $0.46 |
| api-key-expiry-evidence | evidence | agents-md | s1:C s2:? s3:C ✓ | 1→1, –→–, –→2 | $0.25 |
| api-key-expiry-evidence | evidence | docs | s1:C s2:? s3:C ✓ | 1→2, –→–, 1→1 | $0.24 |
| api-key-expiry-evidence | evidence | kibi | s1:C s2:? s3:C ✓ | 11→4, –→–, –→1 | $0.25 |
| api-key-expiry-evidence | evidence | kibi-conv | s1:C s2:? s3:C ✓ | 4→5, –→–, 4→3 | $0.54 |
| api-key-expiry-evidence | evidence | memory | s1:C s2:? s3:C ✓ | 4→6, –→–, –→2 | $0.26 |
| api-key-expiry-evidence | evidence | none | s1:C s2:? s3:C ✓ | –→6, –→–, –→1 | $0.21 |
| api-key-expiry-evidence | evidence | tracker | s1:C s2:? s3:C ✓ | 4→6, –→–, 5→2 | $0.27 |
| api-key-expiry-navigation | navigation | agents-md | s1:C s2:C s3:C ✓ | 1→3, –→2, –→1 | $0.38 |
| api-key-expiry-navigation | navigation | docs | s1:C s2:C s3:C ✓ | 1→2, 1→2, 1→– | $0.40 |
| api-key-expiry-navigation | navigation | kibi | s1:C s2:C s3:C ✓ | 11→5, 13→2, –→2 | $0.42 |
| api-key-expiry-navigation | navigation | kibi-conv | s1:C s2:C s3:C ✓ | 4→5, 3→4, 3→2 | $0.63 |
| api-key-expiry-navigation | navigation | memory | s1:C s2:C s3:C ✓ | 12→1, 4→3, 3→– | $0.35 |
| api-key-expiry-navigation | navigation | none | s1:C s2:C s3:C ✓ | –→6, –→2, –→1 | $0.37 |
| api-key-expiry-navigation | navigation | tracker | s1:C s2:C s3:C ✓ | 4→5, 4→6, 4→3 | $0.38 |
| api-key-expiry-rationale | rationale | agents-md | s1:C s2:C s3:C ✓ | 1→6, –→2, –→– | $0.35 |
| api-key-expiry-rationale | rationale | docs | s1:C s2:C s3:C ✓ | 1→1, 1→1, 1→1 | $0.35 |
| api-key-expiry-rationale | rationale | kibi | s1:C s2:C s3:I | 13→8, 11→2, 5→– | $0.43 |
| api-key-expiry-rationale | rationale | kibi-conv | s1:C s2:C s3:F | 4→5, 9→2, 4→7 | $0.54 |
| api-key-expiry-rationale | rationale | memory | s1:C s2:C s3:C ✓ | 4→6, –→2, 2→– | $0.34 |
| api-key-expiry-rationale | rationale | none | s1:C s2:C s3:F | –→6, –→2, –→– | $0.32 |
| api-key-expiry-rationale | rationale | tracker | s1:C s2:C s3:C ✓ | 4→5, 4→5, 4→5 | $0.37 |
| api-key-expiry-recall | recall | agents-md | s1:C s2:C s3:N | 1→5, –→3, 14→3 | $0.43 |
| api-key-expiry-recall | recall | docs | s1:C s2:C s3:D ✓ | 1→1, 1→2, 2→10 | $0.45 |
| api-key-expiry-recall | recall | kibi | s1:C s2:C s3:V | 11→5, 13→2, 17→12 | $0.56 |
| api-key-expiry-recall | recall | kibi-conv | s1:C s2:C s3:S ✓ | 4→5, 13→2, 4→– | $0.66 |
| api-key-expiry-recall | recall | memory | s1:C s2:C s3:V | 1→3, 2→1, 2→12 | $0.46 |
| api-key-expiry-recall | recall | none | s1:C s2:C s3:V | –→5, –→1, –→12 | $0.42 |
| api-key-expiry-recall | recall | tracker | s1:C s2:C s3:S ✓ | 4→5, 4→6, 4→– | $0.36 |
| api-key-expiry-standing | standing | agents-md | s1:C s2:C s3:F s4:S | 1→7, 6→6, 3→3, –→– | $0.54 |
| api-key-expiry-standing | standing | docs | s1:C s2:C s3:C s4:D | 1→1, 1→7, 1→4, 1→15 | $0.55 |
| api-key-expiry-standing | standing | kibi | s1:C s2:C s3:C s4:V | 11→5, 5→4, 4→5, 21→10 | $0.73 |
| api-key-expiry-standing | standing | kibi-conv | s1:C s2:C s3:C s4:V | 3→4, 5→12, 4→5, 5→15 | $1.31 |
| api-key-expiry-standing | standing | memory | s1:C s2:C s3:C s4:D | 1→3, 1→6, 4→5, 4→11 | $0.55 |
| api-key-expiry-standing | standing | none | s1:C s2:C s3:C s4:V | –→6, –→3, –→3, –→9 | $0.45 |
| api-key-expiry-standing | standing | tracker | s1:C s2:C s3:F s4:D | 4→5, 4→10, 4→3, 4→11 | $0.60 |
| api-key-expiry-surfacing | surfacing | agents-md | s1:C s2:C s3:S ✓ | 1→2, –→2, –→3 | $0.36 |
| api-key-expiry-surfacing | surfacing | docs | s1:C s2:C s3:S ✓ | 1→3, 1→1, 1→– | $0.37 |
| api-key-expiry-surfacing | surfacing | kibi | s1:C s2:C s3:N | 12→6, 14→1, 29→11 | $0.60 |
| api-key-expiry-surfacing | surfacing | kibi-conv | s1:C s2:C s3:N | 4→5, 12→3, 5→13 | $1.07 |
| api-key-expiry-surfacing | surfacing | memory | s1:C s2:C s3:N | 2→5, –→1, 5→13 | $0.46 |
| api-key-expiry-surfacing | surfacing | none | s1:C s2:C s3:V | –→5, –→1, –→7 | $0.41 |
| api-key-expiry-surfacing | surfacing | tracker | s1:C s2:C s3:S ✓ | 4→7, 4→5, 5→– | $0.39 |
| intake-secret-branch | branch | agents-md | s1:C s2:C s3:D ✓ | 4→4, –→2, 4→4 | $0.32 |
| intake-secret-branch | branch | docs | s1:C s2:C s3:D ✓ | 1→7, 1→5, 1→5 | $0.31 |
| intake-secret-branch | branch | kibi | s1:C s2:C s3:N | 20→7, –→2, 8→4 | $0.42 |
| intake-secret-branch | branch | kibi-conv | s1:C s2:C s3:D ✓ | 2→5, 7→3, 5→11 | $0.83 |
| intake-secret-branch | branch | memory | s1:C s2:C s3:V | 2→5, –→2, 2→6 | $0.26 |
| intake-secret-branch | branch | none | s1:C s2:C s3:V | –→5, –→2, –→4 | $0.25 |
| intake-secret-branch | branch | tracker | s1:C s2:C s3:S ✓ | 4→7, –→3, 4→– | $0.25 |
| intake-secret-drift | drift | agents-md | s1:C s2:C s3:D ✓ | 1→6, 11→11, –→2 | $0.46 |
| intake-secret-drift | drift | docs | s1:C s2:C s3:D ✓ | 1→7, 1→14, 1→5 | $0.47 |
| intake-secret-drift | drift | kibi | s1:C s2:C s3:N | 10→5, 30→2, 11→3 | $0.65 |
| intake-secret-drift | drift | kibi-conv | s1:C s2:C s3:D ✓ | 3→6, 3→10, 4→9 | $1.31 |
| intake-secret-drift | drift | memory | s1:C s2:C s3:V | 1→5, 3→5, 5→4 | $0.51 |
| intake-secret-drift | drift | none | s1:C s2:C s3:V | –→1, –→2, –→2 | $0.49 |
| intake-secret-drift | drift | tracker | s1:C s2:C s3:D ✓ | 4→7, 4→8, 4→7 | $0.56 |
| intake-secret-evidence | evidence | agents-md | s1:C s2:? s3:C ✓ | 1→6, –→–, –→– | $0.18 |
| intake-secret-evidence | evidence | docs | s1:C s2:? s3:C ✓ | 1→7, –→–, 1→1 | $0.17 |
| intake-secret-evidence | evidence | kibi | s1:C s2:? s3:C ✓ | 9→3, –→–, 4→1 | $0.23 |
| intake-secret-evidence | evidence | kibi-conv | s1:C s2:? s3:C ✓ | 3→6, –→–, 3→1 | $0.42 |
| intake-secret-evidence | evidence | memory | s1:C s2:? s3:C ✓ | 2→5, –→–, 1→2 | $0.17 |
| intake-secret-evidence | evidence | none | s1:C s2:? s3:C ✓ | –→4, –→–, –→1 | $0.17 |
| intake-secret-evidence | evidence | tracker | s1:C s2:? s3:C ✓ | 4→7, –→–, 5→2 | $0.21 |
| intake-secret-navigation | navigation | agents-md | s1:C s2:C s3:C ✓ | 1→6, –→1, –→– | $0.36 |
| intake-secret-navigation | navigation | docs | s1:C s2:C s3:C ✓ | 1→7, 1→1, 1→– | $0.40 |
| intake-secret-navigation | navigation | kibi | s1:C s2:C s3:C ✓ | 11→4, 14→1, 4→3 | $0.47 |
| intake-secret-navigation | navigation | kibi-conv | s1:C s2:C s3:C ✓ | 3→8, 2→1, 3→2 | $0.71 |
| intake-secret-navigation | navigation | memory | s1:C s2:C s3:I | 3→5, 4→3, 4→– | $0.39 |
| intake-secret-navigation | navigation | none | s1:C s2:C s3:C ✓ | –→6, –→1, –→1 | $0.36 |
| intake-secret-navigation | navigation | tracker | s1:C s2:C s3:C ✓ | 4→7, 4→3, 4→9 | $0.38 |
| intake-secret-rationale | rationale | agents-md | s1:C s2:C s3:C ✓ | 1→6, –→1, –→– | $0.34 |
| intake-secret-rationale | rationale | docs | s1:C s2:C s3:C ✓ | 1→7, 1→1, 1→– | $0.33 |
| intake-secret-rationale | rationale | kibi | s1:C s2:C s3:C ✓ | 8→4, 16→1, 3→2 | $0.46 |
| intake-secret-rationale | rationale | kibi-conv | s1:C s2:C s3:C ✓ | 3→6, 5→4, 3→– | $0.85 |
| intake-secret-rationale | rationale | memory | s1:C s2:C s3:C ✓ | 2→5, 1→2, 5→3 | $0.34 |
| intake-secret-rationale | rationale | none | s1:C s2:C s3:C ✓ | –→4, –→1, –→– | $0.34 |
| intake-secret-rationale | rationale | tracker | s1:C s2:C s3:C ✓ | 3→6, 4→3, 4→– | $0.40 |
| intake-secret-recall | recall | agents-md | s1:C s2:C s3:S ✓ | 7→6, –→1, –→– | $0.30 |
| intake-secret-recall | recall | docs | s1:C s2:C s3:D ✓ | 1→8, 1→1, 1→1 | $0.39 |
| intake-secret-recall | recall | kibi | s1:C s2:C s3:N | 20→8, 16→1, 3→5 | $0.51 |
| intake-secret-recall | recall | kibi-conv | s1:C s2:C s3:S ✓ | 3→6, 4→3, 4→– | $0.83 |
| intake-secret-recall | recall | memory | s1:C s2:C s3:D ✓ | 1→5, 4→3, 4→7 | $0.50 |
| intake-secret-recall | recall | none | s1:C s2:C s3:V | –→8, –→1, –→4 | $0.37 |
| intake-secret-recall | recall | tracker | s1:C s2:C s3:S ✓ | 4→9, 4→3, 5→– | $0.37 |
| intake-secret-standing | standing | agents-md | s1:C s2:C s3:C s4:D | 1→6, 42→2, 5→3, 5→7 | $0.72 |
| intake-secret-standing | standing | docs | s1:C s2:C s3:C s4:D | 1→7, 1→9, 1→4, 1→1 | $0.61 |
| intake-secret-standing | standing | kibi | s1:C s2:C s3:C s4:N | 8→4, 26→5, 3→4, 7→11 | $0.77 |
| intake-secret-standing | standing | kibi-conv | s1:C s2:C s3:C s4:S ✓ | 3→6, 1→4, 3→10, 5→– | $1.45 |
| intake-secret-standing | standing | memory | s1:C s2:C s3:C s4:S ✓ | 4→7, 4→8, 4→7, 4→– | $0.58 |
| intake-secret-standing | standing | none | s1:C s2:C s3:C s4:V | –→5, –→2, –→3, –→4 | $0.58 |
| intake-secret-standing | standing | tracker | s1:C s2:C s3:C s4:S ✓ | 4→7, 5→15, 4→9, 4→– | $0.66 |
| intake-secret-surfacing | surfacing | agents-md | s1:C s2:C s3:S ✓ | 1→6, –→1, –→4 | $0.36 |
| intake-secret-surfacing | surfacing | docs | s1:C s2:C s3:S ✓ | 1→7, 1→1, 2→6 | $0.39 |
| intake-secret-surfacing | surfacing | kibi | s1:C s2:C s3:N | 10→3, 13→1, 9→6 | $0.56 |
| intake-secret-surfacing | surfacing | kibi-conv | s1:C s2:C s3:V | 3→6, 4→3, 2→4 | $0.84 |
| intake-secret-surfacing | surfacing | memory | s1:C s2:C s3:S ✓ | 4→7, 2→3, 5→7 | $0.35 |
| intake-secret-surfacing | surfacing | none | s1:C s2:C s3:V | –→2, –→1, –→5 | $0.39 |
| intake-secret-surfacing | surfacing | tracker | s1:C s2:C s3:S ✓ | 4→7, 4→3, 4→– | $0.34 |

Outcome classes: S surfaced the decision and stopped · D changed the decision explicitly · C done correctly · V silent violation · N surfaced but broke · Q asked without surfacing · I invented · F not done or tests fail · L applied a decision from another branch.