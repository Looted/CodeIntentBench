---
title: backoffice.back_office_audit_log_search query_max_length = 50
status: deprecated
fact_kind: property_value
subject_key: backoffice.back_office_audit_log_search
property_key: query_max_length
operator: eq
value_type: int
value_int: 50
claim_key: CLAIM-6F537624C2F18575
claim_text: A query in the back office audit log search is limited to 50 characters
text_ref: REQ-backoffice-back-office-audit-log-search-query-length-earlier
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-255'
  recorded_at: '2025-03-13T09:40:17.000Z'
id: FACT-backoffice-back-office-audit-log-search-query-max-length-earlier
type: fact
---
A query in the back office audit log search is limited to 50 characters.

Modeled from REQ-backoffice-back-office-audit-log-search-query-length-earlier so the claim can be checked for contradictions.
