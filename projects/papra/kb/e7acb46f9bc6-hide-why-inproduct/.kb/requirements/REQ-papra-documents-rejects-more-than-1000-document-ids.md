---
title: Rejects more than 1000 document ids.
status: active
semantic_text: Rejects more than 1000 document ids.
semantic_clauses:
  - Rejects more than 1000 document ids
logic_claims:
  - CLAIM-2CB3F634B34E6288
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: d76bd5a22489d22a2b61c7703ceef6d3cbb4190677aa61e81ed1e4fb311b740a
semantic_inventory:
  - claim_key: CLAIM-2CB3F634B34E6288
    claim_text: Rejects more than 1000 document ids
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 35
    subjects:
      - documents.batch_trash_body_schema
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1048'
  recorded_at: '2025-04-06T17:52:30.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-rejects-more-than-1000-document-ids
type: req
---
Rejects more than 1000 document ids.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents-batch/documents-batch.schemas.test.ts (documents-batch.schemas > batchTrashBodySchema).

## Source

Source: Papra server behaviour notes - SRV-1048
