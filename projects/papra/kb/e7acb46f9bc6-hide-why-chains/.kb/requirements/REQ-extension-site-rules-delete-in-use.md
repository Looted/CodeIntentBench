---
title: Deleting a site rule in the browser extension that is still in use is refused until nothing refers to it.
status: active
semantic_text: Deleting a site rule in the browser extension that is still in use is refused until nothing refers to it.
semantic_clauses:
  - Deleting a site rule in the browser extension that is still in use is refused until nothing refers to it
logic_claims:
  - CLAIM-3A466EC34538FA0D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 6e45365cc27fcad433cb82f199c7749e5cf5577f97a15fa11f815881d20e72db
semantic_inventory:
  - claim_key: CLAIM-3A466EC34538FA0D
    claim_text: Deleting a site rule in the browser extension that is still in use is refused until nothing refers to it
    role: definition
    status: modeled
    span:
      start: 0
      end: 104
    subjects:
      - extension.site_rules
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Browser extension decision log: EXT-154'
  recorded_at: '2025-03-27T09:35:38.000Z'
tags:
  - bootstrap
  - knowledge-source:extension-decisions
  - component:extension
rationale: A deleted site rule silently disappeared from everything that used it and nobody could tell what had been there.
id: REQ-extension-site-rules-delete-in-use
type: req
---
Deleting a site rule in the browser extension that is still in use is refused until nothing refers to it.

## Context

A deleted site rule silently disappeared from everything that used it and nobody could tell what had been there.

## Source

> feat(extension): refuse deleting site rules in use (EXT-154)

Source: Browser extension decision log - EXT-154
