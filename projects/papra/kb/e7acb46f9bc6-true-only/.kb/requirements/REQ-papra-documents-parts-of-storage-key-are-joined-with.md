---
title: The parts of a storage key are joined with a slash.
status: active
semantic_text: The parts of a storage key are joined with a slash.
semantic_clauses:
  - The parts of a storage key are joined with a slash
logic_claims:
  - CLAIM-D4050BB158AE72E7
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 6c7a1c3db6ca29ccd652b2f57e6902b56cadf65e335be7404c5834e5d320b300
semantic_inventory:
  - claim_key: CLAIM-D4050BB158AE72E7
    claim_text: The parts of a storage key are joined with a slash
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 50
    subjects:
      - documents.join_storage_key_parts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1118'
  recorded_at: '2025-03-12T11:17:31.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-parts-of-storage-key-are-joined-with
type: req
---
The parts of a storage key are joined with a slash.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents.models.test.ts (documents models > joinStorageKeyParts).

## Source

Source: Papra server behaviour notes - SRV-1118
