---
title: Does not emit any event when nothing changes.
status: active
semantic_text: Does not emit any event when nothing changes.
semantic_clauses:
  - Does not emit any event when nothing changes
logic_claims:
  - CLAIM-4469D0F39ACE4B2C
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 917eae59ad2d165ca04d907e16cfc8450136683f820371355675cbd05a12ead0
semantic_inventory:
  - claim_key: CLAIM-4469D0F39ACE4B2C
    claim_text: Does not emit any event when nothing changes
    role: normative
    status: modeled
    span:
      start: 0
      end: 44
    subjects:
      - documents.tag_documents_batch
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1058'
  recorded_at: '2025-07-04T11:49:33.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-does-not-emit-any-event-when-nothing
type: req
---
Does not emit any event when nothing changes.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents-batch/documents-batch.usecases.test.ts (documents-batch usecases > tagDocumentsBatch).

## Source

Source: Papra server behaviour notes - SRV-1058
