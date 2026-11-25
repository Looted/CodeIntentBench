---
title: backoffice.back_office_audit_log_search query_min_length = 2
status: active
fact_kind: property_value
subject_key: backoffice.back_office_audit_log_search
property_key: query_min_length
operator: eq
value_type: int
value_int: 2
claim_key: CLAIM-E82BC0E491AB5240
claim_text: The back office audit log search runs only once the query has at least 2 characters
text_ref: REQ-backoffice-back-office-audit-log-search-minimum-length
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-325'
  recorded_at: '2026-01-25T16:10:09.000Z'
id: FACT-backoffice-back-office-audit-log-search-query-min-length
type: fact
---
The back office audit log search runs only once the query has at least 2 characters.

Modeled from REQ-backoffice-back-office-audit-log-search-minimum-length so the claim can be checked for contradictions.
