---
title: desktop.update_signing_key rotation_days = 90
status: active
fact_kind: property_value
subject_key: desktop.update_signing_key
property_key: rotation_days
operator: eq
value_type: int
value_int: 90
claim_key: CLAIM-896AE610E374161B
claim_text: UPDATE_SIGNING_KEY is rotated every 90 days
text_ref: REQ-desktop-update-signing-key-rotation
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-276'
  recorded_at: '2026-04-10T12:39:46.000Z'
id: FACT-desktop-update-signing-key-rotation-days
type: fact
---
UPDATE_SIGNING_KEY is rotated every 90 days.

Modeled from REQ-desktop-update-signing-key-rotation so the claim can be checked for contradictions.
