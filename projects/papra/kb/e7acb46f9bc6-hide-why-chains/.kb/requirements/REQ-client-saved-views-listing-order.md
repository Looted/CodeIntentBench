---
title: Saved views in the web client are listed by most recent use first.
status: active
semantic_text: Saved views in the web client are listed by most recent use first.
semantic_clauses:
  - Saved views in the web client are listed by most recent use first
logic_claims:
  - CLAIM-0D891664175F9CC5
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: d7b7d9c99d765d68e24496d65cd0b83658b17af93c5879d5bf60d6082b10591b
semantic_inventory:
  - claim_key: CLAIM-0D891664175F9CC5
    claim_text: Saved views in the web client are listed by most recent use first
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 65
    subjects:
      - client.saved_views
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Web client decision log (apps/papra-client): WCL-131'
  recorded_at: '2025-08-01T11:20:46.000Z'
tags:
  - bootstrap
  - knowledge-source:client-decisions
  - component:client
rationale: People looked for a saved view by name and could not find it in a list ordered by creation.
id: REQ-client-saved-views-listing-order
type: req
---
Saved views in the web client are listed by most recent use first.

## Context

People looked for a saved view by name and could not find it in a list ordered by creation.

## Source

> feat(client): order saved views by most recent use first (WCL-131)

Source: Web client decision log (apps/papra-client) - WCL-131
