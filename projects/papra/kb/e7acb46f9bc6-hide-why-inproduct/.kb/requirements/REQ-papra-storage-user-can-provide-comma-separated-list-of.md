---
title: The user can provide a comma separated list of 32 bytes long hex strings env variable.
status: active
semantic_text: The user can provide a comma separated list of 32 bytes long hex strings env variable.
semantic_clauses:
  - The user can provide a comma separated list of 32 bytes long hex strings env variable
logic_claims:
  - CLAIM-ED3A17029E5A44EC
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 0b88a2bbd83c2cc38d79cce46303b8ba8167d852188e1e2297b7533543975bc9
semantic_inventory:
  - claim_key: CLAIM-ED3A17029E5A44EC
    claim_text: The user can provide a comma separated list of 32 bytes long hex strings env variable
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 85
    subjects:
      - storage.storage_key_encryption_keys_schema
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1740'
  recorded_at: '2025-10-20T17:42:34.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:storage
id: REQ-papra-storage-user-can-provide-comma-separated-list-of
type: req
---
The user can provide a comma separated list of 32 bytes long hex strings env variable.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/storage/encryption/storage-encryption.schemas.test.ts (storage-encryption schemas > storageKeyEncryptionKeysSchema).

## Source

Source: Papra server behaviour notes - SRV-1740
