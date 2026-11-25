---
title: When the feature is enabled, if the first user already has an admin role, it does not fail.
status: active
semantic_text: When the feature is enabled, if the first user already has an admin role, it does not fail.
semantic_clauses:
  - When the feature is enabled, if the first user already has an admin role, it does not fail
logic_claims:
  - CLAIM-CC45602151E89D8B
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 2e4f25fd44a2e268f3702240240a3184ac03bcdc803f60d609043349a4d10224
semantic_inventory:
  - claim_key: CLAIM-CC45602151E89D8B
    claim_text: When the feature is enabled, if the first user already has an admin role, it does not fail
    role: condition
    status: modeled
    span:
      start: 0
      end: 90
    subjects:
      - roles.first_user_admin_assignment
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1696'
  recorded_at: '2026-06-22T14:58:46.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:roles
id: REQ-papra-roles-first-user-already-has-admin-role-it
type: req
---
When the feature is enabled, if the first user already has an admin role, it does not fail.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/roles/event-handlers/first-user-admin.user-created.test.ts (first user admin assignment > when the feature is enabled).

## Source

Source: Papra server behaviour notes - SRV-1696
