---
title: When the user is not authenticated, a 401 unauthorized error is returned.
status: active
semantic_text: When the user is not authenticated, a 401 unauthorized error is returned.
semantic_clauses:
  - When the user is not authenticated, a 401 unauthorized error is returned
logic_claims:
  - CLAIM-F887059609559FE7
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a8c0f632520dce4f06212c97782d308ac4dc35c5613aefb5a8ffe3b78544ea88
semantic_inventory:
  - claim_key: CLAIM-F887059609559FE7
    claim_text: When the user is not authenticated, a 401 unauthorized error is returned
    role: condition
    status: modeled
    span:
      start: 0
      end: 72
    subjects:
      - auth.create_role_middleware
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-484'
  recorded_at: '2026-04-11T13:59:11.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:auth
id: REQ-papra-auth-401-unauthorized-error-is-returned-2
type: req
---
When the user is not authenticated, a 401 unauthorized error is returned.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/app/auth/auth.middleware.test.ts (createRoleMiddleware > when the user is not authenticated).

## Source

Source: Papra server behaviour notes - SRV-484
