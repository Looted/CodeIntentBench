---
title: Clip presets in the browser extension are compared exactly as typed; two clip presets that differ only by letter case are distinct.
status: active
semantic_text: Clip presets in the browser extension are compared exactly as typed; two clip presets that differ only by letter case are distinct.
semantic_clauses:
  - Clip presets in the browser extension are compared exactly as typed
  - two clip presets that differ only by letter case are distinct
logic_claims:
  - CLAIM-B77E84F6B5BB5BB9
  - CLAIM-69AFA996CD5E61A7
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: b6d992e8084a66ed19ef9e66fd611c365527d28b20225e1f82e3a968f96554d6
semantic_inventory:
  - claim_key: CLAIM-B77E84F6B5BB5BB9
    claim_text: Clip presets in the browser extension are compared exactly as typed
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 67
    subjects:
      - extension.clip_presets
  - claim_key: CLAIM-69AFA996CD5E61A7
    claim_text: two clip presets that differ only by letter case are distinct
    role: descriptive
    status: modeled
    span:
      start: 69
      end: 130
    subjects:
      - extension.clip_presets
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Browser extension decision log: EXT-101'
  recorded_at: '2025-11-09T17:09:16.000Z'
tags:
  - bootstrap
  - knowledge-source:extension-decisions
  - component:extension
rationale: Existing data already held clip presets that differ only by case, and merging them would have lost information.
id: REQ-extension-clip-presets-case-sensitive-names
type: req
---
Clip presets in the browser extension are compared exactly as typed; two clip presets that differ only by letter case are distinct.

## Context

Existing data already held clip presets that differ only by case, and merging them would have lost information.

## Source

> docs(extension): clip preset names are case-sensitive (EXT-101)

Source: Browser extension decision log - EXT-101
