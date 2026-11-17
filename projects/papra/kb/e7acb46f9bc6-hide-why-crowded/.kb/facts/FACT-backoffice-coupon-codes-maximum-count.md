---
title: backoffice.coupon_codes maximum_count = 500
status: active
fact_kind: property_value
subject_key: backoffice.coupon_codes
property_key: maximum_count
operator: eq
value_type: int
value_int: 500
claim_key: CLAIM-B16EC89792286C9D
claim_text: At most 500 coupon codes can be created per campaign in the Papra Cloud back office
text_ref: REQ-backoffice-coupon-codes-maximum-count
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-155'
  recorded_at: '2025-03-15T08:38:50.000Z'
id: FACT-backoffice-coupon-codes-maximum-count
type: fact
---
At most 500 coupon codes can be created per campaign in the Papra Cloud back office.

Modeled from REQ-backoffice-coupon-codes-maximum-count so the claim can be checked for contradictions.
