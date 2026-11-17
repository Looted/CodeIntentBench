---
title: client.web_client_command_palette_search over_length_input = rejected
status: active
fact_kind: property_value
subject_key: client.web_client_command_palette_search
property_key: over_length_input
operator: eq
value_type: string
value_string: rejected
claim_key: CLAIM-778F39B5CA222673
claim_text: longer input is rejected with a validation error
text_ref: REQ-client-web-client-command-palette-search-query-length
tags:
  - lane:strict
  - knowledge-source:client-decisions
origin:
  kind: agent
  ref: 'Web client decision log (apps/papra-client): WCL-184'
  recorded_at: '2025-12-17T08:20:55.000Z'
id: FACT-client-web-client-command-palette-search-over-length-input
type: fact
---
Longer input is rejected with a validation error.

Modeled from REQ-client-web-client-command-palette-search-query-length so the claim can be checked for contradictions.
