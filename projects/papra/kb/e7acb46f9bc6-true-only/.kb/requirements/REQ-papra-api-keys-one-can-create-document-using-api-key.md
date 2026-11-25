---
title: One can create a document using an api key.
status: active
semantic_text: One can create a document using an api key.
semantic_clauses:
  - One can create a document using an api key
logic_claims:
  - CLAIM-3F6F92094B2920DB
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 417a1675202de40f685f302407a5b3e5e5288b98548745ff67fe9a7f1a477557
semantic_inventory:
  - claim_key: CLAIM-3F6F92094B2920DB
    claim_text: One can create a document using an api key
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 42
    subjects:
      - api_keys.api_key_e2e
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-468'
  recorded_at: '2026-03-02T15:22:09.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:api-keys
id: REQ-papra-api-keys-one-can-create-document-using-api-key
type: req
---
One can create a document using an api key.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/api-keys/e2e/create-document-with-api-key.e2e.test.ts (api-key e2e).

## Source

Source: Papra server behaviour notes - SRV-468
