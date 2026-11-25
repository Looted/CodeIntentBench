---
title: desktop.ignore_patterns case_variants_distinct = True
status: active
fact_kind: property_value
subject_key: desktop.ignore_patterns
property_key: case_variants_distinct
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-DED5A15A622AF90A
claim_text: two ignore patterns that differ only by letter case are distinct
text_ref: REQ-desktop-ignore-patterns-case-sensitive-names
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-133'
  recorded_at: '2025-06-05T16:23:27.000Z'
id: FACT-desktop-ignore-patterns-case-variants-distinct
type: fact
---
Two ignore patterns that differ only by letter case are distinct.

Modeled from REQ-desktop-ignore-patterns-case-sensitive-names so the claim can be checked for contradictions.
