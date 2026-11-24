---
title: The number of pinned tags per browser profile in the browser extension is limited to 300; the limit is configurable and 300 is the default.
status: active
semantic_text: The number of pinned tags per browser profile in the browser extension is limited to 300; the limit is configurable and 300 is the default.
semantic_clauses:
  - The number of pinned tags per browser profile in the browser extension is limited to 300
  - the limit is configurable and 300 is the default
logic_claims:
  - CLAIM-80B004997A1EEC65
  - CLAIM-33B228D1A7AD97C8
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 51fb19b80a8ca302d0829e38d55db60c04ad7a6200b5e825dc940b2fd0c01fd8
semantic_inventory:
  - claim_key: CLAIM-80B004997A1EEC65
    claim_text: The number of pinned tags per browser profile in the browser extension is limited to 300
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 88
    subjects:
      - extension.pinned_tags
  - claim_key: CLAIM-33B228D1A7AD97C8
    claim_text: the limit is configurable and 300 is the default
    role: descriptive
    status: modeled
    span:
      start: 90
      end: 138
    subjects:
      - extension.pinned_tags
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Browser extension decision log: EXT-169'
  recorded_at: '2025-04-27T15:13:24.000Z'
tags:
  - bootstrap
  - knowledge-source:extension-decisions
  - component:extension
rationale: An unbounded number of pinned tags had been used to store data the feature was never meant for.
id: REQ-extension-pinned-tags-maximum-count
type: req
---
The number of pinned tags per browser profile in the browser extension is limited to 300; the limit is configurable and 300 is the default.

## Context

An unbounded number of pinned tags had been used to store data the feature was never meant for.

## Source

> feat(extension): limit pinned tags per browser profile (EXT-169)

Source: Browser extension decision log - EXT-169
