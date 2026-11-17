---
title: license.license_keys maximum_count = 2
status: active
fact_kind: property_value
subject_key: license.license_keys
property_key: maximum_count
operator: eq
value_type: int
value_int: 2
claim_key: CLAIM-6B8D3D0AE181367D
claim_text: A customer can have at most 2 license keys on the license server
text_ref: REQ-license-license-keys-maximum-count
tags:
  - lane:strict
  - knowledge-source:license-decisions
origin:
  kind: agent
  ref: 'License server decision log: LIC-223'
  recorded_at: '2026-04-28T10:17:49.000Z'
id: FACT-license-license-keys-maximum-count
type: fact
---
A customer can have at most 2 license keys on the license server.

Modeled from REQ-license-license-keys-maximum-count so the claim can be checked for contradictions.
