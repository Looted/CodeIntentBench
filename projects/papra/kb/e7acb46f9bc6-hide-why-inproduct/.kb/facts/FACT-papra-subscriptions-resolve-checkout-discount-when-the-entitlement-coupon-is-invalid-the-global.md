---
title: subscriptions.resolve_checkout_discount when_the_entitlement_coupon_is_invalid_the_global = True
status: active
fact_kind: property_value
subject_key: subscriptions.resolve_checkout_discount
property_key: when_the_entitlement_coupon_is_invalid_the_global
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-644562CE5689C90E
claim_text: When the entitlement coupon is invalid, the global coupon is applied
text_ref: REQ-papra-subscriptions-entitlement-coupon-is-invalid-global-coupon-is
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1784'
  recorded_at: '2025-02-24T16:28:39.000Z'
id: FACT-papra-subscriptions-resolve-checkout-discount-when-the-entitlement-coupon-is-invalid-the-global
type: fact
---
When the entitlement coupon is invalid, the global coupon is applied.

Modeled from REQ-papra-subscriptions-entitlement-coupon-is-invalid-global-coupon-is so the claim can be checked for contradictions.
