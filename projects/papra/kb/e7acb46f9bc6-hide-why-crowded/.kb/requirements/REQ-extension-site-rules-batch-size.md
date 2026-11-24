---
title: At most 50 site rules can be added or removed in one request in the browser extension.
status: active
semantic_text: At most 50 site rules can be added or removed in one request in the browser extension.
semantic_clauses:
  - At most 50 site rules can be added or removed in one request in the browser extension
logic_claims:
  - CLAIM-1DE33732B040650D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 299e46445eb684b88861a94cfe091036a0956998896e498c86ab08265b3a9bb5
semantic_inventory:
  - claim_key: CLAIM-1DE33732B040650D
    claim_text: At most 50 site rules can be added or removed in one request in the browser extension
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 85
    subjects:
      - extension.site_rules
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Browser extension decision log: EXT-156'
  recorded_at: '2025-09-14T13:00:45.000Z'
tags:
  - bootstrap
  - knowledge-source:extension-decisions
  - component:extension
rationale: Requests with more than 50 site rules timed out on slow connections.
id: REQ-extension-site-rules-batch-size
type: req
---
At most 50 site rules can be added or removed in one request in the browser extension.

## Context

Requests with more than 50 site rules timed out on slow connections.

## Source

> feat(extension): batch site rules, 50 per request (EXT-156)

Source: Browser extension decision log - EXT-156
