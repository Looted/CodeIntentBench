---
title: plan_entitlements.reverify_user_claimed_plan_entitlements active_user_claimed_entitlements_of_still_eligible_users = True
status: active
fact_kind: property_value
subject_key: plan_entitlements.reverify_user_claimed_plan_entitlements
property_key: active_user_claimed_entitlements_of_still_eligible_users
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-C4C67F775962EB64
claim_text: Active user-claimed entitlements of still-eligible users get their expiration rolled forward and verification date updated
text_ref: REQ-papra-plan-entitlements-active-user-claimed-entitlements-of-still-eligible
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1638'
  recorded_at: '2025-05-08T16:01:41.000Z'
id: FACT-papra-plan-entitlements-reverify-user-claimed-plan-entitlements-active-user-claimed-entitlements-of-still-eligible-users
type: fact
---
Active user-claimed entitlements of still-eligible users get their expiration rolled forward and verification date updated.

Modeled from REQ-papra-plan-entitlements-active-user-claimed-entitlements-of-still-eligible so the claim can be checked for contradictions.
