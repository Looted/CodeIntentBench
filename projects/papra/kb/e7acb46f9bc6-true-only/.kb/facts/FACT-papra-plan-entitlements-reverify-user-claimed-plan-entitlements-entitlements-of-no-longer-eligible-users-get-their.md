---
title: plan_entitlements.reverify_user_claimed_plan_entitlements entitlements_of_no_longer_eligible_users_get_their = True
status: active
fact_kind: property_value
subject_key: plan_entitlements.reverify_user_claimed_plan_entitlements
property_key: entitlements_of_no_longer_eligible_users_get_their
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-5EE646A5C6EF9412
claim_text: Entitlements of no-longer-eligible users get their expiration capped to the grace period
text_ref: REQ-papra-plan-entitlements-entitlements-of-no-longer-eligible-users-get
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1643'
  recorded_at: '2025-04-14T15:31:48.000Z'
id: FACT-papra-plan-entitlements-reverify-user-claimed-plan-entitlements-entitlements-of-no-longer-eligible-users-get-their
type: fact
---
Entitlements of no-longer-eligible users get their expiration capped to the grace period.

Modeled from REQ-papra-plan-entitlements-entitlements-of-no-longer-eligible-users-get so the claim can be checked for contradictions.
