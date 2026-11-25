---
title: An unset document date falls back to no-date with or without date formatting.
status: active
semantic_text: An unset document date falls back to no-date with or without date formatting.
semantic_clauses:
  - An unset document date falls back to no-date with or without date formatting
logic_claims:
  - CLAIM-BB85551BD4FCD901
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 246e27d796a60cffe2c7e437cda781cd5938beae41f39dd87e32b28ffa3b816c
semantic_inventory:
  - claim_key: CLAIM-BB85551BD4FCD901
    claim_text: An unset document date falls back to no-date with or without date formatting
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 76
    subjects:
      - documents.build_storage_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1367'
  recorded_at: '2025-09-25T15:39:39.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-unset-document-date-falls-back-to-no
type: req
---
An unset document date falls back to no-date with or without date formatting.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/storage-patterns/storage-pattern.usecases.test.ts (storage-pattern usecases > buildStorageKey).

## Source

Source: Papra server behaviour notes - SRV-1367
