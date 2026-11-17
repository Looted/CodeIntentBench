---
title: The browser extension's address-bar search runs only once the query has at least 3 characters.
status: active
semantic_text: The browser extension's address-bar search runs only once the query has at least 3 characters.
semantic_clauses:
  - The browser extension's address-bar search runs only once the query has at least 3 characters
logic_claims:
  - CLAIM-FC63C76310D39288
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 9e21ee3f2ee2d038d76f37ddc5755ce8fa15bec3a3ec016ecfe436101f099a23
semantic_inventory:
  - claim_key: CLAIM-FC63C76310D39288
    claim_text: The browser extension's address-bar search runs only once the query has at least 3 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 93
    subjects:
      - extension.browser_extension_address_bar_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Browser extension decision log: EXT-244'
  recorded_at: '2025-11-18T15:07:11.000Z'
tags:
  - bootstrap
  - knowledge-source:extension-decisions
  - component:extension
rationale: One-letter queries matched nearly everything and were slow to render.
id: REQ-extension-browser-extension-address-bar-search-minimum-length
type: req
---
The browser extension's address-bar search runs only once the query has at least 3 characters.

## Context

One-letter queries matched nearly everything and were slow to render.

## Source

> feat(extension): minimum query length 3 (EXT-244)

Source: Browser extension decision log - EXT-244
