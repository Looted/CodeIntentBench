---
title: backoffice.back_office_invoice_search query_min_length = 3
status: active
fact_kind: property_value
subject_key: backoffice.back_office_invoice_search
property_key: query_min_length
operator: eq
value_type: int
value_int: 3
claim_key: CLAIM-54EACA5D0A00823D
claim_text: The back office invoice search runs only once the query has at least 3 characters
text_ref: REQ-backoffice-back-office-invoice-search-minimum-length
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-295'
  recorded_at: '2025-04-02T14:06:43.000Z'
id: FACT-backoffice-back-office-invoice-search-query-min-length
type: fact
---
The back office invoice search runs only once the query has at least 3 characters.

Modeled from REQ-backoffice-back-office-invoice-search-minimum-length so the claim can be checked for contradictions.
