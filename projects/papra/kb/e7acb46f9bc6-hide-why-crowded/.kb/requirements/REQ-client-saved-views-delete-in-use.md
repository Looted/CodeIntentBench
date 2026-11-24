---
title: Deleting a saved view in the web client that is still in use is refused until nothing refers to it.
status: active
semantic_text: Deleting a saved view in the web client that is still in use is refused until nothing refers to it.
semantic_clauses:
  - Deleting a saved view in the web client that is still in use is refused until nothing refers to it
logic_claims:
  - CLAIM-1043EFE1591DC79B
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 24c15b905e3797e9d11bf07085a453e1085aec0f24b357fb363d3c609c9d5079
semantic_inventory:
  - claim_key: CLAIM-1043EFE1591DC79B
    claim_text: Deleting a saved view in the web client that is still in use is refused until nothing refers to it
    role: definition
    status: modeled
    span:
      start: 0
      end: 98
    subjects:
      - client.saved_views
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Web client decision log (apps/papra-client): WCL-132'
  recorded_at: '2026-07-27T10:16:25.000Z'
tags:
  - bootstrap
  - knowledge-source:client-decisions
  - component:client
id: REQ-client-saved-views-delete-in-use
type: req
---
Deleting a saved view in the web client that is still in use is refused until nothing refers to it.

## Context

Reason not stated.

## Source

> feat(client): refuse deleting saved views in use (WCL-132)

Source: Web client decision log (apps/papra-client) - WCL-132
