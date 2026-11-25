---
title: backoffice.coupon_codes batch_maximum = 50
status: active
fact_kind: property_value
subject_key: backoffice.coupon_codes
property_key: batch_maximum
operator: eq
value_type: int
value_int: 50
claim_key: CLAIM-4BAF066DE44CEDDB
claim_text: At most 50 coupon codes can be added or removed in one request in the Papra Cloud back office
text_ref: REQ-backoffice-coupon-codes-batch-size
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-176'
  recorded_at: '2025-11-21T13:07:11.000Z'
id: FACT-backoffice-coupon-codes-batch-maximum
type: fact
---
At most 50 coupon codes can be added or removed in one request in the Papra Cloud back office.

Modeled from REQ-backoffice-coupon-codes-batch-size so the claim can be checked for contradictions.
