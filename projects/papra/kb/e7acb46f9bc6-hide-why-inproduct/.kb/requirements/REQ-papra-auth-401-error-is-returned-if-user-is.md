---
title: When multiple permissions are required, a 401 error is returned if the user is missing one of the required permissions.
status: active
semantic_text: When multiple permissions are required, a 401 error is returned if the user is missing one of the required permissions.
semantic_clauses:
  - When multiple permissions are required, a 401 error is returned if the user is missing one of the required permissions
logic_claims:
  - CLAIM-3042E417958987FF
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 6b0dfac57cb5bb0acef6f1c9631116a05252d8851a9f423f6e8b2746b9942052
semantic_inventory:
  - claim_key: CLAIM-3042E417958987FF
    claim_text: When multiple permissions are required, a 401 error is returned if the user is missing one of the required permissions
    role: condition
    status: modeled
    span:
      start: 0
      end: 118
    subjects:
      - auth.create_role_middleware
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-474'
  recorded_at: '2026-02-28T08:35:57.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:auth
id: REQ-papra-auth-401-error-is-returned-if-user-is
type: req
---
When multiple permissions are required, a 401 error is returned if the user is missing one of the required permissions.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/app/auth/auth.middleware.test.ts (createRoleMiddleware > when multiple permissions are required).

## Source

Source: Papra server behaviour notes - SRV-474
