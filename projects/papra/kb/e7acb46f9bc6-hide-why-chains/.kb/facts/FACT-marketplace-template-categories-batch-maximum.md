---
title: marketplace.template_categories batch_maximum = 50
status: active
fact_kind: property_value
subject_key: marketplace.template_categories
property_key: batch_maximum
operator: eq
value_type: int
value_int: 50
claim_key: CLAIM-4D6626FEE87740DB
claim_text: At most 50 template categories can be added or removed in one request in the template marketplace
text_ref: REQ-marketplace-template-categories-batch-size
tags:
  - lane:strict
  - knowledge-source:marketplace-decisions
origin:
  kind: agent
  ref: 'Template marketplace decision log: MKT-142'
  recorded_at: '2025-06-17T09:56:41.000Z'
id: FACT-marketplace-template-categories-batch-maximum
type: fact
---
At most 50 template categories can be added or removed in one request in the template marketplace.

Modeled from REQ-marketplace-template-categories-batch-size so the claim can be checked for contradictions.
