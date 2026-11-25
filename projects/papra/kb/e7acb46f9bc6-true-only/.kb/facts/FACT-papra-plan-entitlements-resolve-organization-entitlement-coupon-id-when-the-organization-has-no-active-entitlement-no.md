---
title: plan_entitlements.resolve_organization_entitlement_coupon_id when_the_organization_has_no_active_entitlement_no = True
status: active
fact_kind: property_value
subject_key: plan_entitlements.resolve_organization_entitlement_coupon_id
property_key: when_the_organization_has_no_active_entitlement_no
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-481DAF056CDDCDBD
claim_text: When the organization has no active entitlement, no coupon id is resolved
text_ref: REQ-papra-plan-entitlements-organization-has-no-active-entitlement-no-coupon
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1650'
  recorded_at: '2025-06-15T08:36:38.000Z'
id: FACT-papra-plan-entitlements-resolve-organization-entitlement-coupon-id-when-the-organization-has-no-active-entitlement-no
type: fact
---
When the organization has no active entitlement, no coupon id is resolved.

Modeled from REQ-papra-plan-entitlements-organization-has-no-active-entitlement-no-coupon so the claim can be checked for contradictions.
