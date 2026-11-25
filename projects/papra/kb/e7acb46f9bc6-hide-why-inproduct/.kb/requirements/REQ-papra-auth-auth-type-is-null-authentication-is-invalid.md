---
title: When the auth type is null, the authentication is invalid.
status: active
semantic_text: When the auth type is null, the authentication is invalid.
semantic_clauses:
  - When the auth type is null, the authentication is invalid
logic_claims:
  - CLAIM-EF0EECE51E56AE57
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 575397013be9ceed18832a4438ee7a721fd46bf0e49ae1cd482a0337b317fc6a
semantic_inventory:
  - claim_key: CLAIM-EF0EECE51E56AE57
    claim_text: When the auth type is null, the authentication is invalid
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
  ref: 'Papra server behaviour notes: SRV-506'
  recorded_at: '2025-10-25T09:42:19.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:auth
id: REQ-papra-auth-auth-type-is-null-authentication-is-invalid
type: req
---
When the auth type is null, the authentication is invalid.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/app/auth/auth.models.test.ts (auth models > checkAuthentication > coherence checks).

## Source

Source: Papra server behaviour notes - SRV-506
