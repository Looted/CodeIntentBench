---
title: When the target user does not exist, a 404 error is returned.
status: active
semantic_text: When the target user does not exist, a 404 error is returned.
semantic_clauses:
  - When the target user does not exist, a 404 error is returned
logic_claims:
  - CLAIM-4C3E7A22BFBF1AB3
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 34b96f422e65b855b87ad7837e6ac5bee720a402f919f89c4df53d748037e69c
semantic_inventory:
  - claim_key: CLAIM-4C3E7A22BFBF1AB3
    claim_text: When the target user does not exist, a 404 error is returned
    role: condition
    status: modeled
    span:
      start: 0
      end: 60
    subjects:
      - admin.admin_user_plan_entitlements_routes
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-429'
  recorded_at: '2025-04-25T09:56:17.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:admin
id: REQ-papra-admin-target-user-does-not-exist-404-error
type: req
---
When the target user does not exist, a 404 error is returned.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/admin/users/e2e/plan-entitlements.e2e.test.ts (admin user plan entitlements routes > post /api/admin/users/:userId/plan-entitlements).

## Source

Source: Papra server behaviour notes - SRV-429
