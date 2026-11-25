---
title: Ignore patterns in the desktop sync client are compared exactly as typed; two ignore patterns that differ only by letter case are distinct.
status: active
semantic_text: Ignore patterns in the desktop sync client are compared exactly as typed; two ignore patterns that differ only by letter case are distinct.
semantic_clauses:
  - Ignore patterns in the desktop sync client are compared exactly as typed
  - two ignore patterns that differ only by letter case are distinct
logic_claims:
  - CLAIM-C7569CE3EACE6D50
  - CLAIM-DED5A15A622AF90A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: d847c0edee392017bd91d54362fc72a08e304ae5a42f301b67fa0ad02e6e9b81
semantic_inventory:
  - claim_key: CLAIM-C7569CE3EACE6D50
    claim_text: Ignore patterns in the desktop sync client are compared exactly as typed
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 72
    subjects:
      - desktop.ignore_patterns
  - claim_key: CLAIM-DED5A15A622AF90A
    claim_text: two ignore patterns that differ only by letter case are distinct
    role: descriptive
    status: modeled
    span:
      start: 74
      end: 138
    subjects:
      - desktop.ignore_patterns
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Desktop sync client decision log: DSK-133'
  recorded_at: '2025-06-05T16:23:27.000Z'
tags:
  - bootstrap
  - knowledge-source:desktop-decisions
  - component:desktop
id: REQ-desktop-ignore-patterns-case-sensitive-names
type: req
---
Ignore patterns in the desktop sync client are compared exactly as typed; two ignore patterns that differ only by letter case are distinct.

## Context

Reason not stated.

## Source

> docs(desktop): ignore pattern names are case-sensitive (DSK-133)

Source: Desktop sync client decision log - DSK-133
