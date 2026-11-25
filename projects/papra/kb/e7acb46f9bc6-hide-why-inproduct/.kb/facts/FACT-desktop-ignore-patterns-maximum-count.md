---
title: desktop.ignore_patterns maximum_count = 150
status: active
fact_kind: property_value
subject_key: desktop.ignore_patterns
property_key: maximum_count
operator: eq
value_type: int
value_int: 150
claim_key: CLAIM-06F19A2C7B9BD89D
claim_text: A sync folder can hold at most 150 ignore patterns in the desktop sync client
text_ref: REQ-desktop-ignore-patterns-maximum-count
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-141'
  recorded_at: '2026-06-12T12:06:54.000Z'
id: FACT-desktop-ignore-patterns-maximum-count
type: fact
---
A sync folder can hold at most 150 ignore patterns in the desktop sync client.

Modeled from REQ-desktop-ignore-patterns-maximum-count so the claim can be checked for contradictions.
