---
title: When the user has multiple permissions and one matches, the request is allowed to proceed.
status: active
semantic_text: When the user has multiple permissions and one matches, the request is allowed to proceed.
semantic_clauses:
  - When the user has multiple permissions and one matches, the request is allowed to proceed
logic_claims:
  - CLAIM-CDE182B15A71BFD0
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 943c50872cba2119c49c8036344723a4f4c7ddbc970eb06ab5d44c2ae6f34f8f
semantic_inventory:
  - claim_key: CLAIM-CDE182B15A71BFD0
    claim_text: When the user has multiple permissions and one matches, the request is allowed to proceed
    role: condition
    status: modeled
    span:
      start: 0
      end: 89
    subjects:
      - auth.create_role_middleware
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-480'
  recorded_at: '2025-12-19T16:36:13.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:auth
id: REQ-papra-auth-request-is-allowed-to-proceed
type: req
---
When the user has multiple permissions and one matches, the request is allowed to proceed.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/app/auth/auth.middleware.test.ts (createRoleMiddleware > when the user has multiple permissions and one matches).

## Source

Source: Papra server behaviour notes - SRV-480
