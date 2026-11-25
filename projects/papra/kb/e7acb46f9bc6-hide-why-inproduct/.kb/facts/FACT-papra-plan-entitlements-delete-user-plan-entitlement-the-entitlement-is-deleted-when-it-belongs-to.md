---
title: plan_entitlements.delete_user_plan_entitlement the_entitlement_is_deleted_when_it_belongs_to = True
status: active
fact_kind: property_value
subject_key: plan_entitlements.delete_user_plan_entitlement
property_key: the_entitlement_is_deleted_when_it_belongs_to
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-269BDA81DB7D5F97
claim_text: The entitlement is deleted when it belongs to the given user
text_ref: REQ-papra-plan-entitlements-entitlement-is-deleted-when-it-belongs-to
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1628'
  recorded_at: '2026-06-25T09:54:18.000Z'
id: FACT-papra-plan-entitlements-delete-user-plan-entitlement-the-entitlement-is-deleted-when-it-belongs-to
type: fact
---
The entitlement is deleted when it belongs to the given user.

Modeled from REQ-papra-plan-entitlements-entitlement-is-deleted-when-it-belongs-to so the claim can be checked for contradictions.
