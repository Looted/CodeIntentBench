---
title: The web client's command palette search returns at most 10 results per page.
status: active
semantic_text: The web client's command palette search returns at most 10 results per page.
semantic_clauses:
  - The web client's command palette search returns at most 10 results per page
logic_claims:
  - CLAIM-5C4588F00CDEC90E
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 401a84c2095748bb77c6e6cc1aacbe53ec1daee57ef833bd98e4fcfb96e853a7
semantic_inventory:
  - claim_key: CLAIM-5C4588F00CDEC90E
    claim_text: The web client's command palette search returns at most 10 results per page
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 75
    subjects:
      - client.web_client_command_palette_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Web client decision log (apps/papra-client): WCL-200'
  recorded_at: '2025-06-11T13:40:16.000Z'
tags:
  - bootstrap
  - knowledge-source:client-decisions
  - component:client
rationale: Larger pages were slow on the devices most people use.
id: REQ-client-web-client-command-palette-search-page-size
type: req
---
The web client's command palette search returns at most 10 results per page.

## Context

Larger pages were slow on the devices most people use.

## Source

> feat(client): 10 results per page (WCL-200)

Source: Web client decision log (apps/papra-client) - WCL-200
