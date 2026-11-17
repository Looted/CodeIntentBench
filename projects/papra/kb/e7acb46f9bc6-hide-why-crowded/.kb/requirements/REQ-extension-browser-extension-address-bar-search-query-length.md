---
title: A query in the browser extension's address-bar search is limited to 4096 characters; longer input is cut to the limit without an error.
status: active
semantic_text: A query in the browser extension's address-bar search is limited to 4096 characters; longer input is cut to the limit without an error.
semantic_clauses:
  - A query in the browser extension's address-bar search is limited to 4096 characters
  - longer input is cut to the limit without an error
logic_claims:
  - CLAIM-094CD7A81CB1133C
  - CLAIM-7ABD8CACE2C520A4
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 95802d14602303ef7decea87b89c5b24c0a49fd53f0b2b3ff37104fdfc519e8c
semantic_inventory:
  - claim_key: CLAIM-094CD7A81CB1133C
    claim_text: A query in the browser extension's address-bar search is limited to 4096 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 83
    subjects:
      - extension.browser_extension_address_bar_search
  - claim_key: CLAIM-7ABD8CACE2C520A4
    claim_text: longer input is cut to the limit without an error
    role: descriptive
    status: modeled
    span:
      start: 85
      end: 134
    subjects:
      - extension.browser_extension_address_bar_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Browser extension decision log: EXT-233'
  recorded_at: '2026-07-07T16:15:42.000Z'
tags:
  - bootstrap
  - knowledge-source:extension-decisions
  - component:extension
id: REQ-extension-browser-extension-address-bar-search-query-length
type: req
---
A query in the browser extension's address-bar search is limited to 4096 characters; longer input is cut to the limit without an error.

## Context

Reason not stated.

## Source

> feat(extension): limit search query length to 4096 (EXT-233)

Source: Browser extension decision log - EXT-233
