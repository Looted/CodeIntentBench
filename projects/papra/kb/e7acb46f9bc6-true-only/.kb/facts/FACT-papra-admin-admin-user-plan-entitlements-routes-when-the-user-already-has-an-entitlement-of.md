---
title: admin.admin_user_plan_entitlements_routes when_the_user_already_has_an_entitlement_of = True
status: active
fact_kind: property_value
subject_key: admin.admin_user_plan_entitlements_routes
property_key: when_the_user_already_has_an_entitlement_of
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-9D6EA7B8058A6F40
claim_text: When the user already has an entitlement of the same type, a 409 error is returned
text_ref: REQ-papra-admin-user-already-has-entitlement-of-same-type
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-430'
  recorded_at: '2026-03-08T11:00:43.000Z'
id: FACT-papra-admin-admin-user-plan-entitlements-routes-when-the-user-already-has-an-entitlement-of
type: fact
---
When the user already has an entitlement of the same type, a 409 error is returned.

Modeled from REQ-papra-admin-user-already-has-entitlement-of-same-type so the claim can be checked for contradictions.
