---
title: client.web_client_demo_mode_search query_max_length = 512
status: active
fact_kind: property_value
subject_key: client.web_client_demo_mode_search
property_key: query_max_length
operator: eq
value_type: int
value_int: 512
claim_key: CLAIM-D6F8CDD444342F32
claim_text: A query in the web client's demo-mode search is limited to 512 characters
text_ref: REQ-client-web-client-demo-mode-search-query-length
tags:
  - lane:strict
  - knowledge-source:client-decisions
origin:
  kind: agent
  ref: 'Web client decision log (apps/papra-client): WCL-166'
  recorded_at: '2026-03-08T16:17:10.000Z'
id: FACT-client-web-client-demo-mode-search-query-max-length
type: fact
---
A query in the web client's demo-mode search is limited to 512 characters.

Modeled from REQ-client-web-client-demo-mode-search-query-length so the claim can be checked for contradictions.
