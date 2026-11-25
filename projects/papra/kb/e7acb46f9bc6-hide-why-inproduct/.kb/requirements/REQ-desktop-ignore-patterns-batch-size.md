---
title: At most 25 ignore patterns can be added or removed in one request in the desktop sync client.
status: active
semantic_text: At most 25 ignore patterns can be added or removed in one request in the desktop sync client.
semantic_clauses:
  - At most 25 ignore patterns can be added or removed in one request in the desktop sync client
logic_claims:
  - CLAIM-B257BF041E3B448B
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: e9abf326c3d96ade28ad5534b2a3118377be265e14fe8075cd3d923689ea2668
semantic_inventory:
  - claim_key: CLAIM-B257BF041E3B448B
    claim_text: At most 25 ignore patterns can be added or removed in one request in the desktop sync client
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 92
    subjects:
      - desktop.ignore_patterns
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Desktop sync client decision log: DSK-162'
  recorded_at: '2026-04-17T16:42:08.000Z'
tags:
  - bootstrap
  - knowledge-source:desktop-decisions
  - component:desktop
rationale: Requests with more than 25 ignore patterns timed out on slow connections.
id: REQ-desktop-ignore-patterns-batch-size
type: req
---
At most 25 ignore patterns can be added or removed in one request in the desktop sync client.

## Context

Requests with more than 25 ignore patterns timed out on slow connections.

## Source

> feat(desktop): batch ignore patterns, 25 per request (DSK-162)

Source: Desktop sync client decision log - DSK-162
