---
title: Combined add and remove in one call.
status: active
semantic_text: Combined add and remove in one call.
semantic_clauses:
  - Combined add and remove in one call
logic_claims:
  - CLAIM-6E30067DB167681B
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f782a81c7a51b4d786dd5441da89d4abf590ea34a5ef7e9c6300752a68fcd1d2
semantic_inventory:
  - claim_key: CLAIM-6E30067DB167681B
    claim_text: Combined add and remove in one call
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 35
    subjects:
      - documents.tag_documents_batch
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1056'
  recorded_at: '2025-05-20T13:36:51.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-combined-add-and-remove-in-one-call
type: req
---
Combined add and remove in one call.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents-batch/documents-batch.usecases.test.ts (documents-batch usecases > tagDocumentsBatch).

## Source

Source: Papra server behaviour notes - SRV-1056
