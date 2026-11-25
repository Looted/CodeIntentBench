---
title: desktop.ignore_patterns name_trimmed = True
status: active
fact_kind: property_value
subject_key: desktop.ignore_patterns
property_key: name_trimmed
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-C6E4BD157B4E1EB5
claim_text: Ignore pattern names in the desktop sync client are trimmed of leading and trailing whitespace before they are saved
text_ref: REQ-desktop-ignore-patterns-names-trimmed
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-148'
  recorded_at: '2026-03-06T15:40:03.000Z'
id: FACT-desktop-ignore-patterns-name-trimmed
type: fact
---
Ignore pattern names in the desktop sync client are trimmed of leading and trailing whitespace before they are saved.

Modeled from REQ-desktop-ignore-patterns-names-trimmed so the claim can be checked for contradictions.
