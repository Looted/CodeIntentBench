---
title: At most 10 tag filter shortcuts can be added or removed in one request in the web client.
status: active
semantic_text: At most 10 tag filter shortcuts can be added or removed in one request in the web client.
semantic_clauses:
  - At most 10 tag filter shortcuts can be added or removed in one request in the web client
logic_claims:
  - CLAIM-1B465AB161F23C33
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 8bcf603cbe2298e7d405135878f22a236489562e0229014b3b758a50a190cbc9
semantic_inventory:
  - claim_key: CLAIM-1B465AB161F23C33
    claim_text: At most 10 tag filter shortcuts can be added or removed in one request in the web client
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 88
    subjects:
      - client.tag_filter_shortcuts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Web client decision log (apps/papra-client): WCL-182'
  recorded_at: '2025-11-02T09:52:25.000Z'
tags:
  - bootstrap
  - knowledge-source:client-decisions
  - component:client
rationale: Requests with more than 10 tag filter shortcuts timed out on slow connections.
id: REQ-client-tag-filter-shortcuts-batch-size
type: req
---
At most 10 tag filter shortcuts can be added or removed in one request in the web client.

## Context

Requests with more than 10 tag filter shortcuts timed out on slow connections.

## Source

> feat(client): batch tag filter shortcuts, 10 per request (WCL-182)

Source: Web client decision log (apps/papra-client) - WCL-182
