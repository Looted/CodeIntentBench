---
title: client.web_client_command_palette_search invalid_date_filter = rejected
status: active
fact_kind: property_value
subject_key: client.web_client_command_palette_search
property_key: invalid_date_filter
operator: eq
value_type: string
value_string: rejected
claim_key: CLAIM-188FE58C458CA506
claim_text: 'An invalid date in the visited: filter of the web client''s command palette search is rejected with a message that names the value'
text_ref: REQ-client-web-client-command-palette-search-invalid-date
tags:
  - lane:strict
  - knowledge-source:client-decisions
origin:
  kind: agent
  ref: 'Web client decision log (apps/papra-client): WCL-192'
  recorded_at: '2025-05-24T15:02:44.000Z'
id: FACT-client-web-client-command-palette-search-invalid-date-filter
type: fact
---
An invalid date in the visited: filter of the web client's command palette search is rejected with a message that names the value.

Modeled from REQ-client-web-client-command-palette-search-invalid-date so the claim can be checked for contradictions.
