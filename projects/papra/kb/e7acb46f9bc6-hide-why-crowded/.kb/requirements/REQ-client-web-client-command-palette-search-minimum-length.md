---
title: The web client's command palette search runs only once the query has at least 2 characters.
status: active
semantic_text: The web client's command palette search runs only once the query has at least 2 characters.
semantic_clauses:
  - The web client's command palette search runs only once the query has at least 2 characters
logic_claims:
  - CLAIM-71F955AAD3CA7ECD
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 406dee12a718db1668ccd713363a2b1bd077a6974ea8ff3d06ae68a3f411cddf
semantic_inventory:
  - claim_key: CLAIM-71F955AAD3CA7ECD
    claim_text: The web client's command palette search runs only once the query has at least 2 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 90
    subjects:
      - client.web_client_command_palette_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Web client decision log (apps/papra-client): WCL-198'
  recorded_at: '2025-10-12T15:24:46.000Z'
tags:
  - bootstrap
  - knowledge-source:client-decisions
  - component:client
rationale: One-letter queries matched nearly everything and were slow to render.
id: REQ-client-web-client-command-palette-search-minimum-length
type: req
---
The web client's command palette search runs only once the query has at least 2 characters.

## Context

One-letter queries matched nearly everything and were slow to render.

## Source

> feat(client): minimum query length 2 (WCL-198)

Source: Web client decision log (apps/papra-client) - WCL-198
