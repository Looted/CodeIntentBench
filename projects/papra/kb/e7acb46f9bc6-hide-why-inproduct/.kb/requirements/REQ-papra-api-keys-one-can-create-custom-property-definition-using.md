---
title: One can create a custom property definition using an api key with the custom-properties:create permission.
status: active
semantic_text: One can create a custom property definition using an api key with the custom-properties:create permission.
semantic_clauses:
  - One can create a custom property definition using an api key with the custom-properties:create permission
logic_claims:
  - CLAIM-60B60B4A9E2CA35E
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 94ce0fe3d769cb14d56da526e1dffdf71dc09ae7c65988eaa0fcea16483d32c0
semantic_inventory:
  - claim_key: CLAIM-60B60B4A9E2CA35E
    claim_text: One can create a custom property definition using an api key with the custom-properties:create permission
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 105
    subjects:
      - api_keys.custom_property_api_key_e2e
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-466'
  recorded_at: '2026-06-03T15:46:50.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:api-keys
id: REQ-papra-api-keys-one-can-create-custom-property-definition-using
type: req
---
One can create a custom property definition using an api key with the custom-properties:create permission.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/api-keys/e2e/create-custom-property-with-api-key.e2e.test.ts (custom-property api-key e2e).

## Source

Source: Papra server behaviour notes - SRV-466
