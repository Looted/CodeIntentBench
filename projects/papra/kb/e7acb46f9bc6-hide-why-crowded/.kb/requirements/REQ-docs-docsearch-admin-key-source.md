---
title: The documentation search proxy reads DOCSEARCH_ADMIN_KEY from the environment only, never from a configuration file.
status: active
semantic_text: The documentation search proxy reads DOCSEARCH_ADMIN_KEY from the environment only, never from a configuration file.
semantic_clauses:
  - The documentation search proxy reads DOCSEARCH_ADMIN_KEY from the environment only, never from a configuration file
logic_claims:
  - CLAIM-E054DB07FE78727F
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: cc1a66d48063733c915a72a509715ee6464d04dcbc7877a728851e12b5c39c71
semantic_inventory:
  - claim_key: CLAIM-E054DB07FE78727F
    claim_text: The documentation search proxy reads DOCSEARCH_ADMIN_KEY from the environment only, never from a configuration file
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 115
    subjects:
      - docs.docsearch_admin_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Documentation site decision log (apps/docs): DOC-317'
  recorded_at: '2025-11-21T15:36:37.000Z'
tags:
  - bootstrap
  - knowledge-source:docs-decisions
  - component:docs
id: REQ-docs-docsearch-admin-key-source
type: req
---
The documentation search proxy reads DOCSEARCH_ADMIN_KEY from the environment only, never from a configuration file.

## Context

Reason not stated.

## Source

> feat(docs): where DOCSEARCH_ADMIN_KEY is read from (DOC-317)

Source: Documentation site decision log (apps/docs) - DOC-317
