---
title: Pinned tag names in the browser extension are limited to 32 characters.
status: active
semantic_text: Pinned tag names in the browser extension are limited to 32 characters.
semantic_clauses:
  - Pinned tag names in the browser extension are limited to 32 characters
logic_claims:
  - CLAIM-3C767480585F2DCC
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 8dfb888e40ca482c92a8f8247880d829555e262d550294940b5721599227f27d
semantic_inventory:
  - claim_key: CLAIM-3C767480585F2DCC
    claim_text: Pinned tag names in the browser extension are limited to 32 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 70
    subjects:
      - extension.pinned_tags
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Browser extension decision log: EXT-172'
  recorded_at: '2026-05-20T11:27:39.000Z'
tags:
  - bootstrap
  - knowledge-source:extension-decisions
  - component:extension
rationale: The column that stores the name is 32 characters wide.
id: REQ-extension-pinned-tags-name-length
type: req
---
Pinned tag names in the browser extension are limited to 32 characters.

## Context

The column that stores the name is 32 characters wide.

## Source

> feat(extension): cap pinned tag name length at 32 (EXT-172)

Source: Browser extension decision log - EXT-172
