---
title: Transformers multiple arguments can be quoted.
status: active
semantic_text: Transformers multiple arguments can be quoted.
semantic_clauses:
  - Transformers multiple arguments can be quoted
logic_claims:
  - CLAIM-4889893CE88FFC71
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 6901c4bf4277251027920d05eab628aa03fe66369f794044224be646a9e7b1b9
semantic_inventory:
  - claim_key: CLAIM-4889893CE88FFC71
    claim_text: Transformers multiple arguments can be quoted
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 45
    subjects:
      - documents.build_storage_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1398'
  recorded_at: '2026-09-10T15:51:21.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-transformers-multiple-arguments-can-be-quoted
type: req
---
Transformers multiple arguments can be quoted.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/storage-patterns/storage-pattern.usecases.test.ts (storage-pattern usecases > buildStorageKey > given a storage key pattern, returns a function that can interpolate it with a context).

## Source

Source: Papra server behaviour notes - SRV-1398
