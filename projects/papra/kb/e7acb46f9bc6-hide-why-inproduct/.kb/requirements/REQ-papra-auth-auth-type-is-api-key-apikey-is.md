---
title: When the auth type is api-key, the apiKey is required.
status: active
semantic_text: When the auth type is api-key, the apiKey is required.
semantic_clauses:
  - When the auth type is api-key, the apiKey is required
logic_claims:
  - CLAIM-EE3CA21A989ADB1F
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: ce99609fd21bc5f9db4e501f57a1b7e25b5fa475a55753e03f665b14230d044a
semantic_inventory:
  - claim_key: CLAIM-EE3CA21A989ADB1F
    claim_text: When the auth type is api-key, the apiKey is required
    role: condition
    status: modeled
    span:
      start: 0
      end: 53
    subjects:
      - auth.check_authentication
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-496'
  recorded_at: '2025-10-07T14:05:19.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:auth
id: REQ-papra-auth-auth-type-is-api-key-apikey-is
type: req
---
When the auth type is api-key, the apiKey is required.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/app/auth/auth.models.test.ts (auth models > checkAuthentication > coherence checks).

## Source

Source: Papra server behaviour notes - SRV-496
