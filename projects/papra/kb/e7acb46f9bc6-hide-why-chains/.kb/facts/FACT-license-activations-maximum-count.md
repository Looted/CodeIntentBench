---
title: license.activations maximum_count = 3
status: active
fact_kind: property_value
subject_key: license.activations
property_key: maximum_count
operator: eq
value_type: int
value_int: 3
claim_key: CLAIM-742D2868A54B50AB
claim_text: A license key can have at most 3 activations on the license server
text_ref: REQ-license-activations-maximum-count
tags:
  - lane:strict
  - knowledge-source:license-decisions
origin:
  kind: agent
  ref: 'License server decision log: LIC-189'
  recorded_at: '2026-05-24T12:37:33.000Z'
id: FACT-license-activations-maximum-count
type: fact
---
A license key can have at most 3 activations on the license server.

Modeled from REQ-license-activations-maximum-count so the claim can be checked for contradictions.
