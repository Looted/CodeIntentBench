---
title: 'An invalid date in the saved: filter of the browser extension''s address-bar search makes the search return nothing.'
status: active
semantic_text: 'An invalid date in the saved: filter of the browser extension''s address-bar search makes the search return nothing.'
semantic_clauses:
  - 'An invalid date in the saved: filter of the browser extension''s address-bar search makes the search return nothing'
logic_claims:
  - CLAIM-91B01797AE2E9B17
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 046ba0cce9711b9b0112447abcff708c352e137b83fdf8bd72f3a45eb1a94f1a
semantic_inventory:
  - claim_key: CLAIM-91B01797AE2E9B17
    claim_text: 'An invalid date in the saved: filter of the browser extension''s address-bar search makes the search return nothing'
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 114
    subjects:
      - extension.browser_extension_address_bar_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Browser extension decision log: EXT-236'
  recorded_at: '2025-02-08T08:50:18.000Z'
tags:
  - bootstrap
  - knowledge-source:extension-decisions
  - component:extension
rationale: People mistyped a date, got an empty list and assumed nothing existed.
id: REQ-extension-browser-extension-address-bar-search-invalid-date
type: req
---
An invalid date in the saved: filter of the browser extension's address-bar search makes the search return nothing.

## Context

People mistyped a date, got an empty list and assumed nothing existed.

## Source

> fix(extension): invalid date in saved: filter (EXT-236)

Source: Browser extension decision log - EXT-236
