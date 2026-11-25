---
title: A custom default overrides the missing document date fallback.
status: active
semantic_text: A custom default overrides the missing document date fallback.
semantic_clauses:
  - A custom default overrides the missing document date fallback
logic_claims:
  - CLAIM-CF72E76250B489FE
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: e7250c1ffd9e596f681d209e0a6a078e780ea5ed48887f5b065204350de976ad
semantic_inventory:
  - claim_key: CLAIM-CF72E76250B489FE
    claim_text: A custom default overrides the missing document date fallback
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 61
    subjects:
      - documents.build_storage_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1339'
  recorded_at: '2025-09-17T16:52:12.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-custom-default-overrides-missing-document-date-fallback
type: req
---
A custom default overrides the missing document date fallback.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/storage-patterns/storage-pattern.usecases.test.ts (storage-pattern usecases > buildStorageKey).

## Source

Source: Papra server behaviour notes - SRV-1339
