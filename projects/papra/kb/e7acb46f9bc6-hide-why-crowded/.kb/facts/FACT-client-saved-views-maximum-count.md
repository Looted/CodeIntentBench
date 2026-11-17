---
title: client.saved_views maximum_count = 150
status: active
fact_kind: property_value
subject_key: client.saved_views
property_key: maximum_count
operator: eq
value_type: int
value_int: 150
claim_key: CLAIM-E969C767FC4FB4C9
claim_text: At most 150 saved views can be created per user in the web client
text_ref: REQ-client-saved-views-maximum-count
tags:
  - lane:strict
  - knowledge-source:client-decisions
origin:
  kind: agent
  ref: 'Web client decision log (apps/papra-client): WCL-113'
  recorded_at: '2026-03-23T09:06:32.000Z'
id: FACT-client-saved-views-maximum-count
type: fact
---
At most 150 saved views can be created per user in the web client.

Modeled from REQ-client-saved-views-maximum-count so the claim can be checked for contradictions.
