---
title: client.web_client_demo_mode_search page_size_maximum = 200
status: active
fact_kind: property_value
subject_key: client.web_client_demo_mode_search
property_key: page_size_maximum
operator: eq
value_type: int
value_int: 200
claim_key: CLAIM-EDBADEEB5D3B7035
claim_text: The web client's demo-mode search returns at most 200 results per page
text_ref: REQ-client-web-client-demo-mode-search-page-size
tags:
  - lane:strict
  - knowledge-source:client-decisions
origin:
  kind: agent
  ref: 'Web client decision log (apps/papra-client): WCL-181'
  recorded_at: '2025-07-17T12:11:00.000Z'
id: FACT-client-web-client-demo-mode-search-page-size-maximum
type: fact
---
The web client's demo-mode search returns at most 200 results per page.

Modeled from REQ-client-web-client-demo-mode-search-page-size so the claim can be checked for contradictions.
