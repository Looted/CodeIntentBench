---
title: desktop.ignore_patterns name_uniqueness = exact
status: active
fact_kind: property_value
subject_key: desktop.ignore_patterns
property_key: name_uniqueness
operator: eq
value_type: string
value_string: exact
claim_key: CLAIM-C7569CE3EACE6D50
claim_text: Ignore patterns in the desktop sync client are compared exactly as typed
text_ref: REQ-desktop-ignore-patterns-case-sensitive-names
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-133'
  recorded_at: '2025-06-05T16:23:27.000Z'
id: FACT-desktop-ignore-patterns-name-uniqueness
type: fact
---
Ignore patterns in the desktop sync client are compared exactly as typed.

Modeled from REQ-desktop-ignore-patterns-case-sensitive-names so the claim can be checked for contradictions.
