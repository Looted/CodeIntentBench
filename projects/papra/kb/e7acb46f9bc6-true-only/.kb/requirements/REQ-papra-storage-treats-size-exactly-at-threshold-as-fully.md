---
title: Treats a size exactly at the threshold as fully buffered.
status: active
semantic_text: Treats a size exactly at the threshold as fully buffered.
semantic_clauses:
  - Treats a size exactly at the threshold as fully buffered
logic_claims:
  - CLAIM-95CCC1A0943C1867
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 4ae4f8c9cc4d080d460370caff508db1002c54932907a441e9b3b50f7a5dc0cf
semantic_inventory:
  - claim_key: CLAIM-95CCC1A0943C1867
    claim_text: Treats a size exactly at the threshold as fully buffered
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 56
    subjects:
      - storage.buffer_stream_up_to_threshold
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1729'
  recorded_at: '2025-11-04T10:33:22.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:storage
id: REQ-papra-storage-treats-size-exactly-at-threshold-as-fully
type: req
---
Treats a size exactly at the threshold as fully buffered.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/storage/drivers/s3/s3.storage-driver.models.test.ts (s3.storage-driver.models > bufferStreamUpToThreshold).

## Source

Source: Papra server behaviour notes - SRV-1729
