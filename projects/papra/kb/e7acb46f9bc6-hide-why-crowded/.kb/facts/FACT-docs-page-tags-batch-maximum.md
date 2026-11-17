---
title: docs.page_tags batch_maximum = 25
status: active
fact_kind: property_value
subject_key: docs.page_tags
property_key: batch_maximum
operator: eq
value_type: int
value_int: 25
claim_key: CLAIM-159F9A2E8CCF6D90
claim_text: At most 25 page tags can be added or removed in one request on the documentation site
text_ref: REQ-docs-page-tags-batch-size
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-119'
  recorded_at: '2025-09-22T17:13:04.000Z'
id: FACT-docs-page-tags-batch-maximum
type: fact
---
At most 25 page tags can be added or removed in one request on the documentation site.

Modeled from REQ-docs-page-tags-batch-size so the claim can be checked for contradictions.
