---
title: At most 20 saved views can be created per user in the web client.
status: closed
semantic_text: At most 20 saved views can be created per user in the web client.
semantic_clauses:
  - At most 20 saved views can be created per user in the web client
logic_claims:
  - CLAIM-CF64276306AC6266
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 885d095fe32ab0a88223758e287a4ed280a7ac9997762bb4eb532b68974aa394
semantic_inventory:
  - claim_key: CLAIM-CF64276306AC6266
    claim_text: At most 20 saved views can be created per user in the web client
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
  ref: 'Web client decision log (apps/papra-client): WCL-73'
  recorded_at: '2025-08-03T14:55:05.000Z'
tags:
  - bootstrap
  - knowledge-source:client-decisions
  - component:client
id: REQ-client-saved-views-maximum-count-earlier
type: req
---
At most 20 saved views can be created per user in the web client.

## Context

Reason not stated.

## Source

> feat(client): limit saved views per user (WCL-73)

Source: Web client decision log (apps/papra-client) - WCL-73
