---
title: backoffice.coupon_codes delete_in_use = detached
status: active
fact_kind: property_value
subject_key: backoffice.coupon_codes
property_key: delete_in_use
operator: eq
value_type: string
value_string: detached
claim_key: CLAIM-FA57C1B94A29969D
claim_text: Deleting a coupon code in the Papra Cloud back office removes it from everything that uses it, without confirmation for each use
text_ref: REQ-backoffice-coupon-codes-delete-in-use
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-173'
  recorded_at: '2026-08-27T16:43:10.000Z'
id: FACT-backoffice-coupon-codes-delete-in-use
type: fact
---
Deleting a coupon code in the Papra Cloud back office removes it from everything that uses it, without confirmation for each use.

Modeled from REQ-backoffice-coupon-codes-delete-in-use so the claim can be checked for contradictions.
