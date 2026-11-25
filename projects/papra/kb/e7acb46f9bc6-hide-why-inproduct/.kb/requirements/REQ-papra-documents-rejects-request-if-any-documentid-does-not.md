---
title: Rejects the request if any documentId does not belong to the organization.
status: active
semantic_text: Rejects the request if any documentId does not belong to the organization.
semantic_clauses:
  - Rejects the request if any documentId does not belong to the organization
logic_claims:
  - CLAIM-53F02DD2DA1BA6A1
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 876d090a0f2a29941b5184f40c837b3b6272f137257c85016dd5a7285ab8c5b4
semantic_inventory:
  - claim_key: CLAIM-53F02DD2DA1BA6A1
    claim_text: Rejects the request if any documentId does not belong to the organization
    role: normative
    status: modeled
    span:
      start: 0
      end: 73
    subjects:
      - documents.tag_documents_batch
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1081'
  recorded_at: '2026-08-07T11:29:10.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-rejects-request-if-any-documentid-does-not
type: req
---
Rejects the request if any documentId does not belong to the organization.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents-batch/documents-batch.usecases.test.ts (documents-batch usecases > tagDocumentsBatch).

## Source

Source: Papra server behaviour notes - SRV-1081
