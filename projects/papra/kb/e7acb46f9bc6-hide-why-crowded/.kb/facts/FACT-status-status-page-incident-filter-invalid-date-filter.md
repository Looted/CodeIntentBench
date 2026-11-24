---
title: status.status_page_incident_filter invalid_date_filter = ignored
status: active
fact_kind: property_value
subject_key: status.status_page_incident_filter
property_key: invalid_date_filter
operator: eq
value_type: string
value_string: ignored
claim_key: CLAIM-F58D28C258FD286F
claim_text: 'An invalid date in the started: filter of the status page incident filter is ignored and the other filters still apply'
text_ref: REQ-status-status-page-incident-filter-invalid-date
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-180'
  recorded_at: '2025-11-08T12:50:41.000Z'
id: FACT-status-status-page-incident-filter-invalid-date-filter
type: fact
---
An invalid date in the started: filter of the status page incident filter is ignored and the other filters still apply.

Modeled from REQ-status-status-page-incident-filter-invalid-date so the claim can be checked for contradictions.
