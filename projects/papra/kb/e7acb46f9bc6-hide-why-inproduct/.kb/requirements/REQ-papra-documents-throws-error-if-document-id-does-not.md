---
title: Throws an error if a document id does not exist.
status: active
semantic_text: Throws an error if a document id does not exist.
semantic_clauses:
  - Throws an error if a document id does not exist
logic_claims:
  - CLAIM-4CC750CEE5A5C4FA
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: d4070a7f8c8d3770ce806fffd2f2b3bef898979fd15b3d37a35080b1ce933544
semantic_inventory:
  - claim_key: CLAIM-4CC750CEE5A5C4FA
    claim_text: Throws an error if a document id does not exist
    role: normative
    status: modeled
    span:
      start: 0
      end: 47
    subjects:
      - documents.resolve_batch_target_document_ids
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1091'
  recorded_at: '2025-08-26T16:07:15.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-throws-error-if-document-id-does-not
type: req
---
Throws an error if a document id does not exist.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents-batch/documents-batch.usecases.test.ts (documents-batch usecases > resolveBatchTargetDocumentIds).

## Source

Source: Papra server behaviour notes - SRV-1091
