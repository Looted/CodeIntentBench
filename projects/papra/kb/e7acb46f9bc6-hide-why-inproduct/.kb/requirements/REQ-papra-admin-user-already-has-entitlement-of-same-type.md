---
title: When the user already has an entitlement of the same type, a 409 error is returned.
status: active
semantic_text: When the user already has an entitlement of the same type, a 409 error is returned.
semantic_clauses:
  - When the user already has an entitlement of the same type, a 409 error is returned
logic_claims:
  - CLAIM-9D6EA7B8058A6F40
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f5cec22d4b6e7596031d36cfdce490d19a627e4ff4c557897d03e9df09feea6d
semantic_inventory:
  - claim_key: CLAIM-9D6EA7B8058A6F40
    claim_text: When the user already has an entitlement of the same type, a 409 error is returned
    role: condition
    status: modeled
    span:
      start: 0
      end: 82
    subjects:
      - admin.admin_user_plan_entitlements_routes
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-430'
  recorded_at: '2026-03-08T11:00:43.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:admin
id: REQ-papra-admin-user-already-has-entitlement-of-same-type
type: req
---
When the user already has an entitlement of the same type, a 409 error is returned.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/admin/users/e2e/plan-entitlements.e2e.test.ts (admin user plan entitlements routes > post /api/admin/users/:userId/plan-entitlements).

## Source

Source: Papra server behaviour notes - SRV-430
