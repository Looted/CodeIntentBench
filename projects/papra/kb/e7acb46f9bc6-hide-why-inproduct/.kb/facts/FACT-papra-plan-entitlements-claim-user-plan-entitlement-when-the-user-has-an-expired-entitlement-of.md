---
title: plan_entitlements.claim_user_plan_entitlement when_the_user_has_an_expired_entitlement_of = True
status: active
fact_kind: property_value
subject_key: plan_entitlements.claim_user_plan_entitlement
property_key: when_the_user_has_an_expired_entitlement_of
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-7854543573CEC5FF
claim_text: When the user has an expired entitlement of the same type, it is re-activated in place instead of raising an already-exists error
text_ref: REQ-papra-plan-entitlements-user-has-expired-entitlement-of-same-type
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1660'
  recorded_at: '2025-04-08T09:10:35.000Z'
id: FACT-papra-plan-entitlements-claim-user-plan-entitlement-when-the-user-has-an-expired-entitlement-of
type: fact
---
When the user has an expired entitlement of the same type, it is re-activated in place instead of raising an already-exists error.

Modeled from REQ-papra-plan-entitlements-user-has-expired-entitlement-of-same-type so the claim can be checked for contradictions.
