---
title: extension.site_rules name_max_length = 120
status: active
fact_kind: property_value
subject_key: extension.site_rules
property_key: name_max_length
operator: eq
value_type: int
value_int: 120
claim_key: CLAIM-1B82E14AAAA573F4
claim_text: Site rule names in the browser extension are limited to 120 characters
text_ref: REQ-extension-site-rules-name-length
tags:
  - lane:strict
  - knowledge-source:extension-decisions
origin:
  kind: agent
  ref: 'Browser extension decision log: EXT-145'
  recorded_at: '2025-12-19T11:47:02.000Z'
id: FACT-extension-site-rules-name-max-length
type: fact
---
Site rule names in the browser extension are limited to 120 characters.

Modeled from REQ-extension-site-rules-name-length so the claim can be checked for contradictions.
