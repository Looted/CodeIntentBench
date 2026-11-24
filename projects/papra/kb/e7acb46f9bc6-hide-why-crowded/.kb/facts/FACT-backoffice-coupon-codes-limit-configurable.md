---
title: backoffice.coupon_codes limit_configurable = True
status: active
fact_kind: property_value
subject_key: backoffice.coupon_codes
property_key: limit_configurable
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-6A130CE2C0015ADF
claim_text: the limit is configurable and 500 is the default
text_ref: REQ-backoffice-coupon-codes-maximum-count
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-155'
  recorded_at: '2025-03-15T08:38:50.000Z'
id: FACT-backoffice-coupon-codes-limit-configurable
type: fact
---
The limit is configurable and 500 is the default.

Modeled from REQ-backoffice-coupon-codes-maximum-count so the claim can be checked for contradictions.
