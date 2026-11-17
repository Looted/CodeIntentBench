---
title: backoffice.back_office_customer_search page_size_maximum = 10
status: active
fact_kind: property_value
subject_key: backoffice.back_office_customer_search
property_key: page_size_maximum
operator: eq
value_type: int
value_int: 10
claim_key: CLAIM-4724DB170F676D6A
claim_text: The back office customer search returns at most 10 results per page
text_ref: REQ-backoffice-back-office-customer-search-page-size
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-222'
  recorded_at: '2026-03-18T10:25:40.000Z'
id: FACT-backoffice-back-office-customer-search-page-size-maximum
type: fact
---
The back office customer search returns at most 10 results per page.

Modeled from REQ-backoffice-back-office-customer-search-page-size so the claim can be checked for contradictions.
