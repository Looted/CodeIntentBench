---
title: A query in the web client's command palette search is limited to 256 characters; longer input is rejected with a validation error.
status: active
semantic_text: A query in the web client's command palette search is limited to 256 characters; longer input is rejected with a validation error.
semantic_clauses:
  - A query in the web client's command palette search is limited to 256 characters
  - longer input is rejected with a validation error
logic_claims:
  - CLAIM-2F9A3ACDC1A81521
  - CLAIM-778F39B5CA222673
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 588c16e220a1c89061472383276db0aaa6f06540cfd93f834df409fd537bbf39
semantic_inventory:
  - claim_key: CLAIM-2F9A3ACDC1A81521
    claim_text: A query in the web client's command palette search is limited to 256 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 79
    subjects:
      - client.web_client_command_palette_search
  - claim_key: CLAIM-778F39B5CA222673
    claim_text: longer input is rejected with a validation error
    role: normative
    status: modeled
    span:
      start: 81
      end: 129
    subjects:
      - client.web_client_command_palette_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Web client decision log (apps/papra-client): WCL-184'
  recorded_at: '2025-12-17T08:20:55.000Z'
tags:
  - bootstrap
  - knowledge-source:client-decisions
  - component:client
rationale: Very long queries were used to slow the search backend down.
id: REQ-client-web-client-command-palette-search-query-length
type: req
---
A query in the web client's command palette search is limited to 256 characters; longer input is rejected with a validation error.

## Context

Very long queries were used to slow the search backend down.

## Source

> feat(client): limit search query length to 256 (WCL-184)

Source: Web client decision log (apps/papra-client) - WCL-184
