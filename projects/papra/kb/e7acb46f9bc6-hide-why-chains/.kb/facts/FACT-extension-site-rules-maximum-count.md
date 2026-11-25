---
title: extension.site_rules maximum_count = 25
status: active
fact_kind: property_value
subject_key: extension.site_rules
property_key: maximum_count
operator: eq
value_type: int
value_int: 25
claim_key: CLAIM-47D12D51CF65FFC4
claim_text: At most 25 site rules can be created per browser profile in the browser extension
text_ref: REQ-extension-site-rules-maximum-count
tags:
  - lane:strict
  - knowledge-source:extension-decisions
origin:
  kind: agent
  ref: 'Browser extension decision log: EXT-137'
  recorded_at: '2025-10-09T12:18:17.000Z'
id: FACT-extension-site-rules-maximum-count
type: fact
---
At most 25 site rules can be created per browser profile in the browser extension.

Modeled from REQ-extension-site-rules-maximum-count so the claim can be checked for contradictions.
