---
title: Given an array of document KEKs, the key with the highest version is returned.
status: active
semantic_text: Given an array of document KEKs, the key with the highest version is returned.
semantic_clauses:
  - Given an array of document KEKs, the key with the highest version is returned
logic_claims:
  - CLAIM-11E4770269ECFF6B
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: d2c89dccd0abe605a2f0b5172afa494f743d35fc0bd571daccec9a44fc7b9954
semantic_inventory:
  - claim_key: CLAIM-11E4770269ECFF6B
    claim_text: Given an array of document KEKs, the key with the highest version is returned
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 77
    subjects:
      - storage.get_most_recent_kek
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1731'
  recorded_at: '2025-02-01T15:27:08.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:storage
id: REQ-papra-storage-array-of-document-keks-key-with-highest
type: req
---
Given an array of document KEKs, the key with the highest version is returned.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/storage/encryption/storage-encryption.models.test.ts (storage-encryption models > getMostRecentKek).

## Source

Source: Papra server behaviour notes - SRV-1731
