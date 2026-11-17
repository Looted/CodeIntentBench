---
title: Deleting a page tag on the documentation site that is still in use is refused until nothing refers to it.
status: active
semantic_text: Deleting a page tag on the documentation site that is still in use is refused until nothing refers to it.
semantic_clauses:
  - Deleting a page tag on the documentation site that is still in use is refused until nothing refers to it
logic_claims:
  - CLAIM-F523AAF60D2E9D16
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 5d2b7922aba571fabbbefdf7eabfdb322282b07c37b90e7636caf0996d5b6629
semantic_inventory:
  - claim_key: CLAIM-F523AAF60D2E9D16
    claim_text: Deleting a page tag on the documentation site that is still in use is refused until nothing refers to it
    role: definition
    status: modeled
    span:
      start: 0
      end: 104
    subjects:
      - docs.page_tags
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Documentation site decision log (apps/docs): DOC-117'
  recorded_at: '2025-04-24T12:31:46.000Z'
tags:
  - bootstrap
  - knowledge-source:docs-decisions
  - component:docs
rationale: A deleted page tag silently disappeared from everything that used it and nobody could tell what had been there.
id: REQ-docs-page-tags-delete-in-use
type: req
---
Deleting a page tag on the documentation site that is still in use is refused until nothing refers to it.

## Context

A deleted page tag silently disappeared from everything that used it and nobody could tell what had been there.

## Source

> feat(docs): refuse deleting page tags in use (DOC-117)

Source: Documentation site decision log (apps/docs) - DOC-117
