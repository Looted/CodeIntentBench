---
title: extension.clip_presets maximum_count = 150
status: active
fact_kind: property_value
subject_key: extension.clip_presets
property_key: maximum_count
operator: eq
value_type: int
value_int: 150
claim_key: CLAIM-BE5ED1E385C5EBFE
claim_text: A browser profile can hold at most 150 clip presets in the browser extension
text_ref: REQ-extension-clip-presets-maximum-count
tags:
  - lane:strict
  - knowledge-source:extension-decisions
origin:
  kind: agent
  ref: 'Browser extension decision log: EXT-102'
  recorded_at: '2026-07-17T09:58:43.000Z'
id: FACT-extension-clip-presets-maximum-count
type: fact
---
A browser profile can hold at most 150 clip presets in the browser extension.

Modeled from REQ-extension-clip-presets-maximum-count so the claim can be checked for contradictions.
