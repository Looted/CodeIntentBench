---
title: plan_entitlements.grant_user_plan_entitlement when_the_user_is_eligible_the_entitlement_is = True
status: active
fact_kind: property_value
subject_key: plan_entitlements.grant_user_plan_entitlement
property_key: when_the_user_is_eligible_the_entitlement_is
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-6AE32ADD92BBC8EE
claim_text: When the user is eligible, the entitlement is created and marked as verified
text_ref: REQ-papra-plan-entitlements-user-is-eligible-entitlement-is-created-and
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1661'
  recorded_at: '2026-06-14T11:39:07.000Z'
id: FACT-papra-plan-entitlements-grant-user-plan-entitlement-when-the-user-is-eligible-the-entitlement-is
type: fact
---
When the user is eligible, the entitlement is created and marked as verified.

Modeled from REQ-papra-plan-entitlements-user-is-eligible-entitlement-is-created-and so the claim can be checked for contradictions.
