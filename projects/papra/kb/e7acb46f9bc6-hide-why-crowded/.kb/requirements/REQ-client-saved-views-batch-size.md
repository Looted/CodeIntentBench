---
title: At most 25 saved views can be added or removed in one request in the web client.
status: active
semantic_text: At most 25 saved views can be added or removed in one request in the web client.
semantic_clauses:
  - At most 25 saved views can be added or removed in one request in the web client
logic_claims:
  - CLAIM-6CD29141BCAA6495
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f2481bea5b5a4939f9561211a6a0c4b88262d954a297ef3dd9e4e593d569d6c9
semantic_inventory:
  - claim_key: CLAIM-6CD29141BCAA6495
    claim_text: At most 25 saved views can be added or removed in one request in the web client
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 79
    subjects:
      - client.saved_views
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Web client decision log (apps/papra-client): WCL-134'
  recorded_at: '2026-08-14T16:29:05.000Z'
tags:
  - bootstrap
  - knowledge-source:client-decisions
  - component:client
rationale: Requests with more than 25 saved views timed out on slow connections.
id: REQ-client-saved-views-batch-size
type: req
---
At most 25 saved views can be added or removed in one request in the web client.

## Context

Requests with more than 25 saved views timed out on slow connections.

## Source

> feat(client): batch saved views, 25 per request (WCL-134)

Source: Web client decision log (apps/papra-client) - WCL-134
