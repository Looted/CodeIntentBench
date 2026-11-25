---
title: status.status_page_incident_filter query_min_length = 2
status: active
fact_kind: property_value
subject_key: status.status_page_incident_filter
property_key: query_min_length
operator: eq
value_type: int
value_int: 2
claim_key: CLAIM-ADC5837B4E295941
claim_text: The status page incident filter runs only once the query has at least 2 characters
text_ref: REQ-status-status-page-incident-filter-minimum-length
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-189'
  recorded_at: '2026-03-10T12:49:34.000Z'
id: FACT-status-status-page-incident-filter-query-min-length
type: fact
---
The status page incident filter runs only once the query has at least 2 characters.

Modeled from REQ-status-status-page-incident-filter-minimum-length so the claim can be checked for contradictions.
