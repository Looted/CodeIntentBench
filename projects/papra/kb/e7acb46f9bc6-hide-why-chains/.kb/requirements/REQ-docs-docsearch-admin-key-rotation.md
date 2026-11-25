---
title: DOCSEARCH_ADMIN_KEY is rotated every 90 days; the previous value stays valid for 1 hours after a rotation.
status: active
semantic_text: DOCSEARCH_ADMIN_KEY is rotated every 90 days; the previous value stays valid for 1 hours after a rotation.
semantic_clauses:
  - DOCSEARCH_ADMIN_KEY is rotated every 90 days
  - the previous value stays valid for 1 hours after a rotation
logic_claims:
  - CLAIM-EADEB3EB95A94F01
  - CLAIM-BD83FC4FB2DF2432
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a67c715087ed2e91020a7763e46c9a5c9c351527434893a073a2e8e94aa65ff2
semantic_inventory:
  - claim_key: CLAIM-EADEB3EB95A94F01
    claim_text: DOCSEARCH_ADMIN_KEY is rotated every 90 days
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 44
    subjects:
      - docs.docsearch_admin_key
  - claim_key: CLAIM-BD83FC4FB2DF2432
    claim_text: the previous value stays valid for 1 hours after a rotation
    role: descriptive
    status: modeled
    span:
      start: 46
      end: 105
    subjects:
      - docs.docsearch_admin_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Documentation site decision log (apps/docs): DOC-312'
  recorded_at: '2026-07-04T15:14:27.000Z'
tags:
  - bootstrap
  - knowledge-source:docs-decisions
  - component:docs
id: REQ-docs-docsearch-admin-key-rotation
type: req
---
DOCSEARCH_ADMIN_KEY is rotated every 90 days; the previous value stays valid for 1 hours after a rotation.

## Context

Reason not stated.

## Source

> chore(docs): rotate DOCSEARCH_ADMIN_KEY every 90 days (DOC-312)

Source: Documentation site decision log (apps/docs) - DOC-312
