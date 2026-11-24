---
title: The browser extension's clip history search runs only once the query has at least 1 character.
status: active
semantic_text: The browser extension's clip history search runs only once the query has at least 1 character.
semantic_clauses:
  - The browser extension's clip history search runs only once the query has at least 1 character
logic_claims:
  - CLAIM-2417CE600256F8BD
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f66d0bbffa8686330e318f43c96123bc4fac8c87c43b8140f5b1934b84e689a3
semantic_inventory:
  - claim_key: CLAIM-2417CE600256F8BD
    claim_text: The browser extension's clip history search runs only once the query has at least 1 character
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 93
    subjects:
      - extension.browser_extension_clip_history_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Browser extension decision log: EXT-202'
  recorded_at: '2025-09-25T12:12:58.000Z'
tags:
  - bootstrap
  - knowledge-source:extension-decisions
  - component:extension
rationale: One-letter queries matched nearly everything and were slow to render.
id: REQ-extension-browser-extension-clip-history-search-minimum-length
type: req
---
The browser extension's clip history search runs only once the query has at least 1 character.

## Context

One-letter queries matched nearly everything and were slow to render.

## Source

> feat(extension): minimum query length 1 (EXT-202)

Source: Browser extension decision log - EXT-202
