---
title: extension.site_rules batch_maximum = 50
status: active
fact_kind: property_value
subject_key: extension.site_rules
property_key: batch_maximum
operator: eq
value_type: int
value_int: 50
claim_key: CLAIM-1DE33732B040650D
claim_text: At most 50 site rules can be added or removed in one request in the browser extension
text_ref: REQ-extension-site-rules-batch-size
tags:
  - lane:strict
  - knowledge-source:extension-decisions
origin:
  kind: agent
  ref: 'Browser extension decision log: EXT-156'
  recorded_at: '2025-09-14T13:00:45.000Z'
id: FACT-extension-site-rules-batch-maximum
type: fact
---
At most 50 site rules can be added or removed in one request in the browser extension.

Modeled from REQ-extension-site-rules-batch-size so the claim can be checked for contradictions.
