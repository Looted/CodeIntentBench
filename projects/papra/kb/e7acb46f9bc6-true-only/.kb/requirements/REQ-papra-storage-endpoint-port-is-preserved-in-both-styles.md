---
title: The endpoint port is preserved in both styles.
status: active
semantic_text: The endpoint port is preserved in both styles.
semantic_clauses:
  - The endpoint port is preserved in both styles
logic_claims:
  - CLAIM-0263CFD905D7F26D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c7642a113e61780fe54e346e6e6754edbd232817f56be27105e1a5fc41141719
semantic_inventory:
  - claim_key: CLAIM-0263CFD905D7F26D
    claim_text: The endpoint port is preserved in both styles
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 45
    subjects:
      - storage.build_endpoint_url
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1726'
  recorded_at: '2025-08-02T13:05:45.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:storage
id: REQ-papra-storage-endpoint-port-is-preserved-in-both-styles
type: req
---
The endpoint port is preserved in both styles.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/storage/drivers/s3/s3.storage-driver.models.test.ts (s3.storage-driver.models > buildEndpointUrl > with a custom endpoint (self-hosted, R2, MinIO, localstack, ...)).

## Source

Source: Papra server behaviour notes - SRV-1726
