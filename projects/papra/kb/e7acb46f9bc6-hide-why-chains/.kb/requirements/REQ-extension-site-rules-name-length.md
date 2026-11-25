---
title: Site rule names in the browser extension are limited to 120 characters.
status: active
semantic_text: Site rule names in the browser extension are limited to 120 characters.
semantic_clauses:
  - Site rule names in the browser extension are limited to 120 characters
logic_claims:
  - CLAIM-1B82E14AAAA573F4
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f97142ba4de8e62948a31efb45e8498a8ec4d1a2dc3e9a1fbe32109f2bd8c9e3
semantic_inventory:
  - claim_key: CLAIM-1B82E14AAAA573F4
    claim_text: Site rule names in the browser extension are limited to 120 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 70
    subjects:
      - extension.site_rules
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Browser extension decision log: EXT-145'
  recorded_at: '2025-12-19T11:47:02.000Z'
tags:
  - bootstrap
  - knowledge-source:extension-decisions
  - component:extension
rationale: Longer names broke the layout of the list where site rules are shown.
id: REQ-extension-site-rules-name-length
type: req
---
Site rule names in the browser extension are limited to 120 characters.

## Context

Longer names broke the layout of the list where site rules are shown.

## Source

> feat(extension): cap site rule name length at 120 (EXT-145)

Source: Browser extension decision log - EXT-145
