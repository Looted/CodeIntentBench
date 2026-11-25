---
title: telemetry.telemetry_dashboard_search invalid_date_filter = matches nothing
status: active
fact_kind: property_value
subject_key: telemetry.telemetry_dashboard_search
property_key: invalid_date_filter
operator: eq
value_type: string
value_string: matches nothing
claim_key: CLAIM-8D6FA6AB34D87C5B
claim_text: 'An invalid date in the created: filter of the telemetry dashboard search makes the search return nothing'
text_ref: REQ-telemetry-telemetry-dashboard-search-invalid-date
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-207'
  recorded_at: '2026-04-04T14:51:13.000Z'
id: FACT-telemetry-telemetry-dashboard-search-invalid-date-filter
type: fact
---
An invalid date in the created: filter of the telemetry dashboard search makes the search return nothing.

Modeled from REQ-telemetry-telemetry-dashboard-search-invalid-date so the claim can be checked for contradictions.
