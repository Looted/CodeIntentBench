---
title: subscriptions.resolve_checkout_discount the_entitlement_coupon_takes_precedence_over_the_global = True
status: active
fact_kind: property_value
subject_key: subscriptions.resolve_checkout_discount
property_key: the_entitlement_coupon_takes_precedence_over_the_global
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-2EA142970BDFE888
claim_text: The entitlement coupon takes precedence over the global coupon
text_ref: REQ-papra-subscriptions-entitlement-coupon-takes-precedence-over-global-coupon
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1781'
  recorded_at: '2025-05-01T13:08:11.000Z'
id: FACT-papra-subscriptions-resolve-checkout-discount-the-entitlement-coupon-takes-precedence-over-the-global
type: fact
---
The entitlement coupon takes precedence over the global coupon.

Modeled from REQ-papra-subscriptions-entitlement-coupon-takes-precedence-over-global-coupon so the claim can be checked for contradictions.
