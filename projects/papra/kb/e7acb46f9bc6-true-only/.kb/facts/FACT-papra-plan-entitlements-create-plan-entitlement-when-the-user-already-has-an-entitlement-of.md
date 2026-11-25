---
title: plan_entitlements.create_plan_entitlement when_the_user_already_has_an_entitlement_of = True
status: active
fact_kind: property_value
subject_key: plan_entitlements.create_plan_entitlement
property_key: when_the_user_already_has_an_entitlement_of
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-D54D148223F3F585
claim_text: When the user already has an entitlement of the same type, an already-exists error is raised
text_ref: REQ-papra-plan-entitlements-user-already-has-entitlement-of-same-type
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1635'
  recorded_at: '2026-08-27T12:08:42.000Z'
id: FACT-papra-plan-entitlements-create-plan-entitlement-when-the-user-already-has-an-entitlement-of
type: fact
---
When the user already has an entitlement of the same type, an already-exists error is raised.

Modeled from REQ-papra-plan-entitlements-user-already-has-entitlement-of-same-type so the claim can be checked for contradictions.
