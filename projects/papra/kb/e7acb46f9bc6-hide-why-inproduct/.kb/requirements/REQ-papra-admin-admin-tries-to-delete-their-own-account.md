---
title: When the admin tries to delete their own account, a 400 error is returned.
status: active
semantic_text: When the admin tries to delete their own account, a 400 error is returned.
semantic_clauses:
  - When the admin tries to delete their own account, a 400 error is returned
logic_claims:
  - CLAIM-23525137190DD95E
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 76be35e47bc1ff392eb1725c4a72adbd479b7cad7bc4bdee786a2897979f2a5c
semantic_inventory:
  - claim_key: CLAIM-23525137190DD95E
    claim_text: When the admin tries to delete their own account, a 400 error is returned
    role: condition
    status: modeled
    span:
      start: 0
      end: 73
    subjects:
      - admin.admin_users_routes_permission_protection
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-434'
  recorded_at: '2026-09-01T08:00:00.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:admin
id: REQ-papra-admin-admin-tries-to-delete-their-own-account
type: req
---
When the admin tries to delete their own account, a 400 error is returned.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/admin/users/e2e/users.e2e.test.ts (admin users routes - permission protection > delete /api/admin/users/:userId).

## Source

Source: Papra server behaviour notes - SRV-434
