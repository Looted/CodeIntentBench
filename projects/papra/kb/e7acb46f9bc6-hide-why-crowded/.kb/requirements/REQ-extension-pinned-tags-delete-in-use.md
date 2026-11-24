---
title: Deleting a pinned tag in the browser extension removes it from everything that uses it, without confirmation for each use.
status: active
semantic_text: Deleting a pinned tag in the browser extension removes it from everything that uses it, without confirmation for each use.
semantic_clauses:
  - Deleting a pinned tag in the browser extension removes it from everything that uses it, without confirmation for each use
logic_claims:
  - CLAIM-F93A45D1EA321F09
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c28333c032ce8c4e81788b0df3f795ef85a5bbfd61faa5f39b9035c494868ba2
semantic_inventory:
  - claim_key: CLAIM-F93A45D1EA321F09
    claim_text: Deleting a pinned tag in the browser extension removes it from everything that uses it, without confirmation for each use
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 121
    subjects:
      - extension.pinned_tags
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Browser extension decision log: EXT-181'
  recorded_at: '2025-08-22T12:18:19.000Z'
tags:
  - bootstrap
  - knowledge-source:extension-decisions
  - component:extension
rationale: Asking for confirmation once per use made cleaning up pinned tags impractical.
id: REQ-extension-pinned-tags-delete-in-use
type: req
---
Deleting a pinned tag in the browser extension removes it from everything that uses it, without confirmation for each use.

## Context

Asking for confirmation once per use made cleaning up pinned tags impractical.

## Source

> feat(extension): deleting a pinned tag detaches it (EXT-181)

Source: Browser extension decision log - EXT-181
