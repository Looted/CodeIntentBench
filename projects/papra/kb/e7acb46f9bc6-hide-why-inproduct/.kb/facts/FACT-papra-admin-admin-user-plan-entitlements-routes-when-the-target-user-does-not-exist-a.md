---
title: admin.admin_user_plan_entitlements_routes when_the_target_user_does_not_exist_a = True
status: active
fact_kind: property_value
subject_key: admin.admin_user_plan_entitlements_routes
property_key: when_the_target_user_does_not_exist_a
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-4C3E7A22BFBF1AB3
claim_text: When the target user does not exist, a 404 error is returned
text_ref: REQ-papra-admin-target-user-does-not-exist-404-error
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-429'
  recorded_at: '2025-04-25T09:56:17.000Z'
id: FACT-papra-admin-admin-user-plan-entitlements-routes-when-the-target-user-does-not-exist-a
type: fact
---
When the target user does not exist, a 404 error is returned.

Modeled from REQ-papra-admin-target-user-does-not-exist-404-error so the claim can be checked for contradictions.
