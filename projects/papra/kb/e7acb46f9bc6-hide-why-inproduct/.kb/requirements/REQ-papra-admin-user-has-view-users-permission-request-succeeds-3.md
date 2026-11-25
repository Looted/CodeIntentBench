---
title: When the user has the VIEW_USERS permission, the request succeeds and returns user details.
status: active
semantic_text: When the user has the VIEW_USERS permission, the request succeeds and returns user details.
semantic_clauses:
  - When the user has the VIEW_USERS permission, the request succeeds and returns user details
logic_claims:
  - CLAIM-2C6A0352F4B1A953
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 0decb102ed34357d47f4c045c80b9d278cccd9f8de40eebf502e1f2ad63bbcad
semantic_inventory:
  - claim_key: CLAIM-2C6A0352F4B1A953
    claim_text: When the user has the VIEW_USERS permission, the request succeeds and returns user details
    role: condition
    status: modeled
    span:
      start: 0
      end: 90
    subjects:
      - admin.admin_users_routes_permission_protection
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-442'
  recorded_at: '2025-06-02T12:01:57.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:admin
id: REQ-papra-admin-user-has-view-users-permission-request-succeeds-3
type: req
---
When the user has the VIEW_USERS permission, the request succeeds and returns user details.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/admin/users/e2e/users.e2e.test.ts (admin users routes - permission protection > get /api/admin/users/:userId).

## Source

Source: Papra server behaviour notes - SRV-442
