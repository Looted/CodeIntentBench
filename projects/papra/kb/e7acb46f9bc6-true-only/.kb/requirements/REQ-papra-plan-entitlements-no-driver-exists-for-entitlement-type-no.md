---
title: When no driver exists for the entitlement type, no coupon id is resolved.
status: active
semantic_text: When no driver exists for the entitlement type, no coupon id is resolved.
semantic_clauses:
  - When no driver exists for the entitlement type, no coupon id is resolved
logic_claims:
  - CLAIM-CBFEF46376DA9CA6
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 937ab8ca3b4b2666dedea8d0818d21453b9c5b9e42662abcfa4239bb4477fc93
semantic_inventory:
  - claim_key: CLAIM-CBFEF46376DA9CA6
    claim_text: When no driver exists for the entitlement type, no coupon id is resolved
    role: condition
    status: modeled
    span:
      start: 0
      end: 72
    subjects:
      - plan_entitlements.resolve_organization_entitlement_coupon_id
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1648'
  recorded_at: '2026-06-19T08:26:18.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:plan-entitlements
id: REQ-papra-plan-entitlements-no-driver-exists-for-entitlement-type-no
type: req
---
When no driver exists for the entitlement type, no coupon id is resolved.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/plan-entitlements/plan-entitlements.usecases.test.ts (plan-entitlements usecases > resolveOrganizationEntitlementCouponId).

## Source

Source: Papra server behaviour notes - SRV-1648
