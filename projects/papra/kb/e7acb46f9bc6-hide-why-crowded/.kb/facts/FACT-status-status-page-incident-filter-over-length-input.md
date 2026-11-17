---
title: status.status_page_incident_filter over_length_input = rejected
status: active
fact_kind: property_value
subject_key: status.status_page_incident_filter
property_key: over_length_input
operator: eq
value_type: string
value_string: rejected
claim_key: CLAIM-778F39B5CA222673
claim_text: longer input is rejected with a validation error
text_ref: REQ-status-status-page-incident-filter-query-length
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-178'
  recorded_at: '2025-05-10T10:34:43.000Z'
id: FACT-status-status-page-incident-filter-over-length-input
type: fact
---
Longer input is rejected with a validation error.

Modeled from REQ-status-status-page-incident-filter-query-length so the claim can be checked for contradictions.
