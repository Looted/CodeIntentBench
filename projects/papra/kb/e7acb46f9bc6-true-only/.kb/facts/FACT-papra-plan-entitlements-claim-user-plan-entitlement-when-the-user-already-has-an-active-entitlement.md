---
title: plan_entitlements.claim_user_plan_entitlement when_the_user_already_has_an_active_entitlement = True
status: active
fact_kind: property_value
subject_key: plan_entitlements.claim_user_plan_entitlement
property_key: when_the_user_already_has_an_active_entitlement
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-EE336674201E61AA
claim_text: When the user already has an active entitlement of the same type, an already-exists error is raised without verifying the eligibility
text_ref: REQ-papra-plan-entitlements-user-already-has-active-entitlement-of-same
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1657'
  recorded_at: '2025-08-15T13:34:00.000Z'
id: FACT-papra-plan-entitlements-claim-user-plan-entitlement-when-the-user-already-has-an-active-entitlement
type: fact
---
When the user already has an active entitlement of the same type, an already-exists error is raised without verifying the eligibility.

Modeled from REQ-papra-plan-entitlements-user-already-has-active-entitlement-of-same so the claim can be checked for contradictions.
