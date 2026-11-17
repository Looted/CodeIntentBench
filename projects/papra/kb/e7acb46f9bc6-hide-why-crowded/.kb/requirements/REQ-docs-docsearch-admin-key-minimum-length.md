---
title: DOCSEARCH_ADMIN_KEY must be at least 16 characters long.
status: active
semantic_text: DOCSEARCH_ADMIN_KEY must be at least 16 characters long.
semantic_clauses:
  - DOCSEARCH_ADMIN_KEY must be at least 16 characters long
logic_claims:
  - CLAIM-41BCF76F5DABCD83
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: b533663d731f63853902d29576219c9ebd61abdac969d56af2b15baffc01439b
semantic_inventory:
  - claim_key: CLAIM-41BCF76F5DABCD83
    claim_text: DOCSEARCH_ADMIN_KEY must be at least 16 characters long
    role: normative
    status: modeled
    span:
      start: 0
      end: 55
    subjects:
      - docs.docsearch_admin_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Documentation site decision log (apps/docs): DOC-307'
  recorded_at: '2025-02-22T11:52:02.000Z'
tags:
  - bootstrap
  - knowledge-source:docs-decisions
  - component:docs
rationale: Short values of the index admin key can be guessed offline from one signed value.
id: REQ-docs-docsearch-admin-key-minimum-length
type: req
---
DOCSEARCH_ADMIN_KEY must be at least 16 characters long.

## Context

Short values of the index admin key can be guessed offline from one signed value.

## Source

> feat(docs): DOCSEARCH_ADMIN_KEY minimum length 16 (DOC-307)

Source: Documentation site decision log (apps/docs) - DOC-307
