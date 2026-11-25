---
title: In virtual-hosted style, the bucket is prepended to the regional host.
status: active
semantic_text: In virtual-hosted style, the bucket is prepended to the regional host.
semantic_clauses:
  - In virtual-hosted style, the bucket is prepended to the regional host
logic_claims:
  - CLAIM-8C244E6083710A06
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: d66965f33b677187a74c983378528d42060a57a0fc7db85162cc0d80568990c1
semantic_inventory:
  - claim_key: CLAIM-8C244E6083710A06
    claim_text: In virtual-hosted style, the bucket is prepended to the regional host
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 69
    subjects:
      - storage.build_endpoint_url
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1721'
  recorded_at: '2026-04-22T09:14:41.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:storage
id: REQ-papra-storage-in-virtual-hosted-style-bucket-is-prepended
type: req
---
In virtual-hosted style, the bucket is prepended to the regional host.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/storage/drivers/s3/s3.storage-driver.models.test.ts (s3.storage-driver.models > buildEndpointUrl > without an endpoint (real AWS S3), the regional endpoint is derived from the region).

## Source

Source: Papra server behaviour notes - SRV-1721
