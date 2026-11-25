---
title: desktop.linked_organizations name_max_length = 64
status: active
fact_kind: property_value
subject_key: desktop.linked_organizations
property_key: name_max_length
operator: eq
value_type: int
value_int: 64
claim_key: CLAIM-41231EA66E260E04
claim_text: Linked organization names in the desktop sync client are between 3 and 64 characters long
text_ref: REQ-desktop-linked-organizations-name-length
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-311'
  recorded_at: '2025-09-12T15:51:43.000Z'
id: FACT-desktop-linked-organizations-name-max-length
type: fact
---
Linked organization names in the desktop sync client are between 3 and 64 characters long.

Modeled from REQ-desktop-linked-organizations-name-length so the claim can be checked for contradictions.
