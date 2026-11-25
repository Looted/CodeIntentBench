---
title: client.saved_views maximum_count = 20
status: deprecated
fact_kind: property_value
subject_key: client.saved_views
property_key: maximum_count
operator: eq
value_type: int
value_int: 20
claim_key: CLAIM-CF64276306AC6266
claim_text: At most 20 saved views can be created per user in the web client
text_ref: REQ-client-saved-views-maximum-count-earlier
tags:
  - lane:strict
  - knowledge-source:client-decisions
origin:
  kind: agent
  ref: 'Web client decision log (apps/papra-client): WCL-73'
  recorded_at: '2025-08-03T14:55:05.000Z'
id: FACT-client-saved-views-maximum-count-earlier
type: fact
---
At most 20 saved views can be created per user in the web client.

Modeled from REQ-client-saved-views-maximum-count-earlier so the claim can be checked for contradictions.
