---
title: backoffice.back_office_customer_search over_length_input = rejected
status: active
fact_kind: property_value
subject_key: backoffice.back_office_customer_search
property_key: over_length_input
operator: eq
value_type: string
value_string: rejected
claim_key: CLAIM-778F39B5CA222673
claim_text: longer input is rejected with a validation error
text_ref: REQ-backoffice-back-office-customer-search-query-length
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-207'
  recorded_at: '2026-02-19T16:27:21.000Z'
id: FACT-backoffice-back-office-customer-search-over-length-input
type: fact
---
Longer input is rejected with a validation error.

Modeled from REQ-backoffice-back-office-customer-search-query-length so the claim can be checked for contradictions.
