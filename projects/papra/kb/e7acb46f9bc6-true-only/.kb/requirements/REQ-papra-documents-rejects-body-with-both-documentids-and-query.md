---
title: Rejects a body with both documentIds and query (strict union).
status: active
semantic_text: Rejects a body with both documentIds and query (strict union).
semantic_clauses:
  - Rejects a body with both documentIds and query (strict union)
logic_claims:
  - CLAIM-2F83BD8F5358A8F4
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: b834ec5859e061baa897090b7b10ec37d9a0fe6b9aa4e573cd39a3b5fabfd356
semantic_inventory:
  - claim_key: CLAIM-2F83BD8F5358A8F4
    claim_text: Rejects a body with both documentIds and query (strict union)
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 61
    subjects:
      - documents.batch_trash_body_schema
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1044'
  recorded_at: '2025-08-24T11:19:47.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-rejects-body-with-both-documentids-and-query
type: req
---
Rejects a body with both documentIds and query (strict union).

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents-batch/documents-batch.schemas.test.ts (documents-batch.schemas > batchTrashBodySchema).

## Source

Source: Papra server behaviour notes - SRV-1044
