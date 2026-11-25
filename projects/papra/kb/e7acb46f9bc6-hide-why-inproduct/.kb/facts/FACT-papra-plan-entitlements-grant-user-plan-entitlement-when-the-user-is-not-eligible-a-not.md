---
title: plan_entitlements.grant_user_plan_entitlement when_the_user_is_not_eligible_a_not = True
status: active
fact_kind: property_value
subject_key: plan_entitlements.grant_user_plan_entitlement
property_key: when_the_user_is_not_eligible_a_not
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-19723F450CE74826
claim_text: When the user is not eligible, a not-eligible error is raised and no entitlement is created
text_ref: REQ-papra-plan-entitlements-user-is-not-eligible-not-eligible-error-2
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1664'
  recorded_at: '2025-02-07T14:31:46.000Z'
id: FACT-papra-plan-entitlements-grant-user-plan-entitlement-when-the-user-is-not-eligible-a-not
type: fact
---
When the user is not eligible, a not-eligible error is raised and no entitlement is created.

Modeled from REQ-papra-plan-entitlements-user-is-not-eligible-not-eligible-error-2 so the claim can be checked for contradictions.
