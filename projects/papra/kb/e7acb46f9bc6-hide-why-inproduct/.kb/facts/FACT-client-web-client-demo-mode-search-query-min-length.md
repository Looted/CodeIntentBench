---
title: client.web_client_demo_mode_search query_min_length = 1
status: active
fact_kind: property_value
subject_key: client.web_client_demo_mode_search
property_key: query_min_length
operator: eq
value_type: int
value_int: 1
claim_key: CLAIM-023C69F0B4A52DB7
claim_text: The web client's demo-mode search runs only once the query has at least 1 character
text_ref: REQ-client-web-client-demo-mode-search-minimum-length
tags:
  - lane:strict
  - knowledge-source:client-decisions
origin:
  kind: agent
  ref: 'Web client decision log (apps/papra-client): WCL-173'
  recorded_at: '2026-01-14T16:45:30.000Z'
id: FACT-client-web-client-demo-mode-search-query-min-length
type: fact
---
The web client's demo-mode search runs only once the query has at least 1 character.

Modeled from REQ-client-web-client-demo-mode-search-minimum-length so the claim can be checked for contradictions.
