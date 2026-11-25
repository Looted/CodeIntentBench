---
title: When the organization owner has an active entitlement whose driver defines a subscription discount coupon, the coupon id is resolved.
status: active
semantic_text: When the organization owner has an active entitlement whose driver defines a subscription discount coupon, the coupon id is resolved.
semantic_clauses:
  - When the organization owner has an active entitlement whose driver defines a subscription discount coupon, the coupon id is resolved
logic_claims:
  - CLAIM-2E3E32984409B629
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 02232294cf7cd14872fb363bec15bda50b6160683d041b2ec374c3b9a66a7672
semantic_inventory:
  - claim_key: CLAIM-2E3E32984409B629
    claim_text: When the organization owner has an active entitlement whose driver defines a subscription discount coupon, the coupon id is resolved
    role: condition
    status: modeled
    span:
      start: 0
      end: 132
    subjects:
      - plan_entitlements.resolve_organization_entitlement_coupon_id
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1653'
  recorded_at: '2026-02-27T09:15:22.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:plan-entitlements
id: REQ-papra-plan-entitlements-organization-owner-has-active-entitlement-whose-driver
type: req
---
When the organization owner has an active entitlement whose driver defines a subscription discount coupon, the coupon id is resolved.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/plan-entitlements/plan-entitlements.usecases.test.ts (plan-entitlements usecases > resolveOrganizationEntitlementCouponId).

## Source

Source: Papra server behaviour notes - SRV-1653
