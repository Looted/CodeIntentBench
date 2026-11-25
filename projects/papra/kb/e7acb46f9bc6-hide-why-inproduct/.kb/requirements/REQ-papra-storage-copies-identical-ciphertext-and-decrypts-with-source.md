---
title: Copies identical ciphertext and decrypts with the source context after key rotation.
status: active
semantic_text: Copies identical ciphertext and decrypts with the source context after key rotation.
semantic_clauses:
  - Copies identical ciphertext and decrypts with the source context after key rotation
logic_claims:
  - CLAIM-95848225651A3CDA
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: d16ac0d3a03ee7f58bd88eaa168a1f06b27393cf9f5a05fce245d2d1efb29418
semantic_inventory:
  - claim_key: CLAIM-95848225651A3CDA
    claim_text: Copies identical ciphertext and decrypts with the source context after key rotation
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 83
    subjects:
      - storage.storage_encryption_services
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1749'
  recorded_at: '2025-08-16T14:11:20.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:storage
id: REQ-papra-storage-copies-identical-ciphertext-and-decrypts-with-source
type: req
---
Copies identical ciphertext and decrypts with the source context after key rotation.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/storage/encryption/storage-encryption.services.test.ts (storage-encryption services).

## Source

Source: Papra server behaviour notes - SRV-1749
