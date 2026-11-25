---
title: license.activations at_limit = refused, limit named
status: active
fact_kind: property_value
subject_key: license.activations
property_key: at_limit
operator: eq
value_type: string
value_string: refused, limit named
claim_key: CLAIM-95CE1E119673E6D7
claim_text: Creating an activation on the license server when the license key is at the limit is refused with an error that names the limit
text_ref: REQ-license-activations-at-the-limit
tags:
  - lane:strict
  - knowledge-source:license-decisions
origin:
  kind: agent
  ref: 'License server decision log: LIC-145'
  recorded_at: '2025-04-12T10:52:31.000Z'
id: FACT-license-activations-at-limit
type: fact
---
Creating an activation on the license server when the license key is at the limit is refused with an error that names the limit.

Modeled from REQ-license-activations-at-the-limit so the claim can be checked for contradictions.
