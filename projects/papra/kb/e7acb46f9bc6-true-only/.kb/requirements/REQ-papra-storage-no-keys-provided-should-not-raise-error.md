---
title: No keys provided should not raise an error.
status: active
semantic_text: No keys provided should not raise an error.
semantic_clauses:
  - No keys provided should not raise an error
logic_claims:
  - CLAIM-96E9F4785972A670
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 9c893d6451a69b4279d44490ba2c9f65290d5e15461c86857187479c61e91fa0
semantic_inventory:
  - claim_key: CLAIM-96E9F4785972A670
    claim_text: No keys provided should not raise an error
    role: normative
    status: modeled
    span:
      start: 0
      end: 42
    subjects:
      - storage.storage_key_encryption_keys_schema
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1738'
  recorded_at: '2026-07-10T16:17:55.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:storage
id: REQ-papra-storage-no-keys-provided-should-not-raise-error
type: req
---
No keys provided should not raise an error.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/storage/encryption/storage-encryption.schemas.test.ts (storage-encryption schemas > storageKeyEncryptionKeysSchema).

## Source

Source: Papra server behaviour notes - SRV-1738
