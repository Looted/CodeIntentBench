---
title: backoffice.back_office_customer_search query_min_length = 2
status: active
fact_kind: property_value
subject_key: backoffice.back_office_customer_search
property_key: query_min_length
operator: eq
value_type: int
value_int: 2
claim_key: CLAIM-BD29F8C57DF78EAE
claim_text: The back office customer search runs only once the query has at least 2 characters
text_ref: REQ-backoffice-back-office-customer-search-minimum-length
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-220'
  recorded_at: '2025-03-08T17:09:33.000Z'
id: FACT-backoffice-back-office-customer-search-query-min-length
type: fact
---
The back office customer search runs only once the query has at least 2 characters.

Modeled from REQ-backoffice-back-office-customer-search-minimum-length so the claim can be checked for contradictions.
