---
title: When the user does not have the DELETE_USERS permission, a 401 error is returned.
status: active
semantic_text: When the user does not have the DELETE_USERS permission, a 401 error is returned.
semantic_clauses:
  - When the user does not have the DELETE_USERS permission, a 401 error is returned
logic_claims:
  - CLAIM-BBD0431BFF41198B
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 26fe33590397d2ab44af794d45e48d322128c32e72b9fe919ebc083fe3cb47b0
semantic_inventory:
  - claim_key: CLAIM-BBD0431BFF41198B
    claim_text: When the user does not have the DELETE_USERS permission, a 401 error is returned
    role: condition
    status: modeled
    span:
      start: 0
      end: 80
    subjects:
      - admin.admin_users_routes_permission_protection
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-438'
  recorded_at: '2025-06-19T13:56:18.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:admin
id: REQ-papra-admin-user-does-not-have-delete-users-permission
type: req
---
When the user does not have the DELETE_USERS permission, a 401 error is returned.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/admin/users/e2e/users.e2e.test.ts (admin users routes - permission protection > delete /api/admin/users/:userId).

## Source

Source: Papra server behaviour notes - SRV-438
