---
title: The user can provide a single versioned 32 bytes long hex string env variable.
status: active
semantic_text: The user can provide a single versioned 32 bytes long hex string env variable.
semantic_clauses:
  - The user can provide a single versioned 32 bytes long hex string env variable
logic_claims:
  - CLAIM-CEA0A16F46DD0E4E
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: da8693270b3f3b8ac7a84ba19e4567eb3edbd1b9e53e7212080ab1f62b52505f
semantic_inventory:
  - claim_key: CLAIM-CEA0A16F46DD0E4E
    claim_text: The user can provide a single versioned 32 bytes long hex string env variable
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 77
    subjects:
      - storage.storage_key_encryption_keys_schema
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1745'
  recorded_at: '2025-05-12T13:51:41.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:storage
id: REQ-papra-storage-user-can-provide-single-versioned-32-bytes
type: req
---
The user can provide a single versioned 32 bytes long hex string env variable.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/storage/encryption/storage-encryption.schemas.test.ts (storage-encryption schemas > storageKeyEncryptionKeysSchema).

## Source

Source: Papra server behaviour notes - SRV-1745
