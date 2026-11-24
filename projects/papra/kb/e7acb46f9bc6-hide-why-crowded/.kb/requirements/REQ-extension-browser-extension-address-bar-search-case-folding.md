---
title: Matching in the browser extension's address-bar search ignores letter case but not accents.
status: active
semantic_text: Matching in the browser extension's address-bar search ignores letter case but not accents.
semantic_clauses:
  - Matching in the browser extension's address-bar search ignores letter case but not accents
logic_claims:
  - CLAIM-B6159F0859C96EB7
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: e08f972a84b43e4b448d2130f5376def6e21e44d4019d2dff985c345fb233286
semantic_inventory:
  - claim_key: CLAIM-B6159F0859C96EB7
    claim_text: Matching in the browser extension's address-bar search ignores letter case but not accents
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 90
    subjects:
      - extension.browser_extension_address_bar_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Browser extension decision log: EXT-254'
  recorded_at: '2025-02-05T11:51:58.000Z'
tags:
  - bootstrap
  - knowledge-source:extension-decisions
  - component:extension
rationale: Identifiers that differ only by case are different things here.
id: REQ-extension-browser-extension-address-bar-search-case-folding
type: req
---
Matching in the browser extension's address-bar search ignores letter case but not accents.

## Context

Identifiers that differ only by case are different things here.

## Source

> feat(extension): search case folding (EXT-254)

Source: Browser extension decision log - EXT-254
