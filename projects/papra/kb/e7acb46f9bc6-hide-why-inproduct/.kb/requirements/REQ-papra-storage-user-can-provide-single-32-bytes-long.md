---
title: The user can provide a single 32 bytes long hex string env variable.
status: active
semantic_text: The user can provide a single 32 bytes long hex string env variable.
semantic_clauses:
  - The user can provide a single 32 bytes long hex string env variable
logic_claims:
  - CLAIM-CEA694478025C999
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 3f41eb3bb5dd33c04f5bdf89fe9791a67a83e4c216089242aaea9a0d79a2cbd2
semantic_inventory:
  - claim_key: CLAIM-CEA694478025C999
    claim_text: The user can provide a single 32 bytes long hex string env variable
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 67
    subjects:
      - storage.storage_key_encryption_keys_schema
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1743'
  recorded_at: '2026-04-07T12:36:18.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:storage
id: REQ-papra-storage-user-can-provide-single-32-bytes-long
type: req
---
The user can provide a single 32 bytes long hex string env variable.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/storage/encryption/storage-encryption.schemas.test.ts (storage-encryption schemas > storageKeyEncryptionKeysSchema).

## Source

Source: Papra server behaviour notes - SRV-1743
