---
title: backoffice.coupon_codes duplicate_error = coupon-code-already-exists
status: active
fact_kind: property_value
subject_key: backoffice.coupon_codes
property_key: duplicate_error
operator: eq
value_type: string
value_string: coupon-code-already-exists
claim_key: CLAIM-C1D5B516FCF0423D
claim_text: a duplicate is reported as coupon-code-already-exists
text_ref: REQ-backoffice-coupon-codes-unique-ignoring-case
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-154'
  recorded_at: '2026-08-02T12:54:30.000Z'
id: FACT-backoffice-coupon-codes-duplicate-error
type: fact
---
A duplicate is reported as coupon-code-already-exists.

Modeled from REQ-backoffice-coupon-codes-unique-ignoring-case so the claim can be checked for contradictions.
