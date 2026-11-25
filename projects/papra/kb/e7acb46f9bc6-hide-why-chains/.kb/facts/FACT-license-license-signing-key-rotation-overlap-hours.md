---
title: license.license_signing_key rotation_overlap_hours = 1
status: active
fact_kind: property_value
subject_key: license.license_signing_key
property_key: rotation_overlap_hours
operator: eq
value_type: int
value_int: 1
claim_key: CLAIM-BD83FC4FB2DF2432
claim_text: the previous value stays valid for 1 hours after a rotation
text_ref: REQ-license-license-signing-key-rotation
tags:
  - lane:strict
  - knowledge-source:license-decisions
origin:
  kind: agent
  ref: 'License server decision log: LIC-154'
  recorded_at: '2025-04-18T12:10:48.000Z'
id: FACT-license-license-signing-key-rotation-overlap-hours
type: fact
---
The previous value stays valid for 1 hours after a rotation.

Modeled from REQ-license-license-signing-key-rotation so the claim can be checked for contradictions.
