---
title: backoffice.back_office_invoice_search over_length_input = rejected
status: active
fact_kind: property_value
subject_key: backoffice.back_office_invoice_search
property_key: over_length_input
operator: eq
value_type: string
value_string: rejected
claim_key: CLAIM-778F39B5CA222673
claim_text: longer input is rejected with a validation error
text_ref: REQ-backoffice-back-office-invoice-search-query-length
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-282'
  recorded_at: '2025-10-12T08:44:22.000Z'
id: FACT-backoffice-back-office-invoice-search-over-length-input
type: fact
---
Longer input is rejected with a validation error.

Modeled from REQ-backoffice-back-office-invoice-search-query-length so the claim can be checked for contradictions.
