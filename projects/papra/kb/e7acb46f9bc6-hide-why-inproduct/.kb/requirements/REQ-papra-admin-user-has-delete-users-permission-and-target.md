---
title: When the user has the DELETE_USERS permission and the target has no owned organizations, the user is deleted.
status: active
semantic_text: When the user has the DELETE_USERS permission and the target has no owned organizations, the user is deleted.
semantic_clauses:
  - When the user has the DELETE_USERS permission and the target has no owned organizations, the user is deleted
logic_claims:
  - CLAIM-3FCE240C4238E928
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: b2204031e727af187a76ffcd3bc23879d544a44852bd0b1d8f32892901589461
semantic_inventory:
  - claim_key: CLAIM-3FCE240C4238E928
    claim_text: When the user has the DELETE_USERS permission and the target has no owned organizations, the user is deleted
    role: condition
    status: modeled
    span:
      start: 0
      end: 108
    subjects:
      - admin.admin_users_routes_permission_protection
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-440'
  recorded_at: '2025-06-08T12:27:14.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:admin
id: REQ-papra-admin-user-has-delete-users-permission-and-target
type: req
---
When the user has the DELETE_USERS permission and the target has no owned organizations, the user is deleted.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/admin/users/e2e/users.e2e.test.ts (admin users routes - permission protection > delete /api/admin/users/:userId).

## Source

Source: Papra server behaviour notes - SRV-440
