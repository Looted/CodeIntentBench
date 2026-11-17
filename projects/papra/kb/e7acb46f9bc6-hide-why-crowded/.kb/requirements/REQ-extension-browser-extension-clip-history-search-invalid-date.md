---
title: 'An invalid date in the clipped: filter of the browser extension''s clip history search is ignored and the other filters still apply.'
status: active
semantic_text: 'An invalid date in the clipped: filter of the browser extension''s clip history search is ignored and the other filters still apply.'
semantic_clauses:
  - 'An invalid date in the clipped: filter of the browser extension''s clip history search is ignored and the other filters still apply'
logic_claims:
  - CLAIM-4EAB2B51470927AD
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a9546afa3e014f0ae99805f207bc8bd488fd165ce192eaa0a445c3ea3329bc10
semantic_inventory:
  - claim_key: CLAIM-4EAB2B51470927AD
    claim_text: 'An invalid date in the clipped: filter of the browser extension''s clip history search is ignored and the other filters still apply'
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 130
    subjects:
      - extension.browser_extension_clip_history_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Browser extension decision log: EXT-196'
  recorded_at: '2026-01-24T11:46:26.000Z'
tags:
  - bootstrap
  - knowledge-source:extension-decisions
  - component:extension
rationale: People mistyped a date, got an empty list and assumed nothing existed.
id: REQ-extension-browser-extension-clip-history-search-invalid-date
type: req
---
An invalid date in the clipped: filter of the browser extension's clip history search is ignored and the other filters still apply.

## Context

People mistyped a date, got an empty list and assumed nothing existed.

## Source

> fix(extension): invalid date in clipped: filter (EXT-196)

Source: Browser extension decision log - EXT-196
