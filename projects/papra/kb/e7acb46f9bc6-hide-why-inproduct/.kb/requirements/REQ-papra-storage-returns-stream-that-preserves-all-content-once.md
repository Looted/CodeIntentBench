---
title: Returns a stream that preserves all content once the threshold is exceeded.
status: active
semantic_text: Returns a stream that preserves all content once the threshold is exceeded.
semantic_clauses:
  - Returns a stream that preserves all content once the threshold is exceeded
logic_claims:
  - CLAIM-09041617E5E56968
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: dea39aa7258f2c9ef252c08fedc98dd1c6b2dbb22fb2ef5835f9622da8aced61
semantic_inventory:
  - claim_key: CLAIM-09041617E5E56968
    claim_text: Returns a stream that preserves all content once the threshold is exceeded
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 74
    subjects:
      - storage.buffer_stream_up_to_threshold
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1723'
  recorded_at: '2025-03-04T17:14:58.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:storage
id: REQ-papra-storage-returns-stream-that-preserves-all-content-once
type: req
---
Returns a stream that preserves all content once the threshold is exceeded.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/storage/drivers/s3/s3.storage-driver.models.test.ts (s3.storage-driver.models > bufferStreamUpToThreshold).

## Source

Source: Papra server behaviour notes - SRV-1723
