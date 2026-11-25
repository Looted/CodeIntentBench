---
title: Saved view names in the web client are limited to 120 characters.
status: active
semantic_text: Saved view names in the web client are limited to 120 characters.
semantic_clauses:
  - Saved view names in the web client are limited to 120 characters
logic_claims:
  - CLAIM-6B76FEAC90108C76
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 0d4ad22d29d190caa7a105463f5264e54a09460217fc2d879985dd98055c3f2d
semantic_inventory:
  - claim_key: CLAIM-6B76FEAC90108C76
    claim_text: Saved view names in the web client are limited to 120 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 64
    subjects:
      - client.saved_views
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Web client decision log (apps/papra-client): WCL-121'
  recorded_at: '2026-06-18T09:28:15.000Z'
tags:
  - bootstrap
  - knowledge-source:client-decisions
  - component:client
rationale: Longer names broke the layout of the list where saved views are shown.
id: REQ-client-saved-views-name-length
type: req
---
Saved view names in the web client are limited to 120 characters.

## Context

Longer names broke the layout of the list where saved views are shown.

## Source

> feat(client): cap saved view name length at 120 (WCL-121)

Source: Web client decision log (apps/papra-client) - WCL-121
