---
title: backoffice.back_office_invoice_search invalid_date_filter = ignored
status: active
fact_kind: property_value
subject_key: backoffice.back_office_invoice_search
property_key: invalid_date_filter
operator: eq
value_type: string
value_string: ignored
claim_key: CLAIM-7D691B83C9D4B3C2
claim_text: 'An invalid date in the issued: filter of the back office invoice search is ignored and the other filters still apply'
text_ref: REQ-backoffice-back-office-invoice-search-invalid-date
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-135'
  recorded_at: '2026-07-11T15:26:55.000Z'
id: FACT-backoffice-back-office-invoice-search-invalid-date-filter
type: fact
---
An invalid date in the issued: filter of the back office invoice search is ignored and the other filters still apply.

Modeled from REQ-backoffice-back-office-invoice-search-invalid-date so the claim can be checked for contradictions.
