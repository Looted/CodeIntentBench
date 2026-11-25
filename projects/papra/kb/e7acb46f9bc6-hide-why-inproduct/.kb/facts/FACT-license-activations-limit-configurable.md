---
title: license.activations limit_configurable = True
status: active
fact_kind: property_value
subject_key: license.activations
property_key: limit_configurable
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-AF6717F4E0A15E09
claim_text: the limit is configured per deployment and 3 is the default
text_ref: REQ-license-activations-maximum-count
tags:
  - lane:strict
  - knowledge-source:license-decisions
origin:
  kind: agent
  ref: 'License server decision log: LIC-130'
  recorded_at: '2026-05-24T12:37:33.000Z'
id: FACT-license-activations-limit-configurable
type: fact
---
The limit is configured per deployment and 3 is the default.

Modeled from REQ-license-activations-maximum-count so the claim can be checked for contradictions.
