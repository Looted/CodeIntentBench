---
title: plan_entitlements.delete_user_plan_entitlement when_the_entitlement_does_not_exist_a_not = True
status: active
fact_kind: property_value
subject_key: plan_entitlements.delete_user_plan_entitlement
property_key: when_the_entitlement_does_not_exist_a_not
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-2350EEF085F1CF3B
claim_text: When the entitlement does not exist, a not-found error is raised
text_ref: REQ-papra-plan-entitlements-entitlement-does-not-exist-not-found-error
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1632'
  recorded_at: '2026-04-12T14:49:17.000Z'
id: FACT-papra-plan-entitlements-delete-user-plan-entitlement-when-the-entitlement-does-not-exist-a-not
type: fact
---
When the entitlement does not exist, a not-found error is raised.

Modeled from REQ-papra-plan-entitlements-entitlement-does-not-exist-not-found-error so the claim can be checked for contradictions.
