---
title: plan_entitlements.claim_user_plan_entitlement when_new_claims_are_disabled_for_the_driver = True
status: active
fact_kind: property_value
subject_key: plan_entitlements.claim_user_plan_entitlement
property_key: when_new_claims_are_disabled_for_the_driver
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-F8EA0D44315B2ED7
claim_text: When new claims are disabled for the driver, a claims-not-enabled error is raised and no entitlement is created
text_ref: REQ-papra-plan-entitlements-new-claims-are-disabled-for-driver-claims
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1646'
  recorded_at: '2026-02-08T08:02:38.000Z'
id: FACT-papra-plan-entitlements-claim-user-plan-entitlement-when-new-claims-are-disabled-for-the-driver
type: fact
---
When new claims are disabled for the driver, a claims-not-enabled error is raised and no entitlement is created.

Modeled from REQ-papra-plan-entitlements-new-claims-are-disabled-for-driver-claims so the claim can be checked for contradictions.
