---
title: desktop.ignore_patterns delete_in_use = detached
status: active
fact_kind: property_value
subject_key: desktop.ignore_patterns
property_key: delete_in_use
operator: eq
value_type: string
value_string: detached
claim_key: CLAIM-1A3006CBACDE71E5
claim_text: Deleting an ignore pattern in the desktop sync client removes it from everything that uses it, without confirmation for each use
text_ref: REQ-desktop-ignore-patterns-delete-in-use
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-159'
  recorded_at: '2026-02-18T17:10:11.000Z'
id: FACT-desktop-ignore-patterns-delete-in-use
type: fact
---
Deleting an ignore pattern in the desktop sync client removes it from everything that uses it, without confirmation for each use.

Modeled from REQ-desktop-ignore-patterns-delete-in-use so the claim can be checked for contradictions.
