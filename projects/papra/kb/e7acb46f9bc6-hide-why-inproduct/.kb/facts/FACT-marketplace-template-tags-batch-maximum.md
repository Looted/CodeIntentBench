---
title: marketplace.template_tags batch_maximum = 10
status: active
fact_kind: property_value
subject_key: marketplace.template_tags
property_key: batch_maximum
operator: eq
value_type: int
value_int: 10
claim_key: CLAIM-EED0EBC5C16FA08F
claim_text: At most 10 template tags can be added or removed in one request in the template marketplace
text_ref: REQ-marketplace-template-tags-batch-size
tags:
  - lane:strict
  - knowledge-source:marketplace-decisions
origin:
  kind: agent
  ref: 'Template marketplace decision log: MKT-117'
  recorded_at: '2026-05-19T16:28:00.000Z'
id: FACT-marketplace-template-tags-batch-maximum
type: fact
---
At most 10 template tags can be added or removed in one request in the template marketplace.

Modeled from REQ-marketplace-template-tags-batch-size so the claim can be checked for contradictions.
