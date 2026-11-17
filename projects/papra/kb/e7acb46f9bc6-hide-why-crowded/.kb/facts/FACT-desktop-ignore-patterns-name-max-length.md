---
title: desktop.ignore_patterns name_max_length = 100
status: active
fact_kind: property_value
subject_key: desktop.ignore_patterns
property_key: name_max_length
operator: eq
value_type: int
value_int: 100
claim_key: CLAIM-146308EA261AED7F
claim_text: Ignore pattern names in the desktop sync client are limited to 100 characters
text_ref: REQ-desktop-ignore-patterns-name-length
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-146'
  recorded_at: '2026-04-05T16:11:07.000Z'
id: FACT-desktop-ignore-patterns-name-max-length
type: fact
---
Ignore pattern names in the desktop sync client are limited to 100 characters.

Modeled from REQ-desktop-ignore-patterns-name-length so the claim can be checked for contradictions.
