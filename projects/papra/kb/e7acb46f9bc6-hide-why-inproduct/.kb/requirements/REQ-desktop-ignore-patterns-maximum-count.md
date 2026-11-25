---
title: A sync folder can hold at most 150 ignore patterns in the desktop sync client; the limit is configurable and 150 is the default.
status: active
semantic_text: A sync folder can hold at most 150 ignore patterns in the desktop sync client; the limit is configurable and 150 is the default.
semantic_clauses:
  - A sync folder can hold at most 150 ignore patterns in the desktop sync client
  - the limit is configurable and 150 is the default
logic_claims:
  - CLAIM-06F19A2C7B9BD89D
  - CLAIM-D7D6BB55704C85FF
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 0c2a4144497b07e75bfbc22ef79b9ce794b4853acfe93d671191c74984eb5579
semantic_inventory:
  - claim_key: CLAIM-06F19A2C7B9BD89D
    claim_text: A sync folder can hold at most 150 ignore patterns in the desktop sync client
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 77
    subjects:
      - desktop.ignore_patterns
  - claim_key: CLAIM-D7D6BB55704C85FF
    claim_text: the limit is configurable and 150 is the default
    role: descriptive
    status: modeled
    span:
      start: 79
      end: 127
    subjects:
      - desktop.ignore_patterns
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Desktop sync client decision log: DSK-141'
  recorded_at: '2026-06-12T12:06:54.000Z'
tags:
  - bootstrap
  - knowledge-source:desktop-decisions
  - component:desktop
id: REQ-desktop-ignore-patterns-maximum-count
type: req
---
A sync folder can hold at most 150 ignore patterns in the desktop sync client; the limit is configurable and 150 is the default.

## Context

Reason not stated.

## Source

> feat(desktop): limit ignore patterns per sync folder (DSK-141)

Source: Desktop sync client decision log - DSK-141
