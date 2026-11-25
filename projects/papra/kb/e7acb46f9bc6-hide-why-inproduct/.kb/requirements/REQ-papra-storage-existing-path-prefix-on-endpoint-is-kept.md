---
title: An existing path prefix on the endpoint is kept, with the bucket appended after it.
status: active
semantic_text: An existing path prefix on the endpoint is kept, with the bucket appended after it.
semantic_clauses:
  - An existing path prefix on the endpoint is kept, with the bucket appended after it
logic_claims:
  - CLAIM-37AEA61682ADB016
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 7220edf431812c76b00d6ec6f6d7dbea36cfb232cca2c272086c2af6dc8a8fb4
semantic_inventory:
  - claim_key: CLAIM-37AEA61682ADB016
    claim_text: An existing path prefix on the endpoint is kept, with the bucket appended after it
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 82
    subjects:
      - storage.build_endpoint_url
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1715'
  recorded_at: '2025-03-19T17:03:02.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:storage
id: REQ-papra-storage-existing-path-prefix-on-endpoint-is-kept
type: req
---
An existing path prefix on the endpoint is kept, with the bucket appended after it.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/storage/drivers/s3/s3.storage-driver.models.test.ts (s3.storage-driver.models > buildEndpointUrl > with a custom endpoint (self-hosted, R2, MinIO, localstack, ...)).

## Source

Source: Papra server behaviour notes - SRV-1715
