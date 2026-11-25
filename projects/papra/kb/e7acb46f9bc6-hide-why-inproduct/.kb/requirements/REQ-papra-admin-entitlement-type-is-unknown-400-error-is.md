---
title: When the entitlement type is unknown, a 400 error is returned.
status: active
semantic_text: When the entitlement type is unknown, a 400 error is returned.
semantic_clauses:
  - When the entitlement type is unknown, a 400 error is returned
logic_claims:
  - CLAIM-FABAA4B9F9BE7927
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 645b1481e26d00f8c356b896ea21385346f2a536d9721f78c160d324efedcc77
semantic_inventory:
  - claim_key: CLAIM-FABAA4B9F9BE7927
    claim_text: When the entitlement type is unknown, a 400 error is returned
    role: condition
    status: modeled
    span:
      start: 0
      end: 61
    subjects:
      - admin.admin_user_plan_entitlements_routes
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-426'
  recorded_at: '2025-02-22T15:17:32.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:admin
id: REQ-papra-admin-entitlement-type-is-unknown-400-error-is
type: req
---
When the entitlement type is unknown, a 400 error is returned.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/admin/users/e2e/plan-entitlements.e2e.test.ts (admin user plan entitlements routes > post /api/admin/users/:userId/plan-entitlements).

## Source

Source: Papra server behaviour notes - SRV-426
