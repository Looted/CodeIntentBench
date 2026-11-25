---
title: When the target user still owns an organization, a 400 error is returned and the user is not deleted.
status: active
semantic_text: When the target user still owns an organization, a 400 error is returned and the user is not deleted.
semantic_clauses:
  - When the target user still owns an organization, a 400 error is returned and the user is not deleted
logic_claims:
  - CLAIM-B80D0AE8EFB9F39E
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a4e0a01082bd22334174f1d17bb6116cbc4e740018389c8c6cb7b9e0e0e03668
semantic_inventory:
  - claim_key: CLAIM-B80D0AE8EFB9F39E
    claim_text: When the target user still owns an organization, a 400 error is returned and the user is not deleted
    role: condition
    status: modeled
    span:
      start: 0
      end: 100
    subjects:
      - admin.admin_users_routes_permission_protection
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-436'
  recorded_at: '2026-09-24T13:53:33.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:admin
id: REQ-papra-admin-target-user-still-owns-organization-400-error
type: req
---
When the target user still owns an organization, a 400 error is returned and the user is not deleted.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/admin/users/e2e/users.e2e.test.ts (admin users routes - permission protection > delete /api/admin/users/:userId).

## Source

Source: Papra server behaviour notes - SRV-436
