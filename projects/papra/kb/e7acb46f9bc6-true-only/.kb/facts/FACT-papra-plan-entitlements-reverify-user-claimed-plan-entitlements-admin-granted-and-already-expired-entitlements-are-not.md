---
title: plan_entitlements.reverify_user_claimed_plan_entitlements admin_granted_and_already_expired_entitlements_are_not = True
status: active
fact_kind: property_value
subject_key: plan_entitlements.reverify_user_claimed_plan_entitlements
property_key: admin_granted_and_already_expired_entitlements_are_not
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-0C303CF1E94903C6
claim_text: Admin-granted and already-expired entitlements are not re-verified
text_ref: REQ-papra-plan-entitlements-admin-granted-and-already-expired-entitlements-are
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1642'
  recorded_at: '2026-01-18T14:24:37.000Z'
id: FACT-papra-plan-entitlements-reverify-user-claimed-plan-entitlements-admin-granted-and-already-expired-entitlements-are-not
type: fact
---
Admin-granted and already-expired entitlements are not re-verified.

Modeled from REQ-papra-plan-entitlements-admin-granted-and-already-expired-entitlements-are so the claim can be checked for contradictions.
