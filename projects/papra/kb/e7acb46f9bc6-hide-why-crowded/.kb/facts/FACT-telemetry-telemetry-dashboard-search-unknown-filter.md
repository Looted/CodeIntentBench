---
title: telemetry.telemetry_dashboard_search unknown_filter = rejected
status: active
fact_kind: property_value
subject_key: telemetry.telemetry_dashboard_search
property_key: unknown_filter
operator: eq
value_type: string
value_string: rejected
claim_key: CLAIM-1877F70117A5C82D
claim_text: A filter name that the telemetry dashboard search does not know is rejected with a list of the known filters
text_ref: REQ-telemetry-telemetry-dashboard-search-unknown-filter
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-228'
  recorded_at: '2025-10-05T14:31:57.000Z'
id: FACT-telemetry-telemetry-dashboard-search-unknown-filter
type: fact
---
A filter name that the telemetry dashboard search does not know is rejected with a list of the known filters.

Modeled from REQ-telemetry-telemetry-dashboard-search-unknown-filter so the claim can be checked for contradictions.
