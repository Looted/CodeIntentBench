---
title: Transformers can have spaces around them.
status: active
semantic_text: Transformers can have spaces around them.
semantic_clauses:
  - Transformers can have spaces around them
logic_claims:
  - CLAIM-8DC7444A15520753
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: b4853f066d26d3b5db33ae71a683b5b637e0689030bac58ccaffa8f75caf9261
semantic_inventory:
  - claim_key: CLAIM-8DC7444A15520753
    claim_text: Transformers can have spaces around them
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 40
    subjects:
      - documents.build_storage_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1395'
  recorded_at: '2026-08-03T10:11:53.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-transformers-can-have-spaces-around-them
type: req
---
Transformers can have spaces around them.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/storage-patterns/storage-pattern.usecases.test.ts (storage-pattern usecases > buildStorageKey > given a storage key pattern, returns a function that can interpolate it with a context).

## Source

Source: Papra server behaviour notes - SRV-1395
