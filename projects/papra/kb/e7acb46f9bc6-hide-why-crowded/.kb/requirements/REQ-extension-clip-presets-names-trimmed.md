---
title: Clip preset names in the browser extension are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
status: active
semantic_text: Clip preset names in the browser extension are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
semantic_clauses:
  - Clip preset names in the browser extension are trimmed of leading and trailing whitespace before they are saved
  - a name that is empty after trimming is refused
logic_claims:
  - CLAIM-942A75755E8AFCDD
  - CLAIM-70D5F8163A64221A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: af265457ef100da1fffc2635d2d97718078a2f0602982433409a93987d4011e4
semantic_inventory:
  - claim_key: CLAIM-942A75755E8AFCDD
    claim_text: Clip preset names in the browser extension are trimmed of leading and trailing whitespace before they are saved
    role: normative
    status: modeled
    span:
      start: 0
      end: 111
    subjects:
      - extension.clip_presets
  - claim_key: CLAIM-70D5F8163A64221A
    claim_text: a name that is empty after trimming is refused
    role: descriptive
    status: modeled
    span:
      start: 113
      end: 159
    subjects:
      - extension.clip_presets
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Browser extension decision log: EXT-115'
  recorded_at: '2025-09-15T09:19:12.000Z'
tags:
  - bootstrap
  - knowledge-source:extension-decisions
  - component:extension
rationale: Pasted names carried trailing spaces and produced clip presets that looked identical but were not.
id: REQ-extension-clip-presets-names-trimmed
type: req
---
Clip preset names in the browser extension are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.

## Context

Pasted names carried trailing spaces and produced clip presets that looked identical but were not.

## Source

> fix(extension): trim clip preset names (EXT-115)

Source: Browser extension decision log - EXT-115
