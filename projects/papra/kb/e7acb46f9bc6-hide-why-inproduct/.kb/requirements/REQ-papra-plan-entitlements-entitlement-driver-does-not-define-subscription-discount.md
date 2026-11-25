---
title: When the entitlement driver does not define a subscription discount coupon, no coupon id is resolved.
status: active
semantic_text: When the entitlement driver does not define a subscription discount coupon, no coupon id is resolved.
semantic_clauses:
  - When the entitlement driver does not define a subscription discount coupon, no coupon id is resolved
logic_claims:
  - CLAIM-BE77F990E7CE0F29
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a89e9ef2f5e86822b36fe2f4cd2c3b00926e61c58de568f7932f38aa7b120509
semantic_inventory:
  - claim_key: CLAIM-BE77F990E7CE0F29
    claim_text: When the entitlement driver does not define a subscription discount coupon, no coupon id is resolved
    role: condition
    status: modeled
    span:
      start: 0
      end: 100
    subjects:
      - plan_entitlements.resolve_organization_entitlement_coupon_id
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1649'
  recorded_at: '2025-03-23T11:25:21.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:plan-entitlements
id: REQ-papra-plan-entitlements-entitlement-driver-does-not-define-subscription-discount
type: req
---
When the entitlement driver does not define a subscription discount coupon, no coupon id is resolved.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/plan-entitlements/plan-entitlements.usecases.test.ts (plan-entitlements usecases > resolveOrganizationEntitlementCouponId).

## Source

Source: Papra server behaviour notes - SRV-1649
