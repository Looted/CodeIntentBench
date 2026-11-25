---
title: Emits a single document.tags.changed event carrying the actually-changed pairs.
status: active
semantic_text: Emits a single document.tags.changed event carrying the actually-changed pairs.
semantic_clauses:
  - Emits a single document.tags.changed event carrying the actually-changed pairs
logic_claims:
  - CLAIM-C649AB52361C52BC
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 099ae9be880cb368c6c8f4db85f93b55c26a33e8ac3550fa22bf4e94b074003c
semantic_inventory:
  - claim_key: CLAIM-C649AB52361C52BC
    claim_text: Emits a single document.tags.changed event carrying the actually-changed pairs
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 78
    subjects:
      - documents.tag_documents_batch
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1066'
  recorded_at: '2025-12-23T11:59:10.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-emits-single-document-tags-changed-event-carrying
type: req
---
Emits a single document.tags.changed event carrying the actually-changed pairs.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents-batch/documents-batch.usecases.test.ts (documents-batch usecases > tagDocumentsBatch).

## Source

Source: Papra server behaviour notes - SRV-1066
