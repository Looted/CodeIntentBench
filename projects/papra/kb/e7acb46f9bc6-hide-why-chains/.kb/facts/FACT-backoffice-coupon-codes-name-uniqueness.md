---
title: backoffice.coupon_codes name_uniqueness = unique ignoring letter case
status: active
fact_kind: property_value
subject_key: backoffice.coupon_codes
property_key: name_uniqueness
operator: eq
value_type: string
value_string: unique ignoring letter case
claim_key: CLAIM-8CE6CA7F3F11560A
claim_text: Coupon codes in the Papra Cloud back office are unique per campaign regardless of letter case
text_ref: REQ-backoffice-coupon-codes-unique-ignoring-case
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-154'
  recorded_at: '2026-08-02T12:54:30.000Z'
id: FACT-backoffice-coupon-codes-name-uniqueness
type: fact
---
Coupon codes in the Papra Cloud back office are unique per campaign regardless of letter case.

Modeled from REQ-backoffice-coupon-codes-unique-ignoring-case so the claim can be checked for contradictions.
