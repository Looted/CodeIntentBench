---
title: At most 25 site rules can be created per browser profile in the browser extension; the limit is fixed.
status: active
semantic_text: At most 25 site rules can be created per browser profile in the browser extension; the limit is fixed.
semantic_clauses:
  - At most 25 site rules can be created per browser profile in the browser extension
  - the limit is fixed
logic_claims:
  - CLAIM-47D12D51CF65FFC4
  - CLAIM-9B85215C347D6099
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 1b84a342bcadb69f4d905db2f9b82ba26836a6368d3e5f5f0ccb7ff1516c0695
semantic_inventory:
  - claim_key: CLAIM-47D12D51CF65FFC4
    claim_text: At most 25 site rules can be created per browser profile in the browser extension
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 81
    subjects:
      - extension.site_rules
  - claim_key: CLAIM-9B85215C347D6099
    claim_text: the limit is fixed
    role: descriptive
    status: modeled
    span:
      start: 83
      end: 101
    subjects:
      - extension.site_rules
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Browser extension decision log: EXT-137'
  recorded_at: '2025-10-09T12:18:17.000Z'
tags:
  - bootstrap
  - knowledge-source:extension-decisions
  - component:extension
id: REQ-extension-site-rules-maximum-count
type: req
---
At most 25 site rules can be created per browser profile in the browser extension; the limit is fixed.

## Context

Reason not stated.

## Source

> feat(extension): limit site rules per browser profile (EXT-137)

Source: Browser extension decision log - EXT-137
