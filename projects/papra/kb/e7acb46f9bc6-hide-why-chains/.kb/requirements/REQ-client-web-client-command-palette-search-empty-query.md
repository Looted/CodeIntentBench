---
title: An empty query in the web client's command palette search returns nothing.
status: active
semantic_text: An empty query in the web client's command palette search returns nothing.
semantic_clauses:
  - An empty query in the web client's command palette search returns nothing
logic_claims:
  - CLAIM-C018BDD983E0F72C
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 0595bca3f6c58394a5404f0630543f087b83494101e9a8ac3a29aaaf48c98ce3
semantic_inventory:
  - claim_key: CLAIM-C018BDD983E0F72C
    claim_text: An empty query in the web client's command palette search returns nothing
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 73
    subjects:
      - client.web_client_command_palette_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Web client decision log (apps/papra-client): WCL-214'
  recorded_at: '2026-07-02T09:09:51.000Z'
tags:
  - bootstrap
  - knowledge-source:client-decisions
  - component:client
rationale: Listing everything for an empty query was the most expensive request the page made.
id: REQ-client-web-client-command-palette-search-empty-query
type: req
---
An empty query in the web client's command palette search returns nothing.

## Context

Listing everything for an empty query was the most expensive request the page made.

## Source

> feat(client): empty search query (WCL-214)

Source: Web client decision log (apps/papra-client) - WCL-214
