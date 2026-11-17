---
title: At most 20 pinned tags can be added or removed in one request in the browser extension.
status: active
semantic_text: At most 20 pinned tags can be added or removed in one request in the browser extension.
semantic_clauses:
  - At most 20 pinned tags can be added or removed in one request in the browser extension
logic_claims:
  - CLAIM-39416C6F0257B9F6
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 6faa53a61e47ac9993b615235e0e7e1ec50b606574b04f6b8163461e86fe5bd9
semantic_inventory:
  - claim_key: CLAIM-39416C6F0257B9F6
    claim_text: At most 20 pinned tags can be added or removed in one request in the browser extension
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 86
    subjects:
      - extension.pinned_tags
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Browser extension decision log: EXT-189'
  recorded_at: '2026-08-25T13:04:29.000Z'
tags:
  - bootstrap
  - knowledge-source:extension-decisions
  - component:extension
rationale: Requests with more than 20 pinned tags timed out on slow connections.
id: REQ-extension-pinned-tags-batch-size
type: req
---
At most 20 pinned tags can be added or removed in one request in the browser extension.

## Context

Requests with more than 20 pinned tags timed out on slow connections.

## Source

> feat(extension): batch pinned tags, 20 per request (EXT-189)

Source: Browser extension decision log - EXT-189
