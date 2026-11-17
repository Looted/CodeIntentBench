---
title: backoffice.back_office_audit_log_search page_size_maximum = 10
status: active
fact_kind: property_value
subject_key: backoffice.back_office_audit_log_search
property_key: page_size_maximum
operator: eq
value_type: int
value_int: 10
claim_key: CLAIM-645DCC77FA4A9BFB
claim_text: The back office audit log search returns at most 10 results per page
text_ref: REQ-backoffice-back-office-audit-log-search-page-size
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-328'
  recorded_at: '2025-07-24T15:55:18.000Z'
id: FACT-backoffice-back-office-audit-log-search-page-size-maximum
type: fact
---
The back office audit log search returns at most 10 results per page.

Modeled from REQ-backoffice-back-office-audit-log-search-page-size so the claim can be checked for contradictions.
