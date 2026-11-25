---
title: The user detail response includes the plan entitlements and the available entitlement types.
status: active
semantic_text: The user detail response includes the plan entitlements and the available entitlement types.
semantic_clauses:
  - The user detail response includes the plan entitlements and the available entitlement types
logic_claims:
  - CLAIM-6037535287829169
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 67d451b5bc06ec778cc4878743950069b2afaa3ed7bae1fbe1931da1dadce660
semantic_inventory:
  - claim_key: CLAIM-6037535287829169
    claim_text: The user detail response includes the plan entitlements and the available entitlement types
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 91
    subjects:
      - admin.admin_user_plan_entitlements_routes
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-423'
  recorded_at: '2026-04-18T17:08:30.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:admin
id: REQ-papra-admin-user-detail-response-includes-plan-entitlements-and
type: req
---
The user detail response includes the plan entitlements and the available entitlement types.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/admin/users/e2e/plan-entitlements.e2e.test.ts (admin user plan entitlements routes > get /api/admin/users/:userId).

## Source

Source: Papra server behaviour notes - SRV-423
