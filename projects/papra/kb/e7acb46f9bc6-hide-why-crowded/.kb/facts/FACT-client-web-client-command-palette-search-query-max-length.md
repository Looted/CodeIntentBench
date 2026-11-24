---
title: client.web_client_command_palette_search query_max_length = 256
status: active
fact_kind: property_value
subject_key: client.web_client_command_palette_search
property_key: query_max_length
operator: eq
value_type: int
value_int: 256
claim_key: CLAIM-2F9A3ACDC1A81521
claim_text: A query in the web client's command palette search is limited to 256 characters
text_ref: REQ-client-web-client-command-palette-search-query-length
tags:
  - lane:strict
  - knowledge-source:client-decisions
origin:
  kind: agent
  ref: 'Web client decision log (apps/papra-client): WCL-184'
  recorded_at: '2025-12-17T08:20:55.000Z'
id: FACT-client-web-client-command-palette-search-query-max-length
type: fact
---
A query in the web client's command palette search is limited to 256 characters.

Modeled from REQ-client-web-client-command-palette-search-query-length so the claim can be checked for contradictions.
