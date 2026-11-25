---
title: The api key is created with the correct hash.
status: active
semantic_text: The api key is created with the correct hash.
semantic_clauses:
  - The api key is created with the correct hash
logic_claims:
  - CLAIM-78DBEE210405962C
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 77bd6c71900d6a997d86c09b79e8709ac7acce07df36c32eb46cdfac64be18f2
semantic_inventory:
  - claim_key: CLAIM-78DBEE210405962C
    claim_text: The api key is created with the correct hash
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 44
    subjects:
      - api_keys.create_api_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-462'
  recorded_at: '2026-03-10T09:30:23.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:api-keys
id: REQ-papra-api-keys-api-key-is-created-with-correct-hash
type: req
---
The api key is created with the correct hash.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/api-keys/api-keys.usecases.test.ts (api-keys usecases > createApiKey).

## Source

Source: Papra server behaviour notes - SRV-462
