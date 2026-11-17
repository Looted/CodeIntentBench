---
title: backoffice.back_office_customer_search query_max_length = 2048
status: active
fact_kind: property_value
subject_key: backoffice.back_office_customer_search
property_key: query_max_length
operator: eq
value_type: int
value_int: 2048
claim_key: CLAIM-268E3899095B0F0E
claim_text: A query in the back office customer search is limited to 2048 characters
text_ref: REQ-backoffice-back-office-customer-search-query-length
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-207'
  recorded_at: '2026-02-19T16:27:21.000Z'
id: FACT-backoffice-back-office-customer-search-query-max-length
type: fact
---
A query in the back office customer search is limited to 2048 characters.

Modeled from REQ-backoffice-back-office-customer-search-query-length so the claim can be checked for contradictions.
