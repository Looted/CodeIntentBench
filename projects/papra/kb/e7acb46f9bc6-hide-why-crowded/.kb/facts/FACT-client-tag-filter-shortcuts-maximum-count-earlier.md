---
title: client.tag_filter_shortcuts maximum_count = 20
status: deprecated
fact_kind: property_value
subject_key: client.tag_filter_shortcuts
property_key: maximum_count
operator: eq
value_type: int
value_int: 20
claim_key: CLAIM-FFBAB842C6FD2C3A
claim_text: At most 20 tag filter shortcuts can be created per user in the web client
text_ref: REQ-client-tag-filter-shortcuts-maximum-count-earlier
tags:
  - lane:strict
  - knowledge-source:client-decisions
origin:
  kind: agent
  ref: 'Web client decision log (apps/papra-client): WCL-95'
  recorded_at: '2025-06-03T14:47:25.000Z'
id: FACT-client-tag-filter-shortcuts-maximum-count-earlier
type: fact
---
At most 20 tag filter shortcuts can be created per user in the web client.

Modeled from REQ-client-tag-filter-shortcuts-maximum-count-earlier so the claim can be checked for contradictions.
