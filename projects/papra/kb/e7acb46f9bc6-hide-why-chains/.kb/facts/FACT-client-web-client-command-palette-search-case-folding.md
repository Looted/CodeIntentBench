---
title: client.web_client_command_palette_search case_folding = case ignored
status: active
fact_kind: property_value
subject_key: client.web_client_command_palette_search
property_key: case_folding
operator: eq
value_type: string
value_string: case ignored
claim_key: CLAIM-333CF6780FD0F168
claim_text: Matching in the web client's command palette search ignores letter case but not accents
text_ref: REQ-client-web-client-command-palette-search-case-folding
tags:
  - lane:strict
  - knowledge-source:client-decisions
origin:
  kind: agent
  ref: 'Web client decision log (apps/papra-client): WCL-205'
  recorded_at: '2026-03-03T11:45:34.000Z'
id: FACT-client-web-client-command-palette-search-case-folding
type: fact
---
Matching in the web client's command palette search ignores letter case but not accents.

Modeled from REQ-client-web-client-command-palette-search-case-folding so the claim can be checked for contradictions.
