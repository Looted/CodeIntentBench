---
title: When the auth type is api-key, the requiredApiKeyPermissions are required.
status: active
semantic_text: When the auth type is api-key, the requiredApiKeyPermissions are required.
semantic_clauses:
  - When the auth type is api-key, the requiredApiKeyPermissions are required
logic_claims:
  - CLAIM-2FD721607EE3E623
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: dab82d8b124641ac25b58b4946c93e34a19461e676ef658d222b3be555be4980
semantic_inventory:
  - claim_key: CLAIM-2FD721607EE3E623
    claim_text: When the auth type is api-key, the requiredApiKeyPermissions are required
    role: condition
    status: modeled
    span:
      start: 0
      end: 73
    subjects:
      - auth.check_authentication
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-500'
  recorded_at: '2026-06-19T16:08:51.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:auth
id: REQ-papra-auth-auth-type-is-api-key-requiredapikeypermissions-are
type: req
---
When the auth type is api-key, the requiredApiKeyPermissions are required.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/app/auth/auth.models.test.ts (auth models > checkAuthentication > coherence checks).

## Source

Source: Papra server behaviour notes - SRV-500
