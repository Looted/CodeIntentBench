---
title: client.web_client_command_palette_search page_size_maximum = 10
status: active
fact_kind: property_value
subject_key: client.web_client_command_palette_search
property_key: page_size_maximum
operator: eq
value_type: int
value_int: 10
claim_key: CLAIM-5C4588F00CDEC90E
claim_text: The web client's command palette search returns at most 10 results per page
text_ref: REQ-client-web-client-command-palette-search-page-size
tags:
  - lane:strict
  - knowledge-source:client-decisions
origin:
  kind: agent
  ref: 'Web client decision log (apps/papra-client): WCL-200'
  recorded_at: '2025-06-11T13:40:16.000Z'
id: FACT-client-web-client-command-palette-search-page-size-maximum
type: fact
---
The web client's command palette search returns at most 10 results per page.

Modeled from REQ-client-web-client-command-palette-search-page-size so the claim can be checked for contradictions.
