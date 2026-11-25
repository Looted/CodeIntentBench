---
title: When no KEK is found, an error is thrown.
status: active
semantic_text: When no KEK is found, an error is thrown.
semantic_clauses:
  - When no KEK is found, an error is thrown
logic_claims:
  - CLAIM-D1D8BCAC9E623609
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 666032698c56ca07c1f79e3f2dce3abbcb86bc0450fc76a7192c567fd8cc2c0d
semantic_inventory:
  - claim_key: CLAIM-D1D8BCAC9E623609
    claim_text: When no KEK is found, an error is thrown
    role: condition
    status: modeled
    span:
      start: 0
      end: 40
    subjects:
      - storage.get_most_recent_kek
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1734'
  recorded_at: '2026-09-22T10:58:22.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:storage
id: REQ-papra-storage-no-kek-is-found-error-is-thrown
type: req
---
When no KEK is found, an error is thrown.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/storage/encryption/storage-encryption.models.test.ts (storage-encryption models > getMostRecentKek).

## Source

Source: Papra server behaviour notes - SRV-1734
