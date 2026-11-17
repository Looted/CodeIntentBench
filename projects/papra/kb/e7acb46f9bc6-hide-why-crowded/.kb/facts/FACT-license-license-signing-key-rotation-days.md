---
title: license.license_signing_key rotation_days = 30
status: active
fact_kind: property_value
subject_key: license.license_signing_key
property_key: rotation_days
operator: eq
value_type: int
value_int: 30
claim_key: CLAIM-D09D8F0DA1882CCF
claim_text: LICENSE_SIGNING_KEY is rotated every 30 days
text_ref: REQ-license-license-signing-key-rotation
tags:
  - lane:strict
  - knowledge-source:license-decisions
origin:
  kind: agent
  ref: 'License server decision log: LIC-154'
  recorded_at: '2025-04-18T12:10:48.000Z'
id: FACT-license-license-signing-key-rotation-days
type: fact
---
LICENSE_SIGNING_KEY is rotated every 30 days.

Modeled from REQ-license-license-signing-key-rotation so the claim can be checked for contradictions.
