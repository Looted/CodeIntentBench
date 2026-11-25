---
title: plan_entitlements.grant_user_plan_entitlement when_no_driver_exists_for_the_entitlement_type = True
status: active
fact_kind: property_value
subject_key: plan_entitlements.grant_user_plan_entitlement
property_key: when_no_driver_exists_for_the_entitlement_type
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-7A58102F5DB90593
claim_text: When no driver exists for the entitlement type, an unknown-type error is raised
text_ref: REQ-papra-plan-entitlements-no-driver-exists-for-entitlement-type-unknown
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1647'
  recorded_at: '2026-01-13T08:31:10.000Z'
id: FACT-papra-plan-entitlements-grant-user-plan-entitlement-when-no-driver-exists-for-the-entitlement-type
type: fact
---
When no driver exists for the entitlement type, an unknown-type error is raised.

Modeled from REQ-papra-plan-entitlements-no-driver-exists-for-entitlement-type-unknown so the claim can be checked for contradictions.
