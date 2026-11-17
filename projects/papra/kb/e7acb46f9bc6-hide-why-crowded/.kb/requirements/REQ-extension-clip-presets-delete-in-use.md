---
title: Deleting a clip preset in the browser extension removes it from everything that uses it, without confirmation for each use.
status: active
semantic_text: Deleting a clip preset in the browser extension removes it from everything that uses it, without confirmation for each use.
semantic_clauses:
  - Deleting a clip preset in the browser extension removes it from everything that uses it, without confirmation for each use
logic_claims:
  - CLAIM-EF14977250E58A7A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: ede96193419ddf91ad637e8f086be39a0d74533d289c4661b633f40aa5f1d6b8
semantic_inventory:
  - claim_key: CLAIM-EF14977250E58A7A
    claim_text: Deleting a clip preset in the browser extension removes it from everything that uses it, without confirmation for each use
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 122
    subjects:
      - extension.clip_presets
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Browser extension decision log: EXT-123'
  recorded_at: '2026-07-10T13:36:24.000Z'
tags:
  - bootstrap
  - knowledge-source:extension-decisions
  - component:extension
rationale: Asking for confirmation once per use made cleaning up clip presets impractical.
id: REQ-extension-clip-presets-delete-in-use
type: req
---
Deleting a clip preset in the browser extension removes it from everything that uses it, without confirmation for each use.

## Context

Asking for confirmation once per use made cleaning up clip presets impractical.

## Source

> feat(extension): deleting a clip preset detaches it (EXT-123)

Source: Browser extension decision log - EXT-123
