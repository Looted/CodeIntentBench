---
title: license.activations restore_window_days = 7
status: active
fact_kind: property_value
subject_key: license.activations
property_key: restore_window_days
operator: eq
value_type: int
value_int: 7
claim_key: CLAIM-D2415E07395DCF40
claim_text: A deleted activation on the license server can be restored for 7 days
text_ref: REQ-license-activations-deletion-grace
tags:
  - lane:strict
  - knowledge-source:license-decisions
origin:
  kind: agent
  ref: 'License server decision log: LIC-215'
  recorded_at: '2025-12-19T13:25:18.000Z'
id: FACT-license-activations-restore-window-days
type: fact
---
A deleted activation on the license server can be restored for 7 days.

Modeled from REQ-license-activations-deletion-grace so the claim can be checked for contradictions.
