---
title: plan_entitlements.resolve_organization_entitlement_coupon_id when_no_driver_exists_for_the_entitlement_type = True
status: active
fact_kind: property_value
subject_key: plan_entitlements.resolve_organization_entitlement_coupon_id
property_key: when_no_driver_exists_for_the_entitlement_type
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-CBFEF46376DA9CA6
claim_text: When no driver exists for the entitlement type, no coupon id is resolved
text_ref: REQ-papra-plan-entitlements-no-driver-exists-for-entitlement-type-no
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1648'
  recorded_at: '2026-06-19T08:26:18.000Z'
id: FACT-papra-plan-entitlements-resolve-organization-entitlement-coupon-id-when-no-driver-exists-for-the-entitlement-type
type: fact
---
When no driver exists for the entitlement type, no coupon id is resolved.

Modeled from REQ-papra-plan-entitlements-no-driver-exists-for-entitlement-type-no so the claim can be checked for contradictions.
