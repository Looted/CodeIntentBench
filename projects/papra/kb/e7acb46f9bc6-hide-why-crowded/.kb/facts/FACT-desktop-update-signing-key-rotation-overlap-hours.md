---
title: desktop.update_signing_key rotation_overlap_hours = 48
status: active
fact_kind: property_value
subject_key: desktop.update_signing_key
property_key: rotation_overlap_hours
operator: eq
value_type: int
value_int: 48
claim_key: CLAIM-40B0302E57698F6D
claim_text: the previous value stays valid for 48 hours after a rotation
text_ref: REQ-desktop-update-signing-key-rotation
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-276'
  recorded_at: '2026-04-10T12:39:46.000Z'
id: FACT-desktop-update-signing-key-rotation-overlap-hours
type: fact
---
The previous value stays valid for 48 hours after a rotation.

Modeled from REQ-desktop-update-signing-key-rotation so the claim can be checked for contradictions.
