---
title: Pinned tags in the browser extension are listed alphabetically, ignoring letter case.
status: active
semantic_text: Pinned tags in the browser extension are listed alphabetically, ignoring letter case.
semantic_clauses:
  - Pinned tags in the browser extension are listed alphabetically, ignoring letter case
logic_claims:
  - CLAIM-19CA287A2E35D766
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a87645eacc1351a3411cc5dd973426822ea10f7d7b564a10890ae5835da6464a
semantic_inventory:
  - claim_key: CLAIM-19CA287A2E35D766
    claim_text: Pinned tags in the browser extension are listed alphabetically, ignoring letter case
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 84
    subjects:
      - extension.pinned_tags
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Browser extension decision log: EXT-180'
  recorded_at: '2026-07-02T11:33:34.000Z'
tags:
  - bootstrap
  - knowledge-source:extension-decisions
  - component:extension
rationale: The most used pinned tags are the ones picked again, so they come first.
id: REQ-extension-pinned-tags-listing-order
type: req
---
Pinned tags in the browser extension are listed alphabetically, ignoring letter case.

## Context

The most used pinned tags are the ones picked again, so they come first.

## Source

> feat(extension): order pinned tags alphabetically (EXT-180)

Source: Browser extension decision log - EXT-180
