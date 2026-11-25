---
title: plan_entitlements.get_user_plan_entitlements only_the_entitlements_of_the_given_user_are = True
status: active
fact_kind: property_value
subject_key: plan_entitlements.get_user_plan_entitlements
property_key: only_the_entitlements_of_the_given_user_are
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-645A18444EC36D09
claim_text: Only the entitlements of the given user are returned, including expired ones
text_ref: REQ-papra-plan-entitlements-only-entitlements-of-given-user-are-returned
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1627'
  recorded_at: '2026-09-06T16:51:05.000Z'
id: FACT-papra-plan-entitlements-get-user-plan-entitlements-only-the-entitlements-of-the-given-user-are
type: fact
---
Only the entitlements of the given user are returned, including expired ones.

Modeled from REQ-papra-plan-entitlements-only-entitlements-of-given-user-are-returned so the claim can be checked for contradictions.
