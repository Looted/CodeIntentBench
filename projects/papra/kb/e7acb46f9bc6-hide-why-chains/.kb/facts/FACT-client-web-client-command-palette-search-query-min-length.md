---
title: client.web_client_command_palette_search query_min_length = 2
status: active
fact_kind: property_value
subject_key: client.web_client_command_palette_search
property_key: query_min_length
operator: eq
value_type: int
value_int: 2
claim_key: CLAIM-71F955AAD3CA7ECD
claim_text: The web client's command palette search runs only once the query has at least 2 characters
text_ref: REQ-client-web-client-command-palette-search-minimum-length
tags:
  - lane:strict
  - knowledge-source:client-decisions
origin:
  kind: agent
  ref: 'Web client decision log (apps/papra-client): WCL-198'
  recorded_at: '2025-10-12T15:24:46.000Z'
id: FACT-client-web-client-command-palette-search-query-min-length
type: fact
---
The web client's command palette search runs only once the query has at least 2 characters.

Modeled from REQ-client-web-client-command-palette-search-minimum-length so the claim can be checked for contradictions.
