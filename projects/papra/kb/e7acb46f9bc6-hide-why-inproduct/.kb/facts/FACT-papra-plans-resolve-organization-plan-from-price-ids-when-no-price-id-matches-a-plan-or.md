---
title: plans.resolve_organization_plan_from_price_ids when_no_price_id_matches_a_plan_or = True
status: active
fact_kind: property_value
subject_key: plans.resolve_organization_plan_from_price_ids
property_key: when_no_price_id_matches_a_plan_or
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-F3CC1CD071BE1DC6
claim_text: When no price id matches a plan, or when there is no item at all, the plan is undefined
text_ref: REQ-papra-plans-no-price-id-matches-plan-or-when
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1681'
  recorded_at: '2025-05-05T11:41:43.000Z'
id: FACT-papra-plans-resolve-organization-plan-from-price-ids-when-no-price-id-matches-a-plan-or
type: fact
---
When no price id matches a plan, or when there is no item at all, the plan is undefined.

Modeled from REQ-papra-plans-no-price-id-matches-plan-or-when so the claim can be checked for contradictions.
