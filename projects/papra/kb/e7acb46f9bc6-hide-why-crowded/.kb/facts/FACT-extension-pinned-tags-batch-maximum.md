---
title: extension.pinned_tags batch_maximum = 20
status: active
fact_kind: property_value
subject_key: extension.pinned_tags
property_key: batch_maximum
operator: eq
value_type: int
value_int: 20
claim_key: CLAIM-39416C6F0257B9F6
claim_text: At most 20 pinned tags can be added or removed in one request in the browser extension
text_ref: REQ-extension-pinned-tags-batch-size
tags:
  - lane:strict
  - knowledge-source:extension-decisions
origin:
  kind: agent
  ref: 'Browser extension decision log: EXT-189'
  recorded_at: '2026-08-25T13:04:29.000Z'
id: FACT-extension-pinned-tags-batch-maximum
type: fact
---
At most 20 pinned tags can be added or removed in one request in the browser extension.

Modeled from REQ-extension-pinned-tags-batch-size so the claim can be checked for contradictions.
