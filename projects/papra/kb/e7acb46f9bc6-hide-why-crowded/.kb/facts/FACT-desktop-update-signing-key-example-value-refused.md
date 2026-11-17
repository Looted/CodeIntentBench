---
title: desktop.update_signing_key example_value_refused = True
status: active
fact_kind: property_value
subject_key: desktop.update_signing_key
property_key: example_value_refused
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-6463EA7A78462178
claim_text: The desktop update server refuses the example value of UPDATE_SIGNING_KEY from its documentation, in every environment
text_ref: REQ-desktop-update-signing-key-example-value-refused
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-273'
  recorded_at: '2025-06-14T15:52:47.000Z'
id: FACT-desktop-update-signing-key-example-value-refused
type: fact
---
The desktop update server refuses the example value of UPDATE_SIGNING_KEY from its documentation, in every environment.

Modeled from REQ-desktop-update-signing-key-example-value-refused so the claim can be checked for contradictions.
