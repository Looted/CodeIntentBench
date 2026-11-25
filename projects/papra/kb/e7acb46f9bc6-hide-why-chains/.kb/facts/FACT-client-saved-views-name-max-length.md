---
title: client.saved_views name_max_length = 120
status: active
fact_kind: property_value
subject_key: client.saved_views
property_key: name_max_length
operator: eq
value_type: int
value_int: 120
claim_key: CLAIM-6B76FEAC90108C76
claim_text: Saved view names in the web client are limited to 120 characters
text_ref: REQ-client-saved-views-name-length
tags:
  - lane:strict
  - knowledge-source:client-decisions
origin:
  kind: agent
  ref: 'Web client decision log (apps/papra-client): WCL-121'
  recorded_at: '2026-06-18T09:28:15.000Z'
id: FACT-client-saved-views-name-max-length
type: fact
---
Saved view names in the web client are limited to 120 characters.

Modeled from REQ-client-saved-views-name-length so the claim can be checked for contradictions.
