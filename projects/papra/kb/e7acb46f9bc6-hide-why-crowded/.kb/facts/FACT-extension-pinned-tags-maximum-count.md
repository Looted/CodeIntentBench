---
title: extension.pinned_tags maximum_count = 300
status: active
fact_kind: property_value
subject_key: extension.pinned_tags
property_key: maximum_count
operator: eq
value_type: int
value_int: 300
claim_key: CLAIM-80B004997A1EEC65
claim_text: The number of pinned tags per browser profile in the browser extension is limited to 300
text_ref: REQ-extension-pinned-tags-maximum-count
tags:
  - lane:strict
  - knowledge-source:extension-decisions
origin:
  kind: agent
  ref: 'Browser extension decision log: EXT-169'
  recorded_at: '2025-04-27T15:13:24.000Z'
id: FACT-extension-pinned-tags-maximum-count
type: fact
---
The number of pinned tags per browser profile in the browser extension is limited to 300.

Modeled from REQ-extension-pinned-tags-maximum-count so the claim can be checked for contradictions.
