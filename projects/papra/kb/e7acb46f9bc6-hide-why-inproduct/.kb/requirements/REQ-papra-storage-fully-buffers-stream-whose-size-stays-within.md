---
title: Fully buffers a stream whose size stays within the threshold.
status: active
semantic_text: Fully buffers a stream whose size stays within the threshold.
semantic_clauses:
  - Fully buffers a stream whose size stays within the threshold
logic_claims:
  - CLAIM-3CF5D9525518E8AE
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: b97b6636a0e4faf1141d26051ef2cde759120765c3ebcb1d71f31f4a1cfa2112
semantic_inventory:
  - claim_key: CLAIM-3CF5D9525518E8AE
    claim_text: Fully buffers a stream whose size stays within the threshold
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 60
    subjects:
      - storage.buffer_stream_up_to_threshold
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1718'
  recorded_at: '2025-09-03T08:17:11.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:storage
id: REQ-papra-storage-fully-buffers-stream-whose-size-stays-within
type: req
---
Fully buffers a stream whose size stays within the threshold.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/storage/drivers/s3/s3.storage-driver.models.test.ts (s3.storage-driver.models > bufferStreamUpToThreshold).

## Source

Source: Papra server behaviour notes - SRV-1718
