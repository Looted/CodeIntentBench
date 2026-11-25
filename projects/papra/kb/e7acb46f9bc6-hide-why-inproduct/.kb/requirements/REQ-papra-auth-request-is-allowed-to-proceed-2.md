---
title: When the user has the required permission, the request is allowed to proceed.
status: active
semantic_text: When the user has the required permission, the request is allowed to proceed.
semantic_clauses:
  - When the user has the required permission, the request is allowed to proceed
logic_claims:
  - CLAIM-ACED2767E1E33D95
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 0a9effc618651a41c8f607ab83f54565f828047e6db730c410c86fae8416eb7f
semantic_inventory:
  - claim_key: CLAIM-ACED2767E1E33D95
    claim_text: When the user has the required permission, the request is allowed to proceed
    role: condition
    status: modeled
    span:
      start: 0
      end: 76
    subjects:
      - auth.create_role_middleware
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-483'
  recorded_at: '2025-05-09T09:50:54.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:auth
id: REQ-papra-auth-request-is-allowed-to-proceed-2
type: req
---
When the user has the required permission, the request is allowed to proceed.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/app/auth/auth.middleware.test.ts (createRoleMiddleware > when the user has the required permission).

## Source

Source: Papra server behaviour notes - SRV-483
