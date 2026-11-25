---
title: plan_entitlements.reverify_user_claimed_plan_entitlements the_ineligibility_grace_period_never_extends_an_entitlement = True
status: active
fact_kind: property_value
subject_key: plan_entitlements.reverify_user_claimed_plan_entitlements
property_key: the_ineligibility_grace_period_never_extends_an_entitlement
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-530D120A9265BD78
claim_text: The ineligibility grace period never extends an entitlement that already expires sooner
text_ref: REQ-papra-plan-entitlements-ineligibility-grace-period-never-extends-entitlement-that
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1645'
  recorded_at: '2025-03-19T10:35:09.000Z'
id: FACT-papra-plan-entitlements-reverify-user-claimed-plan-entitlements-the-ineligibility-grace-period-never-extends-an-entitlement
type: fact
---
The ineligibility grace period never extends an entitlement that already expires sooner.

Modeled from REQ-papra-plan-entitlements-ineligibility-grace-period-never-extends-entitlement-that so the claim can be checked for contradictions.
