---
title: Throws an error if any of the provided documentIds do not belong to the organization.
status: active
semantic_text: Throws an error if any of the provided documentIds do not belong to the organization.
semantic_clauses:
  - Throws an error if any of the provided documentIds do not belong to the organization
logic_claims:
  - CLAIM-5A61609A6B7CF1AC
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 77d12c733b8fdf3ba780a967e85ffd1d1b9bb90024768ab44b59845a3778955e
semantic_inventory:
  - claim_key: CLAIM-5A61609A6B7CF1AC
    claim_text: Throws an error if any of the provided documentIds do not belong to the organization
    role: normative
    status: modeled
    span:
      start: 0
      end: 84
    subjects:
      - documents.resolve_batch_target_document_ids
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1092'
  recorded_at: '2025-09-13T11:34:16.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-throws-error-if-any-of-provided-documentids
type: req
---
Throws an error if any of the provided documentIds do not belong to the organization.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents-batch/documents-batch.usecases.test.ts (documents-batch usecases > resolveBatchTargetDocumentIds).

## Source

Source: Papra server behaviour notes - SRV-1092
