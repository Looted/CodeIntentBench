---
title: plan_entitlements.delete_user_plan_entitlement when_the_entitlement_belongs_to_another_user_a = True
status: active
fact_kind: property_value
subject_key: plan_entitlements.delete_user_plan_entitlement
property_key: when_the_entitlement_belongs_to_another_user_a
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-82F5CD97F48E967D
claim_text: When the entitlement belongs to another user, a not-found error is raised and the entitlement is kept
text_ref: REQ-papra-plan-entitlements-entitlement-belongs-to-another-user-not-found
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1629'
  recorded_at: '2025-08-25T13:08:09.000Z'
id: FACT-papra-plan-entitlements-delete-user-plan-entitlement-when-the-entitlement-belongs-to-another-user-a
type: fact
---
When the entitlement belongs to another user, a not-found error is raised and the entitlement is kept.

Modeled from REQ-papra-plan-entitlements-entitlement-belongs-to-another-user-not-found so the claim can be checked for contradictions.
