---
title: Skips pairs that already exist (idempotent re-apply).
status: active
semantic_text: Skips pairs that already exist (idempotent re-apply).
semantic_clauses:
  - Skips pairs that already exist (idempotent re-apply)
logic_claims:
  - CLAIM-B7933C3D77E685D5
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: e27cb966abbe00583d9b25701994baaec875208c626c077fb804aeeb62d63616
semantic_inventory:
  - claim_key: CLAIM-B7933C3D77E685D5
    claim_text: Skips pairs that already exist (idempotent re-apply)
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 52
    subjects:
      - documents.tag_documents_batch
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1088'
  recorded_at: '2025-12-09T17:13:06.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-skips-pairs-that-already-exist-idempotent-re
type: req
---
Skips pairs that already exist (idempotent re-apply).

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents-batch/documents-batch.usecases.test.ts (documents-batch usecases > tagDocumentsBatch).

## Source

Source: Papra server behaviour notes - SRV-1088
