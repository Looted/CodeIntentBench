---
title: Pinned tags in the browser extension are unique per browser profile regardless of letter case; a duplicate is reported as pinned-tag-already-exists.
status: active
semantic_text: Pinned tags in the browser extension are unique per browser profile regardless of letter case; a duplicate is reported as pinned-tag-already-exists.
semantic_clauses:
  - Pinned tags in the browser extension are unique per browser profile regardless of letter case
  - a duplicate is reported as pinned-tag-already-exists
logic_claims:
  - CLAIM-A9A6F741D042B3A5
  - CLAIM-F1D5D008D6CB1F1E
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: b0ceb26e793ba47ee91f54f0953f719386e83210fff58416f181cf3247da52cf
semantic_inventory:
  - claim_key: CLAIM-A9A6F741D042B3A5
    claim_text: Pinned tags in the browser extension are unique per browser profile regardless of letter case
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 93
    subjects:
      - extension.pinned_tags
  - claim_key: CLAIM-F1D5D008D6CB1F1E
    claim_text: a duplicate is reported as pinned-tag-already-exists
    role: descriptive
    status: modeled
    span:
      start: 95
      end: 147
    subjects:
      - extension.pinned_tags
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Browser extension decision log: EXT-164'
  recorded_at: '2026-04-26T15:02:29.000Z'
tags:
  - bootstrap
  - knowledge-source:extension-decisions
  - component:extension
id: REQ-extension-pinned-tags-unique-ignoring-case
type: req
---
Pinned tags in the browser extension are unique per browser profile regardless of letter case; a duplicate is reported as pinned-tag-already-exists.

## Context

Reason not stated.

## Source

> feat(extension): case-insensitive unique pinned tag names (EXT-164)

Source: Browser extension decision log - EXT-164
