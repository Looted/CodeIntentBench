---
title: plan_entitlements.claim_user_plan_entitlement when_the_user_is_not_eligible_a_not = True
status: active
fact_kind: property_value
subject_key: plan_entitlements.claim_user_plan_entitlement
property_key: when_the_user_is_not_eligible_a_not
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-38B9439289CF6F3D
claim_text: When the user is not eligible, a not-eligible error is raised
text_ref: REQ-papra-plan-entitlements-user-is-not-eligible-not-eligible-error
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1662'
  recorded_at: '2025-08-07T09:58:22.000Z'
id: FACT-papra-plan-entitlements-claim-user-plan-entitlement-when-the-user-is-not-eligible-a-not
type: fact
---
When the user is not eligible, a not-eligible error is raised.

Modeled from REQ-papra-plan-entitlements-user-is-not-eligible-not-eligible-error so the claim can be checked for contradictions.
