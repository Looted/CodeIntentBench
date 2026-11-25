---
title: subscriptions.resolve_checkout_discount when_no_coupon_is_configured_promotion_codes_are = True
status: active
fact_kind: property_value
subject_key: subscriptions.resolve_checkout_discount
property_key: when_no_coupon_is_configured_promotion_codes_are
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-46FC88AFE15230DC
claim_text: When no coupon is configured, promotion codes are allowed
text_ref: REQ-papra-subscriptions-no-coupon-is-configured-promotion-codes-are
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1783'
  recorded_at: '2025-08-28T17:41:48.000Z'
id: FACT-papra-subscriptions-resolve-checkout-discount-when-no-coupon-is-configured-promotion-codes-are
type: fact
---
When no coupon is configured, promotion codes are allowed.

Modeled from REQ-papra-subscriptions-no-coupon-is-configured-promotion-codes-are so the claim can be checked for contradictions.
