---
title: The documentation search proxy refuses to start in production without DOCSEARCH_ADMIN_KEY.
status: active
semantic_text: The documentation search proxy refuses to start in production without DOCSEARCH_ADMIN_KEY.
semantic_clauses:
  - The documentation search proxy refuses to start in production without DOCSEARCH_ADMIN_KEY
logic_claims:
  - CLAIM-F2D28211FDCE0524
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 1d6ca0a04c5a653da4be0d11e8444631821fa76cf599d7c52d289eac7470bd32
semantic_inventory:
  - claim_key: CLAIM-F2D28211FDCE0524
    claim_text: The documentation search proxy refuses to start in production without DOCSEARCH_ADMIN_KEY
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 89
    subjects:
      - docs.docsearch_admin_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Documentation site decision log (apps/docs): DOC-299'
  recorded_at: '2026-06-27T14:25:11.000Z'
tags:
  - bootstrap
  - knowledge-source:docs-decisions
  - component:docs
id: REQ-docs-docsearch-admin-key-required-in-production
type: req
---
The documentation search proxy refuses to start in production without DOCSEARCH_ADMIN_KEY.

## Context

Reason not stated.

## Source

> feat(docs): require DOCSEARCH_ADMIN_KEY in production (DOC-299)

Source: Documentation site decision log (apps/docs) - DOC-299
