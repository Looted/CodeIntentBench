---
title: license.activations name_max_length = 50
status: active
fact_kind: property_value
subject_key: license.activations
property_key: name_max_length
operator: eq
value_type: int
value_int: 50
claim_key: CLAIM-2356CC936A68AC4D
claim_text: Activation names on the license server are between 3 and 50 characters long
text_ref: REQ-license-activations-name-length
tags:
  - lane:strict
  - knowledge-source:license-decisions
origin:
  kind: agent
  ref: 'License server decision log: LIC-153'
  recorded_at: '2026-04-02T09:34:11.000Z'
id: FACT-license-activations-name-max-length
type: fact
---
Activation names on the license server are between 3 and 50 characters long.

Modeled from REQ-license-activations-name-length so the claim can be checked for contradictions.
