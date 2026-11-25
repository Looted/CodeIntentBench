---
title: extension.pinned_tags name_max_length = 32
status: active
fact_kind: property_value
subject_key: extension.pinned_tags
property_key: name_max_length
operator: eq
value_type: int
value_int: 32
claim_key: CLAIM-3C767480585F2DCC
claim_text: Pinned tag names in the browser extension are limited to 32 characters
text_ref: REQ-extension-pinned-tags-name-length
tags:
  - lane:strict
  - knowledge-source:extension-decisions
origin:
  kind: agent
  ref: 'Browser extension decision log: EXT-172'
  recorded_at: '2026-05-20T11:27:39.000Z'
id: FACT-extension-pinned-tags-name-max-length
type: fact
---
Pinned tag names in the browser extension are limited to 32 characters.

Modeled from REQ-extension-pinned-tags-name-length so the claim can be checked for contradictions.
