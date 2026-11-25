---
title: extension.clip_presets batch_maximum = 5
status: active
fact_kind: property_value
subject_key: extension.clip_presets
property_key: batch_maximum
operator: eq
value_type: int
value_int: 5
claim_key: CLAIM-173104728DC927D3
claim_text: At most 5 clip presets can be added or removed in one request in the browser extension
text_ref: REQ-extension-clip-presets-batch-size
tags:
  - lane:strict
  - knowledge-source:extension-decisions
origin:
  kind: agent
  ref: 'Browser extension decision log: EXT-126'
  recorded_at: '2026-04-09T13:32:57.000Z'
id: FACT-extension-clip-presets-batch-maximum
type: fact
---
At most 5 clip presets can be added or removed in one request in the browser extension.

Modeled from REQ-extension-clip-presets-batch-size so the claim can be checked for contradictions.
