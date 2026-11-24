---
title: client.saved_views batch_maximum = 25
status: active
fact_kind: property_value
subject_key: client.saved_views
property_key: batch_maximum
operator: eq
value_type: int
value_int: 25
claim_key: CLAIM-6CD29141BCAA6495
claim_text: At most 25 saved views can be added or removed in one request in the web client
text_ref: REQ-client-saved-views-batch-size
tags:
  - lane:strict
  - knowledge-source:client-decisions
origin:
  kind: agent
  ref: 'Web client decision log (apps/papra-client): WCL-134'
  recorded_at: '2026-08-14T16:29:05.000Z'
id: FACT-client-saved-views-batch-maximum
type: fact
---
At most 25 saved views can be added or removed in one request in the web client.

Modeled from REQ-client-saved-views-batch-size so the claim can be checked for contradictions.
