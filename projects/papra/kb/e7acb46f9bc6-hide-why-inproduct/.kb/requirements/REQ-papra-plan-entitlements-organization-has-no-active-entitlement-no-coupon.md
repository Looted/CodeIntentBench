---
title: When the organization has no active entitlement, no coupon id is resolved.
status: active
semantic_text: When the organization has no active entitlement, no coupon id is resolved.
semantic_clauses:
  - When the organization has no active entitlement, no coupon id is resolved
logic_claims:
  - CLAIM-481DAF056CDDCDBD
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 76f62429764647a768009c2419094572a6d288c99580ceb0369eb64b8b7c449b
semantic_inventory:
  - claim_key: CLAIM-481DAF056CDDCDBD
    claim_text: When the organization has no active entitlement, no coupon id is resolved
    role: condition
    status: modeled
    span:
      start: 0
      end: 73
    subjects:
      - plan_entitlements.resolve_organization_entitlement_coupon_id
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1650'
  recorded_at: '2025-06-15T08:36:38.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:plan-entitlements
id: REQ-papra-plan-entitlements-organization-has-no-active-entitlement-no-coupon
type: req
---
When the organization has no active entitlement, no coupon id is resolved.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/plan-entitlements/plan-entitlements.usecases.test.ts (plan-entitlements usecases > resolveOrganizationEntitlementCouponId).

## Source

Source: Papra server behaviour notes - SRV-1650
