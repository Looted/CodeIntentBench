---
title: extension.clip_presets name_max_length = 100
status: active
fact_kind: property_value
subject_key: extension.clip_presets
property_key: name_max_length
operator: eq
value_type: int
value_int: 100
claim_key: CLAIM-5BEB22A956E66A80
claim_text: Clip preset names in the browser extension are limited to 100 characters
text_ref: REQ-extension-clip-presets-name-length
tags:
  - lane:strict
  - knowledge-source:extension-decisions
origin:
  kind: agent
  ref: 'Browser extension decision log: EXT-110'
  recorded_at: '2026-02-20T15:31:48.000Z'
id: FACT-extension-clip-presets-name-max-length
type: fact
---
Clip preset names in the browser extension are limited to 100 characters.

Modeled from REQ-extension-clip-presets-name-length so the claim can be checked for contradictions.
