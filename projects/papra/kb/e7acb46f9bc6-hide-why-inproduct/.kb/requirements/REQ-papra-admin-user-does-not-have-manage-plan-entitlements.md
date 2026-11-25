---
title: When the user does not have the MANAGE_PLAN_ENTITLEMENTS permission, a 401 error is returned and no entitlement is created.
status: active
semantic_text: When the user does not have the MANAGE_PLAN_ENTITLEMENTS permission, a 401 error is returned and no entitlement is created.
semantic_clauses:
  - When the user does not have the MANAGE_PLAN_ENTITLEMENTS permission, a 401 error is returned and no entitlement is created
logic_claims:
  - CLAIM-EF607C173796568A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a468e488132f487d8656660872ea9c3c753473cfa4a159fbd7db81b21d6c316a
semantic_inventory:
  - claim_key: CLAIM-EF607C173796568A
    claim_text: When the user does not have the MANAGE_PLAN_ENTITLEMENTS permission, a 401 error is returned and no entitlement is created
    role: condition
    status: modeled
    span:
      start: 0
      end: 122
    subjects:
      - admin.admin_user_plan_entitlements_routes
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-433'
  recorded_at: '2026-07-18T14:10:22.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:admin
id: REQ-papra-admin-user-does-not-have-manage-plan-entitlements
type: req
---
When the user does not have the MANAGE_PLAN_ENTITLEMENTS permission, a 401 error is returned and no entitlement is created.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/admin/users/e2e/plan-entitlements.e2e.test.ts (admin user plan entitlements routes > post /api/admin/users/:userId/plan-entitlements).

## Source

Source: Papra server behaviour notes - SRV-433
