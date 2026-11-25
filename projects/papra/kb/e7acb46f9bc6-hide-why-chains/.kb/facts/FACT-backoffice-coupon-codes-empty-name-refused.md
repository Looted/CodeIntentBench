---
title: backoffice.coupon_codes empty_name_refused = True
status: active
fact_kind: property_value
subject_key: backoffice.coupon_codes
property_key: empty_name_refused
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-70D5F8163A64221A
claim_text: a name that is empty after trimming is refused
text_ref: REQ-backoffice-coupon-codes-names-trimmed
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-165'
  recorded_at: '2025-05-22T08:08:23.000Z'
id: FACT-backoffice-coupon-codes-empty-name-refused
type: fact
---
A name that is empty after trimming is refused.

Modeled from REQ-backoffice-coupon-codes-names-trimmed so the claim can be checked for contradictions.
