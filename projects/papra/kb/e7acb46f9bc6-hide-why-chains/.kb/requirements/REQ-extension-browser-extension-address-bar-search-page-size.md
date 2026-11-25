---
title: The browser extension's address-bar search returns at most 200 results per page.
status: active
semantic_text: The browser extension's address-bar search returns at most 200 results per page.
semantic_clauses:
  - The browser extension's address-bar search returns at most 200 results per page
logic_claims:
  - CLAIM-30E9AE0BEED1BFE1
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 78693d6cea41c3d8b8b6b282d03540032e4bc7bb236aabe4741faa2fdb3edb2a
semantic_inventory:
  - claim_key: CLAIM-30E9AE0BEED1BFE1
    claim_text: The browser extension's address-bar search returns at most 200 results per page
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 79
    subjects:
      - extension.browser_extension_address_bar_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Browser extension decision log: EXT-252'
  recorded_at: '2026-05-27T17:48:02.000Z'
tags:
  - bootstrap
  - knowledge-source:extension-decisions
  - component:extension
rationale: The response of a larger page was too big for mobile connections.
id: REQ-extension-browser-extension-address-bar-search-page-size
type: req
---
The browser extension's address-bar search returns at most 200 results per page.

## Context

The response of a larger page was too big for mobile connections.

## Source

> feat(extension): 200 results per page (EXT-252)

Source: Browser extension decision log - EXT-252
