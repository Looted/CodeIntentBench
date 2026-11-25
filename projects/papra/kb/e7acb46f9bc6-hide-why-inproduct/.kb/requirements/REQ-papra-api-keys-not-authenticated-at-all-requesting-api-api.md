---
title: When not authenticated at all, requesting the /api/api-keys/current route returns an error.
status: active
semantic_text: When not authenticated at all, requesting the /api/api-keys/current route returns an error.
semantic_clauses:
  - When not authenticated at all, requesting the /api/api-keys/current route returns an error
logic_claims:
  - CLAIM-F30A8DD061995ADC
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: d54a3da696a1613a010c8e2466f190a13bf4332083c4e86107436f4e49a153ab
semantic_inventory:
  - claim_key: CLAIM-F30A8DD061995ADC
    claim_text: When not authenticated at all, requesting the /api/api-keys/current route returns an error
    role: condition
    status: modeled
    span:
      start: 0
      end: 90
    subjects:
      - api_keys.api_key_e2e
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-471'
  recorded_at: '2025-05-05T14:06:13.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:api-keys
id: REQ-papra-api-keys-not-authenticated-at-all-requesting-api-api
type: req
---
When not authenticated at all, requesting the /api/api-keys/current route returns an error.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/api-keys/e2e/current-api-key.e2e.test.ts (api-key e2e > get /api/api-keys/current).

## Source

Source: Papra server behaviour notes - SRV-471
