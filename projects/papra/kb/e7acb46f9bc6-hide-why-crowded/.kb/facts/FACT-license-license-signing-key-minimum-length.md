---
title: license.license_signing_key minimum_length = 16
status: active
fact_kind: property_value
subject_key: license.license_signing_key
property_key: minimum_length
operator: eq
value_type: int
value_int: 16
claim_key: CLAIM-1483AE63700F2297
claim_text: LICENSE_SIGNING_KEY must be at least 16 characters long
text_ref: REQ-license-license-signing-key-minimum-length
tags:
  - lane:strict
  - knowledge-source:license-decisions
origin:
  kind: agent
  ref: 'License server decision log: LIC-149'
  recorded_at: '2026-06-05T13:48:33.000Z'
id: FACT-license-license-signing-key-minimum-length
type: fact
---
LICENSE_SIGNING_KEY must be at least 16 characters long.

Modeled from REQ-license-license-signing-key-minimum-length so the claim can be checked for contradictions.
