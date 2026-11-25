---
title: plan_entitlements.resolve_organization_entitlement_coupon_id when_the_organization_owner_has_an_active_entitlement = True
status: active
fact_kind: property_value
subject_key: plan_entitlements.resolve_organization_entitlement_coupon_id
property_key: when_the_organization_owner_has_an_active_entitlement
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-2E3E32984409B629
claim_text: When the organization owner has an active entitlement whose driver defines a subscription discount coupon, the coupon id is resolved
text_ref: REQ-papra-plan-entitlements-organization-owner-has-active-entitlement-whose-driver
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1653'
  recorded_at: '2026-02-27T09:15:22.000Z'
id: FACT-papra-plan-entitlements-resolve-organization-entitlement-coupon-id-when-the-organization-owner-has-an-active-entitlement
type: fact
---
When the organization owner has an active entitlement whose driver defines a subscription discount coupon, the coupon id is resolved.

Modeled from REQ-papra-plan-entitlements-organization-owner-has-active-entitlement-whose-driver so the claim can be checked for contradictions.
