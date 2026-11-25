---
title: admin.admin_user_plan_entitlements_routes when_the_entitlement_type_is_unknown_a_400 = True
status: active
fact_kind: property_value
subject_key: admin.admin_user_plan_entitlements_routes
property_key: when_the_entitlement_type_is_unknown_a_400
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-FABAA4B9F9BE7927
claim_text: When the entitlement type is unknown, a 400 error is returned
text_ref: REQ-papra-admin-entitlement-type-is-unknown-400-error-is
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-426'
  recorded_at: '2025-02-22T15:17:32.000Z'
id: FACT-papra-admin-admin-user-plan-entitlements-routes-when-the-entitlement-type-is-unknown-a-400
type: fact
---
When the entitlement type is unknown, a 400 error is returned.

Modeled from REQ-papra-admin-entitlement-type-is-unknown-400-error-is so the claim can be checked for contradictions.
