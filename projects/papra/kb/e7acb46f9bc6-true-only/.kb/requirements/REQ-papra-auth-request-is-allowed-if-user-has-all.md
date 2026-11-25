---
title: When multiple permissions are required, the request is allowed if the user has all required permissions.
status: active
semantic_text: When multiple permissions are required, the request is allowed if the user has all required permissions.
semantic_clauses:
  - When multiple permissions are required, the request is allowed if the user has all required permissions
logic_claims:
  - CLAIM-0FE75869FEF0B71A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 0ead7bc204c454f6f46659ec5d1543251fc548267d38eb3b844faaf793a34617
semantic_inventory:
  - claim_key: CLAIM-0FE75869FEF0B71A
    claim_text: When multiple permissions are required, the request is allowed if the user has all required permissions
    role: condition
    status: modeled
    span:
      start: 0
      end: 103
    subjects:
      - auth.create_role_middleware
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-477'
  recorded_at: '2026-06-21T13:04:08.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:auth
id: REQ-papra-auth-request-is-allowed-if-user-has-all
type: req
---
When multiple permissions are required, the request is allowed if the user has all required permissions.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/app/auth/auth.middleware.test.ts (createRoleMiddleware > when multiple permissions are required).

## Source

Source: Papra server behaviour notes - SRV-477
