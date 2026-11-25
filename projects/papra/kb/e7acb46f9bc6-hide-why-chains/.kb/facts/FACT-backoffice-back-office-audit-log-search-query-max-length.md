---
title: backoffice.back_office_audit_log_search query_max_length = 500
status: active
fact_kind: property_value
subject_key: backoffice.back_office_audit_log_search
property_key: query_max_length
operator: eq
value_type: int
value_int: 500
claim_key: CLAIM-E10EC6D65192BD1A
claim_text: A query in the back office audit log search is limited to 500 characters
text_ref: REQ-backoffice-back-office-audit-log-search-query-length
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-310'
  recorded_at: '2026-06-07T16:10:45.000Z'
id: FACT-backoffice-back-office-audit-log-search-query-max-length
type: fact
---
A query in the back office audit log search is limited to 500 characters.

Modeled from REQ-backoffice-back-office-audit-log-search-query-length so the claim can be checked for contradictions.
