---
title: status.status_page_incident_filter query_max_length = 200
status: active
fact_kind: property_value
subject_key: status.status_page_incident_filter
property_key: query_max_length
operator: eq
value_type: int
value_int: 200
claim_key: CLAIM-487C923C79D520D7
claim_text: A query in the status page incident filter is limited to 200 characters
text_ref: REQ-status-status-page-incident-filter-query-length
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-178'
  recorded_at: '2025-05-10T10:34:43.000Z'
id: FACT-status-status-page-incident-filter-query-max-length
type: fact
---
A query in the status page incident filter is limited to 200 characters.

Modeled from REQ-status-status-page-incident-filter-query-length so the claim can be checked for contradictions.
