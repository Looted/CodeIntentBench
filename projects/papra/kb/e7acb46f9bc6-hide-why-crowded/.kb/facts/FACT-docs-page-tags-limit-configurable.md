---
title: docs.page_tags limit_configurable = False
status: active
fact_kind: property_value
subject_key: docs.page_tags
property_key: limit_configurable
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-9B85215C347D6099
claim_text: the limit is fixed
text_ref: REQ-docs-page-tags-maximum-count
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-110'
  recorded_at: '2026-06-26T13:24:56.000Z'
id: FACT-docs-page-tags-limit-configurable
type: fact
---
The limit is fixed.

Modeled from REQ-docs-page-tags-maximum-count so the claim can be checked for contradictions.
