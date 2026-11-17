---
title: license.activations ownership_transfer = existing member
status: active
fact_kind: property_value
subject_key: license.activations
property_key: ownership_transfer
operator: eq
value_type: string
value_string: existing member
claim_key: CLAIM-5654F3C4125441BE
claim_text: Ownership of an activation on the license server can be transferred only to someone who is already a member of it
text_ref: REQ-license-activations-ownership-transfer
tags:
  - lane:strict
  - knowledge-source:license-decisions
origin:
  kind: agent
  ref: 'License server decision log: LIC-218'
  recorded_at: '2026-02-13T12:39:06.000Z'
id: FACT-license-activations-ownership-transfer
type: fact
---
Ownership of an activation on the license server can be transferred only to someone who is already a member of it.

Modeled from REQ-license-activations-ownership-transfer so the claim can be checked for contradictions.
