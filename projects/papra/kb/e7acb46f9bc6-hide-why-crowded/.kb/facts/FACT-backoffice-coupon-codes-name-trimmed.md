---
title: backoffice.coupon_codes name_trimmed = True
status: active
fact_kind: property_value
subject_key: backoffice.coupon_codes
property_key: name_trimmed
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-F30F48FAF1A412BD
claim_text: Coupon code names in the Papra Cloud back office are trimmed of leading and trailing whitespace before they are saved
text_ref: REQ-backoffice-coupon-codes-names-trimmed
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-165'
  recorded_at: '2025-05-22T08:08:23.000Z'
id: FACT-backoffice-coupon-codes-name-trimmed
type: fact
---
Coupon code names in the Papra Cloud back office are trimmed of leading and trailing whitespace before they are saved.

Modeled from REQ-backoffice-coupon-codes-names-trimmed so the claim can be checked for contradictions.
