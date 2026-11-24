---
title: backoffice.back_office_audit_log_search invalid_date_filter = ignored
status: active
fact_kind: property_value
subject_key: backoffice.back_office_audit_log_search
property_key: invalid_date_filter
operator: eq
value_type: string
value_string: ignored
claim_key: CLAIM-253737042D16F5CD
claim_text: 'An invalid date in the at: filter of the back office audit log search is ignored and the other filters still apply'
text_ref: REQ-backoffice-back-office-audit-log-search-invalid-date
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-312'
  recorded_at: '2026-02-12T09:42:21.000Z'
id: FACT-backoffice-back-office-audit-log-search-invalid-date-filter
type: fact
---
An invalid date in the at: filter of the back office audit log search is ignored and the other filters still apply.

Modeled from REQ-backoffice-back-office-audit-log-search-invalid-date so the claim can be checked for contradictions.
