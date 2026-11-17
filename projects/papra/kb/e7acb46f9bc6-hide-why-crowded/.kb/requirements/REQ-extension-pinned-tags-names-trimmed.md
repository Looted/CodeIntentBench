---
title: Pinned tag names in the browser extension are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
status: active
semantic_text: Pinned tag names in the browser extension are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
semantic_clauses:
  - Pinned tag names in the browser extension are trimmed of leading and trailing whitespace before they are saved
  - a name that is empty after trimming is refused
logic_claims:
  - CLAIM-DA1BC4C4AE86B2B1
  - CLAIM-70D5F8163A64221A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: eda20f63c5bda386ecde1deb549befa10f22b0ecca32cd41dad307325d9d83db
semantic_inventory:
  - claim_key: CLAIM-DA1BC4C4AE86B2B1
    claim_text: Pinned tag names in the browser extension are trimmed of leading and trailing whitespace before they are saved
    role: normative
    status: modeled
    span:
      start: 0
      end: 110
    subjects:
      - extension.pinned_tags
  - claim_key: CLAIM-70D5F8163A64221A
    claim_text: a name that is empty after trimming is refused
    role: descriptive
    status: modeled
    span:
      start: 112
      end: 158
    subjects:
      - extension.pinned_tags
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Browser extension decision log: EXT-175'
  recorded_at: '2026-08-12T11:07:22.000Z'
tags:
  - bootstrap
  - knowledge-source:extension-decisions
  - component:extension
id: REQ-extension-pinned-tags-names-trimmed
type: req
---
Pinned tag names in the browser extension are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.

## Context

Reason not stated.

## Source

> fix(extension): trim pinned tag names (EXT-175)

Source: Browser extension decision log - EXT-175
