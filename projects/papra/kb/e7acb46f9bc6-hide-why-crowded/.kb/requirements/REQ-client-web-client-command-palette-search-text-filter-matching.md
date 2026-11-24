---
title: 'The page: filter of the web client''s command palette search uses contains matching, not exact equality.'
status: active
semantic_text: 'The page: filter of the web client''s command palette search uses contains matching, not exact equality.'
semantic_clauses:
  - 'The page: filter of the web client''s command palette search uses contains matching, not exact equality'
logic_claims:
  - CLAIM-747A691D2BFDEA6C
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 188a57c730d75cc0e9a24940f1f0c8a57fde0f581959c53f6993fc89bdf3d7cb
semantic_inventory:
  - claim_key: CLAIM-747A691D2BFDEA6C
    claim_text: 'The page: filter of the web client''s command palette search uses contains matching, not exact equality'
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 102
    subjects:
      - client.web_client_command_palette_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Web client decision log (apps/papra-client): WCL-197'
  recorded_at: '2025-08-25T13:23:46.000Z'
tags:
  - bootstrap
  - knowledge-source:client-decisions
  - component:client
rationale: Results that only contained the term somewhere drowned the one that was asked for.
id: REQ-client-web-client-command-palette-search-text-filter-matching
type: req
---
The page: filter of the web client's command palette search uses contains matching, not exact equality.

## Context

Results that only contained the term somewhere drowned the one that was asked for.

## Source

> feat(client): page: filter matching (WCL-197)

Source: Web client decision log (apps/papra-client) - WCL-197
