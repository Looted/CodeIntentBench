---
title: When retrieving an api key by hash, it only returns the api key if it is not expired.
status: active
semantic_text: When retrieving an api key by hash, it only returns the api key if it is not expired.
semantic_clauses:
  - When retrieving an api key by hash, it only returns the api key if it is not expired
logic_claims:
  - CLAIM-E476C1C7B68D1AD0
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: d7319bb2e4adf3bc523e5662bf84d61463c0725c2d6bcc4b5b88874245131152
semantic_inventory:
  - claim_key: CLAIM-E476C1C7B68D1AD0
    claim_text: When retrieving an api key by hash, it only returns the api key if it is not expired
    role: condition
    status: modeled
    span:
      start: 0
      end: 84
    subjects:
      - api_keys.get_api_key_by_hash
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-455'
  recorded_at: '2026-08-27T11:47:03.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:api-keys
id: REQ-papra-api-keys-retrieving-api-key-by-hash-it-only
type: req
---
When retrieving an api key by hash, it only returns the api key if it is not expired.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/api-keys/api-keys.repository.test.ts (api-keys repository > getApiKeyByHash).

## Source

Source: Papra server behaviour notes - SRV-455
