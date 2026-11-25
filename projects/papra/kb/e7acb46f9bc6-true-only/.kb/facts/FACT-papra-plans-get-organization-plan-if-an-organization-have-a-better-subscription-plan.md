---
title: plans.get_organization_plan if_an_organization_have_a_better_subscription_plan = True
status: active
fact_kind: property_value
subject_key: plans.get_organization_plan
property_key: if_an_organization_have_a_better_subscription_plan
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-8E3D422656DEBD12
claim_text: If an organization have a better subscription plan than the plan entitlement, the subscription plan should be applied
text_ref: REQ-papra-plans-organization-have-better-subscription-plan-than-plan
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1692'
  recorded_at: '2025-02-27T09:57:51.000Z'
id: FACT-papra-plans-get-organization-plan-if-an-organization-have-a-better-subscription-plan
type: fact
---
If an organization have a better subscription plan than the plan entitlement, the subscription plan should be applied.

Modeled from REQ-papra-plans-organization-have-better-subscription-plan-than-plan so the claim can be checked for contradictions.
