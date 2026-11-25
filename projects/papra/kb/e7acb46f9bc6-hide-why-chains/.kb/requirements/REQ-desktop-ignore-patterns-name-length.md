---
title: Ignore pattern names in the desktop sync client are limited to 100 characters.
status: active
semantic_text: Ignore pattern names in the desktop sync client are limited to 100 characters.
semantic_clauses:
  - Ignore pattern names in the desktop sync client are limited to 100 characters
logic_claims:
  - CLAIM-146308EA261AED7F
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: dcfd04882a507f819121efec34663593cba8bce76743ce1364493e2f34eab5cb
semantic_inventory:
  - claim_key: CLAIM-146308EA261AED7F
    claim_text: Ignore pattern names in the desktop sync client are limited to 100 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 77
    subjects:
      - desktop.ignore_patterns
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Desktop sync client decision log: DSK-146'
  recorded_at: '2026-04-05T16:11:07.000Z'
tags:
  - bootstrap
  - knowledge-source:desktop-decisions
  - component:desktop
id: REQ-desktop-ignore-patterns-name-length
type: req
---
Ignore pattern names in the desktop sync client are limited to 100 characters.

## Context

Reason not stated.

## Source

> feat(desktop): cap ignore pattern name length at 100 (DSK-146)

Source: Desktop sync client decision log - DSK-146
