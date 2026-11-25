---
title: extension.clip_presets name_trimmed = True
status: active
fact_kind: property_value
subject_key: extension.clip_presets
property_key: name_trimmed
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-942A75755E8AFCDD
claim_text: Clip preset names in the browser extension are trimmed of leading and trailing whitespace before they are saved
text_ref: REQ-extension-clip-presets-names-trimmed
tags:
  - lane:strict
  - knowledge-source:extension-decisions
origin:
  kind: agent
  ref: 'Browser extension decision log: EXT-115'
  recorded_at: '2025-09-15T09:19:12.000Z'
id: FACT-extension-clip-presets-name-trimmed
type: fact
---
Clip preset names in the browser extension are trimmed of leading and trailing whitespace before they are saved.

Modeled from REQ-extension-clip-presets-names-trimmed so the claim can be checked for contradictions.
