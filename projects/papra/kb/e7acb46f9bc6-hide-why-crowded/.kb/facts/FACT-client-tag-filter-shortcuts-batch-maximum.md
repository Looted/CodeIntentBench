---
title: client.tag_filter_shortcuts batch_maximum = 10
status: active
fact_kind: property_value
subject_key: client.tag_filter_shortcuts
property_key: batch_maximum
operator: eq
value_type: int
value_int: 10
claim_key: CLAIM-1B465AB161F23C33
claim_text: At most 10 tag filter shortcuts can be added or removed in one request in the web client
text_ref: REQ-client-tag-filter-shortcuts-batch-size
tags:
  - lane:strict
  - knowledge-source:client-decisions
origin:
  kind: agent
  ref: 'Web client decision log (apps/papra-client): WCL-182'
  recorded_at: '2025-11-02T09:52:25.000Z'
id: FACT-client-tag-filter-shortcuts-batch-maximum
type: fact
---
At most 10 tag filter shortcuts can be added or removed in one request in the web client.

Modeled from REQ-client-tag-filter-shortcuts-batch-size so the claim can be checked for contradictions.
