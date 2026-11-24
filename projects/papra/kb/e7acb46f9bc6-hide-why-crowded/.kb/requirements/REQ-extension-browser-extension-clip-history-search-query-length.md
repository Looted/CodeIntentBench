---
title: A query in the browser extension's clip history search is limited to 64 characters; longer input is rejected with a validation error.
status: active
semantic_text: A query in the browser extension's clip history search is limited to 64 characters; longer input is rejected with a validation error.
semantic_clauses:
  - A query in the browser extension's clip history search is limited to 64 characters
  - longer input is rejected with a validation error
logic_claims:
  - CLAIM-D5FBC77781F701ED
  - CLAIM-778F39B5CA222673
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a4f5e997bd6031e504093784b208bf5a21e8ad9afd736c2a7249291f0972afeb
semantic_inventory:
  - claim_key: CLAIM-D5FBC77781F701ED
    claim_text: A query in the browser extension's clip history search is limited to 64 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 82
    subjects:
      - extension.browser_extension_clip_history_search
  - claim_key: CLAIM-778F39B5CA222673
    claim_text: longer input is rejected with a validation error
    role: normative
    status: modeled
    span:
      start: 84
      end: 132
    subjects:
      - extension.browser_extension_clip_history_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Browser extension decision log: EXT-194'
  recorded_at: '2026-03-03T13:52:39.000Z'
tags:
  - bootstrap
  - knowledge-source:extension-decisions
  - component:extension
id: REQ-extension-browser-extension-clip-history-search-query-length
type: req
---
A query in the browser extension's clip history search is limited to 64 characters; longer input is rejected with a validation error.

## Context

Reason not stated.

## Source

> feat(extension): limit search query length to 64 (EXT-194)

Source: Browser extension decision log - EXT-194
