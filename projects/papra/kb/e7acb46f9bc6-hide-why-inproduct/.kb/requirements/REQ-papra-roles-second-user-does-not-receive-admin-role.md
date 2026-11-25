---
title: When the feature is enabled, the second user does not receive the admin role.
status: active
semantic_text: When the feature is enabled, the second user does not receive the admin role.
semantic_clauses:
  - When the feature is enabled, the second user does not receive the admin role
logic_claims:
  - CLAIM-913FBD9DF2E7746E
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 4102eb0704ce2aa2501e51c1197d4b7b7c3da43acc964a15484894468b1fa2f8
semantic_inventory:
  - claim_key: CLAIM-913FBD9DF2E7746E
    claim_text: When the feature is enabled, the second user does not receive the admin role
    role: condition
    status: modeled
    span:
      start: 0
      end: 76
    subjects:
      - roles.first_user_admin_assignment
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1702'
  recorded_at: '2026-09-01T16:43:01.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:roles
id: REQ-papra-roles-second-user-does-not-receive-admin-role
type: req
---
When the feature is enabled, the second user does not receive the admin role.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/roles/event-handlers/first-user-admin.user-created.test.ts (first user admin assignment > when the feature is enabled).

## Source

Source: Papra server behaviour notes - SRV-1702
