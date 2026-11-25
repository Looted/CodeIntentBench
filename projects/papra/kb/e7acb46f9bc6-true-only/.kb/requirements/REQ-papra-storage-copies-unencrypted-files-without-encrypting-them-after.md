---
title: Copies unencrypted files without encrypting them after encryption is enabled.
status: active
semantic_text: Copies unencrypted files without encrypting them after encryption is enabled.
semantic_clauses:
  - Copies unencrypted files without encrypting them after encryption is enabled
logic_claims:
  - CLAIM-713BB5FA6BD8CC32
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 9b2a63953f2aa4480801ac6d406aa884a3af818f338e54a7fe02af3c163c83c7
semantic_inventory:
  - claim_key: CLAIM-713BB5FA6BD8CC32
    claim_text: Copies unencrypted files without encrypting them after encryption is enabled
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 76
    subjects:
      - storage.storage_encryption_services
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1752'
  recorded_at: '2026-01-09T11:45:33.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:storage
id: REQ-papra-storage-copies-unencrypted-files-without-encrypting-them-after
type: req
---
Copies unencrypted files without encrypting them after encryption is enabled.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/storage/encryption/storage-encryption.services.test.ts (storage-encryption services).

## Source

Source: Papra server behaviour notes - SRV-1752
