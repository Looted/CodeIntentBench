---
title: A deleted connected organization in the browser extension can be restored for 60 days; after that it is removed for good.
status: active
semantic_text: A deleted connected organization in the browser extension can be restored for 60 days; after that it is removed for good.
semantic_clauses:
  - A deleted connected organization in the browser extension can be restored for 60 days
  - after that it is removed for good
logic_claims:
  - CLAIM-62E4DF135C9C64CE
  - CLAIM-7E91447BA9FA2D3B
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: cfd22f369c8efbc49dd33d263039ad358fe0cbe32dfc2b647fd11d0b68a5c739
semantic_inventory:
  - claim_key: CLAIM-62E4DF135C9C64CE
    claim_text: A deleted connected organization in the browser extension can be restored for 60 days
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 85
    subjects:
      - extension.connected_organizations
  - claim_key: CLAIM-7E91447BA9FA2D3B
    claim_text: after that it is removed for good
    role: descriptive
    status: modeled
    span:
      start: 87
      end: 120
    subjects:
      - extension.connected_organizations
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Browser extension decision log: EXT-312'
  recorded_at: '2026-03-22T14:18:49.000Z'
tags:
  - bootstrap
  - knowledge-source:extension-decisions
  - component:extension
id: REQ-extension-connected-organizations-deletion-grace
type: req
---
A deleted connected organization in the browser extension can be restored for 60 days; after that it is removed for good.

## Context

Reason not stated.

## Source

> feat(extension): 60-day restore window for connected organizations (EXT-312)

Source: Browser extension decision log - EXT-312
