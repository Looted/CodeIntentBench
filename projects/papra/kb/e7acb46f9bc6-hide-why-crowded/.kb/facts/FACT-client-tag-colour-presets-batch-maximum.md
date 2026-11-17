---
title: client.tag_colour_presets batch_maximum = 20
status: active
fact_kind: property_value
subject_key: client.tag_colour_presets
property_key: batch_maximum
operator: eq
value_type: int
value_int: 20
claim_key: CLAIM-24DC1D0553BE169E
claim_text: At most 20 tag colour presets can be added or removed in one request in the web client
text_ref: REQ-client-tag-colour-presets-batch-size
tags:
  - lane:strict
  - knowledge-source:client-decisions
origin:
  kind: agent
  ref: 'Web client decision log (apps/papra-client): WCL-158'
  recorded_at: '2025-11-10T13:30:43.000Z'
id: FACT-client-tag-colour-presets-batch-maximum
type: fact
---
At most 20 tag colour presets can be added or removed in one request in the web client.

Modeled from REQ-client-tag-colour-presets-batch-size so the claim can be checked for contradictions.
