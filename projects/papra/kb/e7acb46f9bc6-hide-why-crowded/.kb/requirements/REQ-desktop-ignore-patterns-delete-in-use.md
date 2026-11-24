---
title: Deleting an ignore pattern in the desktop sync client removes it from everything that uses it, without confirmation for each use.
status: active
semantic_text: Deleting an ignore pattern in the desktop sync client removes it from everything that uses it, without confirmation for each use.
semantic_clauses:
  - Deleting an ignore pattern in the desktop sync client removes it from everything that uses it, without confirmation for each use
logic_claims:
  - CLAIM-1A3006CBACDE71E5
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a8e590a4f4e77319cfb1bf382d152aff03d4c74eb93d48c04aae02516a139ecf
semantic_inventory:
  - claim_key: CLAIM-1A3006CBACDE71E5
    claim_text: Deleting an ignore pattern in the desktop sync client removes it from everything that uses it, without confirmation for each use
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 128
    subjects:
      - desktop.ignore_patterns
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Desktop sync client decision log: DSK-159'
  recorded_at: '2026-02-18T17:10:11.000Z'
tags:
  - bootstrap
  - knowledge-source:desktop-decisions
  - component:desktop
id: REQ-desktop-ignore-patterns-delete-in-use
type: req
---
Deleting an ignore pattern in the desktop sync client removes it from everything that uses it, without confirmation for each use.

## Context

Reason not stated.

## Source

> feat(desktop): deleting an ignore pattern detaches it (DSK-159)

Source: Desktop sync client decision log - DSK-159
