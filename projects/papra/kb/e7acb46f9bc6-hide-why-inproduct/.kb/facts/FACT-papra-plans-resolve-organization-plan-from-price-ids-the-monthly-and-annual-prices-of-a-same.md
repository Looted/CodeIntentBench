---
title: plans.resolve_organization_plan_from_price_ids the_monthly_and_annual_prices_of_a_same = True
status: active
fact_kind: property_value
subject_key: plans.resolve_organization_plan_from_price_ids
property_key: the_monthly_and_annual_prices_of_a_same
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-D508E8268A6B8D14
claim_text: The monthly and annual prices of a same plan are not considered ambiguous
text_ref: REQ-papra-plans-monthly-and-annual-prices-of-same-plan
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1674'
  recorded_at: '2025-05-26T15:39:30.000Z'
id: FACT-papra-plans-resolve-organization-plan-from-price-ids-the-monthly-and-annual-prices-of-a-same
type: fact
---
The monthly and annual prices of a same plan are not considered ambiguous.

Modeled from REQ-papra-plans-monthly-and-annual-prices-of-same-plan so the claim can be checked for contradictions.
