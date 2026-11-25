---
title: admin.admin_user_plan_entitlements_routes when_the_user_does_not_have_the_manage = True
status: active
fact_kind: property_value
subject_key: admin.admin_user_plan_entitlements_routes
property_key: when_the_user_does_not_have_the_manage
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-EF607C173796568A
claim_text: When the user does not have the MANAGE_PLAN_ENTITLEMENTS permission, a 401 error is returned and no entitlement is created
text_ref: REQ-papra-admin-user-does-not-have-manage-plan-entitlements
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-433'
  recorded_at: '2026-07-18T14:10:22.000Z'
id: FACT-papra-admin-admin-user-plan-entitlements-routes-when-the-user-does-not-have-the-manage
type: fact
---
When the user does not have the MANAGE_PLAN_ENTITLEMENTS permission, a 401 error is returned and no entitlement is created.

Modeled from REQ-papra-admin-user-does-not-have-manage-plan-entitlements so the claim can be checked for contradictions.
