---
title: docs.page_tags maximum_count = 20
status: active
fact_kind: property_value
subject_key: docs.page_tags
property_key: maximum_count
operator: eq
value_type: int
value_int: 20
claim_key: CLAIM-EA8F0C18CCBC9C8E
claim_text: The number of page tags per documentation version on the documentation site is limited to 20
text_ref: REQ-docs-page-tags-maximum-count
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-110'
  recorded_at: '2026-06-26T13:24:56.000Z'
id: FACT-docs-page-tags-maximum-count
type: fact
---
The number of page tags per documentation version on the documentation site is limited to 20.

Modeled from REQ-docs-page-tags-maximum-count so the claim can be checked for contradictions.
