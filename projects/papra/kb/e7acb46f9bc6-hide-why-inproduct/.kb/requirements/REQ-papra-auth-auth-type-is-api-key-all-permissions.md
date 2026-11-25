---
title: When the auth type is api-key, all permissions must match.
status: active
semantic_text: When the auth type is api-key, all permissions must match.
semantic_clauses:
  - When the auth type is api-key, all permissions must match
logic_claims:
  - CLAIM-8A3AD0D6653B3C18
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 797630037b546c393776e59fc54c5e7ee328a8ab7d8010ad19e4486802c56ef8
semantic_inventory:
  - claim_key: CLAIM-8A3AD0D6653B3C18
    claim_text: When the auth type is api-key, all permissions must match
    role: condition
    status: modeled
    span:
      start: 0
      end: 57
    subjects:
      - auth.check_authentication
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-495'
  recorded_at: '2025-12-18T10:31:01.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:auth
id: REQ-papra-auth-auth-type-is-api-key-all-permissions
type: req
---
When the auth type is api-key, all permissions must match.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/app/auth/auth.models.test.ts (auth models > checkAuthentication).

## Source

Source: Papra server behaviour notes - SRV-495
