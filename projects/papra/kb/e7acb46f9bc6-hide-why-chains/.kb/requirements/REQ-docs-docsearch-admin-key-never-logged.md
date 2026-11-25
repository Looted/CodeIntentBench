---
title: The documentation search proxy never writes DOCSEARCH_ADMIN_KEY or a value derived from it to its logs; startup logs show only whether it is set.
status: active
semantic_text: The documentation search proxy never writes DOCSEARCH_ADMIN_KEY or a value derived from it to its logs; startup logs show only whether it is set.
semantic_clauses:
  - The documentation search proxy never writes DOCSEARCH_ADMIN_KEY or a value derived from it to its logs
  - startup logs show only whether it is set
logic_claims:
  - CLAIM-3866EF191960B543
  - CLAIM-2AB50BBAACA14801
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 4647fb3ab09cf4fa3494b61ea07c862ca6adba2e26a0900734e2b48ee251c4d7
semantic_inventory:
  - claim_key: CLAIM-3866EF191960B543
    claim_text: The documentation search proxy never writes DOCSEARCH_ADMIN_KEY or a value derived from it to its logs
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 102
    subjects:
      - docs.docsearch_admin_key
  - claim_key: CLAIM-2AB50BBAACA14801
    claim_text: startup logs show only whether it is set
    role: descriptive
    status: modeled
    span:
      start: 104
      end: 144
    subjects:
      - docs.docsearch_admin_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Documentation site decision log (apps/docs): DOC-319'
  recorded_at: '2026-03-13T11:53:07.000Z'
tags:
  - bootstrap
  - knowledge-source:docs-decisions
  - component:docs
rationale: A debug log line had printed the configuration, the secret included.
id: REQ-docs-docsearch-admin-key-never-logged
type: req
---
The documentation search proxy never writes DOCSEARCH_ADMIN_KEY or a value derived from it to its logs; startup logs show only whether it is set.

## Context

A debug log line had printed the configuration, the secret included.

## Source

> fix(docs): keep DOCSEARCH_ADMIN_KEY out of logs (DOC-319)

Source: Documentation site decision log (apps/docs) - DOC-319
