---
title: Ignore pattern names in the desktop sync client are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is…
status: active
semantic_text: Ignore pattern names in the desktop sync client are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
semantic_clauses:
  - Ignore pattern names in the desktop sync client are trimmed of leading and trailing whitespace before they are saved
  - a name that is empty after trimming is refused
logic_claims:
  - CLAIM-C6E4BD157B4E1EB5
  - CLAIM-70D5F8163A64221A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 96eb45584333f44dffc74b91ae82586383ab14bfca4cf3a10db33e60d82034aa
semantic_inventory:
  - claim_key: CLAIM-C6E4BD157B4E1EB5
    claim_text: Ignore pattern names in the desktop sync client are trimmed of leading and trailing whitespace before they are saved
    role: normative
    status: modeled
    span:
      start: 0
      end: 116
    subjects:
      - desktop.ignore_patterns
  - claim_key: CLAIM-70D5F8163A64221A
    claim_text: a name that is empty after trimming is refused
    role: descriptive
    status: modeled
    span:
      start: 118
      end: 164
    subjects:
      - desktop.ignore_patterns
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Desktop sync client decision log: DSK-148'
  recorded_at: '2026-03-06T15:40:03.000Z'
tags:
  - bootstrap
  - knowledge-source:desktop-decisions
  - component:desktop
id: REQ-desktop-ignore-patterns-names-trimmed
type: req
---
Ignore pattern names in the desktop sync client are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.

## Context

Reason not stated.

## Source

> fix(desktop): trim ignore pattern names (DSK-148)

Source: Desktop sync client decision log - DSK-148
