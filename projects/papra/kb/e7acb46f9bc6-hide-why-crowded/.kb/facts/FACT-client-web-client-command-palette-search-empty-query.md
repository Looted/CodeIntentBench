---
title: client.web_client_command_palette_search empty_query = nothing
status: active
fact_kind: property_value
subject_key: client.web_client_command_palette_search
property_key: empty_query
operator: eq
value_type: string
value_string: nothing
claim_key: CLAIM-C018BDD983E0F72C
claim_text: An empty query in the web client's command palette search returns nothing
text_ref: REQ-client-web-client-command-palette-search-empty-query
tags:
  - lane:strict
  - knowledge-source:client-decisions
origin:
  kind: agent
  ref: 'Web client decision log (apps/papra-client): WCL-214'
  recorded_at: '2026-07-02T09:09:51.000Z'
id: FACT-client-web-client-command-palette-search-empty-query
type: fact
---
An empty query in the web client's command palette search returns nothing.

Modeled from REQ-client-web-client-command-palette-search-empty-query so the claim can be checked for contradictions.
