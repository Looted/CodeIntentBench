---
title: Document dates resolve to their ISO timestamps independently of the current date.
status: active
semantic_text: Document dates resolve to their ISO timestamps independently of the current date.
semantic_clauses:
  - Document dates resolve to their ISO timestamps independently of the current date
logic_claims:
  - CLAIM-AD1374AFDFAED63D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f51ed53809608e51fe62bd5744582cf0fd39b0c4208411271782511371fe9663
semantic_inventory:
  - claim_key: CLAIM-AD1374AFDFAED63D
    claim_text: Document dates resolve to their ISO timestamps independently of the current date
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 80
    subjects:
      - documents.build_storage_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1372'
  recorded_at: '2025-06-08T13:54:58.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-document-dates-resolve-to-their-iso-timestamps
type: req
---
Document dates resolve to their ISO timestamps independently of the current date.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/storage-patterns/storage-pattern.usecases.test.ts (storage-pattern usecases > buildStorageKey).

## Source

Source: Papra server behaviour notes - SRV-1372
