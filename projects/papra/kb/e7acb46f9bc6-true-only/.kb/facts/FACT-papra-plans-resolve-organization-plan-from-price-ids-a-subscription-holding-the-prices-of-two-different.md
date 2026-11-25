---
title: plans.resolve_organization_plan_from_price_ids a_subscription_holding_the_prices_of_two_different = True
status: active
fact_kind: property_value
subject_key: plans.resolve_organization_plan_from_price_ids
property_key: a_subscription_holding_the_prices_of_two_different
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-E359F79A5350BD55
claim_text: A subscription holding the prices of two different plans keeps the most generous one and reports the others, as blocking the sync would leave the subscription stale
text_ref: REQ-papra-plans-subscription-holding-prices-of-two-different-plans
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1670'
  recorded_at: '2025-10-08T14:12:30.000Z'
id: FACT-papra-plans-resolve-organization-plan-from-price-ids-a-subscription-holding-the-prices-of-two-different
type: fact
---
A subscription holding the prices of two different plans keeps the most generous one and reports the others, as blocking the sync would leave the subscription stale.

Modeled from REQ-papra-plans-subscription-holding-prices-of-two-different-plans so the claim can be checked for contradictions.
