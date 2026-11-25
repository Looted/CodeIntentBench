---
title: status.status_page_incident_filter page_size_maximum = 100
status: active
fact_kind: property_value
subject_key: status.status_page_incident_filter
property_key: page_size_maximum
operator: eq
value_type: int
value_int: 100
claim_key: CLAIM-CB1FD6E3364C8987
claim_text: The status page incident filter returns at most 100 results per page
text_ref: REQ-status-status-page-incident-filter-page-size
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-190'
  recorded_at: '2026-08-11T13:32:35.000Z'
id: FACT-status-status-page-incident-filter-page-size-maximum
type: fact
---
The status page incident filter returns at most 100 results per page.

Modeled from REQ-status-status-page-incident-filter-page-size so the claim can be checked for contradictions.
