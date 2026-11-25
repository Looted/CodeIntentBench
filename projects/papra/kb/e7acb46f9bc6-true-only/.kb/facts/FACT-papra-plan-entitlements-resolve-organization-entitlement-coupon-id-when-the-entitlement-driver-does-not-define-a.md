---
title: plan_entitlements.resolve_organization_entitlement_coupon_id when_the_entitlement_driver_does_not_define_a = True
status: active
fact_kind: property_value
subject_key: plan_entitlements.resolve_organization_entitlement_coupon_id
property_key: when_the_entitlement_driver_does_not_define_a
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-BE77F990E7CE0F29
claim_text: When the entitlement driver does not define a subscription discount coupon, no coupon id is resolved
text_ref: REQ-papra-plan-entitlements-entitlement-driver-does-not-define-subscription-discount
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1649'
  recorded_at: '2025-03-23T11:25:21.000Z'
id: FACT-papra-plan-entitlements-resolve-organization-entitlement-coupon-id-when-the-entitlement-driver-does-not-define-a
type: fact
---
When the entitlement driver does not define a subscription discount coupon, no coupon id is resolved.

Modeled from REQ-papra-plan-entitlements-entitlement-driver-does-not-define-subscription-discount so the claim can be checked for contradictions.
