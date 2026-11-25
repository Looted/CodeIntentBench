---
title: A trailing slash on the endpoint does not produce a double slash in path-style.
status: active
semantic_text: A trailing slash on the endpoint does not produce a double slash in path-style.
semantic_clauses:
  - A trailing slash on the endpoint does not produce a double slash in path-style
logic_claims:
  - CLAIM-0B4A67C7D5171271
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f612b1f2f37835286736ca401e7fc0f5112a94aceca155a7d5a4019fea664664
semantic_inventory:
  - claim_key: CLAIM-0B4A67C7D5171271
    claim_text: A trailing slash on the endpoint does not produce a double slash in path-style
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 78
    subjects:
      - storage.build_endpoint_url
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1711'
  recorded_at: '2025-04-11T15:22:39.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:storage
id: REQ-papra-storage-trailing-slash-on-endpoint-does-not-produce
type: req
---
A trailing slash on the endpoint does not produce a double slash in path-style.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/storage/drivers/s3/s3.storage-driver.models.test.ts (s3.storage-driver.models > buildEndpointUrl > with a custom endpoint (self-hosted, R2, MinIO, localstack, ...)).

## Source

Source: Papra server behaviour notes - SRV-1711
