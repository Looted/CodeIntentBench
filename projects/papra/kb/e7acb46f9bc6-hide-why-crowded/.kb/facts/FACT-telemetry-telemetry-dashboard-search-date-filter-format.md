---
title: telemetry.telemetry_dashboard_search date_filter_format = locale format
status: active
fact_kind: property_value
subject_key: telemetry.telemetry_dashboard_search
property_key: date_filter_format
operator: eq
value_type: string
value_string: locale format
claim_key: CLAIM-5848C9AD69D78E9D
claim_text: 'The created: filter of the telemetry dashboard search accepts dates in the format of the browser locale'
text_ref: REQ-telemetry-telemetry-dashboard-search-date-format
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-226'
  recorded_at: '2026-04-01T09:42:50.000Z'
id: FACT-telemetry-telemetry-dashboard-search-date-filter-format
type: fact
---
The created: filter of the telemetry dashboard search accepts dates in the format of the browser locale.

Modeled from REQ-telemetry-telemetry-dashboard-search-date-format so the claim can be checked for contradictions.
