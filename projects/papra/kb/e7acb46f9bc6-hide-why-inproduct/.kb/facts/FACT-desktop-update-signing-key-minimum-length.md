---
title: desktop.update_signing_key minimum_length = 32
status: active
fact_kind: property_value
subject_key: desktop.update_signing_key
property_key: minimum_length
operator: eq
value_type: int
value_int: 32
claim_key: CLAIM-90C6F1E6E1170B33
claim_text: UPDATE_SIGNING_KEY must be at least 32 characters long
text_ref: REQ-desktop-update-signing-key-minimum-length
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-270'
  recorded_at: '2025-09-25T14:21:35.000Z'
id: FACT-desktop-update-signing-key-minimum-length
type: fact
---
UPDATE_SIGNING_KEY must be at least 32 characters long.

Modeled from REQ-desktop-update-signing-key-minimum-length so the claim can be checked for contradictions.
